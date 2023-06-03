/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('articles', (table) => {
        table.uuid('id').primary();
        table.string('title').notNullable();
        table.string('description');
        table.string('markdown').notNullable();
        table.date('createdAt');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('articles');
};
