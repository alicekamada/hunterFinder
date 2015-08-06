var test = require('tape');
var db = require('../../server/db/db.js');

test('Database connection', function(assert) {
  assert.plan(1);

  assert.equal(Boolean(db.conn), true,
    "it should exist"
  );

  assert.end();
});

test('User model', function(assert) {
  assert.plan(1);


  assert.equal(Boolean(db.User), true,
    "it should exist"
  );

  assert.end();
});

test('Game model', function(assert) {
  assert.plan(1);

  assert.equal(Boolean(db.Game), true,
    "it should exist"
  );

  assert.end();
});

test('Party model', function(assert) {
  assert.plan(1);

  assert.equal(Boolean(db.Party), true,
    "it should exist"
  );

  assert.end();
});
