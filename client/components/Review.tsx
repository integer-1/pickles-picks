import { useQuery } from '@tanstack/react-query'
import { getReviewById } from '../apis/reviews'
import { useParams } from 'react-router-dom'
import Header from './Header'

const Review = () => {
  const { id } = useParams()
  const idAsNumber = id ? parseInt(id, 10) : undefined

  const {
    data: review,
    isLoading,
    isError,
  } = useQuery(['review', id], () => getReviewById(idAsNumber as number))

  if (isError) {
    return (
      <>
        <p>Something went wrong!</p>
      </>
    )
  }

  if (!review || isLoading) {
    return <p>...loading</p>
  }

  console.log(idAsNumber, review[0])

  const reviewById = review[0]
  return (
    <>
      <Header />
      <div className="review-container">
        <h2>{reviewById.title}</h2>
        <p>Location: {reviewById.location}</p>
        <p>Rating: {reviewById.rating}</p>
        <p>{reviewById.text}</p>
        <p>Date: {reviewById.date}</p>
      </div>
    </>
  )
}

export default Review
