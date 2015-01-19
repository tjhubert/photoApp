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
});
