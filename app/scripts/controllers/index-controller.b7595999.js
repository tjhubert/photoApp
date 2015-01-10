'use strict';

/**
 * @ngdoc function
 * @name photoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the photoAppApp
 */
function IndexCtrl($scope, $location)
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}
