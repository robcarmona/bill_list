billList.controller('dashboardController', ['$scope', '$location', 'requestService', function($scope, $location, requestService) {

  /*
   * Get user, redirect to login if not logged in
   */
  requestService.getDashboardIndex().then(function(results) {
    $scope.user = results.data.user;
  },
  function(results) {
    $location.path("/login");
  });
  
}]);
