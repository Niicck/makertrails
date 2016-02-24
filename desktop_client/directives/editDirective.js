angular.module("App") //placeholder name
.directive("trailEdit", trailEdit)

function trailEdit(MapFactory){

  return: {
    restrict: "E",
    scope: true,
    require: "ngModel",
    replace: true,
    templateUrl: editLocation.html
  }
}
