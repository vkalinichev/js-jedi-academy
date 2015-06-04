define ["jquery", "jquery.elmenu"], ($) ->

    $('.js-elmenu').elmenu(
        items: [
                name: 'El Taco',
                link: 'https://goo.gl/LcBkbd'
            ,
                name: 'El Burrito',
                link: 'https://goo.gl/bYMnrY'
            ,
                name: 'El Sambrero',
                link: 'https://goo.gl/SpuFzx'
            ]
    )

    $('.js-elgrandmenu').elgrandmenu(
        items: [
                name: 'El Grand Taco',
                link: 'https://goo.gl/wp0c4F'
            ,
                name: 'El Grand Burrito',
                link: 'https://goo.gl/fME8Kg'
            ,
                name: 'El Grand Sambrero',
                link: 'https://goo.gl/hXmiJn'
            ]
    )

    $('.js-elgrandnone').elmenu()

    return false