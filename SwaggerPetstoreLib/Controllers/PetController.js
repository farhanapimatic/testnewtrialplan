/**
 * SwaggerPetstoreLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('SwaggerPetstoreLib')
    .factory('PetController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        'OAuthManager',
        PetController
    ]);

    function PetController($q, Configuration, Servers, HttpClient, APIHelper, BaseController, OAuthManager) {
        return {
            /**
             * Add a new pet to the store
             *
             * @param {Pet} body Pet object that needs to be added to the store
             *
             * @return {promise<Void>}
             */
            addPet: function (body) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/pet';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'content-type': 'application/json; charset=utf-8'
                };

                // Remove null values
                APIHelper.cleanObject(body);

                var oauthTokenPromise = OAuthManager.isTokenRetrievedAndSet();
                oauthTokenPromise.then(function(resolve) {
                    _headers.Authorization = 'Bearer ' + Configuration.oAuthToken.accessToken;
                }, function(reject) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    headers: _headers,
                    body: body.toJSON()
                };
                
                oauthTokenPromise.then(function(success) {
                    var _response = new HttpClient(_config);
                    
                    //process response
                    _response.then(function success(_result) {
                        _deffered.resolve(_result);
                    }, function error(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code === 405) {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'Invalid input',
                                errorCode: 405,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'HTTP Response Not OK',
                                errorCode: _result.code,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        }
                    });
                }, function(err) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                return _deffered.promise;
            },
            /**
             * Update an existing pet
             *
             * @param {Pet} body Pet object that needs to be added to the store
             *
             * @return {promise<Void>}
             */
            updatePet: function (body) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/pet';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'content-type': 'application/json; charset=utf-8'
                };

                // Remove null values
                APIHelper.cleanObject(body);

                var oauthTokenPromise = OAuthManager.isTokenRetrievedAndSet();
                oauthTokenPromise.then(function(resolve) {
                    _headers.Authorization = 'Bearer ' + Configuration.oAuthToken.accessToken;
                }, function(reject) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'PUT',
                    queryUrl: _queryUrl,
                    headers: _headers,
                    body: body.toJSON()
                };
                
                oauthTokenPromise.then(function(success) {
                    var _response = new HttpClient(_config);
                    
                    //process response
                    _response.then(function success(_result) {
                        _deffered.resolve(_result);
                    }, function error(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code === 400) {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'Invalid ID supplied',
                                errorCode: 400,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        } else if (_result.code === 404) {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'Pet not found',
                                errorCode: 404,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        } else if (_result.code === 405) {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'Validation exception',
                                errorCode: 405,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'HTTP Response Not OK',
                                errorCode: _result.code,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        }
                    });
                }, function(err) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                return _deffered.promise;
            },
            /**
             * Multiple status values can be provided with comma separated strings
             *
             * @param {array} status Status values that need to be considered for filter
             *
             * @return {promise<Pet>}
             */
            findPetsByStatus: function (status) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/pet/findByStatus';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'status': (status !== null) ? status : null
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json'
                };

                var oauthTokenPromise = OAuthManager.isTokenRetrievedAndSet();
                oauthTokenPromise.then(function(resolve) {
                    _headers.Authorization = 'Bearer ' + Configuration.oAuthToken.accessToken;
                }, function(reject) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                oauthTokenPromise.then(function(success) {
                    var _response = new HttpClient(_config);
                    
                    //process response
                    _response.then(function success(_result) {
                        var parsed = _result.body;
                        parsed = parsed.map(function(model){
                            return BaseController.getObjectMapper().mapObject(model, 'Pet');
                        });
                        _result.body = parsed;
                        _deffered.resolve(_result);
                    }, function error(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code === 400) {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'Invalid status value',
                                errorCode: 400,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'HTTP Response Not OK',
                                errorCode: _result.code,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        }
                    });
                }, function(err) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                return _deffered.promise;
            },
            /**
             * Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
             *
             * @param {array} tags Tags to filter by
             *
             * @return {promise<Pet>}
             */
            findPetsByTags: function (tags) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/pet/findByTags';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'tags': tags
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json'
                };

                var oauthTokenPromise = OAuthManager.isTokenRetrievedAndSet();
                oauthTokenPromise.then(function(resolve) {
                    _headers.Authorization = 'Bearer ' + Configuration.oAuthToken.accessToken;
                }, function(reject) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                oauthTokenPromise.then(function(success) {
                    var _response = new HttpClient(_config);
                    
                    //process response
                    _response.then(function success(_result) {
                        var parsed = _result.body;
                        parsed = parsed.map(function(model){
                            return BaseController.getObjectMapper().mapObject(model, 'Pet');
                        });
                        _result.body = parsed;
                        _deffered.resolve(_result);
                    }, function error(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code === 400) {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'Invalid tag value',
                                errorCode: 400,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'HTTP Response Not OK',
                                errorCode: _result.code,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        }
                    });
                }, function(err) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                return _deffered.promise;
            },
            /**
             * Returns a single pet
             *
             * @param {long} petId ID of pet to return
             *
             * @return {promise<Pet>}
             */
            getPetById: function (petId) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/pet/{petId}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'petId': petId
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json'
                };

                var oauthTokenPromise = OAuthManager.isTokenRetrievedAndSet();
                oauthTokenPromise.then(function(resolve) {
                    _headers.Authorization = 'Bearer ' + Configuration.oAuthToken.accessToken;
                }, function(reject) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                oauthTokenPromise.then(function(success) {
                    var _response = new HttpClient(_config);
                    
                    //process response
                    _response.then(function success(_result) {
                        var parsed = _result.body;
                        parsed = BaseController.getObjectMapper().mapObject(parsed, 'Pet');
                        _result.body = parsed;
                        _deffered.resolve(_result);
                    }, function error(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code === 400) {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'Invalid ID supplied',
                                errorCode: 400,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        } else if (_result.code === 404) {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'Pet not found',
                                errorCode: 404,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'HTTP Response Not OK',
                                errorCode: _result.code,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        }
                    });
                }, function(err) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                return _deffered.promise;
            },
            /**
             * Updates a pet in the store with form data
             *
             * @param {long} petId ID of pet that needs to be updated
             * @param {string|null} name [Optional] Updated name of the pet
             * @param {string|null} status [Optional] Updated status of the pet
             *
             * @return {promise<Void>}
             */
            updatePetWithForm: function (petId, name, status) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/pet/{petId}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'petId': petId
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {};
                // prepare form data
                var _form = {
                    'name': name,
                    'status': status
                };

                // Remove null values
                APIHelper.cleanObject(_form);

                var oauthTokenPromise = OAuthManager.isTokenRetrievedAndSet();
                oauthTokenPromise.then(function(resolve) {
                    _headers.Authorization = 'Bearer ' + Configuration.oAuthToken.accessToken;
                }, function(reject) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    headers: _headers,
                    form: _form,
                };
                
                oauthTokenPromise.then(function(success) {
                    var _response = new HttpClient(_config);
                    
                    //process response
                    _response.then(function success(_result) {
                        _deffered.resolve(_result);
                    }, function error(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code === 405) {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'Invalid input',
                                errorCode: 405,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'HTTP Response Not OK',
                                errorCode: _result.code,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        }
                    });
                }, function(err) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                return _deffered.promise;
            },
            /**
             * Deletes a pet
             *
             * @param {long} petId Pet id to delete
             * @param {string|null} apiKey [Optional] TODO: type description here
             *
             * @return {promise<Void>}
             */
            deletePet: function (petId, apiKey) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/pet/{petId}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'petId': petId
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'api_key': apiKey
                };

                var oauthTokenPromise = OAuthManager.isTokenRetrievedAndSet();
                oauthTokenPromise.then(function(resolve) {
                    _headers.Authorization = 'Bearer ' + Configuration.oAuthToken.accessToken;
                }, function(reject) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'DELETE',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                oauthTokenPromise.then(function(success) {
                    var _response = new HttpClient(_config);
                    
                    //process response
                    _response.then(function success(_result) {
                        _deffered.resolve(_result);
                    }, function error(_result){
                        // Error handling for custom HTTP status codes
                        if (_result.code === 400) {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'Invalid ID supplied',
                                errorCode: 400,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        } else if (_result.code === 404) {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'Pet not found',
                                errorCode: 404,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        } else {
                            _deffered.reject(APIHelper.appendContext({
                                errorMessage:'HTTP Response Not OK',
                                errorCode: _result.code,
                                errorResponse: _result.message
                            }, _result.getContext()));
                        }
                    });
                }, function(err) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                return _deffered.promise;
            },
            /**
             * uploads an image
             *
             * @param {long} petId ID of pet to update
             * @param {string|null} additionalMetadata [Optional] Additional data to pass to server
             * @param {string|null} file [Optional] file to upload
             *
             * @return {promise<ApiResponse>}
             */
            uploadFile: function (petId, additionalMetadata, file) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/pet/{petId}/uploadImage';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'petId': petId
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json'
                };

                // prepare form data
                var _formDataDictionary = {
                    'additionalMetadata': additionalMetadata,
                    'file': file
                };

                // Remove null values
                APIHelper.cleanObject(_formDataDictionary);

                var oauthTokenPromise = OAuthManager.isTokenRetrievedAndSet();
                oauthTokenPromise.then(function(resolve) {
                    _headers.Authorization = 'Bearer ' + Configuration.oAuthToken.accessToken;
                }, function(reject) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    headers: _headers,
                    formData: _formDataDictionary,
                };
                
                oauthTokenPromise.then(function(success) {
                    var _response = new HttpClient(_config);
                    
                    //process response
                    _response.then(function success(_result) {
                        var parsed = _result.body;
                        parsed = BaseController.getObjectMapper().mapObject(parsed, 'ApiResponse');
                        _result.body = parsed;
                        _deffered.resolve(_result);
                    }, function error(_result){
                        // Error handling for custom HTTP status codes
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'HTTP Response Not OK',
                            errorCode: _result.code,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    });
                }, function(err) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                return _deffered.promise;
            }
        };
    }

}(angular));
