'use strict';

module.exports = function(app) {
    let myjson = require('./controller');
    
    app.route('/')
        .get(myjson.index);

    app.route('/account')
        .get(myjson.allmerchantinformation)

    app.route('/account/:name')
        .get(myjson.allmerchantinformation);

    app.route('/account/:id')
        .get(myjson.allmerchantinformation);

    app.route('/addaccount')
        .post(myjson.addAccount);

    app.route('/deleteaccount/:id')
        .delete(myjson.deleteAccount);

    app.route('/addproduct')
        .post(myjson.addProduct);


};
