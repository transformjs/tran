module.exports = {
    generator: function (ctor) {
        return function() {
            var instance = {};
            instance.__proto__ = ctor.prototype;
            ctor.apply(instance, arguments);
            return instance;
        };
    }
};
