export async function seed(knex) {
  await knex('saved_reviews').del()

  await knex('saved_reviews').insert([
    {
      id: 1,
      user_id: 1, // User ID 1 saves Review ID 1
      review_id: 1,
    },
    {
      id: 2,
      user_id: 1, // User ID 1 saves Review ID 2
      review_id: 2,
    },
    {
      id: 3,
      user_id: 2, // User ID 2 saves Review ID 3
      review_id: 3,
    },
    {
      id: 4,
      user_id: 3, // User ID 3 saves Review ID 4
      review_id: 4,
    },
    {
      id: 5,
      user_id: 4, // User ID 4 saves Review ID 5
      review_id: 5,
    },
  ])
}
