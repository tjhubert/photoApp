'use strict';
/**
 * @ngdoc function
 * @name photoApp.factory:Album
 */
//TODO: move the source to Dropbox API
photoApp.factory('Album', function () {
    var Album =
    [
        {
            image: 'images/HTJ-1.jpg',
            city: 'Sangkhlaburi',
            country: 'Thailand',
            year : '2011',
            tags : ['digital', 'color', 'portrait']
        },
        {
            image: 'images/HTJ-2.jpg',
            city: 'Malacca',
            country: 'Malaysia',
            year : '2012',
            tags : ['digital', 'color']
        },
        {
            image: 'images/HTJ-5.jpg',
            city: 'Belitong',
            country: 'Indonesia',
            year : '2012',
            tags : ['digital', 'monochrome', 'abstract']
        },
        {
            image: 'images/HTJ-6.jpg',
            city: 'Belitong',
            country: 'Indonesia',
            year : '2012',
            tags : ['digital', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-7.jpg',
            city: 'Belitong',
            country: 'Indonesia',
            year : '2012',
            tags : ['digital', 'color', 'street', 'top']
        },
        {
            image: 'images/HTJ-8.jpg',
            city: 'Belitong',
            country: 'Indonesia',
            year : '2012',
            tags : ['digital', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-9.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['film', 'monochrome', 'animal']
        },
        {
            image: 'images/HTJ-10.jpg',
            city: 'Belitong',
            country: 'Jakarta',
            year : '2012',
            tags : ['film', 'monochrome', 'portrait']
        },
        {
            image: 'images/HTJ-11.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['film', 'monochrome', 'street', 'bus']
        },
        {
            image: 'images/HTJ-12.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['film', 'monochrome', 'street', 'bus']
        },
        {
            image: 'images/HTJ-13.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['film', 'color', 'street']
        },
        {
            image: 'images/HTJ-14.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['digital', 'monochrome', 'portrait', 'sister']
        },
        {
            image: 'images/HTJ-15.jpg',
            city: 'Jakarta',
            country: 'Indonesia',
            year : '2012',
            tags : ['film', 'color', 'portrait', 'sister']
        },
        {
            image: 'images/HTJ-16.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['film', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-17.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['digital', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-18.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['digital', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-19.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['digital', 'monochrome', 'ecp', 'top']
        },
        {
            image: 'images/HTJ-20.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['digital', 'monochrome', 'ecp', 'top']
        },
        {
            image: 'images/HTJ-21.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['digital', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-22.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['digital', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-23.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['digital', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-24.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['digital', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-25.jpg',
            city: 'Koh Samui',
            country: 'Thailand',
            year : '2012',
            tags : ['digital', 'monochrome', 'street', 'top']
        },
        {
            image: 'images/HTJ-26.jpg',
            city: 'Koh Samui',
            country: 'Thailand',
            year : '201',
            tags : ['digital', 'color', 'street']
        },
        {
            image: 'images/HTJ-27.jpg',
            city: 'Bandung',
            country: 'Indonesia',
            year : '2012',
            tags : ['digital', 'monochrome', 'sister']
        },
        {
            image: 'images/HTJ-28.jpg',
            city: 'Bandung',
            country: 'Indonesia',
            year : '2012',
            tags : ['digital', 'color']
        },
        {
            image: 'images/HTJ-29.jpg',
            city: 'Bandung',
            country: 'Indonesia',
            year : '2012',
            tags : ['digital', 'color', 'street']
        },
        {
            image: 'images/HTJ-31.jpg',
            city: 'Jakarta',
            country: 'Indonesia',
            year : '2013',
            tags : ['digital', 'color', 'nature']
        },
        {
            image: 'images/HTJ-32.jpg',
            city: 'Jakarta',
            country: 'Indonesia',
            year : '2013',
            tags : ['film', 'monochrome', 'street', 'top']
        },
        {
            image: 'images/HTJ-33.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2013',
            tags : ['digital', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-34.jpg',
            city: 'Tokyo',
            country: 'Japan',
            year : '2013',
            tags : ['digital', 'color', 'street']
        },
        {
            image: 'images/HTJ-35.jpg',
            city: 'Tokyo',
            country: 'Japan',
            year : '2013',
            tags : ['digital', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-36.jpg',
            city: 'Tokyo',
            country: 'Japan',
            year : '2013',
            tags : ['digital', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-37.jpg',
            city: 'Tokyo',
            country: 'Japan',
            year : '2013',
            tags : ['digital', 'monochrome', 'street', 'top']
        },
        {
            image: 'images/HTJ-38.jpg',
            city: 'Kyoto',
            country: 'Japan',
            year : '2013',
            tags : ['digital', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-39.jpg',
            city: 'Tokyo',
            country: 'Japan',
            year : '2013',
            tags : ['digital', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-40.jpg',
            city: 'Tokyo',
            country: 'Japan',
            year : '2013',
            tags : ['digital', 'monochrome', 'street', 'selfie']
        },
        {
            image: 'images/HTJ-42.jpg',
            city: 'Himeji',
            country: 'Japan',
            year : '2013',
            tags : ['digital', 'color']
        },
        {
            image: 'images/HTJ-43.jpg',
            city: 'Osaka',
            country: 'Japan',
            year : '2013',
            tags : ['digital', 'monochrome', 'street', 'top']
        },
        {
            image: 'images/HTJ-44.jpg',
            city: 'Osaka',
            country: 'Japan',
            year : '2013',
            tags : ['digital', 'monochrome', 'street', 'top', 'portrait']
        },
        {
            image: 'images/HTJ-45.jpg',
            city: 'Osaka',
            country: 'Japan',
            year : '2013',
            tags : ['digital', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-46.jpg',
            city: 'Osaka',
            country: 'Japan',
            year : '2013',
            tags : ['digital', 'color', 'street', 'top']
        },
        {
            image: 'images/HTJ-48.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2012',
            tags : ['film', 'monochrome', 'bus', 'street', 'top']
        },
        {
            image: 'images/HTJ-50.jpg',
            city: 'Jakarta',
            country: 'Indonesia',
            year : '2013',
            tags : ['film', 'color', 'sister', 'portrait']
        },
        {
            image: 'images/HTJ-51.jpg',
            city: 'Jakarta',
            country: 'Indonesia',
            year : '2013',
            tags : ['film', 'monochrome', 'street']
        },
        {
            image: 'images/HTJ-53.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2013',
            tags : ['digital', 'monochrome', 'street', 'top']
        },
        {
            image: 'images/HTJ-54.jpg',
            city: 'Jakarta',
            country: 'Indonesia',
            year : '2013',
            tags : ['digital', 'color', 'sister', 'portrait']
        },
        {
            image: 'images/HTJ-55.jpg',
            city: 'Jakarta',
            country: 'Indonesia',
            year : '2013',
            tags : ['digital', 'color', 'sister', 'portrait', 'top']
        },
        {
            image: 'images/HTJ-56.jpg',
            city: 'Jakarta',
            country: 'Indonesia',
            year : '2013',
            tags : ['digital', 'color', 'sister', 'portrait', 'top']
        },
        {
            image: 'images/HTJ-57.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2013',
            tags : ['digital', 'monochrome']
        },
        {
            image: 'images/HTJ-58.jpg',
            city: 'Kuala Lumpur',
            country: 'Malaysia',
            year : '2013',
            tags : ['digital', 'color', 'portrait']
        },
        {
            image: 'images/HTJ-65.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2013',
            tags : ['film', 'monochrome', 'street', 'top']
        },
        {
            image: 'images/HTJ-69.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'color', 'street']
        },
        {
            image: 'images/HTJ-71.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'color', 'street']
        },
        {
            image: 'images/HTJ-73.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'color', 'street']
        },
        {
            image: 'images/HTJ-74.jpg',
            city: 'Champaign',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'color', 'portrait']
        },
        {
            image: 'images/HTJ-75.jpg',
            city: 'Champaign',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'color', 'portrait']
        },
        {
            image: 'images/HTJ-76.jpg',
            city: 'Ann Arbor',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'color', 'street']
        },
        {
            image: 'images/HTJ-77.jpg',
            city: 'Ann Arbor',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'color', 'street']
        },
        {
            image: 'images/HTJ-79.jpg',
            city: 'Champaign',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'color', 'portrait']
        },
        {
            image: 'images/HTJ-81.jpg',
            city: 'Chicago',
            country: 'USA',
            year : '2014',
            tags : ['digital', 'color', 'street', 'top']
        },
        {
            image: 'images/HTJ-82.jpg',
            city: 'Champaign',
            country: 'USA',
            year : '2014',
            tags : ['digital', 'color', 'portrait']
        },
        {
            image: 'images/HTJ-83.jpg',
            city: 'Champaign',
            country: 'USA',
            year : '2014',
            tags : ['digital', 'color', 'portrait']
        },
        {
            image: 'images/HTJ-84.jpg',
            city: 'Champaign',
            country: 'USA',
            year : '2014',
            tags : ['digital', 'color', 'portrait', 'top']
        },
        {
            image: 'images/HTJ-85.jpg',
            city: 'Champaign',
            country: 'USA',
            year : '2014',
            tags : ['digital', 'color']
        },
        {
            image: 'images/HTJ-88.jpg',
            city: 'Los Angeles',
            country: 'USA',
            year : '2014',
            tags : ['film', 'color', 'portrait']
        },
        {
            image: 'images/HTJ-90.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2014',
            tags : ['digital', 'color', 'street', 'top']
        },
        {
            image: 'images/HTJ-91.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'color', 'street', 'top']
        },
        {
            image: 'images/HTJ-92.jpg',
            city: 'Champaign',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'color', 'UIUC', 'top']
        },
        {
            image: 'images/HTJ-93.jpg',
            city: 'Singapore',
            country: 'Singapore',
            year : '2013',
            tags : ['digital', 'color', 'top']
        },
        {
            image: 'images/HTJ-94.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2013',
            tags : ['film', 'monochrome', 'street', 'top']
        },
        {
            image: 'images/HTJ-95.jpg',
            city: 'Belitong',
            country: 'Indonesia',
            year : '2012',
            tags : ['digital', 'monochrome', 'top']
        },
        {
            image: 'images/HTJ-96.jpg',
            city: 'Belitong',
            country: 'Indonesia',
            year : '2012',
            tags : ['digital', 'color', 'top']
        },
        {
            image: 'images/HTJ-97.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'monochrome', 'portrait', 'top']
        },
        {
            image: 'images/HTJ-98.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'color', 'street', 'top']
        },
        {
            image: 'images/HTJ-99.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'color', 'street']
        },
        {
            image: 'images/HTJ-100.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'color', 'street']
        },
        {
            image: 'images/HTJ-101.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'monochrome', 'street', 'top']
        },
        {
            image: 'images/HTJ-102.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2013',
            tags : ['film', 'color', 'street', 'portrait', 'top']
        },
        {
            image: 'images/HTJ-103.jpg',
            city: 'Los Angeles',
            country: 'USA',
            year : '2013',
            tags : ['film', 'color', 'street', 'top']
        },
        {
            image: 'images/HTJ-104.jpg',
            city: 'Los Angeles',
            country: 'USA',
            year : '2013',
            tags : ['film', 'color', 'street']
        },
        {
            image: 'images/HTJ-105.jpg',
            city: 'Chicago',
            country: 'USA',
            year : '2014',
            tags : ['digital', 'color', 'street', 'top']
        },
        {
            image: 'images/HTJ-106.jpg',
            city: 'Champaign',
            country: 'USA',
            year : '2014',
            tags : ['digital', 'color', 'assignment']
        },
        {
            image: 'images/HTJ-107.jpg',
            city: 'Champaign',
            country: 'USA',
            year : '2014',
            tags : ['digital', 'color', 'portrait', 'assignment', 'top']
        },
        {
            image: 'images/HTJ-108.jpg',
            city: 'Champaign',
            country: 'USA',
            year : '2014',
            tags : ['digital', 'color', 'portrait', 'assignment', 'top']
        },
        {
            image: 'images/HTJ-109.jpg',
            city: 'Chicago',
            country: 'USA',
            year : '2014',
            tags : ['film', 'color', 'street']
        },
        {
            image: 'images/HTJ-110.jpg',
            city: 'New York City',
            country: 'USA',
            year : '2013',
            tags : ['digital', 'monochrome', 'top']
        }
    ];
    return Album;
});

photoApp.factory('ActiveTagsButton', function () {
    var ActiveTagsButton =
    [
        {
            first: 'Places',
            second: ['Indonesia', 'Singapore', 'Thailand', 'Japan', 'USA']
        },
        {
            first: 'Color',
            second: ['Color', 'Monochrome']
        },
        {
            first: 'Genre',
            second: ['Street', 'Portrait']
        },
        {
            first: 'Camera Type',
            second: ['Digital', 'Film']
        },
        {
            first: 'Year',
            second: ['2011', '2012', '2013', '2014']
        },
        {
            first: 'Projects',
            second: ['Bus', 'Sister']
        }
    ];
    return ActiveTagsButton;
});
