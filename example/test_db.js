var mysql = require('mysql'),
    config = require('./config');

config.db.query('show tables', function (err, tables) {
    if (err) {
        console.error(err.stack);
    } else {
        console.log(tables);
    }

    // 关闭连接
    config.db.end();
})