
const server = new hapi.Server();
const BasicAuth = require('hapi-auth-basic')

const base_url = 'https://api.github.com'

async function liftOff() {
    await server.register({
        plugin: require('hapi-auth-basic')
    }


    server.auth.strategy('simple', 'basic', {
        validate: async (request, username, password) => {
                // TODO
            }
        })
}

liftOff()



server.route([
    {
        /* LOGIN ROUTER */
        method: ['GET', 'POST'],
        path: '/login',
        options: {
            auth: 'github',
            handler: function (request, response, next) {

                if (!request.auth.isAuthenticated) {
                    return `Authentication failed due to: ${request.auth.error.message}`;
                }

                return '<pre>' + JSON.stringify(request.auth.credentials, null, 4) + '</pre>';
            },
            return next();
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
        method: 'GET',
        path: base_url + '/user',
        options: {
            auth: 'simple'
        },
        handler: function (request, reply) {

        }
    },
    {
        method: 'GET',
        path: base_url +'user/starred',
        handler: function (request, reply) {

        },
    }
]);


start();