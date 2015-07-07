;( function(){

  'use strict';

  angular.module('App')

  .controller('AlbumCtrl', ['$scope', '$http', '$sce',
    function ($scope, $http, $sce) {

      // var playlists = 'https://api.soundcloud.com/users/14646252/playlists.json?client_id=242a1e223a2af256f37ce3648bb93104';

      // $http.get(playlists)
      //   .success(function(data){

      //   $scope.playlistsData= data

      //   });


      var Track = function(options){
        this.title = options.title;
        this.stream = $sce.trustAsResourceUrl(options.stream_url + '?client_id=242a1e223a2af256f37ce3648bb93104');
      };

  $http.get('https://api.soundcloud.com/users/14646252/tracks.json?client_id=242a1e223a2af256f37ce3648bb93104')
    .success( function(data){
      var x = data[Math.floor(Math.random()*data.length)];
      // var i = x;

       $scope.track = new Track (x);



    });



  }]);


}());
