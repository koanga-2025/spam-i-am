export async function up(knex) {
  return knex.schema.createTable('spam', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('image')
    table.string('description')
    table.string('flavour_profile')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('spam')
}
