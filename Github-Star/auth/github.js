var passport = require('passport')
    , GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/User');

passport.use(new GitHubStrategy({
    clientID: "f1ffe5595655d23ceb8b",
    clientSecret: "2ccb60daa0748a403ec40a4b9d006ea45ce80377",
    callbackURL: "http://127.0.0.1:8080/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {
        User.findOrCreate({ userid: profile.id }, { name: profile.displayName, userid: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));

module.exports = passport;