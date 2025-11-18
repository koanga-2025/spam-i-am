export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary()
    table.string('user_name')
    table.string('email')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}
