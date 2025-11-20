// @vitest-environment jsdom

//  --------------
// GOOD EXAMPLE OF A *BASIC* COMPONENT TEST
//  --------------

import { renderApp } from '../test-setup.tsx'
import { describe, it, expect, beforeEach } from 'vitest'
import nock from 'nock'
import { mockAboutText, mockAboutImages } from './fixtures/mockData'

describe('About.tsx', () => {
  beforeEach(() => {
    // Mock the API responses for About page
    nock('http://localhost')
      .get('/api/v1/about/text')
      .reply(200, mockAboutText)

    nock('http://localhost')
      .get('/api/v1/about/images')
      .reply(200, mockAboutImages)
  })

  it('About heading renders correctly', async () => {
    // ARRANGE
    const { ...screen } = renderApp('/about')
    const heading = screen.getByRole('heading', {
      level: 1,
    })
    // ACT
    // Not necessary in this test
    // ASSERT
    expect(heading.textContent).toBe('The history of SPAM')
  })
  // TODO: add another test to see if you see the real data from the database rendered on the page
})

