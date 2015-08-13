var Game = require('../db/db.js').Game;
//var bluebird = require('bluebird');

exports.Games = {
  get: function() {
    return Game.findAll();
  },
  post: function(data) {
    return Game.create(data);
  }
};

exports.Game = {
  get: function(data) {
    return Game.findById(data.id);
  },
  put: function(data) {
    return Game.upsert(data);
  }
};
