const MovementsTable = module.exports;

const data = [
  { name: 'rock', value: 1, lose_with: 2 },
  { name: 'paper', value: 2, lose_with: 3 },
  { name: 'scissors', value: 3, lose_with: 1 },

];
MovementsTable.up = knex =>
  knex.schema.createTable('movements', (table) => {
    table.increments().primary();
    table.string('name').unique().notNullable();
    table.integer('value').notNullable();
    table.integer('lose_with').notNullable();
  }).then(() => knex('movements').insert(data));

MovementsTable.down = knex =>
  knex.schema.dropTable('movements')
    .then(() => knex('movements').where(data).del());

