import Button from '../UI/Button.tsx'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    return logout()
  }

  const handleSignIn = () => {
    return loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <Button onClick={handleSignOut}>Sign out</Button>
        {user && (
          <p className="mb-3 ml-3 mr-3">Signed in as: {user?.nickname}</p>
        )}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Button onClick={handleSignIn}>Sign in</Button>
      </IfNotAuthenticated>
    </>
  )
}

export default LoginButton
