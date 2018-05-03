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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AgaveJsSdk);
  }
}(this, function(expect, AgaveJsSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AgaveJsSdk.ApplicationParameterEnumValueItem();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ApplicationParameterEnumValueItem', function() {
    it('should create an instance of ApplicationParameterEnumValueItem', function() {
      // uncomment below and update the code to test ApplicationParameterEnumValueItem
      //var instance = new AgaveJsSdk.ApplicationParameterEnumValueItem();
      //expect(instance).to.be.a(AgaveJsSdk.ApplicationParameterEnumValueItem);
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new AgaveJsSdk.ApplicationParameterEnumValueItem();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new AgaveJsSdk.ApplicationParameterEnumValueItem();
      //expect(instance).to.be();
    });

  });

}));
