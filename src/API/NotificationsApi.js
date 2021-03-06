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
    define(['ApiClient', 'Model/Notification', 'Model/NotificationRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Model/Notification'), require('../Model/NotificationRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.NotificationsApi = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.Notification, root.AgaveJsSdk.NotificationRequest);
  }
}(this, function(ApiClient, Notification, NotificationRequest) {
  'use strict';

  /**
   * Notifications service.
   * @module API/NotificationsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new NotificationsApi. 
   * @alias module:API/NotificationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add new notification.
     * @param {module:Model/NotificationRequest} body The notification to add.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/Notification} and HTTP response
     */
    this.addNotificationWithHttpInfo = function(body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addNotification");
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
      var returnType = Notification;

      return this.apiClient.callApi(
        '/notifications/v2/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add new notification.
     * @param {module:Model/NotificationRequest} body The notification to add.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/Notification}
     */
    this.addNotification = function(body, opts) {
      return this.addNotificationWithHttpInfo(body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove notification from the system.
     * @param {String} uuid The uuid of the notification item
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteNotificationWithHttpInfo = function(uuid, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteNotification");
      }


      var pathParams = {
        'uuid': uuid
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
        '/notifications/v2/{uuid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove notification from the system.
     * @param {String} uuid The uuid of the notification item
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteNotification = function(uuid, opts) {
      return this.deleteNotificationWithHttpInfo(uuid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve notification.
     * @param {String} uuid The uuid of the notification item
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/Notification} and HTTP response
     */
    this.getNotificationWithHttpInfo = function(uuid, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getNotification");
      }


      var pathParams = {
        'uuid': uuid
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
      var returnType = Notification;

      return this.apiClient.callApi(
        '/notifications/v2/{uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve notification.
     * @param {String} uuid The uuid of the notification item
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/Notification}
     */
    this.getNotification = function(uuid, opts) {
      return this.getNotificationWithHttpInfo(uuid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve notification for a specific resource.
     * @param {String} associatedUuid The uuid of the associated resource. All notifications for this resource visible to the user will be returned.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @param {Number} opts.limit The maximum number of results returned from this query (default to 100)
     * @param {Number} opts.offset The number of results skipped in the result set returned from this query (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:Model/Notification>} and HTTP response
     */
    this.listNotificationsWithHttpInfo = function(associatedUuid, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'associatedUuid' is set
      if (associatedUuid === undefined || associatedUuid === null) {
        throw new Error("Missing the required parameter 'associatedUuid' when calling listNotifications");
      }


      var pathParams = {
      };
      var queryParams = {
        'associatedUuid': associatedUuid,
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
      var returnType = [Notification];

      return this.apiClient.callApi(
        '/notifications/v2/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve notification for a specific resource.
     * @param {String} associatedUuid The uuid of the associated resource. All notifications for this resource visible to the user will be returned.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @param {Number} opts.limit The maximum number of results returned from this query (default to 100)
     * @param {Number} opts.offset The number of results skipped in the result set returned from this query (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:Model/Notification>}
     */
    this.listNotifications = function(associatedUuid, opts) {
      return this.listNotificationsWithHttpInfo(associatedUuid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update existing notification.
     * @param {String} uuid The uuid of the notification item
     * @param {module:Model/NotificationRequest} body The notification to update.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/Notification} and HTTP response
     */
    this.updateNotificationWithHttpInfo = function(uuid, body, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling updateNotification");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateNotification");
      }


      var pathParams = {
        'uuid': uuid
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
      var returnType = Notification;

      return this.apiClient.callApi(
        '/notifications/v2/{uuid}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update existing notification.
     * @param {String} uuid The uuid of the notification item
     * @param {module:Model/NotificationRequest} body The notification to update.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.naked  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/Notification}
     */
    this.updateNotification = function(uuid, body, opts) {
      return this.updateNotificationWithHttpInfo(uuid, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
