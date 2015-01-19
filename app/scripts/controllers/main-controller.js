'use strict';

/**
 * @ngdoc function
 * @name photoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the photoAppApp
 */
photoApp.controller('MainCtrl', function ($scope) {
    $scope.passions = [
      {
          name:'Photography',
          description:'This is my first love.'
      },
      {
          name:'Cook',
          description:'I rather cook than eat at shitty restaurants.'
      },
      {
          name:'Lift',
          description:'Squats and deads.'
      },
      {
          name:'Coffee',
          description:'For the taste, not the caffeine.'
      },
  
      {
          name:'Code',
          description:'Typing in the Terminal makes you a cool geek.'
      }
    ];
  });
