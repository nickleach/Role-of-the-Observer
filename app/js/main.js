;( function(){

  'use strict';


angular.module('App', ['ui.router', 'angularSoundManager'])

.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise(('/'));

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/templates/home.tpl.html',
      controller: 'HomeCtrl'
    })
    .state('band', {
      url:'/band',
      templateUrl: 'js/members/members.tpl.html',
      controller: 'MembersCtrl'
    })
    .state('albums', {
      url:'/music',
      templateUrl: 'js/albums/album.tpl.html',
      controller: 'AlbumCtrl'
    });

  }])

.controller('HomeCtrl', ['$scope', 'AlbumService',
  function ($scope, AlbumService) {


    var tl = new TimelineMax(),
    $Rotoalbum = document.querySelector('.roto-album'),
    $Quantum = document.querySelector('.quantum'),
    $Three = document.querySelector('.three');

    // Set overlay
    $('.album').html('<div class="album-overlay">Click For Tracks</div>');
    function toggle(el) {

      var item = document.querySelector(el),
      $album_overlay = document.querySelector('.album-overlay');

      item.classList.toggle('active');

      if (item.classList.contains('active')) {

        $album_overlay.innerHTML = 'Close Tracks';

        tl.to([item], 0.375, {
            scale: 1,
            x: 16
          })
          .staggerTo([item], 1, {
            x: 0,
            boxShadow: '1px 1px 2px rgba(0,0,0,0.12)',
            ease: Bounce.easeOut
          }, 0.02)
          .staggerFromTo(item.children, 1, {
            opacity: 0,
            x: -100
          }, {
            opacity: 1,
            x: 0
          }, 0.0575, "-=2");

      } else {

        $album_overlay.innerHTML = 'Click For Tracks';

        tl.to([item], 0.25, {
            scale: 1,
            x: 10
          })
          .staggerTo([item], 0.25, {
            scale: 0,
            x: 0,
            ease: Cubic.easeIn
          });

      }
    }

    $Quantum.addEventListener('click', function() {
      toggle('ol.quantum-tracks');
    });
    $Rotoalbum.addEventListener('click', function() {
      toggle('ol.roto-tracks');
    });
    $Three.addEventListener('click', function() {
      toggle('ol.three-tracks');
    });



  // Music Stuff
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
        this.url = options.stream_url + clientId;
        this.play = function(){
          angularPlayer.addTrack($scope.songs);
          angularPlayer.play($scope.songs);

        };
      };

 AlbumService.getAlbum(ThreeOfAKind).success( function(data){


    $scope.Three = data;
    $scope.ThreeTracks = [];
    data.tracks.forEach( function(track){
      var tTrack = new Track(track);
      $scope.ThreeTracks.push(tTrack);
    });

    console.log($scope.ThreeTracks);




 });


  AlbumService.getAlbum(ROTOEp).success( function(data){


    $scope.ROTOAlbum= data;
    $scope.RotoTracks = [];
    data.tracks.forEach( function(track){
      var tTrack = new Track(track);
      $scope.RotoTracks.push(tTrack);
    });

    console.log($scope.RotoTracks);





 });
  AlbumService.getAlbum(QuantumState).success( function(data){


    $scope.Quantum= data;
    $scope.QuantumTracks = [];
    data.tracks.forEach( function(track){
      var tTrack = new Track(track);
      $scope.QuantumTracks.push(tTrack);
    });

    console.log($scope.Quantum);
    console.log($scope.QuantumTracks);




 });

 $(document).foundation();


}]);

}());
