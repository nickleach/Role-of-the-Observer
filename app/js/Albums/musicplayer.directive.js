;( function(){

  'use strict';
  angular.module('App')

  .directive('musicPlayer', [function () {
    return {
      restrict: 'E',
      templateUrl: 'js/home/musicplayer.html',
      link: function (scope, iElement, iAttrs) {

      }
    };
  }]);

}());
