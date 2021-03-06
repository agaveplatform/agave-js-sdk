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
    define(['ApiClient', 'Model/Tenant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Model/Tenant'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.TenantsApi = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.Tenant);
  }
}(this, function(ApiClient, Tenant) {
  'use strict';

  /**
   * Tenants service.
   * @module API/TenantsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new TenantsApi. 
   * @alias module:API/TenantsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Resolve Tenant details
     * Returns information about the tenant with the given code or id
     * @param {String} codeOrUuid Unique tenant code or id of the tenant
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects (default to *)
     * @param {Boolean} opts.naked If true, the response wrapper is stripped and the raw object is returned. (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/Tenant} and HTTP response
     */
    this.getTenantDetailsWithHttpInfo = function(codeOrUuid, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'codeOrUuid' is set
      if (codeOrUuid === undefined || codeOrUuid === null) {
        throw new Error("Missing the required parameter 'codeOrUuid' when calling getTenantDetails");
      }


      var pathParams = {
        'codeOrUuid': codeOrUuid
      };
      var queryParams = {
        'filter': opts['filter'],
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
      var returnType = Tenant;

      return this.apiClient.callApi(
        '/tenants/v2/{codeOrUuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Resolve Tenant details
     * Returns information about the tenant with the given code or id
     * @param {String} codeOrUuid Unique tenant code or id of the tenant
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects (default to *)
     * @param {Boolean} opts.naked If true, the response wrapper is stripped and the raw object is returned. (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/Tenant}
     */
    this.getTenantDetails = function(codeOrUuid, opts) {
      return this.getTenantDetailsWithHttpInfo(codeOrUuid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all active tenants
     * Lists all active tenants publicly available
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects (default to *)
     * @param {Boolean} opts.naked If true, the response wrapper is stripped and the raw object is returned. (default to true)
     * @param {Number} opts.limit The maximum number of results returned from this query (default to 100)
     * @param {Number} opts.offset The number of results skipped in the result set returned from this query (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:Model/Tenant>} and HTTP response
     */
    this.listTenantsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
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
      var returnType = [Tenant];

      return this.apiClient.callApi(
        '/tenants/v2', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List all active tenants
     * Lists all active tenants publicly available
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects (default to *)
     * @param {Boolean} opts.naked If true, the response wrapper is stripped and the raw object is returned. (default to true)
     * @param {Number} opts.limit The maximum number of results returned from this query (default to 100)
     * @param {Number} opts.offset The number of results skipped in the result set returned from this query (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:Model/Tenant>}
     */
    this.listTenants = function(opts) {
      return this.listTenantsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
