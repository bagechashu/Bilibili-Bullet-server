let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bulletSchema = new Schema({
    videoId: String,    // 视频编号
    videoTime: String,  // 弹幕处于视频中的时间
    sendTime: {         // 弹幕的发送时间
        ss: String,
        mm: String,
        hh: String,
        D: String,
        M: String,
        Y: String
    },
    content: String,    // 弹幕内容
    userId: String,     // 发送弹幕的用户ID
    color: String,      // 弹幕颜色
    fontSize: String,   // 弹幕字体大小
});

// 导出User模块
module.exports = mongoose.model('Bullet', bulletSchema);