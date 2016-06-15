 'use strict';

angular.module('angular2testApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-angular2testApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-angular2testApp-params')});
                }
                return response;
            }
        };
    });
