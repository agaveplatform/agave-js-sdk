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
    instance = new AgaveJsSdk.MetaApi();
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

  describe('MetaApi', function() {
    describe('addMetadata', function() {
      it('should call addMetadata successfully', function(done) {
        //uncomment below and update the code to test addMetadata
        //instance.addMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addMetadataPermission', function() {
      it('should call addMetadataPermission successfully', function(done) {
        //uncomment below and update the code to test addMetadataPermission
        //instance.addMetadataPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addMetadataSchema', function() {
      it('should call addMetadataSchema successfully', function(done) {
        //uncomment below and update the code to test addMetadataSchema
        //instance.addMetadataSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addMetadataSchemaPermission', function() {
      it('should call addMetadataSchemaPermission successfully', function(done) {
        //uncomment below and update the code to test addMetadataSchemaPermission
        //instance.addMetadataSchemaPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clearMetadataPermissions', function() {
      it('should call clearMetadataPermissions successfully', function(done) {
        //uncomment below and update the code to test clearMetadataPermissions
        //instance.clearMetadataPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clearMetadataSchemaPermissions', function() {
      it('should call clearMetadataSchemaPermissions successfully', function(done) {
        //uncomment below and update the code to test clearMetadataSchemaPermissions
        //instance.clearMetadataSchemaPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMetadata', function() {
      it('should call deleteMetadata successfully', function(done) {
        //uncomment below and update the code to test deleteMetadata
        //instance.deleteMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMetadataPermission', function() {
      it('should call deleteMetadataPermission successfully', function(done) {
        //uncomment below and update the code to test deleteMetadataPermission
        //instance.deleteMetadataPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMetadataSchema', function() {
      it('should call deleteMetadataSchema successfully', function(done) {
        //uncomment below and update the code to test deleteMetadataSchema
        //instance.deleteMetadataSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSchemaPermission', function() {
      it('should call deleteSchemaPermission successfully', function(done) {
        //uncomment below and update the code to test deleteSchemaPermission
        //instance.deleteSchemaPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMetadata', function() {
      it('should call getMetadata successfully', function(done) {
        //uncomment below and update the code to test getMetadata
        //instance.getMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMetadataPermission', function() {
      it('should call getMetadataPermission successfully', function(done) {
        //uncomment below and update the code to test getMetadataPermission
        //instance.getMetadataPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMetadataSchema', function() {
      it('should call getMetadataSchema successfully', function(done) {
        //uncomment below and update the code to test getMetadataSchema
        //instance.getMetadataSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMetadataSchemaPermission', function() {
      it('should call getMetadataSchemaPermission successfully', function(done) {
        //uncomment below and update the code to test getMetadataSchemaPermission
        //instance.getMetadataSchemaPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listMetadata', function() {
      it('should call listMetadata successfully', function(done) {
        //uncomment below and update the code to test listMetadata
        //instance.listMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listMetadataPermissions', function() {
      it('should call listMetadataPermissions successfully', function(done) {
        //uncomment below and update the code to test listMetadataPermissions
        //instance.listMetadataPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listMetadataSchema', function() {
      it('should call listMetadataSchema successfully', function(done) {
        //uncomment below and update the code to test listMetadataSchema
        //instance.listMetadataSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listMetadataSchemaPermissions', function() {
      it('should call listMetadataSchemaPermissions successfully', function(done) {
        //uncomment below and update the code to test listMetadataSchemaPermissions
        //instance.listMetadataSchemaPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMetadata', function() {
      it('should call updateMetadata successfully', function(done) {
        //uncomment below and update the code to test updateMetadata
        //instance.updateMetadata(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMetadataPermission', function() {
      it('should call updateMetadataPermission successfully', function(done) {
        //uncomment below and update the code to test updateMetadataPermission
        //instance.updateMetadataPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMetadataSchema', function() {
      it('should call updateMetadataSchema successfully', function(done) {
        //uncomment below and update the code to test updateMetadataSchema
        //instance.updateMetadataSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMetadataSchemaPermission', function() {
      it('should call updateMetadataSchemaPermission successfully', function(done) {
        //uncomment below and update the code to test updateMetadataSchemaPermission
        //instance.updateMetadataSchemaPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
