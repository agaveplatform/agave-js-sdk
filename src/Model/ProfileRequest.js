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
    define(['ApiClient', 'Model/Gender'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Gender'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.ProfileRequest = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.Gender);
  }
}(this, function(ApiClient, Gender) {
  'use strict';




  /**
   * The ProfileRequest model module.
   * @module Model/ProfileRequest
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ProfileRequest</code>.
   * A profile describing a new user to be created.
   * @alias module:Model/ProfileRequest
   * @class
   * @param username {String} The unique username of the user
   * @param email {String} The unique email address of the user
   * @param password {String} The password to set for the new user
   */
  var exports = function(username, email, password) {
    var _this = this;

    _this['username'] = username;
    _this['email'] = email;













    _this['password'] = password;
  };

  /**
   * Constructs a <code>ProfileRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/ProfileRequest} obj Optional instance to populate.
   * @return {module:Model/ProfileRequest} The populated <code>ProfileRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('department')) {
        obj['department'] = ApiClient.convertToType(data['department'], 'String');
      }
      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = Gender.constructFromObject(data['gender']);
      }
      if (data.hasOwnProperty('institution')) {
        obj['institution'] = ApiClient.convertToType(data['institution'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'String');
      }
      if (data.hasOwnProperty('researchArea')) {
        obj['researchArea'] = ApiClient.convertToType(data['researchArea'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique username of the user
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * The unique email address of the user
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The city of the user
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * The country of the user
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * The institutional department of the user
   * @member {String} department
   */
  exports.prototype['department'] = undefined;
  /**
   * The fax number of the user
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;
  /**
   * The first name of the user
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {module:Model/Gender} gender
   */
  exports.prototype['gender'] = undefined;
  /**
   * The home institution of the user
   * @member {String} institution
   */
  exports.prototype['institution'] = undefined;
  /**
   * The last name of the user
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * The phone number of the user
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * The position of employment of the user
   * @member {String} position
   */
  exports.prototype['position'] = undefined;
  /**
   * The primary area of research of the user
   * @member {String} researchArea
   */
  exports.prototype['researchArea'] = undefined;
  /**
   * The state of the user
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * The status. active or deleted of the user
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The password to set for the new user
   * @member {String} password
   */
  exports.prototype['password'] = undefined;



  return exports;
}));

