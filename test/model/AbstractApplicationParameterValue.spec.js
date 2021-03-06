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
    instance = new AgaveJsSdk.AbstractApplicationParameterValue();
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

  describe('AbstractApplicationParameterValue', function() {
    it('should create an instance of AbstractApplicationParameterValue', function() {
      // uncomment below and update the code to test AbstractApplicationParameterValue
      //var instance = new AgaveJsSdk.AbstractApplicationParameterValue();
      //expect(instance).to.be.a(AgaveJsSdk.AbstractApplicationParameterValue);
    });

    it('should have the property defaultValue (base name: "defaultValue")', function() {
      // uncomment below and update the code to test the property defaultValue
      //var instance = new AgaveJsSdk.AbstractApplicationParameterValue();
      //expect(instance).to.be();
    });

    it('should have the property enumValues (base name: "enumValues")', function() {
      // uncomment below and update the code to test the property enumValues
      //var instance = new AgaveJsSdk.AbstractApplicationParameterValue();
      //expect(instance).to.be();
    });

    it('should have the property enquote (base name: "enquote")', function() {
      // uncomment below and update the code to test the property enquote
      //var instance = new AgaveJsSdk.AbstractApplicationParameterValue();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instance = new AgaveJsSdk.AbstractApplicationParameterValue();
      //expect(instance).to.be();
    });

    it('should have the property required (base name: "required")', function() {
      // uncomment below and update the code to test the property required
      //var instance = new AgaveJsSdk.AbstractApplicationParameterValue();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new AgaveJsSdk.AbstractApplicationParameterValue();
      //expect(instance).to.be();
    });

    it('should have the property validator (base name: "validator")', function() {
      // uncomment below and update the code to test the property validator
      //var instance = new AgaveJsSdk.AbstractApplicationParameterValue();
      //expect(instance).to.be();
    });

    it('should have the property visible (base name: "visible")', function() {
      // uncomment below and update the code to test the property visible
      //var instance = new AgaveJsSdk.AbstractApplicationParameterValue();
      //expect(instance).to.be();
    });

  });

}));
