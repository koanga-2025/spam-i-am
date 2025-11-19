// @vitest-environment jsdom

import { renderApp } from '../test-setup.tsx'
import { describe, it, expect, beforeEach } from 'vitest'
import { screen, fireEvent } from '@testing-library/react'

describe('Snake.tsx', () => {
  let user: ReturnType<typeof renderApp>['user']

  beforeEach(async () => {
    const rendered = renderApp('/games')
    user = rendered.user
    const snakeButton = screen.getByRole('button', { name: 'Snake' })
    await user.click(snakeButton)
  })

  it('renders difficulty sliders with default medium values', () => {
    expect(screen.getByText(/Speed: Medium/)).toBeVisible()
    expect(screen.getByText(/Number of Obstacles: Medium/)).toBeVisible()
  })

  it('changes speed difficulty label when slider is moved', () => {
    const speedSlider = screen.getByLabelText('Speed difficulty slider') as HTMLInputElement
    
    fireEvent.change(speedSlider, { target: { value: '0' } })
    
    expect(screen.getByText(/Speed: Easy/)).toBeVisible()
  })

  it('changes obstacles difficulty label when slider is moved', () => {
    const obstaclesSlider = screen.getByLabelText('Obstacles difficulty slider') as HTMLInputElement
    
    fireEvent.change(obstaclesSlider, { target: { value: '2' } })
    
    expect(screen.getByText(/Number of Obstacles: Hard/)).toBeVisible()
  })

  it('renders correct number of obstacles when set to easy (0 obstacles)', async () => {
    const obstaclesSlider = screen.getByLabelText('Obstacles difficulty slider') as HTMLInputElement
    fireEvent.change(obstaclesSlider, { target: { value: '0' } })
    
    const playButton = screen.getByRole('button', { name: 'Play' })
    await user.click(playButton)
    
    const tableCells = document.querySelectorAll('td')
    const obstacles = Array.from(tableCells).filter(cell => 
      cell.className.includes('bg-white')
    )
    
    expect(obstacles.length).toBe(0)
  })

  it('renders correct number of obstacles when set to medium (3 obstacles)', async () => {
    const obstaclesSlider = screen.getByLabelText('Obstacles difficulty slider') as HTMLInputElement
    fireEvent.change(obstaclesSlider, { target: { value: '1' } })
    
    const playButton = screen.getByRole('button', { name: 'Play' })
    await user.click(playButton)
    
    const tableCells = document.querySelectorAll('td')
    const obstacles = Array.from(tableCells).filter(cell => 
      cell.className.includes('bg-white')
    )
    
    expect(obstacles.length).toBe(3)
  })

  it('renders correct number of obstacles when set to hard (5 obstacles)', async () => {
    const obstaclesSlider = screen.getByLabelText('Obstacles difficulty slider') as HTMLInputElement
    fireEvent.change(obstaclesSlider, { target: { value: '2' } })
    
    const playButton = screen.getByRole('button', { name: 'Play' })
    await user.click(playButton)
    
    const tableCells = document.querySelectorAll('td')
    const obstacles = Array.from(tableCells).filter(cell => 
      cell.className.includes('bg-white')
    )
    
    expect(obstacles.length).toBe(5)
  })
})
