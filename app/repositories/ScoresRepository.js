const ScoresRepository = module.exports;

const { db } = require('../utils/Database');

ScoresRepository.insert = score =>
  db('scores')
    .insert(score);

ScoresRepository.find = async (query) => {
  const { page_size: pageSize, page, player_name: playerName } = query;

  const totalRows = await db('scores')
    .where('player_1', playerName)
    .orWhere('player_2', playerName)
    .count();

  const table = await db('scores')
    .where('player_1', playerName)
    .orWhere('player_2', playerName)
    .orderBy('id', 'desc')
    .limit(pageSize)
    .offset(pageSize * (page - 1));

  const wins = await db('scores')
    .where('winer', playerName)
    .andWhereRaw(`(player_1='${playerName}' or player_2='${playerName}')`)
    .count();

  const loses = await db('scores')
    .whereNot('winer', playerName)
    .andWhereRaw(`(player_1='${playerName}' or player_2='${playerName}')`)
    .count();

  const lastPage = Math.ceil(totalRows[0].count / pageSize);
  const winsCount = wins[0].count;
  const losesCount = loses[0].count;

  return {
    lose: losesCount,
    win: winsCount,
    table,
    last_page: lastPage,
    current_page: page,
  };
};

