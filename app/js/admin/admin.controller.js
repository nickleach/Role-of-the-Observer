;( function(){

  'use strict';

  angular.module('App')

  .controller('AdminCtrl', ['$scope', 'AdminService', function ($scope, AdminService) {

    $scope.login = function(user){
      console.log(user);
      AdminService.login(user);

    };

  }]);


}());
