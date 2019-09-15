//Include the path package to get the correct file path
var path = require('path');

module.exports = function (app) {

    //route to display the survey page - survery.html)
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // A default, catch-all route that leads to `home.html` which displays the home page.
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    //A default, catch-all route also.
    // app.use(function (req, res) {
    //     res.sendFile(path.join(__dirname + '/../public/home.html'));
    // });

};