photoApp.filter('filterPhoto', function () {
    return function (album, activeTagList) {
        var filtered = [];
        if ( typeof activeTagList !== 'undefined' && ( (activeTagList.length == 1 && activeTagList[0].toLowerCase() == 'all') || activeTagList.length == 0 ) ) {
            filtered = album;
        }
        else {
            for (j in album) {
                var photo = album[j];
                if (typeof activeTagList !== 'undefined' && activeTagList.length > 0 ) {
                    allTags = [photo.city, photo.country, photo.year].concat(photo.tags);
                    for (i in allTags)
                    {
                        allTags[i] = allTags[i].toLowerCase();
                    }
                    tagFound = false;
                    continueLoop = true;
                    for (i=0; i<activeTagList.length && continueLoop; i++) {
                        if (allTags.indexOf(activeTagList[i].toLowerCase()) != -1 || activeTagList[i].toLowerCase() == 'all') {
                            tagFound = true;
                        }
                        else {
                            tagFound = false;
                            continueLoop = false;
                        }
                    }
                    if (tagFound){
                        filtered.push(photo);
                    }
                }
            }
        }
        return filtered;
    }
});

