requirejs.config({
    "baseUrl": "app",
    "paths": {
        "app": ".",
        "jquery":    "../bower_components/jquery/dist/jquery",
        "backbone":  "../bower_components/backbone/backbone",
        "underscore":  "../bower_components/underscore/underscore",
        "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
});

requirejs(["app/main", "app/router"], function () {

});
