billList.controller('sessionController', ['$scope', '$location', '$http', function($scope, $location, $http) {

  var base_url = "/sessions/";
  $scope.page = {
    title: "Login"
  };

  $scope.init = function() {

  };

  /*
   * Login
   */
  $scope.loginSubmit = function() {
    $http.post(base_url + "create", $scope.user).then(function (results) {
      response = results.data;
      if(response.success) {
        window.location = response.redirect;
      } else {
        alert("Failed Login, Please Try Again.");
      }
    });
  };

  /*
   * Logout
   */
   $scope.logoutSubmit = function() {
     $http.delete(base_url + "destroy").then(function (results) {
       window.location = "/";
     });
   };


  $scope.user = {};

  $scope.init();
}]);
