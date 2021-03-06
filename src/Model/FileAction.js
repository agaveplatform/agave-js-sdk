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
    define(['ApiClient', 'Model/FileManagementActionType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileManagementActionType'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.FileAction = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.FileManagementActionType);
  }
}(this, function(ApiClient, FileManagementActionType) {
  'use strict';




  /**
   * The FileAction model module.
   * @module Model/FileAction
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>FileAction</code>.
   * A generic action to take on a file item
   * @alias module:Model/FileAction
   * @class
   * @param action {module:Model/FileManagementActionType} 
   * @param path {String} Name of new directory or target file or folder.
   */
  var exports = function(action, path) {
    var _this = this;

    _this['action'] = action;
    _this['path'] = path;
  };

  /**
   * Constructs a <code>FileAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/FileAction} obj Optional instance to populate.
   * @return {module:Model/FileAction} The populated <code>FileAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = FileManagementActionType.constructFromObject(data['action']);
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:Model/FileManagementActionType} action
   */
  exports.prototype['action'] = undefined;
  /**
   * Name of new directory or target file or folder.
   * @member {String} path
   */
  exports.prototype['path'] = undefined;



  return exports;
}));


