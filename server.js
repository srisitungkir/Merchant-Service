const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Aplikasi JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//memanggil router
let routers = require('./routers');
routers(app);


 app.listen(3000, () => {
     console.log('Server started on port 3000');
 });