/*
 * Includes
 */
var Sequelize = require('sequelize');
var passportLocalSequelize = require('passport-local-sequelize');

var db = new Sequelize('hunterFinder', 'root', null, {
  dialect: 'sqlite',
  storage: '.db/data.sqlite'
});

var User = passportLocalSequelize.defineUser(db, {
});

var Game = db.define('Game', {
  name: Sequelize.STRING,
  platform: Sequelize.ENUM('PS Vita', 'Nintendo 3DS'),
  maxPartySize: Sequelize.INTEGER
});

var Party = db.define('Party', {
  startTime: Sequelize.DATE,
  endTime: Sequelize.DATE
});

Party.belongsTo(User);
Party.belongsTo(Game);
User.belongsToMany(Party, {
  as: 'Parties',
  through: 'partyMembers',
  foreignKey: 'partyId'
});
Party.belongsToMany(User, {
  as: 'Members',
  through: 'partyMembers',
  foreignKey: 'userId'
});

db.sync();

module.exports = {
  conn: db,
  User: User,
  Game: Game,
  Party: Party
};
