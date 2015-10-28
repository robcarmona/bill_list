billList.controller('dashboardController', ['$scope', '$location', '$http', 'requestService', function($scope, $location, $http, requestService) {

  /*
   * Get user, redirect to login if not logged in
   */
  requestService.getDashboardIndex().then(function(results) {
    console.log(results);
    $scope.user = results.data.user;
  },
  function(results) {
    $location.path("/login");
  });

  $http.get("/bills/show").then(function (results) {
      $scope.bills = results.data.data;
      console.log(results);
  });

  $scope.todaysDate = new Date();

}]);
