define( ["jquery", "jquery.elmenu"], function($) {

    $('.js-ground-jqp').elmenu({
        elements: [
            {
                elName: 'El Taco',
                elLink: 'http://goo.gl/LcBkbd'
            },
            {
                elName: 'El Burrito',
                elLink: 'http://goo.gl/bYMnrY'
            },
            {
                elName: 'El Sambrero',
                elLink: 'http://goo.gl/SpuFzx'
            }
        ]
    });
});