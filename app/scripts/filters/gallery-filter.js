'use strict';
/**
 * @ngdoc function
 * @name photoApp.filter:filterPhoto
 */

photoApp.filter('filterPhoto', function () {
    return function (album, activeTagList) {
        var filtered = [];

        for (var i in album) { //check each photo one by one
            var currentPhoto = album[i];
            var allPhotoTags = [currentPhoto.city, currentPhoto.country, currentPhoto.year].concat(currentPhoto.tags); //combine all descriptions of the photo
            var currentActiveTag;
            var currentPhotoTag;
            var remainingActiveTags = activeTagList.slice(0); //copy from activeTagList

            for (var j = 0; j < allPhotoTags.length; j++) {
                currentPhotoTag = allPhotoTags[j].toLowerCase(); //case insensitive

                for (var k = 0; k < remainingActiveTags.length; k++){
                    currentActiveTag = remainingActiveTags[k].toLowerCase(); //case insensitive

                    if (currentPhotoTag.indexOf(currentActiveTag) !== -1 || currentActiveTag === 'all') {
                        remainingActiveTags.splice(k, 1); //if activeTag is found in allTags, remove it from remainingTags
                        k--; //to compensate after removing an element from the array
                    }
                }
            }
            if (remainingActiveTags.length === 0){ //if all the tags have been found in the photo, then push the photo to filtered
                filtered.push(currentPhoto);
            }
        }
        return filtered;
    }
});

