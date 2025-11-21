// RATINGS

import request from 'superagent'
import { Rating, AddRating } from '../../models/spam'
import { logError } from './api-utils'

const rootUrl = '/api/v1'

export async function getAllRatings() {
  return request
    .get(`${rootUrl}/ratings`)
    .then((res) => {
      return res.body as Rating[]
    })
    .catch(logError)
}

export async function getAvgRatingById(spamId: number) {
  return request
    .get(`${rootUrl}/ratings/${spamId}`)
    .then((res) => {
      return res.body.rating[0].average_rating as number
    })
    .catch(logError)
}

export async function getAllAvgRatings() {
  return request
    .get(`${rootUrl}/ratings/avg/all`)
    .then((res) => {
      return res.body as { spam_id: number; average_rating: number }[]
    })
    .catch(logError)
}

export async function addRating(ratingObj: AddRating) {
  const { spamId, rating, token } = ratingObj
  return request
    .post(`${rootUrl}/ratings`)
    .set('Authorization', `Bearer ${token}`)
    .send({ rating, spamId })
    .then((res) => {
      return res.body as Rating
    })
    .catch(logError)
}
