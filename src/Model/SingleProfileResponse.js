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
    define(['ApiClient', 'Model/Profile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Profile'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.SingleProfileResponse = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.Profile);
  }
}(this, function(ApiClient, Profile) {
  'use strict';




  /**
   * The SingleProfileResponse model module.
   * @module Model/SingleProfileResponse
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SingleProfileResponse</code>.
   * @alias module:Model/SingleProfileResponse
   * @class
   * @param message {String} success or failure
   * @param result {module:Model/Profile} 
   * @param status {String} success or failure
   */
  var exports = function(message, result, status) {
    var _this = this;

    _this['message'] = message;
    _this['result'] = result;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>SingleProfileResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/SingleProfileResponse} obj Optional instance to populate.
   * @return {module:Model/SingleProfileResponse} The populated <code>SingleProfileResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = Profile.constructFromObject(data['result']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * success or failure
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {module:Model/Profile} result
   */
  exports.prototype['result'] = undefined;
  /**
   * success or failure
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


