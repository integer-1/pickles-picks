import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import ReviewList from './ReviewList'
import { Link } from 'react-router-dom'

function Login() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  const handleLogin = async () => {
    await loginWithRedirect()
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
