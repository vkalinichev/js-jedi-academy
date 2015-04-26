define( ["jquery", "jquery.turtlesearcher"], function($) {
    var $turtles_list = $('.js-turtles-list');

    $turtles_list.turtlesearcher({
        search: 'original',
        limit: 25,
        onComplete: function () {
            //console.log(arguments)
        },
        refresh: 0,
        transition: 'none',
        transitionDuration: 200
    });

    $('.js-turtlename-input').on('keyup', function () {
        var $this = $(this),
            ts_instance;

        if ($this.val().length >= 0) {
            ts_instance = $.data( $turtles_list[0], 'turtlesearcher');
            ts_instance.search = $this.val();
            ts_instance.refresh();
        }
    })

});