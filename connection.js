let mysql = require('mysql');

//Membuat koneksi database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Jaya@3388',
    database: 'merchant_service'
});

// db.connect((err) => {
//     if(err) throw err;
//     console.log('Mysql has connected');
// });

module.exports = db; 