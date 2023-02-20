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


// //=== 1 - MongoDB Database setup
// mongoose
//     .connect(uri)
//     .then(x => {
//         console.log(
//             `Connected to Mongo! Database name: "${x.connections[0].name}"`
//         );
//     })
//     .catch(err => {
//         console.error("Error connecting to mongo", err);
//     });


app.use(cors());

// for parsing application/json
app.use(express.json());

// for parsing application/xwww-
app.use(express.urlencoded({ extended: false }));
//form-urlencoded

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//=== 2 - SET UP DATABASE
//Configure mongoose's promise to global promise
mongoose.set('strictQuery',false)
mongoose.promise = global.Promise;
mongoose.connect(connUri);

const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB --  database connection established successfully!'));
connection.on('error', (err) => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit();
});



app.listen(PORT, () => console.log('Server running on http://localhost:' + PORT + '/  FASTER Than BUGGATI'));
