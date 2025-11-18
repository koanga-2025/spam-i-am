export function logError(err: Error) {
  console.log(err)
  if (err.message === 'Username Taken') {
    throw new Error('Username already taken - please choose another')
  } else if (err.message === 'Forbidden') {
    throw new Error('You are not a legitimate SPAM fan')
  } else {
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}
