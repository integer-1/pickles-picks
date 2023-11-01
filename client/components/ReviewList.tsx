import { useQuery } from '@tanstack/react-query'
import { getAllReviews } from '../apis/reviews'
import Header from './Header'
import { Link } from 'react-router-dom'

function ReviewList() {
  const {
    data: reviews,
    isLoading,
    isError,
  } = useQuery(['reviews'], getAllReviews)

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

  return (
    <>
      <Header />
      <h1>Review List</h1>
      <div className="nav">
        <select className="dropdown">
          <option>Rating Descending</option>
          <option>Rating Ascending</option>
        </select>
      </div>
      <div className="reviews-list">
        <ul>
          {reviews.map((review) => (
            <li key={review.id} className="review-post">
              <Link to={`/reviews/${review.id}`}>
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
