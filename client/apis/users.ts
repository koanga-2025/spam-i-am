// USERS

import request from 'superagent'
import { logError } from './api-utils'

const rootUrl = '/api/v1'

export async function createUser(
  userName: string,
  email: string,
  token: string,
) {
  return request
    .post(`${rootUrl}/users`)
    .set('Authorization', `Bearer ${token}`)
    .send({ userName, email })
    .then((res) => res.body)
    .catch(logError)
}
