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

  .controller('MemberCtrl', ['$scope', 'MemberService', '$stateParams',
    function ($scope, MemberService, $stateParams) {

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
            console.log(data);
          });
      };


  }]);


}());
