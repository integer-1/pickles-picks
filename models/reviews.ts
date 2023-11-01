export interface Review {
  id: number
  location: string
  title: string
  text: string
  rating: number
  date: Date
}

export interface User {
  id: number
  username: string
  email_address: string
  hash: string
}

export interface SavedReview {
  id: number
  user_id: number
  review_id: number
}
