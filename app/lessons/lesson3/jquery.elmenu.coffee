(($, window) ->

    class Elmenu

        constructor: ($el, options) ->
            @.$el = $el
            @.options = $.extend true,
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
                    options

            @.render()
            @.bindEvents()


        render: () ->
            self = @
            o = @.options
            $wrapper = $('<div/>').addClass @.ns o.classes.wrapper

            @.$wrapper = @.$el.wrap($wrapper).parent()
            @.$list    = $('<ul/>').addClass @.ns o.classes.list
            for item, i in o.items
                self.$list.append (
                    $('<li/>')
                        .addClass @.ns o.classes.listItem
                        .append (
                            $('<a/>')
                                .addClass @.ns o.classes.link
                                .attr
                                    target: '_blank'
                                    href: item.link
                                .text item.name
                        )
                )

            @.$el.after @.$list

        ns: (str) ->
            return [@.options.ns, str].join '-'

        showMenuItems: () ->
            @.$wrapper.addClass 'open'


        hideMenuItems: () ->
            @.$wrapper.removeClass 'open'


        bindEvents: () ->
            self = @

            self.$el.on 'click', () ->
                if self.$wrapper.hasClass 'open'
                    self.hideMenuItems()
                else
                    self.showMenuItems()

    createJQPlugin Elmenu, "elmenu"

)( jQuery, window )