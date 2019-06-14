var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        console.log($scope.todoList);
        $scope.todoInput = "";
    };

    $scope.remove = function(value) {
        var oldList = $scope.todoList;
        //$scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (value === x.Tod)
                $scope.todoList.pop(x);
           // $scope.items.splice(index, 1);
        });
        console.log($scope.todoList);
    };
    $scope.remaining =function()
    {
        var count = 0;
        angular.forEach($scope.todoList, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    }

});
