define(
    ["backbone"],

    function(Backbone) {
        var Controller = Backbone.Router.extend({
            routes: {
                "": "home",
                "home": "home",
                "lesson1": "lesson1",
                "lesson2": "lesson2",
                "lesson3": "lesson3"
            },

            home: function () {
                $(".js-view").addClass('hidden');
                $("#home").removeClass('hidden');
                $('nav li').removeClass('active');
                $('nav li a[href=\"' + (location.hash.length > 0 ? location.hash : "#home") + '\"]').closest('li').addClass('active');
            },

            lesson1: function () {
                $(".js-view").addClass('hidden');
                $("#lesson1").removeClass('hidden');
                $('nav li').removeClass('active');
                $('nav li a[href=\"' + location.hash + '\"]').closest('li').addClass('active');
            },

            lesson2: function () {
                $(".js-view").addClass('hidden');
                $("#lesson2").removeClass('hidden');
                $('nav li').removeClass('active');
                $('nav li a[href=\"' + location.hash + '\"]').closest('li').addClass('active');
            },

            lesson3: function () {
                $(".js-view").addClass('hidden');
                $("#lesson3").removeClass('hidden');
                $('nav li').removeClass('active');
                $('nav li a[href=\"' + location.hash + '\"]').closest('li').addClass('active');
            }
        });

        var controller = new Controller(); // Создаём контроллер

        Backbone.history.start();  // Запускаем HTML5 History push
    }
);