angular.module('app')
    .service('postChoiceService', function($http) {
        return {
            create: function(good, evil) {
                return $http.post('/choices', {choice : good, evil});
            },
        };
    });
