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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.PostIt = factory(root.AgaveJsSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PostIt model module.
   * @module Model/PostIt
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PostIt</code>.
   * @alias module:Model/PostIt
   * @class
   * @param created {Date} The creation date in ISO 8601 format.
   * @param creator {String} The api user who made the PostIt creation request.
   * @param expires {Date} The expiration date in ISO 8601 format.
   * @param internalUsername {String} The username of the internal user attached to this PostIt.
   * @param method {String} The url that will be invoked when the PostIt is redeemed.
   * @param postit {String} The PostIt nonce.
   * @param remainingUses {Number} The number of invocations remaining on this token. 
   * @param url {String} The url that will be invoked when the PostIt is redeemed.
   * @param noauth {Boolean} If true, the provided url will be called without authentication. Default is false
   */
  var exports = function(created, creator, expires, internalUsername, method, postit, remainingUses, url, noauth) {
    var _this = this;

    _this['created'] = created;
    _this['creator'] = creator;
    _this['expires'] = expires;
    _this['internalUsername'] = internalUsername;
    _this['method'] = method;
    _this['postit'] = postit;
    _this['remainingUses'] = remainingUses;
    _this['url'] = url;
    _this['noauth'] = noauth;
  };

  /**
   * Constructs a <code>PostIt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/PostIt} obj Optional instance to populate.
   * @return {module:Model/PostIt} The populated <code>PostIt</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('creator')) {
        obj['creator'] = ApiClient.convertToType(data['creator'], 'String');
      }
      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'Date');
      }
      if (data.hasOwnProperty('internalUsername')) {
        obj['internalUsername'] = ApiClient.convertToType(data['internalUsername'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
      if (data.hasOwnProperty('postit')) {
        obj['postit'] = ApiClient.convertToType(data['postit'], 'String');
      }
      if (data.hasOwnProperty('remainingUses')) {
        obj['remainingUses'] = ApiClient.convertToType(data['remainingUses'], 'Number');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('noauth')) {
        obj['noauth'] = ApiClient.convertToType(data['noauth'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The creation date in ISO 8601 format.
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The api user who made the PostIt creation request.
   * @member {String} creator
   */
  exports.prototype['creator'] = undefined;
  /**
   * The expiration date in ISO 8601 format.
   * @member {Date} expires
   */
  exports.prototype['expires'] = undefined;
  /**
   * The username of the internal user attached to this PostIt.
   * @member {String} internalUsername
   */
  exports.prototype['internalUsername'] = undefined;
  /**
   * The url that will be invoked when the PostIt is redeemed.
   * @member {String} method
   */
  exports.prototype['method'] = undefined;
  /**
   * The PostIt nonce.
   * @member {String} postit
   */
  exports.prototype['postit'] = undefined;
  /**
   * The number of invocations remaining on this token. 
   * @member {Number} remainingUses
   */
  exports.prototype['remainingUses'] = undefined;
  /**
   * The url that will be invoked when the PostIt is redeemed.
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * If true, the provided url will be called without authentication. Default is false
   * @member {Boolean} noauth
   */
  exports.prototype['noauth'] = undefined;



  return exports;
}));


