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
    define(['ApiClient', 'Model/PostItRequestMethod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PostItRequestMethod'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.PostItRequest = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.PostItRequestMethod);
  }
}(this, function(ApiClient, PostItRequestMethod) {
  'use strict';




  /**
   * The PostItRequest model module.
   * @module Model/PostItRequest
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PostItRequest</code>.
   * @alias module:Model/PostItRequest
   * @class
   * @param url {String} The url that will be invoked when the PostIt is redeemed.
   * @param internalUsername {String} The username of the internal user attached to this PostIt.
   * @param method {module:Model/PostItRequestMethod} 
   * @param lifetime {Number} The maximum lifetime in seconds of this PostIt on this token. Defaults to 2592000 (30 days)
   * @param maxUses {Number} The maximum number of invocations remaining on this PostIt. Defaults to no limit
   * @param noauth {Boolean} If true, the provided url will be called without authentication. Default is false
   */
  var exports = function(url, internalUsername, method, lifetime, maxUses, noauth) {
    var _this = this;

    _this['url'] = url;
    _this['internalUsername'] = internalUsername;
    _this['method'] = method;
    _this['lifetime'] = lifetime;
    _this['maxUses'] = maxUses;
    _this['noauth'] = noauth;
  };

  /**
   * Constructs a <code>PostItRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/PostItRequest} obj Optional instance to populate.
   * @return {module:Model/PostItRequest} The populated <code>PostItRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('internalUsername')) {
        obj['internalUsername'] = ApiClient.convertToType(data['internalUsername'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = PostItRequestMethod.constructFromObject(data['method']);
      }
      if (data.hasOwnProperty('lifetime')) {
        obj['lifetime'] = ApiClient.convertToType(data['lifetime'], 'Number');
      }
      if (data.hasOwnProperty('maxUses')) {
        obj['maxUses'] = ApiClient.convertToType(data['maxUses'], 'Number');
      }
      if (data.hasOwnProperty('noauth')) {
        obj['noauth'] = ApiClient.convertToType(data['noauth'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The url that will be invoked when the PostIt is redeemed.
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * The username of the internal user attached to this PostIt.
   * @member {String} internalUsername
   */
  exports.prototype['internalUsername'] = undefined;
  /**
   * @member {module:Model/PostItRequestMethod} method
   */
  exports.prototype['method'] = undefined;
  /**
   * The maximum lifetime in seconds of this PostIt on this token. Defaults to 2592000 (30 days)
   * @member {Number} lifetime
   */
  exports.prototype['lifetime'] = undefined;
  /**
   * The maximum number of invocations remaining on this PostIt. Defaults to no limit
   * @member {Number} maxUses
   */
  exports.prototype['maxUses'] = undefined;
  /**
   * If true, the provided url will be called without authentication. Default is false
   * @member {Boolean} noauth
   */
  exports.prototype['noauth'] = undefined;



  return exports;
}));


