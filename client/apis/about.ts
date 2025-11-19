import request from 'superagent'
import { AboutText } from '../../models/spam'
import { logError } from './api-utils'

const rootUrl = new URL(`/api/v1`, document.baseURI)

// GET: /api/v1/about/text
export async function getAllAboutText() {
  const response = await request.get(`${rootUrl}/about/text`)
  console.log(response.body)
  return response.body as AboutText[]
}
