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

      $scope.addShow= function(show){
        console.log(moment(show.date).format("ddd MMM Do YYYY"));

      };

  }]);


}());
