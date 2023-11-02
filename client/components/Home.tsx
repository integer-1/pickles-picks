import Login from './Login'
import Register from './Register'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="landing-page">
        <h2>Welcome to Pickle&apos;s Picks!</h2>
        <h3>See all my favourite places to eat!</h3>
        <img
          src="client/styles/MiscData/Screenshot 2023-11-03 103600.png"
          alt="Pickles portrait"
          width="500"
          height="500"
        />
        <div className="authentication">
          <Login />
          <Register />
          <Link to="/reviews" className="button">
            Continue without sign in
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
