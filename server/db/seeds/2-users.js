export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    {
      auth0_id: 'auth0|xxx123',
      user_name: 'Roger',
      email: 'roger@example.org',
    },
    {
      auth0_id: 'auth0|xxx456',
      user_name: 'Coolio',
      email: 'coolio@example.org',
    },
    {
      auth0_id: 'auth0|xxx789',
      user_name: 'Stacy',
      email: 'stacy@example.org',
    },
    // A "real" auth0_id for testing purposes if needed:
    {
      auth0_id: 'auth0|691ad27f5bdf5b8cde354d2f',
      user_name: 'fakeuser',
      email: 'fakeuser@example.org',
    },
  ])
}
