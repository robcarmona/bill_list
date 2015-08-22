billList.controller('sessionController', ['$scope', '$location', 'sessionService', function($scope, $location, sessionService) {
  $scope.init = function() {

  };

  $scope.submit = function() {
    sessionService.postForm($scope.user).then(function(result) {
      console.log(result);
    });
  };
  $scope.user = {};

  $scope.init();
}]);
