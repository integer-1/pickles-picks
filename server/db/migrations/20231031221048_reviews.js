/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id').primary()
    table.string('location')
    table.string('title')
    table.text('text')
    table.integer('rating')
    table.date('date')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('reviews')
}
