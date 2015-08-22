angular.module('billList').directive('userForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/login.html',
    replace: true
  };
});
