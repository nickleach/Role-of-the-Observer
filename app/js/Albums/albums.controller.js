;( function(){

  'use strict';

  angular.module('App')

  .controller('AlbumCtrl', ['$scope', '$http', '$sce',
    function ($scope, $http, $sce) {

      var playlists = 'https://api.soundcloud.com/users/14646252/playlists.json?client_id=242a1e223a2af256f37ce3648bb93104';

      // Role of the observer
      // https://api.soundcloud.com/playlists/19520172.json?client_id=242a1e223a2af256f37ce3648bb93104

      // Quantum State
      // https://api.soundcloud.com/playlists/19520302.json?client_id=242a1e223a2af256f37ce3648bb93104


      $http.get(playlists)
        .success(function(data){

        $scope.playlistsData= data

        });





  }]);


}());
