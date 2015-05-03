"use strict";

requirejs.config({
    baseUrl: "app",
    deps: [
        'main',
        "router",
        'lessons/lesson1/lesson1',
        'lessons/lesson2/lesson2',
        'lessons/lesson3/lesson3',
        'bootstrap',
        'jquery.createplugin',
        'jquery.elmenu',
        'jquery.elgrandemenu'
    ],
    paths: {
        "app": ".",
        "jquery":     "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min",
        "backbone":   "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min",
        "underscore": "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
        "bootstrap":  "//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min",
        //"jquery":     "../bower_components/jquery/dist/jquery.min",
        //"backbone":   "../bower_components/backbone/backbone",
        //"underscore": "../bower_components/underscore/underscore-min",
        //"bootstrap":  "../bower_components/bootstrap/dist/js/bootstrap.min",
        "jquery.createplugin":   "lessons/lesson3/create-jq-plugin",
        "jquery.turtlesearcher": "lessons/lesson2/jquery.turtle-searcher",
        "jquery.elmenu":         "lessons/lesson3/jquery.elmenu",
        "jquery.elgrandemenu":         "lessons/lesson3/jquery.elgrandemenu"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        },
        // for lesson #2
        "jquery.turtlesearcher": {
            deps: ["jquery"]
        },
        // for lesson #3+
        "jquery.createplugin": {
            deps: ["jquery"],
            exports: "createJQPlugin"
        },
        "jquery.elmenu": {
            deps: ["jquery", "jquery.createplugin"]
        },
        "jquery.elgrandemenu": {
            deps: ["jquery", "jquery.createplugin", "jquery.elmenu"]
        }
    }
});