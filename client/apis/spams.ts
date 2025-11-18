// SPAMS

import request from 'superagent'
import { SpamData } from '../../models/spam'
import { logError } from './api-utils'

const rootUrl = '/api/v1'

export async function getAllSpams() {
  return request
    .get(`${rootUrl}/spams`)
    .then((res) => {
      return res.body.spams as SpamData[]
    })
    .catch(logError)
}

export async function getSpamById(id: number) {
  return request
    .get(`${rootUrl}/spams/${id}`)
    .then((res) => {
      return res.body.spam as SpamData
    })
    .catch(logError)
}
