billList.controller('sessionController', ['$scope', '$location', 'requestService', function($scope, $location, requestService) {

  $scope.page = {
    title: "Login"
  };

  $scope.init = function() {

  };

  $scope.submit = function() {
    requestService.loginForm($scope.user).then(function(result) {
      if(result.data.success) {
        $location.path("/");
      }
    });

  };
  $scope.user = {};

  $scope.init();
}]);
