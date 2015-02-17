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

    //to set menu button active if it is clicked
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
