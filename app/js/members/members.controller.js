;( function(){

  'use strict';

  angular.module('App')

  .controller('MembersCtrl', ['$scope',
    function ($scope) {

      $scope.members = [

        {
          name: 'Nick Leach',
          instrument: 'Guitar, Vocals, Keyboards',
          description: '',
          image: 'images/nick.jpg'
        },
        {
          name: 'Tyler Rhodes',
          instrument: 'Guitar, Vocals, Keyboards',
          description: '',
          image: 'images/tyler.jpg'
        },
        {
          name: 'Max Leach',
          instrument: 'Drums',
          description: '',
          image: 'images/max.jpg'
        },
        {
          name: 'Nate Epperson',
          instrument: 'Bass',
          description: '',
          image: 'images/nate.jpg'
        }

      ];


  }]);


}());
