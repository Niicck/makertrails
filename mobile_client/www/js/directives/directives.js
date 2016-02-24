angular.module('app.MakerMapController')

.directive('mapFooter', mapFooter);

function mapFooter() {
  var template = '<div></div>';
  $scope.$watch($scope.collision.contact, function(contact) {
    if (contact) {
      template = '<ion-footer-bar align-title="left" class="bar-assertive">' +
        '<h1 class="title">Title!</h1>' +
        '<button class="button button-block button-stable"
        ng-click="learnMore()">'+
          'CLICK HERE!!!!' +
        '</button>' +
      '</ion-footer-bar>'
    }
  }
  return {
    restrict: 'E',
    replace: true,
    scope: true,
    template: template
  }
}
