define(
    ["backbone"],

    function(Backbone) {
        var Controller = Backbone.Router.extend({
            routes: {
                "": "start", // Пустой hash-тэг
                "!/": "start", // Начальная страница
                "!/page1": "page1", // Блок удачи
                "!/page2": "page2" // Блок ошибки
            },

            start: function () {
                $(".g-view").addClass('hidden'); // Прячем все блоки
                $("#page0").removeClass('hidden'); // Показываем нужный
                $('nav li').removeClass('active');
                $('nav li a[href=\"' + location.hash + '\"]').closest('li').addClass('active');
            },

            page1: function () {
                $(".g-view").addClass('hidden');
                $("#page1").removeClass('hidden');
                $('nav li').removeClass('active');
                $('nav li a[href=\"' + location.hash + '\"]').closest('li').addClass('active');
            },

            page2: function () {
                $(".g-view").addClass('hidden');
                $("#page2").removeClass('hidden');
                $('nav li').removeClass('active');
                $('nav li a[href=\"' + location.hash + '\"]').closest('li').addClass('active');
            }
        });

        var controller = new Controller(); // Создаём контроллер

        Backbone.history.start();  // Запускаем HTML5 History push
    }
);