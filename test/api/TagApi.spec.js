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
    instance = new AgaveJsSdk.TagApi();
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

  describe('TagApi', function() {
    describe('addTag', function() {
      it('should call addTag successfully', function(done) {
        //uncomment below and update the code to test addTag
        //instance.addTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addTagResource', function() {
      it('should call addTagResource successfully', function(done) {
        //uncomment below and update the code to test addTagResource
        //instance.addTagResource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clearTagPermissions', function() {
      it('should call clearTagPermissions successfully', function(done) {
        //uncomment below and update the code to test clearTagPermissions
        //instance.clearTagPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clearTagResources', function() {
      it('should call clearTagResources successfully', function(done) {
        //uncomment below and update the code to test clearTagResources
        //instance.clearTagResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTag', function() {
      it('should call deleteTag successfully', function(done) {
        //uncomment below and update the code to test deleteTag
        //instance.deleteTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTagPermissionForUser', function() {
      it('should call deleteTagPermissionForUser successfully', function(done) {
        //uncomment below and update the code to test deleteTagPermissionForUser
        //instance.deleteTagPermissionForUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTagDetails', function() {
      it('should call getTagDetails successfully', function(done) {
        //uncomment below and update the code to test getTagDetails
        //instance.getTagDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTagPermissionForUser', function() {
      it('should call getTagPermissionForUser successfully', function(done) {
        //uncomment below and update the code to test getTagPermissionForUser
        //instance.getTagPermissionForUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTaggedResource', function() {
      it('should call getTaggedResource successfully', function(done) {
        //uncomment below and update the code to test getTaggedResource
        //instance.getTaggedResource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTagHistory', function() {
      it('should call listTagHistory successfully', function(done) {
        //uncomment below and update the code to test listTagHistory
        //instance.listTagHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTagPermissions', function() {
      it('should call listTagPermissions successfully', function(done) {
        //uncomment below and update the code to test listTagPermissions
        //instance.listTagPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTagResources', function() {
      it('should call listTagResources successfully', function(done) {
        //uncomment below and update the code to test listTagResources
        //instance.listTagResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTags', function() {
      it('should call listTags successfully', function(done) {
        //uncomment below and update the code to test listTags
        //instance.listTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeTagResource', function() {
      it('should call removeTagResource successfully', function(done) {
        //uncomment below and update the code to test removeTagResource
        //instance.removeTagResource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTag', function() {
      it('should call updateTag successfully', function(done) {
        //uncomment below and update the code to test updateTag
        //instance.updateTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTagPermission', function() {
      it('should call updateTagPermission successfully', function(done) {
        //uncomment below and update the code to test updateTagPermission
        //instance.updateTagPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTagPermissionForUser', function() {
      it('should call updateTagPermissionForUser successfully', function(done) {
        //uncomment below and update the code to test updateTagPermissionForUser
        //instance.updateTagPermissionForUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTagResource', function() {
      it('should call updateTagResource successfully', function(done) {
        //uncomment below and update the code to test updateTagResource
        //instance.updateTagResource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
