/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('goals', function(table){
    table.increments('id');
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.integer('status').defaultTo(0);
    table.timestamps(true, true);
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTable('goals');
};
