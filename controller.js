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
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data merchant information berdasarkan nama
exports.allmerchantinformation = function(req, res) {
    let name = req.params.name;
    connection.query('SELECT * FROM merchant_information WHERE name = ?', (name), function(error, rows, fileds) {
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
    connection.query('SELECT * FROM merchant_information WHERE id = ?', (id), function(error, rows, fileds) {
        if(error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};