export async function up(knex) {
  return knex.schema.createTable('options', (table) => {
    table.increments('id').primary()
    table.integer('question_id').references('questions.id').notNullable()
    table.string('image').notNullable()
    table.string('text').notNullable()
    table.string('category').notNullable()
  })
}

export async function down(knex) {
  return knex.schema.dropTable('options')
}
