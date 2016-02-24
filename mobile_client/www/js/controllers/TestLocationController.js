angular.module('app.TestLocationController', [])

.controller('TestLocationController', locationController);

function locationController($scope, $stateParams){
  $scope.location = $stateParams.currentLocation;
  $scope.map = $stateParams.currentMap;
};
