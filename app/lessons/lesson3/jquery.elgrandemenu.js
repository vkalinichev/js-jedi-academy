//"use strict";
//
//(function($) {
//
//    var Elmenu = (function() {
//
//        function Elmenu ($el, options) {
//            this.$el = $el;
//            this.options = $.extend(true, {
//                items: [{
//                    name: 'El Pusto!',
//                    link: 'http://goo.gl/OmdSQD'
//                }],
//                ns: 'elmenu-',
//                classes: {
//                    wrapper:  'wrapper',
//                    list:     'list dropdown-menu',
//                    listItem: 'li',
//                    link:     'link',
//                    open:     'open',
//                    closed:   'closed',
//                    bottom:   'bottom'
//                }
//            }, options);
//
//            this.render();
//            this.bindEvents();
//        }
//
//        Elmenu.prototype.render = function () {
//            var self = this,
//                o = self.options,
//                items_length = o.items.length,
//                $wrapper = $('<div/>').addClass(o.ns + o.classes.wrapper);
//
//            self.$wrapper = self.$el.wrap($wrapper).parent();
//            self.$list    = $('<ul/>').addClass(o.ns  + o.classes.list);
//
//            for (var i = 0, item, $link, $item; i < items_length; i++) {
//                item = o.items[i];
//
//                $link = $('<a/>')
//                    .addClass(o.ns + o.classes.link)
//                    .attr({ target: '_blank', href: item.link })
//                    .text(item.name);
//
//                $item = $('<li>')
//                    .addClass(o.ns + o.classes.listItem)
//                    .append($link);
//
//                self.$list.append($item)
//            }
//
//            self.$el.after(self.$list);
//        };
//
//        Elmenu.prototype.showMenuItems = function () {
//            this.$wrapper.addClass('open');
//        };
//
//        Elmenu.prototype.hideMenuItems = function () {
//            this.$wrapper.removeClass('open');
//        };
//
//        Elmenu.prototype.bindEvents = function () {
//            var self = this;
//
//            self.$el.on('click', function () {
//                if (self.$wrapper.hasClass('open')) {
//                    self.hideMenuItems();
//                } else {
//                    self.showMenuItems();
//                }
//            })
//        };
//
//        return Elmenu;
//
//    })();
//
//    return createJQPlugin(Elgrandemenu, "elgrandemenu");
//
//})(jQuery, window);