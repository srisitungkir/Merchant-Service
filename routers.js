'use strict';

module.exports = function(app) {
    let myjson = require('./controller');
    
    app.route('/')
        .get(myjson.index);

    app.route('/account')
        .get(myjson.allmerchantinformation)


};
