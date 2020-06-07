
exports.up = function(knex) {
  return knex.schema.createTable('controller', function(table){
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.string('n_caixa').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('controller');
};
