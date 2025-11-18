// QUIZ

import request from 'superagent'
import { QuizQuestions, QuizResult } from '../../models/spam'
import { logError } from './api-utils'

const rootUrl = '/api/v1'
export async function getAllQuestions() {
  return request
    .get(`${rootUrl}/quiz`)
    .then((res) => {
      return res.body as QuizQuestions[]
    })
    .catch(logError)
}

// TODO: Write a request to get the quiz result data by category from the backend
export async function getQuizResult(category: string) {}
