import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import Home from './components/Home.tsx'
import ReviewList from './components/ReviewList.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/reviews" element={<ReviewList />} />
  </Route>
)
