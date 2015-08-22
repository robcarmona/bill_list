(function () {
    var injectParams = ['$http', '$q'];

    var sessionFactory = function ($http, $q) {
        var serviceBase = '/sessions/',
            factory = {};

        /*
         * Login
         */
        factory.loginForm = function (user) {
            return $http.post(serviceBase + "create", user).then(function (results) {
                return results;
            });
        };

        /*
         * Create user
         */
        factory.createUserForm = function (user) {
            return $http.post("/users/create", user).then(function (results) {
                return results;
            });
        };

        return factory;
    };

    sessionFactory.$inject = injectParams;

    angular.module('billList').factory('sessionService', sessionFactory);
}());
