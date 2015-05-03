(($, window) ->

    class Elmenu

        defaults:
            ns: 'elmenu'
            classes:
                wrapper:  'wrapper'
                list:     'list dropdown-menu'
                listItem: 'li'
                link:     'link'
                open:     'open'
                closed:   'closed'
                bottom:   'bottom'
            items: [
                name: 'El Pusto!'
                link: 'http://goo.gl/OmdSQD'
            ]

        constructor: ($el, options) ->
            @$el = $el
            @options = $.extend true, @defaults, options
            @render()
            @bindEvents()


        render: () ->
            self = @
            o = @options
            $wrapper = $('<div/>').addClass @ns o.classes.wrapper

            @$wrapper = @$el.wrap($wrapper).parent()
            @$list    = $('<ul/>').addClass @ns o.classes.list

            for item, i in o.items
                self.$list.append (
                    $('<li/>')
                        .addClass @ns o.classes.listItem
                        .append (
                            $('<a/>')
                                .addClass @ns o.classes.link
                                .attr
                                    target: '_blank'
                                    href: item.link
                                .text item.name
                        )
                )

            @$el.after @$list

        ns: (str) ->
            [@options.ns, str].join '-'

        showMenuItems: () ->
            @$wrapper.addClass 'open'


        hideMenuItems: () ->
            @$wrapper.removeClass 'open'


        bindEvents: () ->
            self = @

            self.$el.on 'click', () ->
                if self.$wrapper.hasClass 'open'
                    self.hideMenuItems()
                else
                    self.showMenuItems()

    createJQPlugin Elmenu, "elmenu"








    class ElGrandMenu extends Elmenu

        constructor: ($el, options) ->
            options = $.extend true, @defaults,
                ns: 'elgrandmenu'
                items: [
                    name: 'El Sovsem Pusto!'
                    link: 'http://goo.gl/AYQcS4'
                ]
                options
            super $el, options
#            if options.items?
#                @rerender options.items

        showMenuItems: () ->
            super
            @$el.trigger 'myMenuOpened'


        hideMenuItems: () ->
            super
            @$el.trigger 'myMenuClosed'


        myMenuOpened: () ->
            console.log '+ menu opened :)'


        myMenuClosed: () ->
            console.log '- menu closed :('


        rerender: (items) ->
#            if items?
#                @options.items = $.extend true, @options.items, items
            @render()


        bindEvents: () ->
            super
            @$el.on 'myMenuOpened', @myMenuOpened
            @$el.on 'myMenuClosed', @myMenuClosed


    createJQPlugin ElGrandMenu, "elgrandmenu"

)( jQuery, window )