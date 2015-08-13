var test = require('tape');
var db = require('../../../server/db/db.js');
var testModel = require('tape-sequelize').testModel;

test('Database connection', function(assert) {
  assert.plan(1);

  assert.ok(db.conn,
    "it should exist"
  );

  assert.end();
});

test('User model', testModel(db.User, [
  ['id', 'INTEGER'],
  ['username', 'VARCHAR(255)'],
  ['hash', 'VARCHAR(255)'],
  ['salt', 'VARCHAR(255)'],
  ['activationKey', 'VARCHAR(255)'],
  ['resetPasswordKey', 'VARCHAR(255)'],
  ['createdAt', 'DATETIME'],
  ['updatedAt', 'DATETIME']
], null));

test('Game model', testModel(db.Game, [
  ['id', 'INTEGER'],
  ['name', 'VARCHAR(255)'],
  ['platform', 'TEXT'],
  ['maxPartySize', 'INTEGER'],
  ['createdAt', 'DATETIME'],
  ['updatedAt', 'DATETIME']
], null));

test('Party model', testModel(db.Party, [
  ['id', 'INTEGER'],
  ['startTime', 'DATETIME'],
  ['endTime', 'DATETIME'],
  ['createdAt', 'DATETIME'],
  ['updatedAt', 'DATETIME'],
  ['UserId', 'INTEGER'],
  ['GameId', 'INTEGER']
], null));
