'use strict';

angular.module('angular2testApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


