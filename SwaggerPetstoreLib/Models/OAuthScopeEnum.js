/**
 * SwaggerPetstoreLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('SwaggerPetstoreLib')
    .factory('OAuthScopeEnum', [OAuthScopeEnumModel]);

    function OAuthScopeEnumModel() {
        return {
            //modify pets in your account
            WRITEPETS: 'write:pets',
    
            //read your pets
            READPETS: 'read:pets'
        };
    }

}(angular));
