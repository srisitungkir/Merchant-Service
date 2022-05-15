'use strict';

let response = require('./res');
let connection = require('./connection');

exports.index = function(req, res) {
    response.ok("Rest API working...", res)    
};

//menampilkan data merchant information
exports.allmerchantinformation = function(req, res) {
    connection.query(`SELECT * FROM merchant_information`, function(error, rows, fields) {
        if(error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data merchant information berdasarkan nama
exports.allmerchantinformation = function(req, res) {
    let name = req.params.name;
    connection.query(`SELECT * FROM merchant_information WHERE name = ?`, (name), function(error, rows, fields) {
        if(error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

//menampilkan data merchant information berdasarkan id
exports.allmerchantinformation = function(req, res) {
    let id = req.params.id;
    connection.query(`SELECT * FROM merchant_information WHERE id = ?`, (id), function(error, rows, fields) {
        if(error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

//menambahkan data merchant information
exports.addAccount = function(req, res) {
    let id = req.body.id;
    let password = req.body.password;
    let name = req.body.name;
    let address = req.body.address;
    let join_date = req.body.join_date;
    let phone_number = req.body.phone_number;

    connection.query(`INSERT INTO merchant_information (id, password, name, address, join_date, phone_number) VALUES (?, ?, ?, ?, ?, ?)`, (id, password, name, address, join_date, phone_number),
    function(error, rows, fields) {
        if(error) {
            console.log(errpr);
        } else {
            response.ok("Seuccess add account", res)
        }
    });

    //menghapus data merchant information berdasarkan id
    exports.deleteAccount = function(req, res) {
        let id = req.body.id;
        connection.query(`DELETE FROM merchant_service WHERE id = ?`, (id), function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data have deleted", res)
            }
        });
    };


};