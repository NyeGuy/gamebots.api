var mongoose = require('mongoose');

//Player Schema
var playerSchema = mongoose.Schema({
    playername: {
        type: String,
        require: true
    },
    lives:{
        type: String,
        required: true
    },
    score:{
        type: Number
        required: true
    },
    mode:{
        type: String,
        required: true
    },
    image_url:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Player = module.exports = mongoose.model('Player', playerSchema);

//get Player
module.exports.getPlayer = function(callback, limit){
    Player.find(callback).limit(limit);
}

////get Player
module.exports.getPlayerById = function(id, callback){
    Player.findById(id, callback);
}

//add Player
module.exports.addPlayer = function(player, callback){
    Player.create(player, callback);
}

//Update player - need to put all the values in or you get nulls
module.exports.updatePlayer = function(id, player, options, callback){
    var query = {_id: id};
    var update = {
        playername: player.playername,
        lives: player.lives,
        score: player.score,
        mode: player.mode,
        image_url: player.image_url
    }
    Player.findOneAndUpdate(query, update, options, callback);
}

//delete player
module.exports.removePlayer = function(id, callback){
     var query = {_id: id};
    Player.remove(query, callback);
}
