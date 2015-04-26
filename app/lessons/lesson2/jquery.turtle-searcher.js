if (typeof Object.create !== 'function') {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    }
}


(function ($, window, document, undefined) {
    var Turtle = {
        init: function ( options, elem) {
            var self = this;

            self.elem = elem;
            self.$elem = $( elem );

            self.url = 'app/lessons/lesson2/turtles.json';

            self.search = (typeof options === 'string' || typeof options === 'undefined')
                ? options
                : options.search;

            self.options = $.extend(true, {}, $.fn.turtlesearcher.options, options);

            self.refresh( 1 );
        },

        refresh: function ( length ) {
            var self = this;

            setTimeout(function() {

                self.fetch().done(function (results) {
                    results = self.limit( results.results, self.options.limit );

                    self.buildFrag( results );

                    self.display();

                    if (typeof self.options.onComplete === 'function') {
                        self.options.onComplete.apply( self.elem, arguments )
                    }

                    if (self.options.refresh) {
                        self.refresh();
                    }
                });

            }, length || self.options.refresh)
        },

        fetch: function () {
            return $.ajax({
                url: this.url,
                data: { q: this.search },
                dataType: 'json'
            })
        },

        buildFrag: function ( results ) {
            var self = this;

            self.turtles = $.map( results , function (obj, i) {
                return $(self.options.wrapEachWith).append(obj.name)[0]
            });
        },

        display: function () {
            var self = this;

            if (self.options.transition === 'none' || !self.options.transition) {
                self.$elem.html( self.turtles )
            } else {
                self.$elem[self.options.transition]( self.options.transitionDuration, function () {
                    $(this).html(self.turtles)[self.options.transition]( self.options.transitionDuration )
                });
            }

        },


        limit: function ( result, count ) {
            var self = this;

            return $.map(result, function ( obj ) {
                if (obj.name.indexOf(self.search) > -1)
                return obj
            }).slice( 0, count );
        }
    };

    $.fn.turtlesearcher = function ( options ) {
        return this.each(function () {
            var turtle = Object.create( Turtle);

            turtle.init( options, this );

            $.data( this, 'turtlesearcher', turtle)
        })
    };

    $.fn.turtlesearcher.options = {
        search: 's',
        wrapEachWith: '<li class="list-group-item"></li>',
        limit: 10,
        onComplete: null,
        refresh: null,
        transition: 'fadeToggle',
        transitionDuration: 400
    }

})(jQuery, window, document);