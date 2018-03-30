'use strict';

let bulletModel = require('../../models/bullet');

let actions = {
    getBullet(socket, videoId) {
        bulletModel.find({videoId: videoId}, function (err, results) {
            let response;
            if (err) {
                console.log('error', err);
                response = [{
                    status: 0,
                    message: '获取弹幕信息失败'
                }];
            } else {
                response = results;
            }
            socket.emit('getBullet', response);
        });
    },
    saveBullet(data) {
        bulletModel.create(data, function(err) {
            if (err) {
                console.log('error', err);
            } else {
                console.log('保存弹幕成功');
            }
        });
    }
};

module.exports = actions;