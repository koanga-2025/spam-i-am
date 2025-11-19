import request from 'superagent'
import { AboutText, AboutImages } from '../../models/spam'
import { logError } from './api-utils'

const rootUrl = new URL(`/api/v1`, document.baseURI)

export async function getAllAboutText() {
  return request
    .get(`${rootUrl}/about/text`)
    .then((res) => {
      return res.body as AboutText[]
    })
    .catch(logError)
}

export async function getAllAboutImages() {
  return request
    .get(`${rootUrl}/about/images`)
    .then((res) => {
      return res.body as AboutImages[]
    })
    .catch(logError)
}
