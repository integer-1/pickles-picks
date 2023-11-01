import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import ReviewList from './ReviewList'

function Login() {
  const { loginWithRedirect, logout, user } = useAuth0()
  return (
    <>
      <IfAuthenticated>
        <ReviewList />
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button className="button" onClick={() => loginWithRedirect()}>
          Login
        </button>
      </IfNotAuthenticated>
    </>
  )
}

export default Login
