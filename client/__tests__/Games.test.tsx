// @vitest-environment jsdom

//  --------------
// GOOD EXAMPLE OF A *USER EVENT* COMPONENT TEST
//  --------------

import { renderApp } from '../test-setup.tsx'
import { describe, it, expect } from 'vitest'

describe('Games.tsx', () => {
  it('Games heading renders correctly', async () => {
    // ARRANGE
    const { ...screen } = renderApp('/games')
    const heading = screen.getByRole('heading', {
      level: 1,
    })
    // ACT
    // Not necessary in this test
    // ASSERT
    expect(heading.textContent).toBe('Choose a game!')
  })
  it('When `Spam Jump` button clicked, Spam Jump game component is visible', async () => {
    // ARRANGE
    const { user, ...screen } = renderApp('/games')
    // TODO: render the Games page without Query
    const button = screen.getByRole('button', {
      name: 'Spam Jump',
    })
    // ACT
    console.log(button)

    await user.click(button)
    // 'screen.debug()' is a useful way to see what is happening on the UI
    // screen.debug()
    // // ASSERT
    expect(screen.getByTestId('spam-jump-game')).toBeVisible()
  })
})
