'use strict';

angular.module('myApp.demo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo', {
    templateUrl: 'demo/demo.html',
    controller: 'demoCtrl'
  });
}])

.controller('demoCtrl', [function() {
            stButtons.makeButtons();
}]);