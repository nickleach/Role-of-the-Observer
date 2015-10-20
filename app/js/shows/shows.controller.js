;( function(){

  'use strict';

  angular.module('App')

  .controller('ShowCtrl',  ['$scope', 'ShowService',
    function ($scope, ShowService) {
      $(document).foundation();

      ShowService.getShows()
        .success(function(data){
          $scope.shows = data;
        });


  }]);


}());
