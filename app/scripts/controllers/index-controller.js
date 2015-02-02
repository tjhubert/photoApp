'use strict';

/**
 * @ngdoc function
 * @name photoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the photoAppApp
 */
photoApp.controller('IndexCtrl', function($scope, $location)
{ 
    $scope.isActive = function (viewLocation) { 
        if (viewLocation === $location.path())
        {
            return 'active';
        }
        else
        {
            return;
        }
    };

    $scope.showHeaderFooter = function () {
        if ($location.path() === '/')
        {
            return false;
        }
        else
        {
            return true;
        }
    };

    $scope.wrapperOrContainer = function () {
        if ($location.path() === '/')
        {
            return 'wrapper';
        }
        else
        {
            return 'container';
        }
    };
});
