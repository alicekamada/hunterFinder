var test = require('tape');
var gameModel = require('../../../server/models/game.js');
var db = require('../../../server/db/db.js');
var R = require('ramda');

var testData = {
  name: 'Freedom Wars',
  platform: 'PS Vita',
  maxPartySize: 4
};

test('Games collection', function(assert) {
  assert.plan(4);

  db.conn.sync({force: true})
  .then(gameModel.Games.post.bind(null, testData))
  .then(gameModel.Games.get)
  .then(function(data) {
    assert.equal(data.length, 1);
    assert.equal(data[0].dataValues.name, testData.name, 'Should have the right name');
    assert.equal(data[0].dataValues.platform, testData.platform, 'Should have the right platform');
    assert.equal(data[0].dataValues.maxPartySize, testData.maxPartySize, 'Should have the right party size');
  });
});

test('Game model', function(assert) {
  assert.plan(2);

  db.conn.sync({force: true})
  .then(gameModel.Games.post.bind(null, testData))
  .then(gameModel.Game.get.bind(null, {id: 1}))
  .then(function(data) {
    assert.equal(data.dataValues.name, testData.name,
    'should return the right name on #get');

    return R.merge(testData, {id: 1, name: 'Toukiden Kiwami'});
  }).then(gameModel.Game.put)
  .then(gameModel.Game.get.bind(null, {id: 1}))
  .then(function(data) {
    assert.equal(data.dataValues.name, 'Toukiden Kiwami',
    'should return the updated name on #get');
  });
});
