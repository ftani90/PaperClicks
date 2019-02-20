
var server = new hapi.Server();


server.route([
{
    method: 'GET',
        path: '/github/users/{username}/profile',
            handler: function (request, reply) {

            }
    },
    {
        method: 'GET',
        path: '/github/users/{username}/repos',
        handler: function (request, reply) {
            var result = User.find();
            result.exec(function (err, result) {
                reply(result);
            });
        }
    },
    {
        method: 'GET',
        path: '/github/users/{username}/starred',
        handler: function (request, reply) {

        }
    }
 ]);