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

      $scope.tracks=[];

      var Track = function(options){
        this.title = options.title;
        this.stream = $sce.trustAsResourceUrl(options.stream_url + '?client_id=242a1e223a2af256f37ce3648bb93104');
      };

      $http.get('https://api.soundcloud.com/playlists/101081819.json?client_id=242a1e223a2af256f37ce3648bb93104')
        .success(function(data){
          data.tracks.forEach( function(track){

            var newT = new Track(track);

            $scope.tracks.push(newT);


          });

        });





  }]);


}());
