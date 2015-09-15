;( function(){

  'use strict';

  angular.module('App')

  .service('AlbumService', ['$http',
    function ($http) {

      var th = this;

      this.getAlbum = function(album){

        return $http.get(album);

      };

      this.showTracks = function(el){

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
      this.hideTracks = function(el){
        if($(el).hasClass('active'))
        th.showTracks(el);
      };
      this.moveAlbum = function(el, direction){
        //TODO make animation

      }

  }]);


}());
