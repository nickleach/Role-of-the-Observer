;( function(){

  'use strict';
  angular.module('App')

  .controller('HomeCtrl', ['$scope', 'AlbumService',
  function ($scope, AlbumService) {

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
