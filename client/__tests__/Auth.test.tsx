// @vitest-environment jsdom
import { renderApp } from '../test-setup.tsx'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useAuth0 } from '@auth0/auth0-react'

vi.mock('@auth0/auth0-react')

const ACCESS_TOKEN = 'mock-access-token'

beforeEach(() => {
  vi.mocked(useAuth0).mockReturnValue({
    isAuthenticated: true,
    user: { sub: 'bob@example.com', nickname: 'bob' },
    getAccessTokenSilently: vi.fn().mockReturnValue(ACCESS_TOKEN),
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  } as any)
})

afterEach(() => {
  vi.clearAllMocks()
})

describe('Auth.test.tsx', () => {
  it('checks if app shows the correct name from auth0 users', async () => {
    const { ...screen } = renderApp('/')
    const testNickname = 'bob'
    const nickname = screen.getByText(`Signed in as: ${testNickname}`)

    expect(nickname).toBeVisible()
  })
})
