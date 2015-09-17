;( function(){

  'use strict';
  angular.module('App')

  .controller('HomeCtrl', ['$scope', 'AlbumService',
  function ($scope, AlbumService) {

    var showTracks = function(el){

        var tl = new TimelineMax();

        var item = document.querySelector(el),
        $album_overlay = $('.album-overlay');

        item.classList.toggle('active');

        if (item.classList.contains('active')) {

          $album_overlay.html('Close Tracks');

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

          $album_overlay.html('Click For Tracks');

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

      };


    var $Rotoalbum = document.querySelector('.roto-album'),
    $Quantum = document.querySelector('.quantum'),
    $Three = document.querySelector('.three');

    // Set overlay
    $('.album').html('<div class="album-overlay">Click For Tracks</div>');


    $Quantum.addEventListener('click', function() {
      AlbumService.showTracks('ol.quantum-tracks');
      AlbumService.hideTracks('ol.roto-tracks');
      AlbumService.hideTracks('ol.three-tracks');
    });
    $Rotoalbum.addEventListener('click', function() {
      AlbumService.showTracks('ol.roto-tracks');
      AlbumService.hideTracks('ol.three-tracks');
      AlbumService.hideTracks('ol.quantum-tracks');
      AlbumService.moveAlbum('.artist');

    });
    $Three.addEventListener('click', function() {
      AlbumService.showTracks('ol.three-tracks');
      AlbumService.hideTracks('ol.roto-tracks');
      AlbumService.hideTracks('ol.quantum-tracks');

    });





 AlbumService.getAlbum(ThreeOfAKind).success( function(data){


    $scope.Three = data;
    $scope.ThreeTracks = [];
    data.tracks.forEach( function(track){
      var tTrack = new $scope.Track(track);
      $scope.ThreeTracks.push(tTrack);
    });

    // console.log($scope.ThreeTracks);




 });


  AlbumService.getAlbum(ROTOEp).success( function(data){


    $scope.ROTOAlbum= data;
    $scope.RotoTracks = [];
    data.tracks.forEach( function(track){
      var tTrack = new $scope.Track(track);
      $scope.RotoTracks.push(tTrack);
    });

    // console.log($scope.RotoTracks);





 });
  AlbumService.getAlbum(QuantumState).success( function(data){


    $scope.Quantum= data;
    $scope.QuantumTracks = [];
    data.tracks.forEach( function(track){
      var tTrack = new $scope.Track(track);
      $scope.QuantumTracks.push(tTrack);
    });

    // console.log($scope.Quantum);
    // console.log($scope.QuantumTracks);




 });

 $(document).foundation();


}]);

}());
