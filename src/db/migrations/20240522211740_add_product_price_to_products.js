/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.table('products', function (table) {
      table.decimal('product_price', 5, 2);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table('products', function (table) {
      table.dropColumn('product_price');
    });
  };
