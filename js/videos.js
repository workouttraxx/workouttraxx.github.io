
angular.module('VideoApp', ['ngAnimate'])
  .controller('VideoController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.sortBy = 'manual';

    if($location.search().sortBy) {
      $scope.sortBy = $location.search().sortBy;
    }
    

    $scope.setSort = function(sort) {
      console.log('sort', sort)
        $scope.sortBy = sort;
        getVideos();
    }


    function getVideos() {
      var req = {
       method: 'GET',
       url: 'https://api.vimeo.com/users/17212182/albums/3145274/videos?sort=' + $scope.sortBy,
       headers: {
         'Authorization': 'bearer 7136b139fbf87015242c5e2085f04aed'
       }
      }
      
      $http(req).success(function(data) {
        $scope.albumData = data;

        splitAlbumInRows();
      });  
    }

    getVideos();

    function splitAlbumInRows() {
      var album = [];
      var cols = 0;
      var currentRow;
      for(var i = 0; i < $scope.albumData.data.length; i++) {
        if($scope.search != undefined && $scope.search.length > 0 && !albumMatchesSearch($scope.albumData.data[i])) {
          continue;
        }

        if(cols == 0) {
          currentRow = [];
          album.push(currentRow);          
        }

        currentRow.push($scope.albumData.data[i]);

        if(cols < 1) {
          cols++;
        } else {
          cols = 0;
        }
      }

      $scope.album = album;
    }

    function albumMatchesSearch(video) {
      var criteria = $scope.search.toLowerCase();

      if(video.name.toLowerCase().indexOf(criteria) != -1) {
        return true;
      } 
        
      for(var i = 0; i < video.tags.length; i++) {
        if(video.tags[i].name.toLowerCase().indexOf(criteria) != -1) {
          return true;
        }
      }

      return false;
    }

    $scope.filterByTag = function(tag) {
      $scope.search = tag;
    }
 
   
    $scope.$watch('search', function() {
      if($scope.albumData) {
        splitAlbumInRows();
      }
    });

}]);