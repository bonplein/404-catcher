"use strict";

var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: '0.0.0.0', 
    port: process.env.PORT 
});

// Add the route
server.route([]);

// Start the server
server.start(function () {
  console.log('Server started at [' + server.info.uri + ']');
});