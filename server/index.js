/* 
 * Start file for server
 */

/*
 * Includes
 */

var express = require('express');
var app = express();

/*
 * Middlewares
 */

app.use(express.static('client'));

/*
 * Routes
 */



/*
 * Initialization
 */

app.listen(8080, function() {
  console.log('Listening on port 8080...');
});
