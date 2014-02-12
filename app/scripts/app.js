'use strict';

angular.module('ydsConnectApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/newRegistration',
        {
            templateUrl:'views/newRegistration.html',
            controller: 'RegistrationCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
//    $locationProvider.html5Mode(true);
  });
