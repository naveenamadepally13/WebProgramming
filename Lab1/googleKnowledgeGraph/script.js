angular.module('myapp', []).controller('mycontroller', function($scope, $http) {
    $scope.str="";
    $scope.mainContent='';
    $scope.getData = function(data) {
        if(data!=""){
            $scope.str=data;
        }

        const url = "https://kgsearch.googleapis.com/v1/entities:search?query="+$scope.str+"&key=AIzaSyC36lon87WdRQOl5d_fobRsEZoXnQGor4Y&indent=True";
        $http.get(url)
            .then(function(response) {
                $scope.data = response.data.itemListElement;
                $scope.mainContent = $scope.data[0].result;
            });
    };

});

