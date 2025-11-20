import request from 'superagent'
import { AboutText, AboutImages } from '../../models/spam'
import { logError } from './api-utils'

const rootUrl = '/api/v1'

export function getAllAboutText() {
  return request
    .get(`${rootUrl}/about/text`)
    .then((res) => {
      return res.body as AboutText[]
    })
    .catch(logError)
}

export function getAllAboutImages() {
  return request
    .get(`${rootUrl}/about/images`)
    .then((res) => {
      return res.body as AboutImages[]
    })
    .catch(logError)
}
