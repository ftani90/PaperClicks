const config = require('db.json');
const mongoose = require('mongoose');
mongoose.connect('mongodb://' + db_user + ':MuULEHHQnZ52Z6EE@' + shards_members[0] + ':' + port + shards_members[1] + ':' + port + shards_members[2] + ':' + port + '/' + db_name+'?ssl=true&'+ replicaSet +'&authSource=admin&'+ retryWrites);

//var db = mongoose.connection;

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
    hireable: Boolean,
    updated_at: { type: Date, default: Date.now }
});


//UserSchema.statics.findOrCreate = require("find-or-create");

var User = mongoose.model('User', UserSchema);

//module.exports = mongoose.model('User', UserSchema);