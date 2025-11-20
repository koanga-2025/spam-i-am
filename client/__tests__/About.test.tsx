// @vitest-environment jsdom

import { renderApp } from '../test-setup.tsx'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mockAboutText, mockAboutImages } from './fixtures/mockData'

// Mock the hooks
vi.mock('../hooks/useAbout', () => ({
  useAboutText: vi.fn(),
  useAboutImages: vi.fn(),
}))

import { useAboutText, useAboutImages } from '../hooks/useAbout'

describe('About.tsx', () => {
  beforeEach(() => {
    vi.mocked(useAboutText).mockReturnValue({
      data: mockAboutText,
      isLoading: false,
      isError: false,
      error: null,
      refetch: vi.fn(),
    } as any)
    vi.mocked(useAboutImages).mockReturnValue({
      data: mockAboutImages,
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
    const title1 = await findByText('The Origins')
    const title2 = await findByText('World War II')
    const body1 = await findByText('SPAM was first introduced in 1937...')
    const image1 = await screen.findByAltText('Original SPAM can')
    const caption1 = await findByText('The iconic SPAM can design')

    expect(title1).toBeInTheDocument()
    expect(title2).toBeInTheDocument()
    expect(body1).toBeInTheDocument()
    expect(image1).toBeInTheDocument()
    expect(caption1).toBeInTheDocument()
  })
})
