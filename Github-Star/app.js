var passport = require('passport');
var Hapi = require('hapi');
var mongoose = require('mongoose');

app.use(session({
    secret: 's3cr3t',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());