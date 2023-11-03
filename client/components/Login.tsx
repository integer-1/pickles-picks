import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Login() {
  const { loginWithRedirect, logout } = useAuth0()

  // const navigate = useNavigate()
  // const history = useHistory()

  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        returnTo: `${window.location.origin}/reviews`,
      },
    })
    window.location.reload()

    // navigate('/reviews')
    // history.push('/reviews')
  }
  return (
    <>
      <IfAuthenticated>
        <button className="button" onClick={() => logout()}>
          Logout
        </button>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </IfNotAuthenticated>
    </>
  )
}

export default Login
