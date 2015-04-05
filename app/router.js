define(
    ["backbone"],

    function(Backbone) {
        var Controller = Backbone.Router.extend({
            routes: {
                "": "start", // ������ hash-���
                "!/": "start", // ��������� ��������
                "!/page1": "page1", // ���� �����
                "!/page2": "page2" // ���� ������
            },

            start: function () {
                $(".g-view").addClass('hidden'); // ������ ��� �����
                $("#page0").removeClass('hidden'); // ���������� ������
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

        var controller = new Controller(); // ������ ����������

        Backbone.history.start();  // ��������� HTML5 History push
    }
);