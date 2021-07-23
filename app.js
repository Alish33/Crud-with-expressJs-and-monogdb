// calling the external packages
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


// Initializing the express framework in app
const app = express();

// connecting to mongoosedb
mongoose.connect("mongodb://localhost/register", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(e => {
    console.log("DB connected")
})

// Initializing body parser
app.use(bodyParser.urlencoded({ extended: false }));

// setting the ejs enginee for viewing all the frontend views
app.set('view enginee', 'ejs');

// setting and pointing the view folder for all the frontend
app.set('views', 'view');

// setting location for the static folder or all the frontend views
app.use(express.static(path.join(__dirname, "public")));

// calling routes
const indexRoute = require('./routes/index');

// Initializing the routes
app.use(indexRoute)

// express localhost listen
app.listen(process.nextTick.PORT || 3000, (err) => {
    if (!err) {
        console.log("Server is runing in localhost 3000")
    } else {
        console.log("Server is not runing")
    }
})




