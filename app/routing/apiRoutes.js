var friends = require("../data/friends");
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/new", function(req, res) {
    findFriend(req.body, function(match) {
      friends.push(req.body);
      res.json(match);
    });
  });
};
function findFriend(currentFriend, callback) {
  var currentFriendScores = currentFriend.scores.map(function(x) {
    return parseInt(x, 10);
  });
  var previousTotalDifference = 1000;
  var match;
  for (var i = 0; i < friends.length; i++) {
    var totalDifference = 0;
    for (var j = 0; j < friends[i].scores.length; j++) {
      totalDifference += Math.abs(friends[i].scores[j] - currentFriendScores[j]);
    }
    console.log(totalDifference);
    if (totalDifference < previousTotalDifference) {
      previousTotalDifference = totalDifference;
      match = friends[i];
    }
  }
  console.log("The match is " + match.name);
  callback(match);
  return match;
}
