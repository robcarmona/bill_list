(function () {
    var injectParams = ['$http', '$q'];

    var sessionFactory = function ($http, $q) {
        var serviceBase = '/sessions/',
            factory = {};

        /*
         * OAuth create user request
         */
        factory.postForm = function (user) {
            return $http.post(serviceBase + "create", user).then(function (results) {
                return results;
            });
        };

        return factory;
    };

    sessionFactory.$inject = injectParams;

    angular.module('billList').factory('sessionService', sessionFactory);
}());
