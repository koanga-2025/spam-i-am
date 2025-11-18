export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('ratings').del()
  await knex('ratings').insert([
    { id: 1, user_id: 'auth0|xxx123', spam_id: 1, rating: 5 },
    { id: 2, user_id: 'auth0|xxx456', spam_id: 2, rating: 1 },
    { id: 3, user_id: 'auth0|xxx789', spam_id: 3, rating: 2 },
  ])
}
