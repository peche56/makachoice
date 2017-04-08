angular.module('app')
    .controller('MainController', function($scope) {

$scope.goodreasons=[];


$scope.good= function() {
  var reason = {
  texte : $scope.reason,
  val : $scope.value
};
 $scope.goodreasons.push(reason);
$scope.reason='';
};

$scope.evilreasons=[];

$scope.evil= function() {
  var reason = {
    texte : $scope.reason,
    val : $scope.value
  };
  $scope.evilreasons.push(reason);
  $scope.reason='';
};
    });
