import { useQuery } from '@tanstack/react-query'
import { getReviewById } from '../apis/reviews'
import { useParams } from 'react-router-dom'

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
    <div>
      <h1>{reviewById.title}</h1>
      <p>Date: {reviewById.date}</p>
      <p>Rating: {reviewById.rating}</p>
      <p>{reviewById.text}</p>
    </div>
  )
}

export default Review
