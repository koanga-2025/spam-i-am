// @vitest-environment jsdom

import { renderApp } from '../test-setup.tsx'
import { describe, it, expect } from 'vitest'
import nock from 'nock'

// Mock data
const mockText = [
  { id: 1, title: 'Test Title 1', body: 'Test body 1' },
  { id: 2, title: 'Test Title 2', body: 'Test body 2' },
]
const mockImages = [
  { id: 1, link: 'test-image-1.jpg', alt: 'Test Alt 1', caption: 'Test Caption 1' },
  { id: 2, link: 'test-image-2.jpg', alt: 'Test Alt 2', caption: 'Test Caption 2' },
]

describe('About.tsx', () => {
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
    // ARRANGE
    const scope = nock('http://localhost:3000')
      .get('/api/v1/about/text')
      .reply(200, mockText)
      .get('/api/v1/about/images')
      .reply(200, mockImages)

    // ACT
    const { findByText, queryAllByAltText, ...screen } = renderApp('/about')

    // ASSERT
    expect(screen.getAllByAltText('Loading')).toHaveLength(2)

    const title1 = await findByText('Test Title 1')
    const body1 = await findByText('Test body 1')
    const image1 = await screen.findByAltText('Test Alt 1')
    const caption1 = await findByText('Test Caption 1')

    expect(title1).toBeInTheDocument()
    expect(body1).toBeInTheDocument()
    expect(image1).toBeInTheDocument()
    expect(caption1).toBeInTheDocument()
    expect(queryAllByAltText('Loading')).toHaveLength(0)

    expect(scope.isDone()).toBe(true)
  })
})

