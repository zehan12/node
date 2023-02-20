require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require("passport");
const path = require("path");

// Setting up port
const connUri = process.env.MONGO_LOCAL_CONN_URL;
let PORT = process.env.PORT || 3000;

//=== 1 - CREATE APP
// Creating express app and configuring middleware needed for authentication
const app = express();

app.use(cors());

// for parsing application/json
app.use(express.json());

// for parsing application/xwww-
app.use(express.urlencoded({ extended: false }));
//form-urlencoded

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.listen(PORT, () => console.log('Server running on http://localhost:'+PORT+'/  FASTER Than BUGGATI'));
