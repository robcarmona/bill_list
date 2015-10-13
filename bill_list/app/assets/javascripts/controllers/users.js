billList.controller('userController', ['$scope', '$location', 'requestService', function($scope, $location, requestService) {

  $scope.page = {
    title: "Sign In"
  };

  $scope.init = function() {

  };

  $scope.submit = function() {
    requestService.loginForm($scope.user).then(function(result) {
      console.log(result);
      response = result.data;
      if(response.success) {
        window.location = response.redirect;
        //return;
      } else {
        alert("Failed Login, Please Try Again.");
      }


    });

  };
  $scope.user = {};

  $scope.init();
}]);
