export const up = function (knex) {
  return knex.schema.createTable('comments', (table) => {
    table.integer('id').primary()
    table.string('user_id').references('users.auth0_id').onDelete('CASCADE')
    table.integer('spam_id').references('spam.id').onDelete('CASCADE')
    table.string('comment_text')
    table.integer('created_date').defaultTo(knex.fn.now()) // Returns the current timestamp with a precision (optional)
  })
}

export const down = function (knex) {
  return knex.schema.dropTable('comments')
}
