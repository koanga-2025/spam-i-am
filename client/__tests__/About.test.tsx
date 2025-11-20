// @vitest-environment jsdom

import { renderApp } from '../test-setup.tsx'
import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the hooks
vi.mock('../hooks/useAbout', () => ({
  useAboutText: vi.fn(),
  useAboutImages: vi.fn(),
}))

import { useAboutText, useAboutImages } from '../hooks/useAbout'

// Mock data
const mockText = [
  { id: 1, title: 'The history of SPAM', body: 'Test body 1' },
  { id: 2, title: 'Test Title 2', body: 'Test body 2' },
]
const mockImages = [
  {
    id: 1,
    link: 'test-image-1.jpg',
    alt: 'Test Alt 1',
    caption: 'Test Caption 1',
  },
  {
    id: 2,
    link: 'test-image-2.jpg',
    alt: 'Test Alt 2',
    caption: 'Test Caption 2',
  },
]

describe('About.tsx', () => {
  beforeEach(() => {
    vi.mocked(useAboutText).mockReturnValue({
      data: mockText,
      isLoading: false,
      isError: false,
      error: null,
      refetch: vi.fn(),
    } as any)
    vi.mocked(useAboutImages).mockReturnValue({
      data: mockImages,
      isLoading: false,
      isError: false,
      error: null,
      refetch: vi.fn(),
    } as any)
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
