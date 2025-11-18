import connection from '../connection'
export function getAllAboutText(db = connection) {
  return db('about_text').select()
}

export function getAllAboutImages(db = connection) {
  return db('about_images').select()
}
