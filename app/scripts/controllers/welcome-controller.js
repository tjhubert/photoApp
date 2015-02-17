'use strict';

/**
 * @ngdoc function
 * @name photoApp.controller:WelcomeCtrl
 * @description
 * # WelcomeCtrl
 * Controller of the photoApp
 */
photoApp.controller('WelcomeCtrl', function ($scope, WelcomePhotos) {
      $scope.filtered = WelcomePhotos;
});
