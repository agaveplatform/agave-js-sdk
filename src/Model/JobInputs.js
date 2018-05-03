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
    root.AgaveJsSdk.JobInputs = factory(root.AgaveJsSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JobInputs model module.
   * @module Model/JobInputs
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>JobInputs</code>.
   * @alias module:Model/JobInputs
   * @class
   * @param parameter1 {String} One or more inputs identified in the description of the app you're running. 
   */
  var exports = function(parameter1) {
    var _this = this;

    _this['parameter1'] = parameter1;
  };

  /**
   * Constructs a <code>JobInputs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/JobInputs} obj Optional instance to populate.
   * @return {module:Model/JobInputs} The populated <code>JobInputs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('parameter1')) {
        obj['parameter1'] = ApiClient.convertToType(data['parameter1'], 'String');
      }
    }
    return obj;
  }

  /**
   * One or more inputs identified in the description of the app you're running. 
   * @member {String} parameter1
   */
  exports.prototype['parameter1'] = undefined;



  return exports;
}));


