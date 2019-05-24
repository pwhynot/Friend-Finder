const friendsList = require("../data/friends");
const path = require("path");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.status(50).json({message: "connected."})
        res.json(friendsList);
    });

    app.post("/api/friends", function(req, res){
        const matches = {
            "name": "none",
            "photo": "none"
        };

        function sum (array) {
            const total = 0;
            for (let n = 0; n < array.length; n++) {
                total += parseInt(array[n]);
            }
            return total;
        }

        const userTotal = sum(req.body.scores);

        const friendTotal = 0;

        for (let i = 0; i < friendsList.length; i++) {
            friendTotal = sum(friendsList[i].scores);

            if (friendTotal === userTotal) {
                matches.name = friendsList[i].name;
                matches.photo = friendsList[i].photo;
            }
        };

        if (matches.name === "none") {
            const closest = 20;

            for (let i = 0; i < friendsList.length; i++) {
                friendTotal = sum(friendsList[i].scores);
                const difference = Math.abs(friendTotal - userTotal);
                if ( difference <= closest ){
                    closest = difference;
                    matches.name = friendsList[i].name;
                    matches.photo = friendsList[i].photo;
                };
            };
        };

        res.json(matches);

    });

};