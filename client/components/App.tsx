import { Outlet } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Header from './Header'
import Login from './Login'
import Home from './Home'

function App() {
  return (
    <>
      <IfNotAuthenticated>
        <Home />
      </IfNotAuthenticated>

      <IfAuthenticated>
        <Outlet />
      </IfAuthenticated>
    </>
  )
}

export default App
