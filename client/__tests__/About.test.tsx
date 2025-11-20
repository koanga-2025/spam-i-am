// @vitest-environment jsdom
import { vi, describe, it, expect } from 'vitest'
import { renderApp } from '../test-setup.tsx'
import { screen } from '@testing-library/react'
const TEST_ABOUT_TEXT = [
  {
    id: 1,
    title: 'Chapter I: The Mysterious Origins',
    body: 'In the days of yore, a great culinary conundrum...',
  },
]
const TEST_ABOUT_IMAGES = [
  {
    id: 1,
    link: 'vintage_ham.jpeg',
    alt: 'a black and white etching of a ham hock',
    caption: 'Great grand-daddy SPAM, Sir Ham-Hock.',
  },
]
vi.mock('../hooks/useAbout', () => {
  return {
    useAboutText: () => ({
      data: TEST_ABOUT_TEXT,
      isLoading: false,
      isError: false,
    }),
    useAboutImages: () => ({
      data: TEST_ABOUT_IMAGES,
      isLoading: false,
      isError: false,
    }),
  }
})
describe('About.tsx', () => {
  it('About heading renders correctly', async () => {
    renderApp('/about')
    const heading = await screen.findByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('The history of SPAM')
  })
  it('renders about content and applies Tailwind classes from designer screenshots', async () => {
    const { container } = renderApp('/about')
    const root = container.querySelector('main.flex')
    expect(root).toBeInTheDocument()
    expect(root).toHaveClass('flex', 'gap-8', 'p-8')
    const mappedTitle = await screen.findByText(TEST_ABOUT_TEXT[0].title)
    const mappedBody = await screen.findByText(TEST_ABOUT_TEXT[0].body)
    expect(mappedTitle).toBeVisible()
    expect(mappedBody).toBeVisible()
    const sectionWrapper = mappedTitle.closest('section')
    expect(sectionWrapper).toBeTruthy()
    {
      expect(sectionWrapper).toHaveClass(
        'mb-5',
        'rounded-lg',
        'border-2',
        'border-blue-900',
      )
    }
    const img = await screen.findByAltText(TEST_ABOUT_IMAGES[0].alt)
    expect(img).toBeVisible()
    expect(img).toHaveClass(
      'rounded-lg',
      'border-2',
      'border-blue-900',
      'shadow-md',
    )
  })
  it('displays fetched data correctly', async () => {
    renderApp('/about')
    
    const title1 = await screen.findByText('Chapter I: The Mysterious Origins')
    const body1 = await screen.findByText('In the days of yore, a great culinary conundrum...')
    const image1 = await screen.findByAltText('a black and white etching of a ham hock')
    const caption1 = await screen.findByText('Great grand-daddy SPAM, Sir Ham-Hock.')

    expect(title1).toBeInTheDocument()
    expect(body1).toBeInTheDocument()
    expect(image1).toBeInTheDocument()
    expect(caption1).toBeInTheDocument()
  })
})
