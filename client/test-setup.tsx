import { beforeEach, expect, beforeAll, afterAll, afterEach } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import nock from 'nock'
import superagent from 'superagent'

import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import userEvent from '@testing-library/user-event'
import { routes } from './routes'

// Store original methods for restoration
const originalConsoleWarn = console.warn
const originalSuperagentMethods: Record<string, Function> = {}

// Disable all network connections in tests by default
// Individual tests can override this with their own nock setup
beforeAll(() => {
  nock.disableNetConnect()

  // Suppress React Router v7 migration warnings in tests
  console.warn = (...args) => {
    if (args[0]?.includes?.('React Router Future Flag Warning')) {
      return // Suppress React Router v7 migration warnings
    }
    originalConsoleWarn(...args)
  }

  // Intercept superagent methods to prepend base URL to relative paths
  const baseUrl = 'http://localhost'
  const httpMethods = ['get', 'post', 'put', 'delete', 'patch'] as const

  httpMethods.forEach(method => {
    // Store original method for cleanup
    originalSuperagentMethods[method] = superagent[method].bind(superagent)

    // Replace with interceptor that forwards all arguments
    superagent[method] = (url: string, ...args: any[]) => {
      if (typeof url === 'string' && url.startsWith('/')) {
        return originalSuperagentMethods[method](`${baseUrl}${url}`, ...args)
      }
      return originalSuperagentMethods[method](url, ...args)
    }
  })
})

afterAll(() => {
  // Restore original console.warn
  console.warn = originalConsoleWarn

  // Restore original superagent methods
  const httpMethods = ['get', 'post', 'put', 'delete', 'patch'] as const
  httpMethods.forEach(method => {
    if (originalSuperagentMethods[method]) {
      superagent[method] = originalSuperagentMethods[method]
    }
  })
})

afterEach(() => {
  nock.cleanAll()
})

beforeEach(cleanup)
expect.extend(matchers)

export function renderApp(location: string) {
  const user = userEvent.setup()
  const router = createMemoryRouter(routes, {
    initialEntries: [location],
  })

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  const screen = render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  )
  return { user, ...screen }
}
