export async function seed(knex) {
  await knex('users').del()

  await knex('users').insert([
    {
      id: 1,
      username: 'CaptainChaos',
      email_address: 'captain@chaos.com',
      hash: 'supersecretpassword',
    },
    {
      id: 2,
      username: 'SirLaughsALot',
      email_address: 'laughing@sir.com',
      hash: 'gigglemonster123',
    },
    {
      id: 3,
      username: 'DancingDork',
      email_address: 'dorkydancer@email.com',
      hash: 'dancepartyfun',
    },
    {
      id: 4,
      username: 'PizzaLover',
      email_address: 'pizza@lover.com',
      hash: 'pepperonipassion',
    },
    {
      id: 5,
      username: 'NinjaNapper',
      email_address: 'ninja@napper.com',
      hash: 'sneakysleepy',
    },
    {
      id: 6,
      username: 'BurgerBandit',
      email_address: 'burger@bandit.com',
      hash: 'stolenburgers',
    },
  ])
}
