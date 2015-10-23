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

  .controller('ShowsCtrl',  ['$scope', 'ShowService', '$state', '$mdToast',
    function ($scope, ShowService, $state, $mdToast) {


      //get shows
      ShowService.getShows()
        .success(function(data){
          $scope.shows = data;
        });


      // add a new show
      $scope.addShow= function(show){

        ShowService.newShow(show).success(function(data){
           $('#showModal').foundation('reveal', 'close');
           $state.reload();
        });

      };


      // update existing
      $scope.editShow = function(show, date){

        if(date){
          show.date = date;
        }else{
          delete show.date;
        }

        ShowService.editShow(show, show._id).success(function(data){

          // show toast
           $mdToast.show(
            $mdToast.simple()
              .content(data[0].message)
              .position('right')
              .hideDelay(3000)
          );
          $state.reload();
        });
      };



      // delete show
      $scope.deleteShow = function(id){
        ShowService.deleteShow(id).success(function(data){
          // show toast
           $mdToast.show(
            $mdToast.simple()
              .content(data.message)
              .position('right')
              .hideDelay(3000)
          );
          $state.reload();
        });
      };

  }]);


}());
