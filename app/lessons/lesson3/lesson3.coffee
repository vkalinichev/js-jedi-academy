define ["jquery", "jquery.elmenu"], ($) ->

    $('.js-elmenu').elmenu(
        items: [
                name: 'El Taco',
                link: 'http://goo.gl/LcBkbd'
            ,
                name: 'El Burrito',
                link: 'http://goo.gl/bYMnrY'
            ,
                name: 'El Sambrero',
                link: 'http://goo.gl/SpuFzx'
            ]
    )

    $('.js-elgrandmenu').elgrandmenu(
        items: [
                name: 'El Grand Taco',
                link: 'http://goo.gl/AYQcS4'
            ,
                name: 'El Grand Burrito',
                link: 'http://goo.gl/wp0c4F'
            ,
                name: 'El Grand Sambrero',
                link: 'http://goo.gl/hXmiJn'
            ]
    )
