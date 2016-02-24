angular.module('app.HomeController', [])

.controller('HomeController', homeController);

function homeController($scope, $state, $cordovaCamera, Reviews, LoginFactory) {
  $scope.username = LoginFactory.username();

  $scope.goToMapList = function() {
    $state.go('selectMap');
  };
}
