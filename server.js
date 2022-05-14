const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

 app.listen(3000, () => {
     console.log('Server started on port 3000');
 });