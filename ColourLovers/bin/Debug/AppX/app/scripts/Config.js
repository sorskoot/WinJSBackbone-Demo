(function (window) {
    var settings = {
        require: {
            baseUrl: 'app/scripts',
            shim: {
                underscore: {
                    exports: '_'
                },
                backbone: {
                    deps: [
                        'underscore',
                        'jquery'
                    ],
                    exports: 'Backbone'
                }
            },
            paths: {
                jquery: '../bower_components/jquery/dist/jquery',
                backbone: '../bower_components/backbone/backbone',
                underscore: '../bower_components/underscore/underscore',
                mustache: '../bower_components/mustache/mustache'
            }
        }
    };

    window.appConfig = function (config) {
        return settings[config];
    };

})(window);