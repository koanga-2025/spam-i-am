export async function up(knex) {
  return knex.schema.createTable('about_text', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('body')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('about_text')
}
