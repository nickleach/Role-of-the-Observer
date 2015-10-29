;( function(){

  'use strict';
  angular.module('App')

  .directive('myPlayer', [function () {
    return {
      restrict: 'E',
      templateUrl: 'js/templates/musicplayer.html'
    };
  }])

  .directive('rotoMusic', [function () {
    return {
      restrict: 'E',
      scope: false,
      templateUrl: 'js/templates/albums.tpl.html',
      link: function (scope, iElement, iAttrs) {

      }
    };
  }])

  .directive('news', [function () {
    return {
      restrict: 'E',
      templateUrl: 'js/templates/news.tpl.html'
    };
  }]);

}());
