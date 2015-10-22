;( function(){

  'use strict';

  angular.module('App')

  .filter('dateTime', function(){
  return function(date, input){
    var filteredDate = "";
    if(!input){
      filteredDate = moment.unix(date).format("MMM Do YYYY");
    }else{
    filteredDate = moment.unix(date).format();
    }
    return filteredDate;
   };


  })

  .controller('ShowsCtrl',  ['$scope', 'ShowService', '$state',
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

      $scope.editShow = function(show, date){

        if(date){
          show.date = date;
        }else{
          delete show.date;
        }

        ShowService.editShow(show, show._id).success(function(data){
          $state.reload();
        });
      };

  }]);


}());
