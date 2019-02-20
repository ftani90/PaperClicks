var passport = require('passport');
var Hapi = require('hapi');
var mongoose = require('mongoose')(session);
mongoose.connect('mongodb://ro-user:MuULEHHQnZ52Z6EE@github-shard-00-00-nrzia.mongodb.net:27017,github-shard-00-01-nrzia.mongodb.net:27017,github-shard-00-02-nrzia.mongodb.net:27017/test?ssl=true&replicaSet=Github-shard-0&authSource=admin&retryWrites=true');

var db = mongoose.connection;

var sessionOptions = {
    secret: 's3cr3t',
    resave: true,
    saveUninitialized: true,
    store: new mongoose({
        mongooseConnection: db
    })
};

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());