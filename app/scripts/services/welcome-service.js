'use strict';
/**
 * @ngdoc function
 * @name photoApp.factory: WelcomePhotos
 */
//photos used in the welcome page
photoApp.factory('WelcomePhotos', function () {
    var WelcomePhotos = 
    [
    	{
            image: 'images/HTJ-94.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2013',
            tags : ['film', 'monochrome', 'street', 'top']
        },
        {
            image: 'images/HTJ-103.jpg',
            city: 'Los Angeles',
            country: 'USA',
            year : '2013',
            tags : ['film', 'color', 'street', 'top']
        },
        {
            image: 'images/HTJ-32.jpg',
            city: 'Jakarta',
            country: 'Indonesia',
            year : '2013',
            tags : ['film', 'monochrome', 'street', 'top']
        },
        {
            image: 'images/HTJ-56.jpg',
            city: 'Jakarta',
            country: 'Indonesia',
            year : '2013',
            tags : ['digital', 'color', 'sister', 'portrait', 'top']
        },
        {
            image: 'images/HTJ-43.jpg',
            city: 'Osaka',
            country: 'Japan',
            year : '2013',
            tags : ['digital', 'monochrome', 'street', 'top']
        },
        {
            image: 'images/HTJ-53.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2013',
            tags : ['digital', 'monochrome', 'street', 'top']
        }
    ];

    return WelcomePhotos;
});
        
