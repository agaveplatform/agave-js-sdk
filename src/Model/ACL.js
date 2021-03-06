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
    root.AgaveJsSdk.ACL = factory(root.AgaveJsSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ACL model module.
   * @module Model/ACL
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ACL</code>.
   * @alias module:Model/ACL
   * @class
   * @param execute {Boolean} can execute
   * @param read {Boolean} can read
   * @param write {Boolean} can write
   */
  var exports = function(execute, read, write) {
    var _this = this;

    _this['execute'] = execute;
    _this['read'] = read;
    _this['write'] = write;
  };

  /**
   * Constructs a <code>ACL</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/ACL} obj Optional instance to populate.
   * @return {module:Model/ACL} The populated <code>ACL</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('execute')) {
        obj['execute'] = ApiClient.convertToType(data['execute'], 'Boolean');
      }
      if (data.hasOwnProperty('read')) {
        obj['read'] = ApiClient.convertToType(data['read'], 'Boolean');
      }
      if (data.hasOwnProperty('write')) {
        obj['write'] = ApiClient.convertToType(data['write'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * can execute
   * @member {Boolean} execute
   */
  exports.prototype['execute'] = undefined;
  /**
   * can read
   * @member {Boolean} read
   */
  exports.prototype['read'] = undefined;
  /**
   * can write
   * @member {Boolean} write
   */
  exports.prototype['write'] = undefined;



  return exports;
}));


