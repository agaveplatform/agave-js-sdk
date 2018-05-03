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
    root.AgaveJsSdk.PermissionStanza = factory(root.AgaveJsSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PermissionStanza model module.
   * @module Model/PermissionStanza
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PermissionStanza</code>.
   * A minimal permission stanza defining read and write permissions
   * @alias module:Model/PermissionStanza
   * @class
   * @param read {Boolean} Is the resource readable
   * @param write {Boolean} Is the resource writable
   */
  var exports = function(read, write) {
    var _this = this;

    _this['read'] = read;
    _this['write'] = write;
  };

  /**
   * Constructs a <code>PermissionStanza</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/PermissionStanza} obj Optional instance to populate.
   * @return {module:Model/PermissionStanza} The populated <code>PermissionStanza</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
   * Is the resource readable
   * @member {Boolean} read
   * @default false
   */
  exports.prototype['read'] = false;
  /**
   * Is the resource writable
   * @member {Boolean} write
   * @default false
   */
  exports.prototype['write'] = false;



  return exports;
}));


