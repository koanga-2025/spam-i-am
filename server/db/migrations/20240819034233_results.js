export async function up(knex) {
  return knex.schema.createTable('results', (table) => {
    table.increments('id').primary()
    table.string('category')
    table.string('name')
    table.string('image')
    table.string('info')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('results')
}
