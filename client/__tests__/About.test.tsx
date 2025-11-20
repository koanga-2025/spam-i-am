// @vitest-environment jsdom

import { renderApp } from '../test-setup.tsx'
import { describe, it, expect, beforeEach } from 'vitest'
import nock from 'nock'
import { mockAboutText, mockAboutImages } from './fixtures/mockData'

describe('About.tsx', () => {
  beforeEach(() => {
    // Mock the API responses for About page
    nock('http://localhost').get('/api/v1/about/text').reply(200, mockAboutText)

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

  it('displays fetched data correctly', async () => {
    // ARRANGE & ACT
    const { findByText, ...screen } = renderApp('/about')

    // ASSERT
    const title2 = await findByText('Test Title 2')
    const body1 = await findByText('Test body 1')
    const image1 = await screen.findByAltText('Test Alt 1')
    const caption1 = await findByText('Test Caption 1')

    expect(title2).toBeInTheDocument()
    expect(body1).toBeInTheDocument()
    expect(image1).toBeInTheDocument()
    expect(caption1).toBeInTheDocument()
  })
})
