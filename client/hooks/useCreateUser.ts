import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { createUser } from '../apis/users'

export function useCreateUser() {
  // Get user info and authentication state from Auth0
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  // Run whenever authentication state changes
  useEffect(() => {
    const saveUser = async () => {
      // Only save if user is logged in and user data is available
      if (isAuthenticated && user) {
        try {
          // Get the access token for API authorization
          const token = await getAccessTokenSilently()
          // Call API to create/update user in database (upsert)
          // Use nickname (Google OAuth) or extract from email as fallback
          const userName =
            user.nickname || user.email?.split('@')[0] || 'Anonymous'
          await createUser(userName, user.email || '', token)
          console.log('User saved to database')
        } catch (error) {
          console.error('Error saving user to database:', error)
        }
      }
    }

    saveUser()
  }, [isAuthenticated, user, getAccessTokenSilently]) // Re-run when these values change
}
