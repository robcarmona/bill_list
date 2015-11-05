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

  $http.get("/bills/show.json").then(function (results) {
      $scope.bills = {};
      $scope.bills.data = results.data;
  });

  $scope.todaysDate = new Date();

}]);
