;( function(){

  'use strict';

  angular.module('App')

  .controller('AlbumCtrl', ['$scope', '$http', '$sce', 'angularPlayer', '$timeout',
    function ($scope, $http, $sce, angularPlayer, $timeout) {

      var endpoint = 'https://api.soundcloud.com/users/14646252/tracks.json?client_id=242a1e223a2af256f37ce3648bb93104';
      // var playlists = 'https://api.soundcloud.com/users/14646252/playlists.json?client_id=242a1e223a2af256f37ce3648bb93104';

      // $http.get(playlists)
      //   .success(function(data){

      //   $scope.playlistsData= data

      //   });



      var Track = function(options){
        this.title = options.title;
        this.user = options.user;
        this.id = options.id;
        this.genre = options.genre;
        this.albumArt= options.artwork_url;
        this.description = options.description;
        this.license= options.license;
        this.soundcloudLink = options.permalink_url;
        this.wavePic = options.wavform_url;
        this.url = options.stream_url + '?client_id=242a1e223a2af256f37ce3648bb93104';
        this.play = function(){
          angularPlayer.addTrack($scope.songs);
          angularPlayer.play($scope.songs);

        };
      };

  $http.get(endpoint)
    .success( function(data){
      var track = data[Math.floor(Math.random()*data.length)];

       $scope.songs = new Track(track);


    }).then($timeout(function(){
      $scope.songs.play();
    }, 1000));




        // setTimeout( function(){
        //    $scope.songs.play();
        //   }, 500);


  }]);


}());
