//Routes API
var friendsData = require('../data/friends.js');

module.exports = function(app){
app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    friendsData.push(userInput);
    var userInput = req.body;
    var userResponse = userInput.scores;
    var matchName = "";
    var matchImage = "";
    var totaldifference = 100;

    for(var i = 0; i < friends.length; i++){
var diff = 0;
for(var j= 0; j<userResponse.length; j++){
  diff += Math.abs(friends[i].scores[j] - userResponse[j]);
}
if(diff < totaldifference){
  totaldifference = diff;
  matchName = friends[i].name;
  matchImage = friends[i].Photo;
}
    }
    friendsData.push(userInput);
    res.json({
      status: "OK",
      matchName: "matchName",
      matchImage: "matchImage"
    })
    });
  }