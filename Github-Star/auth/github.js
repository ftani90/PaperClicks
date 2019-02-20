var passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/User');

const CLIENT_ID =

passport.use(new GitHubStrategy({
        clientID: "f1ffe5595655d23ceb8b",
        clientSecret: "2ccb60daa0748a403ec40a4b9d006ea45ce80377",
    callbackURL: "http://127.0.0.1:8080/auth/github/callback"
}, function (accessToken, refreshToken, profile, done) {
    if (profile.emails[0]) {
        User.findOneAndUpdate({
            email: profile.emails[0].value
        }, {
                name: profile.displayName || profile.username,
                email: profiles.emails[0].value,
                photo: profile.photos[0].value,
                location: profile.location,
                company: profile.company,
                bio: profile.bio
            }, {
                upsert: true
            },
            done);
    }
    else {
        var noEmailError = new Error('Error');
        done(noEmailError, null);
    }
}));

//module.exports = passport;