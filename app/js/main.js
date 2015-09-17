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
.controller('MainController', ['$scope', 'angularPlayer', '$timeout',
  function ($scope, angularPlayer, $timeout) {
      // Music Stuff
  $scope.Track = function(options){
        this.title = options.title;
        this.user = options.user;
        this.id = options.id;
        this.genre = options.genre;
        this.albumArt= options.artwork_url;
        this.description = options.description;
        this.license= options.license;
        this.soundcloudLink = options.permalink_url;
        this.wavePic = options.wavform_url;
        this.url = options.stream_url + '?client_id='+ clientId;
        this.play = function(){
          angularPlayer.addTrack($scope.songs);
          angularPlayer.play($scope.songs);

        };
      };

    $scope.loadTrack = function(track, album){

      album.forEach( function(t){
        angularPlayer.addTrack(t);

      });
      $timeout(function() {
              angularPlayer.playTrack(track.id);
              $scope.currentPlaying = angularPlayer.currentTrackData();
      }, 500);


    };

}])


}());
