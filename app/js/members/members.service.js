;( function(){

  'use strict';

  angular.module('App')

  .factory('MemberService', [ '$http', 'API', function ($http, API) {

    var endpoint = API.URL + 'api/members/';

    // get members
    var getMembers = function(){

      return $http.get(endpoint);

    };

    // get single member
    var getMember = function(id){

      return $http.get(endpoint + id);

    };
    // make member

    var newMember = function(member){

      return $http.post(endpoint, member, API.CONFIG);

    };

    // edit member

    var editMember = function(member, id){

      return $http.put(endpoint + id, member, API.CONFIG);

    };

    // delete member
    var deleteMember = function(){
      return $http.delete(endpoint + id, API.CONFIG);
    };


    return {

      getMembers : getMembers,
      getMember : getMember,
      newMember : newMember,
      editMember: editMember,
      deleteMember: deleteMember

    };
  }]);



}());
