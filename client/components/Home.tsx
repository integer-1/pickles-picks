import { useAuth0 } from '@auth0/auth0-react'
import Login from './Login'
import Register from './Register'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/reviews')
    }
  }, [isAuthenticated, navigate])
  
  return (
    <>
      <div className="landing-page">
        <h2>Welcome to Pickle's Picks!</h2>
        <h3>See all my favourite places to eat!</h3>
        <Login />
        <Register />
        <Link to="/reviews" className="button">
          Continue without sign in
        </Link>
      </div>
    </>
  )
}

export default Home
