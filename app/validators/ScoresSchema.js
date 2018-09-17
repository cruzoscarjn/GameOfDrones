module.exports = {
  title: 'Scores',
  type: 'object',
  properties: {
    player_1: {
      type: 'string',
      maxLength: 30,
    },
    player_2: {
      type: 'string',
      maxLength: 30,
    },
    winer: {
      type: 'string',
      maxLength: 30,
    },
    wins_with: {
      type: 'string',
    },
  },

  required: [
    'player_1', 'player_2', 'winer', 'wins_with',
  ],
};
