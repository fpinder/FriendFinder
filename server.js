var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 9000

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

//makes static assets in the public folder available
app.use(express.static('app/public'));

// Routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//alternative code
// app.listen(PORT, () => console.log("Listing on port %s", PORT));

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});