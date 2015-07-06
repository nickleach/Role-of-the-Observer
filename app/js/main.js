;( function(){

  'use strict';


angular.module('App', ['ui.router'])

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

.controller('HomeCtrl', ['$scope',
  function ($scope) {
 $(document).foundation();
}]);

}());
