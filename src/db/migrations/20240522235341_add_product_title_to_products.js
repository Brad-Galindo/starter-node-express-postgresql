/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.table('products', function (table) {
      table.text('product_title');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table('products', function (table) {
      table.dropColumn('product_title');
    });
  };
