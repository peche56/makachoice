angular.module('app')
    .service('postReasonService', function($http) {
        return {
            create: function(reason) {
                return $http.post('/reasons', { reason: reason });
            },
        };
    });
