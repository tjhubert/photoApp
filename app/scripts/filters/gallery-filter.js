photoApp.filter('filterPhoto', function () {
    return function (album, activeTagList) {
        var filtered = [];

        for (var i in album) {
            var currentPhoto = album[i];
            var allTags = [currentPhoto.city, currentPhoto.country, currentPhoto.year].concat(currentPhoto.tags);
            var currentActiveTag;
            var currentPhotoTag;
            var remainingTags = activeTagList.slice(0);

            for (var j = 0; j < allTags.length; j++) {
                currentPhotoTag = allTags[j].toLowerCase();

                for (var k = 0; k < remainingTags.length; k++){
                    currentActiveTag = remainingTags[k].toLowerCase();

                    if (currentPhotoTag.indexOf(currentActiveTag) !== -1 || currentActiveTag == 'all') {
                        remainingTags.splice(k, 1);
                        k--;
                    }
                }
            }
            if (remainingTags.length === 0){
                filtered.push(currentPhoto);
            }
        }
        //return $filter('orderBy')(filtered, year, true);
        return filtered;
    }
});

