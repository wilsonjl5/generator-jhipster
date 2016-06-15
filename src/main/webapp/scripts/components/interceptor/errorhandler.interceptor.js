'use strict';

angular.module('angular2testApp')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('angular2testApp.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });