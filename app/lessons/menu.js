define(
    ["jquery"],

    function($) {
        var Menu = function (options) {
            var defaults = {
                name: "Simple Menu",
                elements: [{
                    elName: 'El Pusto!', elLink: 'http://goo.gl/OmdSQD'
                }]

            };
            $.extend(true, this, defaults, options);
        };

        Menu.prototype.render = function () {

            var attrs = {
                wrapper: {
                    class: 'menu-wrapper'
                },
                button: {
                    class: 'btn btn-success',
                    type: 'button'
                },
                list: {
                    class: 'dropdown-menu'
                }
            };

            var $container = $('.js-ground');
            var $wrapper = $("<div/>").attr( attrs.wrapper );
            var $button = $("<button/>").attr( attrs.button ).text(this.name);
            var $list = $("<ul/>").attr( attrs.list);
            var elements = this.elements;
            var self = this;

            for (var i = 0; i < elements.length; i++) {

                if (elements[i].elName.length > 0 && elements[i].elLink.length > 0) {

                    var $link = $('<a/>').attr({
                        target: "_blank",
                        href: elements[i].elLink,
                        title: elements[i].elName
                    }).text(elements[i].elName);

                    var $li = $('<li/>').html($link);

                }

                $list.append($li);
            }

            $wrapper.append($button).append($list);
            $container.append($wrapper);

            this.$el     = $wrapper;
            this.$button = $button;

            this.$button.on('click', function () {

                if (self.$el.hasClass('open')) {
                    self.hideMenuItems();
                } else {
                    self.showMenuItems();
                }
            })
        };

        Menu.prototype.showMenuItems = function () {
            this.$el.addClass('open');
        };

        Menu.prototype.hideMenuItems = function () {
            this.$el.removeClass('open');
        };

        return Menu;
    }
);