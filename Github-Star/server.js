'use strict';
var hapi = require('hapi');
var server = new hapi.Server();

server.connection({ port: 8080 });
server.start(function (err) {
    console.log('Hapi is lsitening to port 8080');
});
