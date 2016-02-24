angular.module('app.SelectMapController', [])

.controller('SelectMapController', function($scope, $state, SelectMapFactory, LoginFactory){
  $scope.data = {};
  $scope.username = LoginFactory.username();
  $scope.selectMap = function(map) {
    $state.go('makerMap', {mapID: map}, {reload: true});
    return;
  }

  $scope.$on('$ionicView.loaded', function(){
    $scope.allMaps = SelectMapFactory.displayMaps().then(function(maps){
      $scope.allMaps = maps
    });
  })
});
