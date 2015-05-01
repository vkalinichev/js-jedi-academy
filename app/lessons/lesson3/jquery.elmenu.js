(function($, window) {

    var Elmenu = (function() {

        function Elmenu ($el, options) {
            this.$el = $el;
            this.options = $.extend(true, this.defaults, options);

            this.render();
        }

        Elmenu.prototype.defaults = {
            items: [{
                elName: 'El Pusto!',
                elLink: 'http://goo.gl/OmdSQD'
            }],
            ns: 'elmenu',
            classes: {
                wrapper:  'wrapper',
                list:     'list',
                listItem: 'li',
                link:     'link',
                open:     'open',
                closed:   'closed',
                bottom:   'bottom'
            }
        };

        Elmenu.prototype.render = function () {
            var $container = this.$el;
            var o = this.options;
            //var menu =
            console.log();
            var $wrapper = $('<div/>').addClass(o.ns + o.wrapper);
            var $list    = $('<ul/>').addClass(o.ns + o.list);

            for (var i = 0, length = o.items.length; i < length; o.items) {
                var item = o.items[i];

                var $link = $('<a/>')
                    .attr('href', item.elLink)
                    .text(item.elLink);
                var $item = $('<li>')
                    .addClass(o.ns + o.listItem)
                    .append($link);

                $list.append($item)
            }

            $wrapper.append($list);
            console.log($list);
            $container.append($wrapper);
            console.log($wrapper);
        };

        Elmenu.prototype.reRender = function () {

        };

        Elmenu.prototype.showMenuItems = function () {

        };

        Elmenu.prototype.hideMenuItems = function () {

        };

        Elmenu.prototype.toggleMenuItems = function () {

        };

        Elmenu.prototype.bindEvents = function () {

        };

        return Elmenu;

    })();

    return createJQPlugin(Elmenu, "elmenu");

})(jQuery, window);

//    Menu.prototype.render = function () {
//
//        var attrs = {
//            wrapper: {
//                class: 'menu-wrapper'
//            },
//            button: {
//                class: 'btn btn-success',
//                type: 'button'
//            },
//            list: {
//                class: 'dropdown-menu'
//            }
//        };
//
//        var $container = $('.js-ground');
//        var $wrapper = $("<div/>").attr( attrs.wrapper );
//        var $button = $("<button/>").attr( attrs.button ).text(this.name);
//        var $list = $("<ul/>").attr( attrs.list);
//        var elements = this.elements;
//        var self = this;
//
//        for (var i = 0; i < elements.length; i++) {
//
//            if (elements[i].elName.length > 0 && elements[i].elLink.length > 0) {
//
//                var $link = $('<a/>').attr({
//                    target: "_blank",
//                    href: elements[i].elLink,
//                    title: elements[i].elName
//                }).text(elements[i].elName);
//
//                var $li = $('<li/>').html($link);
//
//            }
//
//            $list.append($li);
//        }
//
//        $wrapper.append($button).append($list);
//        $container.append($wrapper);
//
//        this.$el     = $wrapper;
//        this.$button = $button;
//
//        this.$button.on('click', function () {
//
//            if (self.$el.hasClass('open')) {
//                self.hideMenuItems();
//            } else {
//                self.showMenuItems();
//            }
//        })
//    };
//
//    Menu.prototype.showMenuItems = function () {
//        this.$el.addClass('open');
//    };
//
//    Menu.prototype.hideMenuItems = function () {
//        this.$el.removeClass('open');
//    };
//
//    return Menu;
//