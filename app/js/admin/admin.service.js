;( function(){

  'use strict';

  angular.module('App')

  .factory('AdminService', [ '$http', 'API', '$cookies', '$state', '$rootScope',
    function ($http, API, $cookies, $state, $rootScope) {

    var endpoint = API.URL + 'admin';


    // check for user token
    var checkUser = function(){
      var token = $cookies.get('token');
      _updateUser(token);
    };

    // update headers with token
    var _updateUser= function(token){
      if(token !== undefined){
        API.CONFIG.headers['x-access-token'] = token;
        $rootScope.admin = true;
      }else{
        $rootScope.admin = false;

      }

    };

    // save token in a cookie
    var _successLog = function(data){
      $cookies.put('token', data.token);
      $('#adminModal').foundation('reveal', 'close');
      if($state.is('home')){
          $state.reload();
        }else{
          $state.go('home');
        }
    };

    // login user
    var logIn = function(user){
      $http.post(endpoint + '/login' , user)
        .success(function(data){
          _successLog(data);
        });
    };

    var logOut = function(){
      $cookies.remove('token');
      $state.go('home');
      _updateUser();
    };




    return {
      logIn : logIn,
      checkUser : checkUser,
      logOut : logOut
    };


  }]);


}());
