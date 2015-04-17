requirejs.config({
    baseUrl: "app",
    deps: [
        'main',
        "app/router"
    ],
    paths: {
        "app": ".",
        "jquery":     "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min",
        "backbone":   "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min",
        "underscore": "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
        "bootstrap":  "//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
});