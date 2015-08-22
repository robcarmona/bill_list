billList.controller('sessionController', ['$scope', '$location', 'sessionService', function($scope, $location, sessionService) {

  $scope.page = {
    title: "Login"
  };

  $scope.init = function() {

  };

  $scope.submit = function() {
    console.log($scope.user);
    debugger;
    sessionService.loginForm($scope.user).then(function(result) {
      console.log(result);
    });

  };
  $scope.user = {};

  $scope.init();
}]);
