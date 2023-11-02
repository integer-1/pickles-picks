import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import ReviewList from './ReviewList'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  const navigate = useNavigate()
  // const history = useHistory()

  const handleLogin = () => {
    loginWithRedirect()
    navigate('/reviews')
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
