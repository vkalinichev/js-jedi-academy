"use strict";

function inheritJQPlugin(name) {
    return function () {
        var F = function () {};
        F.prototype = $.fn[name].prototype;
        return new F;
    }
}