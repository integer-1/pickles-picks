import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  //Suwon will change this fuction after make back-end and font-end api
  const handleLogin = () => {
    if (username === 'username' && password === 'password') {
      alert('login')
    } else {
      alert('Please check')
    }
  }
  
  return (
    <>
      <h2 className="page-title">Please login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>login</button>
    </>
  )
}

export default Login
