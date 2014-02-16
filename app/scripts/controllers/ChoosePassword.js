'use strict';

angular.module('ydsConnectApp')
    .controller('ChoosePasswordCtrl', function ($scope) {
        $scope.passwordType = "text";
        $scope.infoText = "Hide";

        $scope.togglePasswordField = function () {
            $scope.passwordType = ($scope.passwordType === "text") ? "password" : "text";
            $scope.infoText = ($scope.infoText === "Hide") ? "Show" : "Hide";
        }
    });
