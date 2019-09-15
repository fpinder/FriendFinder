var friends = require('../data/friends.js');

// ROUTES

module.exports = function (app) {
    // This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    /* POST route handles data when user submit form
    then pushes to appropriate js array*/

    app.post('/api/friends', function (req, res) {
        /* server responds to survey results and compares results
        to all other users' results. It calculates the difference, 
        then chooses the user with the least differences as the "best"
        friend. In case of tie, it chooses first result. Once friend is
        chosen results are pushed to database for future comparison.
        */

        /*0bject to hold the best match. Updates constantly as we
        loop through options*/
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        //parsing user survey POST results
        var newFriendData = req.body;
        var newFriendScore = newFriendData.score;
        console.log("newFriendScore is " + newFriendData.name);
        //variable to calculate difference among users
        var totalDifference;

        //loop through possibilities
        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;

            console.log(currentFriend.name);

            //separate loop for looping through potential friends
            for (var j = 0; j < currentFriend.score.length; j++) {
                var currentFriendScore = currentFriend.score[j];
                var currentUserScore = newFriendScore[j];

                /*calculate the dif between scores and sum them to 
                create total difference*/
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            //if sum of difference < difference of current match
            if (totalDifference <= bestMatch.friendDifference) {
                //reset best match to new friend
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
        /*save user data to db after check. Otherwise db
        will return user and user's best match
        */
        friends.push(newFriendData);

        /* return JSON with user best match -- result will
        be used by HTML on next page*/
        res.json(bestMatch);

    });
};