module.exports = function () {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var clientStyle = client + 'styles/';
    var root = './';
    var server = './src/server/';
    var specRunnerFile = 'specs.html';
    var temp = './.tmp/';

    var config = {
        /**
         * Files paths
         */
        build: './build/',
        client: client,
        theme: clientStyle + 'bootstrap-flatly.css',
        html: clientApp + '**/*.html',
        index: client + 'index.html',
        root: root,
        server: server,

        /**
         * browser sync
         */
        browserReloadDelay: 1000,

        

        /**
         * Node settings
         */
        defaultPort: 7203,
        nodeServer: './src/server/app.js'

    };

    return config;
};
