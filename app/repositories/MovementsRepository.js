const ScoresRepository = module.exports;

const { db } = require('../utils/Database');

ScoresRepository.find = db('movements');

