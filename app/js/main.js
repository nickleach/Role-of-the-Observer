;( function(){

  'use strict';


angular.module('App', ['ui.router', 'angularSoundManager', 'ngMaterial'])

.constant('API', {
    URL: 'https://floating-shelf-4330.herokuapp.com/',
    CONFIG: {
      headers:{
    }
  }
})

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
    .state('band.member', {
      url:'/:id',
      templateUrl:'js/members/singleMember.tpl.html',
      controller: 'MemberCtrl'
    })
    .state('band.member.update', {
      url:'/update',
      templateUrl:'js/members/memberUpdate.tpl.html',
      controller: 'MemberCtrl'
    })
    .state('albums', {
      url:'/music',
      templateUrl: 'js/albums/album.tpl.html',
      controller: 'AlbumCtrl'
    })
    .state('admin', {
      url:'/p1n3s7r4w',
      templateUrl: 'js/admin/login.tpl.html',
      controller: 'AdminCtrl'
    });

  }])
.controller('MainController', ['$scope', 'angularPlayer', '$timeout',
  function ($scope, angularPlayer, $timeout) {

    // Play function from select switch
    $scope.playMe = function(track){
      $scope.currentPlaying = angularPlayer.currentTrackData();

    };

    // Minimize player function
   $scope.minimize = function(e){
      $('my-player').toggleClass('player-minimize');
      if($('my-player').hasClass('player-minimize')){
        $('.minimize').html('launch');
      }else {
        $('.minimize').html('call_received');
      }

    };
      // Track Constructor
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

      };

      // Load album/play track
    $scope.loadTrack = function(track, album){
      $('my-player').removeClass('played');

      $scope.currentAlbum = album;

      $timeout(function() {

        if(!$scope.$$phase) {

            $scope.$apply();

            album.forEach(function(t){

              if(!_.contains($scope.playlist, t))
              angularPlayer.addTrack(t);

            });

        }

          angularPlayer.playTrack(track.id);
          $scope.currentPlaying = angularPlayer.currentTrackData();

      }, 500);


    };

}]);


}());
