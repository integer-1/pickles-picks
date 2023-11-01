import Login from './Login'
import Register from './Register'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h2>Welcome!</h2>
      <Login />
      <Register />
      <Link to="/reviews">Continue without sign in</Link>
    </>
  )
}

export default Home
