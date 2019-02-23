'use strict';

const Hapi = require('hapi');
const Bell = require('bell');


const internals = {};


internals.start = async function () {

    const server = Hapi.server({ port: 8000 });
    await server.register(Bell);

    server.auth.strategy('github', 'bell', {
        provider: 'github',
        password: 'p@p3cl!cks',
        cookie: 'Github-PaperClicks',
        clientId: 'f1ffe5595655d23ceb8b',
        clientSecret: '2ccb60daa0748a403ec40a4b9d006ea45ce80377',
        location: 'http://127.0.0.1:8000/',
        scope: ['user:email']
    });

    server.route({
        method: ['GET', 'POST'],
        path: '/login',
        options: {
            auth: 'github',
            handler: function (request, h,next) {

                if (!request.auth.isAuthenticated) {
                    return `Authentication failed due to: ${request.auth.error.message}`;
                }

                return '<pre>' + JSON.stringify(request.auth.credentials, null, 4) + '</pre>';
            }
        }
    });

    await server.start();
    console.log('Server started at:', server.info.uri);
};

internals.start();