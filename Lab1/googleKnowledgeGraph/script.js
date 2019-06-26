angular.module('myapp', []).controller('mycontroller', function($scope, $http) {

        var url = "https://kgsearch.googleapis.com/v1/entities:search?query=chocolate&key=AIzaSyC36lon87WdRQOl5d_fobRsEZoXnQGor4Y&indent=True";
        $scope.pagesShown = 1;
        $scope.pageSize = 5;
        $http.get(url).then( function(response) {
            $scope.itemListElement = response.data.itemListElement;
        });
        $scope.itemsLimit = function() {
        return pageSize * pagesShown;
       };
    $scope.hasMoreItemsToShow = function() {
        return pagesShown < ($scope.itemListElement.length / pageSize);
    };
    $scope.showMoreItems = function() {
        $scope.pagesShown = pagesShown + 1;
    };
    });
