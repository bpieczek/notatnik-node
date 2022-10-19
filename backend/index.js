const express = require("express");
const app = express();
const {port} = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

// db
require('./DB/mongoose');

// parsers aplication/json
app.use(bodyParser.json());

// CORS fix
app.use(cors());

//routes
app.use('/api/', apiRouter);

//server
app.listen(port, function(){
    console.log('Server running at http://localhost:'+port+'/api/notes');
});