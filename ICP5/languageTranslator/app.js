angular.module('myapp', [])
    .controller('mycontroller', function($scope, $http,$log) {
        $scope.data1 = {
            model: null,
            availableOptions: [
                {id: 'hi', name: 'Hindi'},
                {id: 'es', name: 'Spanish'},
                {id:'ar', name: 'Arabic'},
                {id:'te', name: 'Telugu'},
                {id:'fr', name:'French'},
                {id:'zh',name:'Chinese'},
                {id:'it',name:'Italian'}
            ]
        };
        $scope.translate = function(value)  {
            $scope.lang=value
            var successCallBack = function (response) {
                console.log("SUCCESS");
                console.log(response.data);
                $scope.text = response.data.text[0];
            };
            var failureCallBack = function (response) {
                console.log("FAIL");
                $scope.error = response.data;
                $log.info(response);
            };
            var sourceText = document.getElementById("SourceLanguage").value;
            console.log(sourceText);
            console.log();
            console.log();
            $http({
                method: 'GET',
                url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190618T191037Z.a3929180c18da8dd.a45d06e6ff4e88ced071acc4ffa9f46beeed1978&text=' + sourceText + '&lang=en-'+$scope.lang+'&[format=plain]&[options=1]&[callback=set]'
            })
                .then(successCallBack, failureCallBack);
        };
    });
