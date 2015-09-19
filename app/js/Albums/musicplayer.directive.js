;( function(){

  'use strict';
  angular.module('App')

  .directive('myPlayer', [function () {
    return {
      restrict: 'E',
      templateUrl: 'js/home/musicplayer.html',
      link: function (scope, iElement, iAttrs) {

      }
    };
  }]);

}());
