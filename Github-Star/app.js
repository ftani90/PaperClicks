//var passport = require('passport');
//var Hapi = require('hapi');
var mongoose = require('mongoose');
mongoose.connect('mongodb://ro-user:MuULEHHQnZ52Z6EE@github-shard-00-00-nrzia.mongodb.net:27017,github-shard-00-01-nrzia.mongodb.net:27017,github-shard-00-02-nrzia.mongodb.net:27017/test?ssl=true&replicaSet=Github-shard-0&authSource=admin&retryWrites=true');

var db = mongoose.connection;

//Hapi.use(session({
//    secret: 's3cr3t',
//    resave: true,
//    saveUninitialized: true
//}));

//passport.serializeUser(function (user, done) {
//    done(null, user._id);
//});

//passport.deserializeUser(function(userId, done){
//    User.findById(userId, done);
//});


//Hapi.use(passport.initialize());
//Hapi.use(passport.session());

//app.use('/', users);
//app.use('/auth', auth);