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
    root.AgaveJsSdk.TagHistory = factory(root.AgaveJsSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TagHistory model module.
   * @module Model/TagHistory
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TagHistory</code>.
   * Individual tag event
   * @alias module:Model/TagHistory
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>TagHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/TagHistory} obj Optional instance to populate.
   * @return {module:Model/TagHistory} The populated <code>TagHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('event')) {
        obj['event'] = ApiClient.convertToType(data['event'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * uuid of the referenced resource
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * event that occurred on this tag
   * @member {String} event
   */
  exports.prototype['event'] = undefined;
  /**
   * description of the event which occurred
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * unique identifier of the event
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


