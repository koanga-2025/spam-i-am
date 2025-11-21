// QUIZ

import request from 'superagent'
import { QuizQuestions, QuizResult } from '../../models/spam'
import { logError } from './api-utils'

const rootUrl = '/api/v1'
export async function getAllQuestions() {
  return request
    .get(`${rootUrl}/quiz`)
    .then((res) => res.body as QuizQuestions[])
    .catch(logError)
}

export function getQuizResult(category: string) {
  return request
    .get(`${rootUrl}/quiz/${category}`)
    .then((res) => res.body as QuizResult)
    .catch(logError)
}
