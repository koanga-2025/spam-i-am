export async function up(knex) {
  return knex.schema.createTable('about_images', (table) => {
    table.increments('id').primary()
    table.string('link')
    table.string('alt')
    table.string('caption')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('about_images')
}
