import connection from './connection.ts'

export async function getAllReviews(db = connection): Promise<Reviews[]> {
  return db('reviews').select()
}

export async function getReviewById(id: number, db = connection): Promise<Reviews[]> {
  return db('reviews').where({ id }).select()
}