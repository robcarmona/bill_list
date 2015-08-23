var templateBase = "views/";
billList.config(function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl:  templateBase + 'dashboard/index.html',
    controller: "dashboardController"
  })
  .when('/login', {
    templateUrl: templateBase + 'user/login.html',
    controller: "sessionController"
  })
  .when('/signup', {
    templateUrl: templateBase + "user/create.html",
    controller: "userController"
  })

  ;

});
