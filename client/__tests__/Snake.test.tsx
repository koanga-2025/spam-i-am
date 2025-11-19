// @vitest-environment jsdom

import { renderApp } from '../test-setup.tsx'
import { describe, it, expect } from 'vitest'
import { screen, fireEvent } from '@testing-library/react'

describe('Snake.tsx', () => {
  it('renders difficulty sliders with default medium values', async () => {
    // ARRANGE
    const { user } = renderApp('/games')
    const snakeButton = screen.getByRole('button', { name: 'Snake' })
    
    // ACT
    await user.click(snakeButton)
    
    // ASSERT
    expect(screen.getByText(/Speed: Medium/)).toBeVisible()
    expect(screen.getByText(/Number of Obstacles: Medium/)).toBeVisible()
  })

  it('changes speed difficulty label when slider is moved', async () => {
    // ARRANGE
    const { user } = renderApp('/games')
    const snakeButton = screen.getByRole('button', { name: 'Snake' })
    await user.click(snakeButton)
    
    const speedSlider = screen.getByLabelText('Speed difficulty slider') as HTMLInputElement
    
    // ACT - Set to Easy (0)
    fireEvent.change(speedSlider, { target: { value: '0' } })
    
    // ASSERT
    expect(screen.getByText(/Speed: Easy/)).toBeVisible()
  })

  it('changes obstacles difficulty label when slider is moved', async () => {
    // ARRANGE
    const { user } = renderApp('/games')
    const snakeButton = screen.getByRole('button', { name: 'Snake' })
    await user.click(snakeButton)
    
    const obstaclesSlider = screen.getByLabelText('Obstacles difficulty slider') as HTMLInputElement
    
    // ACT - Set to Hard (2)
    fireEvent.change(obstaclesSlider, { target: { value: '2' } })
    
    // ASSERT
    expect(screen.getByText(/Number of Obstacles: Hard/)).toBeVisible()
  })

  it('renders correct number of obstacles when set to easy (0 obstacles)', async () => {
    // ARRANGE
    const { user } = renderApp('/games')
    const snakeButton = screen.getByRole('button', { name: 'Snake' })
    await user.click(snakeButton)
    
    const obstaclesSlider = screen.getByLabelText('Obstacles difficulty slider') as HTMLInputElement
    
    // ACT - Set obstacles to Easy (0)
    fireEvent.change(obstaclesSlider, { target: { value: '0' } })
    
    const playButton = screen.getByRole('button', { name: 'Play' })
    await user.click(playButton)
    
    // ASSERT - Count table cells with bg-white class (obstacles)
    const tableCells = document.querySelectorAll('td')
    const obstacles = Array.from(tableCells).filter(cell => 
      cell.className.includes('bg-white')
    )
    
    expect(obstacles.length).toBe(0)
  })

  it('renders correct number of obstacles when set to medium (3 obstacles)', async () => {
    // ARRANGE
    const { user } = renderApp('/games')
    const snakeButton = screen.getByRole('button', { name: 'Snake' })
    await user.click(snakeButton)
    
    // Medium is default, but let's explicitly set it
    const obstaclesSlider = screen.getByLabelText('Obstacles difficulty slider') as HTMLInputElement
    fireEvent.change(obstaclesSlider, { target: { value: '1' } })
    
    // ACT
    const playButton = screen.getByRole('button', { name: 'Play' })
    await user.click(playButton)
    
    // ASSERT - Count table cells with bg-white class (obstacles)
    const tableCells = document.querySelectorAll('td')
    const obstacles = Array.from(tableCells).filter(cell => 
      cell.className.includes('bg-white')
    )
    
    expect(obstacles.length).toBe(3)
  })

  it('renders correct number of obstacles when set to hard (5 obstacles)', async () => {
    // ARRANGE
    const { user } = renderApp('/games')
    const snakeButton = screen.getByRole('button', { name: 'Snake' })
    await user.click(snakeButton)
    
    const obstaclesSlider = screen.getByLabelText('Obstacles difficulty slider') as HTMLInputElement
    
    // ACT - Set obstacles to Hard (5)
    fireEvent.change(obstaclesSlider, { target: { value: '2' } })
    
    const playButton = screen.getByRole('button', { name: 'Play' })
    await user.click(playButton)
    
    // ASSERT - Count table cells with bg-white class (obstacles)
    const tableCells = document.querySelectorAll('td')
    const obstacles = Array.from(tableCells).filter(cell => 
      cell.className.includes('bg-white')
    )
    
    expect(obstacles.length).toBe(5)
  })
})
