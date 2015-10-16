;( function(){

  'use strict';

  angular.module('App')

  .controller('MembersCtrl', ['$scope', 'MemberService',
    function ($scope, MemberService) {

      //get all members

      MemberService.getMembers()
        .success(function(data){
          $scope.members = data;

          console.log($scope.members);

        });




  }])

  .controller('MemberCtrl', ['$scope', 'MemberService',
    function ($scope, MemberService) {

      //TODO write get member with routeparams



      //update member function

      $scope.updateMember = function(member){
        MemberService.editMember(member)
          .success(function(){

          });
      };


  }]);


}());
