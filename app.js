var Twitter = require('twitter');
var app = require('express')();
var http = require('http').Server(app);

var client = new Twitter({
  consumer_key: 'XWZ6CrPePZ7HK3NcSr9690eqb',
  consumer_secret: 'n35FxE8SlO3evPvoaG8gTn0Dm18s4RhIhfsqlyyreximA8Igz5',
  access_token_key: '224218487-C5Tu5OZaFBDsXTvYSTGWZtFyOjsGOeZ0lBYloJwq',
  access_token_secret: 'CWWTq003cbg9UHEiBPu0GjJMC2SdKOdgcE7KbAQDsTsk8'
});
 
var params = {screen_name: 'nodejs'};

app.get('/', function(req, res) {
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      //console.log(tweets);
      res.send(tweets);
    }
  });
});

app.get('/hashtag/:tag', function(req, res) {
  var tags = {q: req.params.tag};
  client.get('search/tweets', tags, function(error, tweets, response) {
    if (!error) {
      //console.log(tweets);
      res.send(tweets);
    }
  });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
  console.log("Go!");
});
