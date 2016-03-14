var express = require("express");
var Twitter = require('twitter-node-client').Twitter;

var app = express();

var config = {
    "consumerKey": "i4YqYc1hnX9FBefFeQJ96Bjm5",
    "consumerSecret": "hBh0rKUgQOVOHgymiBoZ7xsANq8YljORoaCyzmRiRbVwkyzIWR",
    "accessToken": "343820055-xE0DnDGUPL5n6hkrwOmZxwMjssop1hXLdsh5k1V7",
    "accessTokenSecret": "iFtlVFcTtJyjMbtY2yTz8jSMGx7QraYHT3TKN9HV3SiBg"
}

var twitter = new Twitter(config);


app.use(express.static('public'));


app.get('/twitter', function(req, res) {
  twitter.getUserTimeline({ screen_name: req.query.user, count: '10'}, error, function(data){
     res.send(JSON.parse(data)); 
  });
});


function error(e){
    console.log(e);
}

app.listen(process.env.PORT, process.env.IP);
