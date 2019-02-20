var passportGitHub = require('../auth/github');
const server = new hapi.Server();

server.route([
    {
        method: 'GET',
        path: '/',
        handler: function (req, res, next) {
            if (req.username) {
                res.render('user', { title: 'Profile', username: req.username });
            }
            else
            {
                res.redirect('/login');
            }
        }
    },
    {
        /* LOGIN ROUTER */
        method: 'GET',
        path: '/login',
        handler: function (req, res, next) {
            res.render('login', {
                title: 'Please Sign In with:', username:req.username
            });
            }   
             
    },
    {
        /* LOGOUT ROUTER */
        method: 'GET',
        path: '/logout',
        handler: function (req, res) {
            req.logout();
            res.redirect('/login');
        }
    },
    {
        /* GITHUB ROUTER */
        method: 'GET',
        path: '/github',
        handler: function (request, reply) {
            passportGitHub.authenticate('github', {
                scope: ['user:email']
            });
        }
    },
    {
        /* GITHUB ROUTER CALLBACK */
        method: 'GET',
        path: '/github/callback',
        handler: function (request, reply) {
            passportGitHub.authenticate('github', { failureRedirect: '/login' }),
                function (req, res) {
                    // Successful authentication, redirect home.
                    res.redirect('/github/users/{username}/profile');
                };
        }
    }
]);


module.exports = router;