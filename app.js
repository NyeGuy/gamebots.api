var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');

app.use(bodyParser.json());
app.set('view engine', 'ejs');

//this is the route to the database schema
Player = require('./models/players.js');

//connect to mongoose
mongoose.connect(' mongodb://gamebotsai:IamNyeGuy09@ds031617.mlab.com:31617/gamebots');
var db = mongoose.connection;

/// route for the landing page
app.get('/', function(req, res){
    res.send('Gamebots Running!');
});

//database management - Below
app.get('/api/players', function(req, res){
    Player.getPlayers(function(err, books){
        if(err){
            throw err;
        }
        res.json(players);
    });
});

app.post('/api/players', function(req, res){
    var player = req.body;
    Player.addPlayer(player, function(err, genre){
        if(err){
            throw err;
        }
        res.json(player);
    });
});

app.get('/api/players/:_id', function(req, res){
    Player.getPlayerById(req.params._id, function(err, player){
        if(err){
            throw err;
        }
        res.json(player);
    });
});

app.put('/api/players/:_id', function(req, res){
    var id = req.params._id;
    var player = req.body;
    Player.updatePlayer(id, player, {}, function(err, player){
        if(err){
            throw err;
        }
        res.json(player);
    });
});

app.delete('/api/players/:_id', function(req, res){
    var id = req.params._id;
    Player.removePlayer(id, function(err, book){
        if(err){
            throw err;
        }
        res.json(player);
    });
});



app.set('port', (process.env.PORT || 5000))

