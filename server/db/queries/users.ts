import connection from '../connection.ts'

export async function upsertUser(
  auth0Id: string,
  userName: string,
  email: string,
  db = connection,
) {
  const [user] = await db('users')
    .insert({ auth0_id: auth0Id, user_name: userName, email })
    .onConflict('auth0_id')
    .merge()
    .returning(['auth0_id', 'user_name', 'email'])

  return user
}

export async function getUserByAuth0Id(auth0Id: string, db = connection) {
  const user = await db('users').where('auth0_id', auth0Id).first()

  return user
}
