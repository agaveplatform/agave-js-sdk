/**
 * Agave Platform Science API
 * Power your digital lab and reduce the time from theory to discovery using the Agave Science-as-a-Service API Platform. Agave provides hosted services that allow researchers to manage data, conduct experiments, and publish and share results from anywhere at any time.
 *
 * OpenAPI spec version: 2.2.14
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'Model/PostIt', 'Model/PostItRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Model/PostIt'), require('../Model/PostItRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.PostitsApi = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.PostIt, root.AgaveJsSdk.PostItRequest);
  }
}(this, function(ApiClient, PostIt, PostItRequest) {
  'use strict';

  /**
   * Postits service.
   * @module API/PostitsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new PostitsApi. 
   * @alias module:API/PostitsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new PostIt
     * @param {module:Model/PostItRequest} body The PostIt to create.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PostIt} and HTTP response
     */
    this.addPostitWithHttpInfo = function(body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addPostit");
      }


      var pathParams = {
      };
      var queryParams = {
        'naked': opts['naked'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['agaveImplicit'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PostIt;

      return this.apiClient.callApi(
        '/postits/v2/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new PostIt
     * @param {module:Model/PostItRequest} body The PostIt to create.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PostIt}
     */
    this.addPostit = function(body, opts) {
      return this.addPostitWithHttpInfo(body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Immediately invalidates this PostIt URL.
     * @param {String} nonce The nonce of this PostIt URL
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deletePostitWithHttpInfo = function(nonce, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nonce' is set
      if (nonce === undefined || nonce === null) {
        throw new Error("Missing the required parameter 'nonce' when calling deletePostit");
      }


      var pathParams = {
        'nonce': nonce
      };
      var queryParams = {
        'naked': opts['naked'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['agaveImplicit'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/postits/v2/{nonce}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Immediately invalidates this PostIt URL.
     * @param {String} nonce The nonce of this PostIt URL
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deletePostit = function(nonce, opts) {
      return this.deletePostitWithHttpInfo(nonce, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List existing PostIts
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @param {Number} opts.limit The maximum number of results returned from this query (default to 100)
     * @param {Number} opts.offset The number of results skipped in the result set returned from this query (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:Model/PostIt>} and HTTP response
     */
    this.listPostitsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'naked': opts['naked'],
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['agaveImplicit'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [PostIt];

      return this.apiClient.callApi(
        '/postits/v2/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List existing PostIts
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @param {Number} opts.limit The maximum number of results returned from this query (default to 100)
     * @param {Number} opts.offset The number of results skipped in the result set returned from this query (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:Model/PostIt>}
     */
    this.listPostits = function(opts) {
      return this.listPostitsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
