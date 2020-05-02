
exports.up = function(knex) {
  return knex.schema.table('reviews', table => {
    table.foreign('user_id').references('users.user_id');
  });
};

exports.down = function(knex) {
  return knex.schema.table('reviews', table => {
    table.dropForeign('user_id');
  });
};
