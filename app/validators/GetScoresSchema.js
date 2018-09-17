module.exports = {
  title: 'GetScores',
  type: 'object',
  properties: {
    page: {
      type: 'string',
    },
    page_size: {
      type: 'string',
    },
    player_name: {
      type: 'string',
      maxLength: 30,
    },
  },

  required: [
    'page', 'page_size', 'player_name',
  ],
};
