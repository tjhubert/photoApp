'use strict';

/**
 * @ngdoc function
 * @name photoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the photoAppApp
 */
angular.module('photoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
