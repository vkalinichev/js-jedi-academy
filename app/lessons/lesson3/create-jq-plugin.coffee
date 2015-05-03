window.createJQPlugin = ( Class, name ) ->
    className = Class.toString().match(/^function ([^(]+)/)[1]
    pluginName = className.slice(0,1).toLowerCase() + className.slice(1)
    dataName = name || pluginName

    $.fn[pluginName] = (options) ->
        args = Array.prototype.slice.call(arguments, 1);

        return @.each(() ->

            obj = $(@).data( dataName )

            if obj not instanceof Class
                obj = new Class( $(@), options )
                $(@).data( dataName, obj )

            if obj[options]?
                return obj[options].apply(obj, args)

            return obj
        )