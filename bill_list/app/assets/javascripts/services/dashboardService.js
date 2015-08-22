(function () {
    var injectParams = ['$http', '$q'];

    var dashboardFactory = function ($http, $q) {
        var serviceBase = '/dashboard/',
            factory = {};

        /*
         * OAuth create user request
         */
        factory.postForm = function (user) {
            return $http.post(serviceBase, user).then(function (results) {
                return results;
            });
        };

        return factory;
    };

    dashboardFactory.$inject = injectParams;

    angular.module('billList').factory('sessionService', dashboardFactory);
}());
