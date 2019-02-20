const mongoose = require('mongoose');

mongoose.connect('mongodb://ro-user:MuULEHHQnZ52Z6EE@github-shard-00-00-nrzia.mongodb.net:27017,github-shard-00-01-nrzia.mongodb.net:27017,github-shard-00-02-nrzia.mongodb.net:27017/test?ssl=true&replicaSet=Github-shard-0&authSource=admin&retryWrites=true');

var db = mongoose.connection;

var UserSchema = new mongoose.Schema({
    username: String,
    userid: String,
    type: String,
    name: String,
    company: String,
    blog: String,
    location: String,
    email: String,
    bio: String,
    hireable : Boolean,
    updated_at: { type: Date, default: Date.now }
});


UserSchema.statics.findOrCreate = require("find-or-create");

var User = mongoose.model('User', schema);

//module.exports = mongoose.model('User', UserSchema);