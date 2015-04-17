requirejs.config({
    "baseUrl": "app",
    "paths": {
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

requirejs(["app/main", "app/router", "lessons/menu"], function (main, router, Menu) {

    $(document)
        .on('click', '.js-initialize', function () {
            var options = {
                name: $('.js-form-menu-name').val(),
                elements: [
                    {elName: 'El Taco', elLink: 'http://goo.gl/LcBkbd'},
                    {elName: 'El Burrito', elLink: 'http://goo.gl/bYMnrY'},
                    {elName: 'El Sambrero', elLink: 'http://goo.gl/SpuFzx'}
                ]
            };

            var menu = new Menu(options);

            menu.render()
        })

});
