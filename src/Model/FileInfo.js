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
    define(['ApiClient', 'Model/FileType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileType'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.FileInfo = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.FileType);
  }
}(this, function(ApiClient, FileType) {
  'use strict';




  /**
   * The FileInfo model module.
   * @module Model/FileInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>FileInfo</code>.
   * Basic metadata description of a remote file or folder
   * @alias module:Model/FileInfo
   * @class
   * @param format {String} The file type of the file.
   * @param lastModified {Date} The date this file was last modified in ISO 8601 format.
   * @param length {Number} The length of the file/folder.
   * @param mimeType {String} The mime type of the file/folder. If unknown, it defaults to application/binary.
   * @param name {String} The name of the file/folder.
   * @param path {String} The absolute path to the file/folder.
   * @param permissions {String} The remote system permission of the invoking user on the file/folder.
   * @param system {String} The id of the system where this file lives.
   * @param type {module:Model/FileType} 
   */
  var exports = function(format, lastModified, length, mimeType, name, path, permissions, system, type) {
    var _this = this;

    _this['format'] = format;
    _this['lastModified'] = lastModified;
    _this['length'] = length;
    _this['mimeType'] = mimeType;
    _this['name'] = name;
    _this['path'] = path;
    _this['permissions'] = permissions;
    _this['system'] = system;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>FileInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/FileInfo} obj Optional instance to populate.
   * @return {module:Model/FileInfo} The populated <code>FileInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
      }
      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'Number');
      }
      if (data.hasOwnProperty('mimeType')) {
        obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('permissions')) {
        obj['permissions'] = ApiClient.convertToType(data['permissions'], 'String');
      }
      if (data.hasOwnProperty('system')) {
        obj['system'] = ApiClient.convertToType(data['system'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = FileType.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * The file type of the file.
   * @member {String} format
   */
  exports.prototype['format'] = undefined;
  /**
   * The date this file was last modified in ISO 8601 format.
   * @member {Date} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * The length of the file/folder.
   * @member {Number} length
   */
  exports.prototype['length'] = undefined;
  /**
   * The mime type of the file/folder. If unknown, it defaults to application/binary.
   * @member {String} mimeType
   */
  exports.prototype['mimeType'] = undefined;
  /**
   * The name of the file/folder.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The absolute path to the file/folder.
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * The remote system permission of the invoking user on the file/folder.
   * @member {String} permissions
   */
  exports.prototype['permissions'] = undefined;
  /**
   * The id of the system where this file lives.
   * @member {String} system
   */
  exports.prototype['system'] = undefined;
  /**
   * @member {module:Model/FileType} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


