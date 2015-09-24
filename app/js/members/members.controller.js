;( function(){

  'use strict';

  angular.module('App')

  .controller('MembersCtrl', ['$scope',
    function ($scope) {

      $scope.members = [

        {
          name: 'Nick Leach',
          instrument: 'Guitar, Vocals, Keyboards',
          description: ''
        },
        {
          name: 'Tyler Rhodes',
          instrument: 'Guitar, Vocals, Keyboards',
          description: ''
        },
        {
          name: 'Max Leach',
          instrument: 'Drums',
          description: ''
        },
        {
          name: 'Nate Epperson',
          instrument: 'Bass',
          description: ''
        }

      ];


  }]);


}());
