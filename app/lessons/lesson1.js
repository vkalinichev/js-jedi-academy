define( ["jquery", "lessons/menu"], function($, Menu) {

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
        });

});