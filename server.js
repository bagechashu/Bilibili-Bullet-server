'use strict';

let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);

let mongoose = require('mongoose');
let config = require('./config/config');

mongoose.connect(config.database);  // 连接数据库

let socketActions = require('./src/controllers/socket/socket');

server.listen(6677);

io.on('connection', function (socket) {
    socket.on('setConnect', function (user) {
        console.log(`user ${user} build connection`);
    });
    socket.on('bulletRequest', function(data) {
        socketActions.getBullet(socket, data.videoId);
    });
    socket.on('saveBullet', socketActions.saveBullet);
});

console.log('Magic happens at http://localhost:' + 6677);