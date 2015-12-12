'use strict';

angular.module('myApp.easyscheduling', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/easyscheduling', {
    templateUrl: 'easyscheduling/easyscheduling.html',
    controller: 'easyschedulingCtrl'
  });
}])

.controller('easyschedulingCtrl', [function() {
        stButtons.makeButtons();
}]);