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
    instance = new AgaveJsSdk.PostIt();
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

  describe('PostIt', function() {
    it('should create an instance of PostIt', function() {
      // uncomment below and update the code to test PostIt
      //var instance = new AgaveJsSdk.PostIt();
      //expect(instance).to.be.a(AgaveJsSdk.PostIt);
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new AgaveJsSdk.PostIt();
      //expect(instance).to.be();
    });

    it('should have the property creator (base name: "creator")', function() {
      // uncomment below and update the code to test the property creator
      //var instance = new AgaveJsSdk.PostIt();
      //expect(instance).to.be();
    });

    it('should have the property expires (base name: "expires")', function() {
      // uncomment below and update the code to test the property expires
      //var instance = new AgaveJsSdk.PostIt();
      //expect(instance).to.be();
    });

    it('should have the property internalUsername (base name: "internalUsername")', function() {
      // uncomment below and update the code to test the property internalUsername
      //var instance = new AgaveJsSdk.PostIt();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instance = new AgaveJsSdk.PostIt();
      //expect(instance).to.be();
    });

    it('should have the property postit (base name: "postit")', function() {
      // uncomment below and update the code to test the property postit
      //var instance = new AgaveJsSdk.PostIt();
      //expect(instance).to.be();
    });

    it('should have the property remainingUses (base name: "remainingUses")', function() {
      // uncomment below and update the code to test the property remainingUses
      //var instance = new AgaveJsSdk.PostIt();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new AgaveJsSdk.PostIt();
      //expect(instance).to.be();
    });

    it('should have the property noauth (base name: "noauth")', function() {
      // uncomment below and update the code to test the property noauth
      //var instance = new AgaveJsSdk.PostIt();
      //expect(instance).to.be();
    });

  });

}));
