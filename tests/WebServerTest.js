const server = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const Config = require('../app/Config');

const { expect } = chai;
chai.use(chaiHttp);

describe('WebServer', () => {
  it('should get error unauthorized', () =>
    chai.request(server.appStarted)
      .get('/api/get_movements')
      .catch(err =>
        expect(err.response).to.have.status(401)));

  it('should get all movements', () =>
    chai.request(server.appStarted)
      .get('/api/get_movements')
      .set('api_key', Config.apiKey)
      .then(res =>
        expect(res).to.have.status(200)));

  it('should get scores error', () =>
    chai.request(server.appStarted)
      .get('/api/get_scores')
      .set('api_key', Config.apiKey)
      .catch(err =>
        expect(err.response).to.have.status(400)));

  it('should get scores ok', () =>
    chai.request(server.appStarted)
      .get('/api/get_scores?page=1&page_size=10&player_name=any')
      .set('api_key', Config.apiKey)
      .catch(err =>
        expect(err.response).to.have.status(200)));

  it('should post scores ok', () =>
    chai.request(server.appStarted)
      .post('/api/insert_scores')
      .set('api_key', Config.apiKey)
      .send({
        player_1: 'name',
        player_2: 'name',
        winer: 'name',
        wins_with: 'rock',
      })
      .catch(err =>
        expect(err.response).to.have.status(200)));
});
