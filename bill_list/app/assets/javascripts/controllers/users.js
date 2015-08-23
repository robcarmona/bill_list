billList.controller('userController', ['$scope', '$location', 'requestService', function($scope, $location, requestService) {

  $scope.page = {
    title: "Sign Up"
  };

  $scope.init = function() {

  };

  $scope.submit = function() {
    requestService.createUserForm($scope.user).then(function(result) {
      if(result.data.success) {
        $location.path("/");
      }
    });

  };
  $scope.user = {};

  $scope.init();
}]);
