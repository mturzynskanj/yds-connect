'use strict';

$(function () {
    var $body = $("body");
    $body.on('change', "input, select", function () {
        var $this = $(this);

        if (this.value !== "") {
            $this.addClass('filled');
        } else {
            $this.removeClass('filled');
        }
    });

    $body.on('reset', "form", function () {
        var $this = $(this);

        $this.find("input").removeClass("filled");
    });
});


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
        .when('/choosePassword',
        {
            templateUrl:'views/choosePassword.html',
            controller: 'ChoosePasswordCtrl'
        })
        .when('/signIn',{
            templateUrl:'views/signin.html'
        })
        .when('dashboard',{
            templateUrl:'views/dashboard'
        })
      .otherwise({
        redirectTo: '/'
      });
//    $locationProvider.html5Mode(true);
  });
