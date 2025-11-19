// @vitest-environment jsdom
import { renderApp } from '../test-setup.tsx'
import {
  describe,
  it,
  expect,
  test,
  beforeEach,
  afterEach,
  vi,
  beforeAll,
  afterAll,
} from 'vitest'
import App from '../App.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import nock from 'nock'
import { render, screen } from '@testing-library/react'

vi.mock('@auth0/auth0-react')

const ACCESS_TOKEN = 'mock-access-token'
const TEST_USER = { sub: 'bob@example.com' }

// beforeAll(() => {
//   nock.disableNetConnect()
// })

beforeEach(() => {
  vi.mocked(useAuth0).mockReturnValue({
    isAuthenticated: true,
    user: TEST_USER,
    getAccessTokenSilently: vi.fn().mockReturnValue(ACCESS_TOKEN),
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  } as any)
})

afterEach(() => {
  vi.clearAllMocks()
})

describe('Auth.test.tsx', () => {
  it('shows the correct name from auth0 users', async () => {
    const { ...screen } = renderApp('/')

    const nickname = screen.getByText(`Signed in as: ${TEST_USER.nickname}`)

    expect(nickname).toBeVisible()
  })
})
