import { Outlet } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Header from './Header'
import Login from './Login'
import Home from './Home'

function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default App
