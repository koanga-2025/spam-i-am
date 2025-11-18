export async function up(knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id').primary()
    table.string('question')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('questions')
}
