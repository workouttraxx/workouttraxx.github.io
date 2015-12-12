'use strict';

angular.module('myApp.video', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/video', {
            templateUrl: 'video/video.html',
            controller: 'videoCtrl'
        });
    }])

    .controller('videoCtrl', [function() {
        stButtons.makeButtons();
    }]);