var friends = require('../data/friends.js');

module.exports = function (app) {
    // This will be used to display a JSON of all possible friends.
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    //This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic
    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDiffer: 0
        };

        //parse the user result to convert the user score to a number not a string

        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var userResults = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: userResults
        };

        console.log("Name: " + userName);
        console.log("User Score " + userScores);

        var sum = userResults.reduce((a, b) => a + b, 0);
        console.log("Sum of users score " + sum);
        console.log("Best match friend difference " + bestMatch.friendDiffer);

        //variable to calculate difference among users
        var totalDifference;

        //All the friends  in the data base
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
            console.log("Total Diff " + totalDifference);
            console.log("Best match friend difference " + bestMatch.friendDiffer);

            var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log("-------------------------> " + totalDifference);

            //Sum the diferences and detertmine the best match for the best friend
            if (totalDifference <= bestMatch.friendDiffer) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDiffer = totalDifference;
            }
            console.log(totalDifference + " Total Difference");
        }
        console.log(bestMatch);

        //save the data user to the database and return the JSON with the use best match 
        friends.push(userData);
        console.log("New user added");
        console.log(userData);
        res.json(bestMatch);
    });
};