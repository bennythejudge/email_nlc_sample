'use strict';
//-------------------------------------------------------------------------------------------------------------------//

myPoCApp.controller('Page1Ctrl', function($scope, $location, $http, $window) {


//-------------------------------------------------------------------------------------------------------------------//

    $scope.onLoad = function() {
        console.log("Page1Ctrl loaded");
    };

//-------------------------------------------------------------------------------------------------------------------//

/***************************************/
	//called when controller is started (when page is loaded/refreshed)
    $scope.onLoad();
/***************************************/

});
