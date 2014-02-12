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
            templateUrl:'templates/newRegistration.html',
            controller: 'Registration'
        })
      .otherwise({
        redirectTo: '/'
      });
//    $locationProvider.html5Mode(true);
  });
