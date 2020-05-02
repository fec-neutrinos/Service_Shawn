
exports.up = function(knex) {
  return knex.schema.createTable('reviews', table => {
    table.increments('review_id').primary();
    table.integer('user_id').unsigned();
    table.integer('product_id').notNullable();
    table.date('review_date');
    table.string('header', 40);
    table.string('review_text');
    table.integer('rating');
    table.boolean('would_recommend');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('reviews');
};
