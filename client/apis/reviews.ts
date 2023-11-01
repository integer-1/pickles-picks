import request from 'superagent'
import type { Review } from '../../models/reviews.ts'

const rootUrl = '/api/v1'

export async function getAllReviews() {
  const res = await request.get(rootUrl + '/reviews')
  return res.body.reviews as Review[]
}

export async function getReviewById(id: number) {
  const res = await request.get(rootUrl + `/reviews/${id}`)
  return res.body.review
}

export async function addReview(form: Review) {
  const addedReview = await request.post(rootUrl + '/reviews')
  return addedReview.body.talk
}
