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
