;( function(){

  'use strict';

  angular.module('App')

  .factory('AdminService', [ '$http', 'API', function ($http, API) {

    var endpoint = API.URL + 'admin';

    var _successLog = function(data){
      console.log(data);
    };

    var login = function(user){
      $http.post(endpoint + '/login' , user)
        .success(function(data){
          _successLog(data);
        });
    };




    return {
      login : login
    };
  }]);


}());
