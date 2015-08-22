billList.controller('userController', ['$scope', '$location', 'sessionService', function($scope, $location, sessionService) {

  $scope.page = {
    title: "Sign Up"
  };

  $scope.init = function() {

  };

  $scope.submit = function() {
    sessionService.createUserForm($scope.user).then(function(result) {
      console.log(result);
    });

  };
  $scope.user = {};

  $scope.init();
}]);
