const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'remotemysql.com',
    user:'a6fxlvxqr4',
    password:'TxOqLsGiTO',
    database:'a6fxlvxqr4',
    multipleStatements:true
});

mysqlConnection.connect(function(err){
    if(err){
    console.log(err);
    return;
    }
    else{
        console.log('La base de datos esta conectada');
    }
});

module.exports = mysqlConnection;