var employeeApp = angular.module("EmployeeApp",[]);
employeeApp.controller("empCtrl",function($scope){
    $scope.query = {}
    $scope.queryBy = '$'
    $scope.employees = [
        {
            "name" : "Piet de Lange",
            "company" : "",
            "designation" : "Olst Wijhe",
            "selected" : "selected"
        },
        {
            "name" : "Ria Dekkers",
            "company" : "",
            "designation" : "Coevorden",
            "selected" : "selected"
        }
    ];
    $scope.orderProp="name";
});


function MyCont($scope) {
    $scope.value = 0;

    $scope.$watch('value', function (val, old) {
        $scope.value = parseInt(val);
    });
};
MyCont();