(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.lunchInput = '';
    $scope.message = '';
    $scope.color = '';
    $scope.checkLunch = () => {
      if ($scope.lunchInput === '') {
        $scope.message = 'Please enter data first'
        $scope.color = 'red';
        $scope.border = { 'border-color': 'red' };
      } else {

        const split = $scope.lunchInput.split(',').filter(e => Boolean(e.trim()));
        console.log(split);
        if (split.length > 3) {
          $scope.message = 'Too Much!';
        } else {
          $scope.message = 'Enjoy!';
        }
        $scope.color = 'green';
        $scope.border = { 'border-color': 'green' };

      }

    }
  }

})()