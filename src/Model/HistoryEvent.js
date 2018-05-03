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
    define(['ApiClient', 'Model/TransferTaskProgressSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TransferTaskProgressSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.HistoryEvent = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.TransferTaskProgressSummary);
  }
}(this, function(ApiClient, TransferTaskProgressSummary) {
  'use strict';




  /**
   * The HistoryEvent model module.
   * @module Model/HistoryEvent
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>HistoryEvent</code>.
   * A generic history event representing a change on a resource or one of its associations.
   * @alias module:Model/HistoryEvent
   * @class
   * @param created {Date} The date of the event.
   * @param description {String} A brief description of the event details.
   * @param status {String} The status of the file/folder after this event.
   */
  var exports = function(created, description, status) {
    var _this = this;

    _this['created'] = created;
    _this['description'] = description;
    _this['status'] = status;

  };

  /**
   * Constructs a <code>HistoryEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/HistoryEvent} obj Optional instance to populate.
   * @return {module:Model/HistoryEvent} The populated <code>HistoryEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('progress')) {
        obj['progress'] = TransferTaskProgressSummary.constructFromObject(data['progress']);
      }
    }
    return obj;
  }

  /**
   * The date of the event.
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * A brief description of the event details.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The status of the file/folder after this event.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:Model/TransferTaskProgressSummary} progress
   */
  exports.prototype['progress'] = undefined;



  return exports;
}));

