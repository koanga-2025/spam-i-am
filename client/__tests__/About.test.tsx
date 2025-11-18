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
