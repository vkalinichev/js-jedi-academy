define( ["jquery", "jquery.elmenu"], function($) {

    $('.js-elmenu').elmenu({
        items: [
            {
                name: 'El Taco',
                link: 'http://goo.gl/LcBkbd'
            },
            {
                name: 'El Burrito',
                link: 'http://goo.gl/bYMnrY'
            },
            {
                name: 'El Sambrero',
                link: 'http://goo.gl/SpuFzx'
            }
        ]
    });
});