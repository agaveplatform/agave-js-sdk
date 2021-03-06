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
    define(['ApiClient', 'Model/TenantContact'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TenantContact'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.Tenant = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.TenantContact);
  }
}(this, function(ApiClient, TenantContact) {
  'use strict';




  /**
   * The Tenant model module.
   * @module Model/Tenant
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Tenant</code>.
   * Tenant organization details
   * @alias module:Model/Tenant
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Tenant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/Tenant} obj Optional instance to populate.
   * @return {module:Model/Tenant} The populated <code>Tenant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('baseUrl')) {
        obj['baseUrl'] = ApiClient.convertToType(data['baseUrl'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('lastUpdated')) {
        obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Date');
      }
      if (data.hasOwnProperty('contact')) {
        obj['contact'] = TenantContact.constructFromObject(data['contact']);
      }
    }
    return obj;
  }

  /**
   * uuid of the tenant
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * human readable name of the tenant organization
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The base url for all tenant requests. This should always be SSL enabled.
   * @member {String} baseUrl
   */
  exports.prototype['baseUrl'] = undefined;
  /**
   * The code by which this tenant is known, eg. agave.prod
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * When the tenant was created in ISO8601 format
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * When the tenant was last updated in ISO8601 format
   * @member {Date} lastUpdated
   */
  exports.prototype['lastUpdated'] = undefined;
  /**
   * @member {module:Model/TenantContact} contact
   */
  exports.prototype['contact'] = undefined;



  return exports;
}));


