// @vitest-environment jsdom

//  --------------
// GOOD EXAMPLES OF A *USE-QUERY DEPENDANT* COMPONENT TEST - with NOCK
//  --------------

import { describe, it, expect, beforeAll } from 'vitest'
import { renderApp } from '../test-setup'
import nock from 'nock'

beforeAll(() => {
  nock.disableNetConnect()
})
const TEST_QUIZ_DATA = [
  {
    id: 1,
    question: 'Pick your dream breakfast!',
    options: [
      {
        image: 'full_english.jpeg',
        text: 'Half English',
        category: 'a',
      },
      {
        image: 'handful_chillis.avif',
        text: 'A handful of chillis',
        category: 'b',
      },
      {
        image: 'pancakes.webp',
        text: 'Waffles',
        category: 'c',
      },
    ],
  },
]
describe('<Quiz>', async () => {
  // HAPPY PATH
  it('Quiz heading renders correctly', async () => {
    //ARRANGE
    const scope = nock('http://localhost')
      .get('/api/v1/quiz')
      .reply(200, TEST_QUIZ_DATA)
    const { ...screen } = renderApp('/quiz')
    //ACT
    const heading = await screen.findByRole('heading', {
      level: 1,
    })

    //ASSERT
    expect(heading.textContent).toMatch('What flavour of spam are you????')
    expect(scope.isDone()).toBe(true)
  })
  it('should render the right quiz questions data', async () => {
    //ARRANGE
    const scope = nock('http://localhost')
      .get('/api/v1/quiz')
      .reply(200, TEST_QUIZ_DATA)
    // ACT
    const { user, ...screen } = renderApp('/quiz')
    // TODO: access quiz question data and see if it matches the nocked data response
    const startBtn = await screen.findByRole('button', { name: 'Start' })
    await user.click(startBtn)
    const res = await screen.findByText('Waffles')

    expect(res).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
  // SAD PATH
  it('should render an error message when things go wrong', async () => {
    //ARRANGE
    const errorScope = nock('http://localhost').get('/api/v1/quiz').reply(500)
    //ACT
    const { ...screen } = renderApp('/quiz')

    const errMsg = await screen.findByText(/Something went wrong/i)
    // ASSERT

    expect(errMsg).toBeInTheDocument()
    expect(errorScope.isDone()).toBe(true)
  })
})
