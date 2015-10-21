;( function(){

  'use strict';

  angular.module('App')

  .controller('ShowCtrl',  ['$scope', 'ShowService', '$state',
    function ($scope, ShowService, $state) {


      ShowService.getShows()
        .success(function(data){
          $scope.shows = data;
        });

      $scope.addShow= function(show){
        ShowService.newShow(show).success(function(data){
           $('#showModal').foundation('reveal', 'close');
           $state.reload();
        });

      };

  }]);


}());
