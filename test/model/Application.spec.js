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
    instance = new AgaveJsSdk.Application();
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

  describe('Application', function() {
    it('should create an instance of Application', function() {
      // uncomment below and update the code to test Application
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be.a(AgaveJsSdk.Application);
    });

    it('should have the property available (base name: "available")', function() {
      // uncomment below and update the code to test the property available
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property checkpointable (base name: "checkpointable")', function() {
      // uncomment below and update the code to test the property checkpointable
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property defaultMaxRunTime (base name: "defaultMaxRunTime")', function() {
      // uncomment below and update the code to test the property defaultMaxRunTime
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property defaultMemoryPerNode (base name: "defaultMemoryPerNode")', function() {
      // uncomment below and update the code to test the property defaultMemoryPerNode
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property defaultNodeCount (base name: "defaultNodeCount")', function() {
      // uncomment below and update the code to test the property defaultNodeCount
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property defaultProcessorsPerNode (base name: "defaultProcessorsPerNode")', function() {
      // uncomment below and update the code to test the property defaultProcessorsPerNode
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property defaultQueue (base name: "defaultQueue")', function() {
      // uncomment below and update the code to test the property defaultQueue
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property deploymentPath (base name: "deploymentPath")', function() {
      // uncomment below and update the code to test the property deploymentPath
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property deploymentSystem (base name: "deploymentSystem")', function() {
      // uncomment below and update the code to test the property deploymentSystem
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property executionSystem (base name: "executionSystem")', function() {
      // uncomment below and update the code to test the property executionSystem
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property executionType (base name: "executionType")', function() {
      // uncomment below and update the code to test the property executionType
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property helpURI (base name: "helpURI")', function() {
      // uncomment below and update the code to test the property helpURI
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property inputs (base name: "inputs")', function() {
      // uncomment below and update the code to test the property inputs
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "lastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "longDescription")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property modules (base name: "modules")', function() {
      // uncomment below and update the code to test the property modules
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property ontology (base name: "ontology")', function() {
      // uncomment below and update the code to test the property ontology
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property outputs (base name: "outputs")', function() {
      // uncomment below and update the code to test the property outputs
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property parallelism (base name: "parallelism")', function() {
      // uncomment below and update the code to test the property parallelism
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property isPublic (base name: "isPublic")', function() {
      // uncomment below and update the code to test the property isPublic
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property revision (base name: "revision")', function() {
      // uncomment below and update the code to test the property revision
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "shortDescription")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property templatePath (base name: "templatePath")', function() {
      // uncomment below and update the code to test the property templatePath
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property testPath (base name: "testPath")', function() {
      // uncomment below and update the code to test the property testPath
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new AgaveJsSdk.Application();
      //expect(instance).to.be();
    });

  });

}));