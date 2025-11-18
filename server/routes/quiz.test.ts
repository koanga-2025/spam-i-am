// --- EXAMPLE OF AN INTEGRATION TEST
// These tests hit the route and check the results from the db query are accurate.
// Effectively testing both the route and the db query in one go.

import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'

import connection from '../db/connection.ts'
import server from '../server.ts'
import request from 'supertest'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

describe('quiz route', () => {
  it('/api/v1/quiz returns all quiz results, options and questions', async () => {
    // ARRANGE
    const res = await request(server).get('/api/v1/quiz')
    //ACT

    expect(res.body).toHaveLength(5)
    expect(res.body[0]).toStrictEqual({
      id: 1,
      question: 'Pick your dream breakfast!',
      options: [
        {
          image: 'full_english.jpeg',
          text: 'Full English',
          category: 'a',
        },
        {
          image: 'handful_chillis.avif',
          text: 'A handful of chillis',
          category: 'b',
        },
        {
          image: 'leftover_pizza.jpg',
          text: 'Leftover pizza',
          category: 'd',
        },
        {
          image: 'pancakes.webp',
          text: 'Pancakes',
          category: 'c',
        },
      ],
    })

    // ASSERT
    expect(res.status).toBe(200)
  })
  it.skip('/api/v1/quiz/a route returns correct categories', async () => {
    // ARRANGE
    const res = await request(server).get('/api/v1/quiz/a')

    //ACT
    expect(res.body).toStrictEqual({
      id: 1,
      category: 'a',
      name: 'SPAM Classic',
      image: 'spam_classic_text.png',
      info: "Just like the original SPAM, you're reliable, timeless, and beloved by many. You have a strong sense of tradition and a knack for keeping things simple and straightforward. People know they can count on you, and your steady nature makes you a comforting presence in any situation. You value consistency and aren't afraid to embrace the tried and true.",
    })
    // // ASSERT
    expect(res.status).toBe(200)
  })

  it.skip('/api/v1/quiz/f returns 404 if category is not found', async () => {
    // ARR
    const res = await request(server).get('/api/v1/quiz/f')

    // ACT

    // ASSERT
    expect(res.status).toBe(404)
  })
})
