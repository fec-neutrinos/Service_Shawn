
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('user_id').primary();
    table.string('user_name', 45).notNullable();
    table.string('thumbnail');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
