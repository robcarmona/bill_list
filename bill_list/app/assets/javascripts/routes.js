var templateBase = "views/";
billList.config(function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl:  templateBase + 'dashboard/index.html'
  })
  .when('/login', {
    templateUrl: templateBase + 'login.html',
    controller: "sessionController"
  });

});
