import { Router } from 'express'
import * as db from '../db/reviews.ts'

const router = Router()

// GET all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await db.getAllReviews()

    res.json({ reviews })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// GET review by Id
router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const reviewsId = parseInt(id, 10)
    const review = await db.getReviewById(reviewsId)
    res.json({ review })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
