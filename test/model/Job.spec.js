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
    instance = new AgaveJsSdk.Job();
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

  describe('Job', function() {
    it('should create an instance of Job', function() {
      // uncomment below and update the code to test Job
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be.a(AgaveJsSdk.Job);
    });

    it('should have the property appId (base name: "appId")', function() {
      // uncomment below and update the code to test the property appId
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property archive (base name: "archive")', function() {
      // uncomment below and update the code to test the property archive
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property archivePath (base name: "archivePath")', function() {
      // uncomment below and update the code to test the property archivePath
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property archiveSystem (base name: "archiveSystem")', function() {
      // uncomment below and update the code to test the property archiveSystem
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property batchQueue (base name: "batchQueue")', function() {
      // uncomment below and update the code to test the property batchQueue
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "endTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property executionSystem (base name: "executionSystem")', function() {
      // uncomment below and update the code to test the property executionSystem
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property inputs (base name: "inputs")', function() {
      // uncomment below and update the code to test the property inputs
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property localId (base name: "localId")', function() {
      // uncomment below and update the code to test the property localId
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property memoryPerNode (base name: "memoryPerNode")', function() {
      // uncomment below and update the code to test the property memoryPerNode
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property nodeCount (base name: "nodeCount")', function() {
      // uncomment below and update the code to test the property nodeCount
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property notifications (base name: "notifications")', function() {
      // uncomment below and update the code to test the property notifications
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property outputPath (base name: "outputPath")', function() {
      // uncomment below and update the code to test the property outputPath
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property processorsPerNode (base name: "processorsPerNode")', function() {
      // uncomment below and update the code to test the property processorsPerNode
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property maxRunTime (base name: "maxRunTime")', function() {
      // uncomment below and update the code to test the property maxRunTime
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property retries (base name: "retries")', function() {
      // uncomment below and update the code to test the property retries
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property submitTime (base name: "submitTime")', function() {
      // uncomment below and update the code to test the property submitTime
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

    it('should have the property workPath (base name: "workPath")', function() {
      // uncomment below and update the code to test the property workPath
      //var instance = new AgaveJsSdk.Job();
      //expect(instance).to.be();
    });

  });

}));
