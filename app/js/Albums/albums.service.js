;( function(){

  'use strict';

  angular.module('App')

  .service('AlbumService', ['$http',
    function ($http) {

      this.getAlbum = function(album){

        return $http.get(album);

      };


  }]);


}());
