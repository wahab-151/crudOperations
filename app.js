require("dotenv").config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { checkDatabaseConnection } = require("./config/connection");

const {movieRouter}=require('./routes/movies');



app.use('/api',movieRouter);




app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
