const ScoreTables = module.exports;

ScoreTables.up = knex =>
  knex.schema.createTable('scores', (table) => {
    table.increments().primary();
    table.string('player_1', 30).notNullable();
    table.string('player_2', 30).notNullable();
    table.string('winer').notNullable();
    table.string('wins_with').notNullable().references('movements.name');
  });

ScoreTables.down = knex =>
  knex.schema.dropTable('scores');

