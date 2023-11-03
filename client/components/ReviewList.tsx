import { useQuery } from '@tanstack/react-query'
import { getAllReviews } from '../apis/reviews'
import Header from './Header'
import { Link } from 'react-router-dom'
import { SetStateAction, useState } from 'react'
import { Review } from '../../models/reviews'

function ReviewList() {
  const {
    data: reviews,
    isLoading,
    isError,
  } = useQuery(['reviews'], getAllReviews)

  const [sortOption, setSortOption] = useState('desc')

  if (isError) {
    return (
      <>
        <p>Something went wrong!</p>
      </>
    )
  }

  if (!reviews || isLoading) {
    return <p>...loading</p>
  }

  const getSortFunction = (option: string) => {
    switch (option) {
      case 'desc':
        return (a: { rating: number }, b: { rating: number }) =>
          b.rating - a.rating
      case 'asc':
        return (a: { rating: number }, b: { rating: number }) =>
          a.rating - b.rating
      default:
        return (a: { id: number }, b: { id: number }) => a.id - b.id
    }
  }

  const toggleSortOption = (option: SetStateAction<string>) => {
    setSortOption(option)
  }
  const sortedReviews = [...reviews].sort(getSortFunction(sortOption))

  return (
    <>
      <Header />
      <div className="review-list-header">
        {' '}
        <h2>Dog-friendly recommendations ☕🍸🍝 reviewed by Pickles himself</h2>
        <select
          className="dropdown"
          onChange={(e) => toggleSortOption(e.target.value)}
        >
          {' '}
          <option value="desc">Top Rated</option>
          <option value="asc">Lowest Rated</option>
        </select>
      </div>
      <div className="reviews-list">
        <ul>
          {sortedReviews.map((review) => (
            <li key={review.id} className="review-post">
              <Link to={`/reviews/${review.id}`} className="review-title-link">
                <p className="review-title">{review.title}</p>
              </Link>
              <p>Location: {review.location}</p>
              <p>Rating: {review.rating}</p>
              <p>{review.text}</p>
              <p>Date: {review.date.toString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ReviewList
