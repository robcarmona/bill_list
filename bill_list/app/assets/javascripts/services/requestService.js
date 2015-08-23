(function () {
    var injectParams = ['$http', '$q'];

    var requestFactory = function ($http, $q) {
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
         * Delete session
         */
        factory.logOut = function (user) {
            return $http.delete(serviceBase + "destroy").then(function (results) {
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

        /*
         * Dashboard Index
         */
        factory.getDashboardIndex = function () {
            return $http.get("/dashboards/index").then(function (results) {
                return results;
            });
        };

        return factory;
    };

    requestFactory.$inject = injectParams;

    angular.module('billList').factory('requestService', requestFactory);
}());
