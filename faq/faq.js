'use strict';

angular.module('myApp.faq', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/faq', {
    templateUrl: 'faq/faq.html',
    controller: 'faqCtrl'
  });
}])

.controller('faqCtrl', [function() {
        stButtons.makeButtons();

}]);