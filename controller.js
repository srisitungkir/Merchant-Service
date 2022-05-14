'use strict';

let response = require('./res');
let connection = require('./connection');

exports.index = function(req, res) {
    response.ok("Rest API working...", res)    
};

//menampilkan data merchant information
exports.allmerchantinformation = function(req, res) {
    connection.query('SELECT * FROM merchant_information', function(error, rows, fileds) {
        if(error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

