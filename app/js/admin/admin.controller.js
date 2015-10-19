;( function(){

  'use strict';

  angular.module('App')

  .controller('AdminCtrl', ['$scope', 'AdminService', '$state',
    function ($scope, AdminService, $state) {

    $scope.login = function(user){
      console.log(user);
      AdminService.logIn(user);

    };

    $scope.logOut = function(){
      AdminService.logOut();

    };

  }]);


}());
