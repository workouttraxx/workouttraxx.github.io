'use strict';

angular.module('myApp.pricing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pricing', {
    templateUrl: 'pricing/pricing.html',
    controller: 'pricingCtrl'
  });
}])

.controller('pricingCtrl', [function() {
            stButtons.makeButtons();
}]);