;( function(){

  'use strict';

  angular.module('App')

  .controller('MembersCtrl', ['$scope', 'MemberService',
    function ($scope, MemberService) {

      //get all members

      MemberService.getMembers()
        .success(function(data){
          $scope.members = data;

        });




  }])

  .controller('MemberCtrl', ['$scope', 'MemberService', '$stateParams','$state',
    function ($scope, MemberService, $stateParams, $state) {

      // get id from url
      var id = $stateParams.id;

      // get the user info

      MemberService.getMember(id).success(function(data){

        $scope.member = data;

      });

      //update member function

      $scope.updateMember = function(member){

        MemberService.editMember(member)
          .success(function(data){
            $state.go('band');
          });
      };


  }]);


}());
