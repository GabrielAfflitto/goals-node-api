/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 // will need to secure the password in the password in the future
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTable('users');
};
