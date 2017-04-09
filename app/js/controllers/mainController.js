angular.module('app')
    .controller('MainController', function($scope, postChoiceService) {

$scope.goodreasons=[];


$scope.good= function() {
  var reason = {
  texte : $scope.reason,
  val : $scope.value
};
 $scope.goodreasons.push(reason);
$scope.reason='';
console.log(reason);
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

$scope.submit= function () {

  postChoiceService.create($scope.goodreasons, $scope.evilreasons).then(function(res) {

                      }, function(err) {});

};





    });
