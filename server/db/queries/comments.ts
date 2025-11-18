import connection from '../connection'
// COMMENTS

// TODO: Get All Comments by SpamId
export async function getCommentsBySpamId(spamId: number, db = connection) {
  return db('comments').where({ spam_id: spamId })
}

// TODO: Create a Comment:

export async function createComment(
  spamId: number,
  comment: string,
  userId: string,
  db = connection,
) {
  return db('comments')
    .insert({
      user_id: userId,
      spam_id: spamId,
      comment_text: comment,
      created_date: Date.now(),
    })
    .returning('*')
}

// TODO: Update Comment

// TODO: Delete Comment
