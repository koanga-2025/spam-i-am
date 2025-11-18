import Button from '../UI/Button.tsx'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'

function LoginButton() {
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect

  // TODO: replace placeholder user object with the one from auth0
  const user = {
    nickname: 'sarah.spamalot',
  }

  const handleSignOut = () => {
    console.log('sign out')
    //   TODO: return the logout function
  }

  const handleSignIn = () => {
    console.log('sign in')
    //   TODO: return the loginWithRedirect function
  }

  return (
    <>
      <IfAuthenticated>
        <Button onClick={handleSignOut}>Sign out</Button>
        {user && <p>Signed in as: {user?.nickname}</p>}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Button onClick={handleSignIn}>Sign in</Button>
      </IfNotAuthenticated>
    </>
  )
}

export default LoginButton
