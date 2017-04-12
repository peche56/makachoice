angular.module('app')
    .controller('MainController', function($scope, postReasonService) {

        $scope.goodreasons = [];
        $scope.evilreasons = [];


        $scope.good = function() {
            if ($scope.value === undefined) {
                $scope.defautval = false;
            } else {

              var reason = {
                  title: $scope.title,
                  texte: $scope.reason,
                  val: $scope.value,
                  goodOrBad: true
              };

                $scope.goodreasons.push(reason);
                $scope.reason = '';
                $scope.defautval = true;
            }
        };


        $scope.evil = function() {
            if ($scope.value === undefined) {
                $scope.defautval = false;
            } else {

              var reason = {
                  title: $scope.title,
                  texte: $scope.reason,
                  val: $scope.value,
                  goodOrBad: false
              };

              $scope.evilreasons.push(reason);
              $scope.reason = '';
              $scope.defautval = true;
              var good= false;
            }
        };

        $scope.edit = true;
        $scope.defautval = true;
        $scope.goodResponse = true;
        $scope.evilResponse = true;


        $scope.submit = function() {
            var totalGood = 0;
            for (var i = 0; i < $scope.goodreasons.length; i++) {
                totalGood += $scope.goodreasons[i].val;

            }

            var totalEvil = 0;
            for (var j = 0; j < $scope.evilreasons.length; j++) {
                totalEvil += $scope.evilreasons[j].val;
            }

            console.log($scope.goodreasons);
            console.log($scope.evilreasons);

            if (totalGood > totalEvil) {

                $scope.goodResponse = false;
                $scope.evilResponse = true;
            } else {

                $scope.evilResponse = false;
                $scope.goodResponse = true;
            }
            postReasonService.create($scope.reasons, $scope.evilreasons).then(function(res) {

            }, function(err) {});


        };
    });
