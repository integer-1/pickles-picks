import connection from './connection.ts'
import { Review, User, SavedReview } from '../../models/reviews.ts'

const reviewColumns = ['location', 'title', 'text', 'rating', 'date']

export async function getAllReviews(db = connection): Promise<Review[]> {
  return db('reviews').select()
}

export async function getReviewById(
  id: number,
  db = connection
): Promise<Review[]> {
  return db('reviews').where({ id }).select()
}

/* export async function addReview(
  review: Review,
  db = connection
): Promise<Review> {
  try {
    // Count the existing entries in the 'review' table
    const countQuery = await db('review').count('id as count').first()
    const existingCount = countQuery ? countQuery.count || 0

    // Calculate the new 'id' for the review
    const newId = existingCount + 1

    // Create the review entry with the new 'id'
    const reviewEntry: Review = {
      id: newId,
      location: review.location,
      title: review.title,
      text: review.text,
      rating: review.rating,
      date: review.date,
    }

    // Insert the new entry into the 'review' table
    const insertQuery = await db('review')
      .insert(reviewEntry)
      .returning(reviewColumns)

    if (insertQuery.length > 0) {
      return reviewEntry; // Return the newly added review
    } else {
      throw new Error('Inserting review was unsuccessful.')
    }
  } catch (error) {
    console.error('Error adding review:', error)
    throw error;
  }
} */
