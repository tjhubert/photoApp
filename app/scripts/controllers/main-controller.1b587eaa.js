'use strict';

/**
 * @ngdoc function
 * @name photoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the photoAppApp
 */
angular.module('photoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.passions = [
      {
          name:'Camera',
          description:'I like to take pictures'
      },
      {
          name:'Cook',
          description:'I like to cook for my friends'
      },
      {
          name:'Lift',
          description:'I like to lift heavy things'
      },
      {
          name:'Code',
          description:'I like to type in the Terminal'
      }
    ];
  });
