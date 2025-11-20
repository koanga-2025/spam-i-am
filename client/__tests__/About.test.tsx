// @vitest-environment jsdom

//  --------------
// GOOD EXAMPLE OF A *BASIC* COMPONENT TEST
//  --------------

import { renderApp } from '../test-setup.tsx'
import { describe, it, expect } from 'vitest'

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
  // TODO: add another test to see if you see the real data from the database rendered on the page
})

it('About heading and article sections have correct Tailwind styling', async () => {
    const { ...screen } = renderApp('/about')
    const heading = screen.getByRole('heading', { level: 1 })
    // Check for Tailwind classes: text-5xl, font-extrabold, font-heading, text-blue-900, text-center
    expect(heading.className).toMatch(/text-5xl/)
    expect(heading.className).toMatch(/font-extrabold/)
    expect(heading.className).toMatch(/font-heading/)
    expect(heading.className).toMatch(/text-blue-900/)
    expect(heading.className).toMatch(/text-center/)

    // Check that at least one article section has border, rounded, and border color classes
    const section = screen.getAllByRole('region')[0] || screen.getAllByText(/Chapter|Title/)[0].closest('section')
    expect(section?.className).toMatch(/border-2/)
    expect(section?.className).toMatch(/rounded-lg/)
    expect(section?.className).toMatch(/border-blue-900/)
  })