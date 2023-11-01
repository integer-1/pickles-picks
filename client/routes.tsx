import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import ReviewList from './components/ReviewList.tsx'
import Review from './components/Review.tsx'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="/reviews" element={<ReviewList />} />
    <Route path="/reviews/:id" element={<Review/>} />
  </>
)
