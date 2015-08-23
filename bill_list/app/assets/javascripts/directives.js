angular.module('billList').directive('userForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/login.html',
    replace: true
  };
});
angular.module('billList').directive('userNav', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/dashboard/_nav.html',
    replace: true
  };
});
