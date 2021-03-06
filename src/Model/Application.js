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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.Application = factory(root.AgaveJsSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Application model module.
   * @module Model/Application
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Application</code>.
   * Applications are a self-describing representation of an executable software item. See the &lt;a href&#x3D;\&quot;http://agaveapi.co/documentation/tutorials/app-management-tutorial/\&quot;&gt;App Management Tutorial&lt;/a&gt; for more information.
   * @alias module:Model/Application
   * @class
   * @param available {String} Whether the application is available.
   * @param checkpointable {String} Whether the application supports checkpointing.
   * @param defaultMaxRunTime {String} The max execution time that should be used if none is given in a job description. Ignore if the system does not support schedulers.
   * @param defaultMemoryPerNode {String} The default memory in GB to pass to the scheduler if none is given in the job description. This must be less than the max memory parameter in the target queue definition.
   * @param defaultNodeCount {String} The number of nodes that should be used if none is given in a job description. Ignore if the system does not support schedulers.
   * @param defaultProcessorsPerNode {String} The number of processors to pass to the scheduler if none are given in the job description. This must be 1 if the app is serial.
   * @param defaultQueue {String} The queue on the execution system that should be used if none is given in a job description. Ignore if the system does not support schedulers.
   * @param deploymentPath {String} The location in default storage system containing the application wrapper and dependencies of the user
   * @param deploymentSystem {String} The system id of the storage system where this app should run.
   * @param executionSystem {String} The system id of the execution system where this app should run.
   * @param executionType {String} The execution type of the application. If you're unsure, it's probably HPC.
   * @param helpURI {String} The URL where users can go for more information about the app.
   * @param id {String} Unique id of this app. Comprised of the app name-version.
   * @param icon {String} The icon to associate with this app.
   * @param inputs {String} The inputs files for this application. 
   * @param label {String} The label to use when generating forms.
   * @param lastModified {String} The date this application was last modified in ISO 8601 format.
   * @param longDescription {String} The full text description of this input to use when generating forms.
   * @param modules {String} An array of modules to load prior to the execution of the application.
   * @param name {String} The name of the application. The name does not have to be unique, but the combination of name and version does.
   * @param ontology {String} An array of ontology values describing this application.
   * @param outputs {String} The outputs files for this application. 
   * @param parallelism {String} The parallelism type of the application. If you're unsure, it's probably SERIAL.
   * @param parameters {String} The inputs parameters for this application. 
   * @param isPublic {String} Whether the application is public or private.
   * @param revision {String} The number of times this application has been revised.
   * @param shortDescription {String} The short description of this application.
   * @param tags {String} An array of tags related to this application.
   * @param templatePath {String} The path to the wrapper script relative to the deploymentPath.
   * @param testPath {String} The path to the test script relative to the deploymentPath.
   * @param uuid {String} The UUID of this application. UUID are 36 alphanumeric string.
   * @param version {String} The version of the application in #.#.# format. While the version does not need to be unique, the combination of name and version does have to be unique.
   */
  var exports = function(available, checkpointable, defaultMaxRunTime, defaultMemoryPerNode, defaultNodeCount, defaultProcessorsPerNode, defaultQueue, deploymentPath, deploymentSystem, executionSystem, executionType, helpURI, id, icon, inputs, label, lastModified, longDescription, modules, name, ontology, outputs, parallelism, parameters, isPublic, revision, shortDescription, tags, templatePath, testPath, uuid, version) {
    var _this = this;

    _this['available'] = available;
    _this['checkpointable'] = checkpointable;
    _this['defaultMaxRunTime'] = defaultMaxRunTime;
    _this['defaultMemoryPerNode'] = defaultMemoryPerNode;
    _this['defaultNodeCount'] = defaultNodeCount;
    _this['defaultProcessorsPerNode'] = defaultProcessorsPerNode;
    _this['defaultQueue'] = defaultQueue;
    _this['deploymentPath'] = deploymentPath;
    _this['deploymentSystem'] = deploymentSystem;
    _this['executionSystem'] = executionSystem;
    _this['executionType'] = executionType;
    _this['helpURI'] = helpURI;
    _this['id'] = id;
    _this['icon'] = icon;
    _this['inputs'] = inputs;
    _this['label'] = label;
    _this['lastModified'] = lastModified;
    _this['longDescription'] = longDescription;
    _this['modules'] = modules;
    _this['name'] = name;
    _this['ontology'] = ontology;
    _this['outputs'] = outputs;
    _this['parallelism'] = parallelism;
    _this['parameters'] = parameters;
    _this['isPublic'] = isPublic;
    _this['revision'] = revision;
    _this['shortDescription'] = shortDescription;
    _this['tags'] = tags;
    _this['templatePath'] = templatePath;
    _this['testPath'] = testPath;
    _this['uuid'] = uuid;
    _this['version'] = version;
  };

  /**
   * Constructs a <code>Application</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/Application} obj Optional instance to populate.
   * @return {module:Model/Application} The populated <code>Application</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('available')) {
        obj['available'] = ApiClient.convertToType(data['available'], 'String');
      }
      if (data.hasOwnProperty('checkpointable')) {
        obj['checkpointable'] = ApiClient.convertToType(data['checkpointable'], 'String');
      }
      if (data.hasOwnProperty('defaultMaxRunTime')) {
        obj['defaultMaxRunTime'] = ApiClient.convertToType(data['defaultMaxRunTime'], 'String');
      }
      if (data.hasOwnProperty('defaultMemoryPerNode')) {
        obj['defaultMemoryPerNode'] = ApiClient.convertToType(data['defaultMemoryPerNode'], 'String');
      }
      if (data.hasOwnProperty('defaultNodeCount')) {
        obj['defaultNodeCount'] = ApiClient.convertToType(data['defaultNodeCount'], 'String');
      }
      if (data.hasOwnProperty('defaultProcessorsPerNode')) {
        obj['defaultProcessorsPerNode'] = ApiClient.convertToType(data['defaultProcessorsPerNode'], 'String');
      }
      if (data.hasOwnProperty('defaultQueue')) {
        obj['defaultQueue'] = ApiClient.convertToType(data['defaultQueue'], 'String');
      }
      if (data.hasOwnProperty('deploymentPath')) {
        obj['deploymentPath'] = ApiClient.convertToType(data['deploymentPath'], 'String');
      }
      if (data.hasOwnProperty('deploymentSystem')) {
        obj['deploymentSystem'] = ApiClient.convertToType(data['deploymentSystem'], 'String');
      }
      if (data.hasOwnProperty('executionSystem')) {
        obj['executionSystem'] = ApiClient.convertToType(data['executionSystem'], 'String');
      }
      if (data.hasOwnProperty('executionType')) {
        obj['executionType'] = ApiClient.convertToType(data['executionType'], 'String');
      }
      if (data.hasOwnProperty('helpURI')) {
        obj['helpURI'] = ApiClient.convertToType(data['helpURI'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('icon')) {
        obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
      }
      if (data.hasOwnProperty('inputs')) {
        obj['inputs'] = ApiClient.convertToType(data['inputs'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'String');
      }
      if (data.hasOwnProperty('longDescription')) {
        obj['longDescription'] = ApiClient.convertToType(data['longDescription'], 'String');
      }
      if (data.hasOwnProperty('modules')) {
        obj['modules'] = ApiClient.convertToType(data['modules'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ontology')) {
        obj['ontology'] = ApiClient.convertToType(data['ontology'], 'String');
      }
      if (data.hasOwnProperty('outputs')) {
        obj['outputs'] = ApiClient.convertToType(data['outputs'], 'String');
      }
      if (data.hasOwnProperty('parallelism')) {
        obj['parallelism'] = ApiClient.convertToType(data['parallelism'], 'String');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ApiClient.convertToType(data['parameters'], 'String');
      }
      if (data.hasOwnProperty('isPublic')) {
        obj['isPublic'] = ApiClient.convertToType(data['isPublic'], 'String');
      }
      if (data.hasOwnProperty('revision')) {
        obj['revision'] = ApiClient.convertToType(data['revision'], 'String');
      }
      if (data.hasOwnProperty('shortDescription')) {
        obj['shortDescription'] = ApiClient.convertToType(data['shortDescription'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], 'String');
      }
      if (data.hasOwnProperty('templatePath')) {
        obj['templatePath'] = ApiClient.convertToType(data['templatePath'], 'String');
      }
      if (data.hasOwnProperty('testPath')) {
        obj['testPath'] = ApiClient.convertToType(data['testPath'], 'String');
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
    }
    return obj;
  }

  /**
   * Whether the application is available.
   * @member {String} available
   */
  exports.prototype['available'] = undefined;
  /**
   * Whether the application supports checkpointing.
   * @member {String} checkpointable
   */
  exports.prototype['checkpointable'] = undefined;
  /**
   * The max execution time that should be used if none is given in a job description. Ignore if the system does not support schedulers.
   * @member {String} defaultMaxRunTime
   */
  exports.prototype['defaultMaxRunTime'] = undefined;
  /**
   * The default memory in GB to pass to the scheduler if none is given in the job description. This must be less than the max memory parameter in the target queue definition.
   * @member {String} defaultMemoryPerNode
   */
  exports.prototype['defaultMemoryPerNode'] = undefined;
  /**
   * The number of nodes that should be used if none is given in a job description. Ignore if the system does not support schedulers.
   * @member {String} defaultNodeCount
   */
  exports.prototype['defaultNodeCount'] = undefined;
  /**
   * The number of processors to pass to the scheduler if none are given in the job description. This must be 1 if the app is serial.
   * @member {String} defaultProcessorsPerNode
   */
  exports.prototype['defaultProcessorsPerNode'] = undefined;
  /**
   * The queue on the execution system that should be used if none is given in a job description. Ignore if the system does not support schedulers.
   * @member {String} defaultQueue
   */
  exports.prototype['defaultQueue'] = undefined;
  /**
   * The location in default storage system containing the application wrapper and dependencies of the user
   * @member {String} deploymentPath
   */
  exports.prototype['deploymentPath'] = undefined;
  /**
   * The system id of the storage system where this app should run.
   * @member {String} deploymentSystem
   */
  exports.prototype['deploymentSystem'] = undefined;
  /**
   * The system id of the execution system where this app should run.
   * @member {String} executionSystem
   */
  exports.prototype['executionSystem'] = undefined;
  /**
   * The execution type of the application. If you're unsure, it's probably HPC.
   * @member {String} executionType
   */
  exports.prototype['executionType'] = undefined;
  /**
   * The URL where users can go for more information about the app.
   * @member {String} helpURI
   */
  exports.prototype['helpURI'] = undefined;
  /**
   * Unique id of this app. Comprised of the app name-version.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The icon to associate with this app.
   * @member {String} icon
   */
  exports.prototype['icon'] = undefined;
  /**
   * The inputs files for this application. 
   * @member {String} inputs
   */
  exports.prototype['inputs'] = undefined;
  /**
   * The label to use when generating forms.
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * The date this application was last modified in ISO 8601 format.
   * @member {String} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * The full text description of this input to use when generating forms.
   * @member {String} longDescription
   */
  exports.prototype['longDescription'] = undefined;
  /**
   * An array of modules to load prior to the execution of the application.
   * @member {String} modules
   */
  exports.prototype['modules'] = undefined;
  /**
   * The name of the application. The name does not have to be unique, but the combination of name and version does.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * An array of ontology values describing this application.
   * @member {String} ontology
   */
  exports.prototype['ontology'] = undefined;
  /**
   * The outputs files for this application. 
   * @member {String} outputs
   */
  exports.prototype['outputs'] = undefined;
  /**
   * The parallelism type of the application. If you're unsure, it's probably SERIAL.
   * @member {String} parallelism
   */
  exports.prototype['parallelism'] = undefined;
  /**
   * The inputs parameters for this application. 
   * @member {String} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * Whether the application is public or private.
   * @member {String} isPublic
   */
  exports.prototype['isPublic'] = undefined;
  /**
   * The number of times this application has been revised.
   * @member {String} revision
   */
  exports.prototype['revision'] = undefined;
  /**
   * The short description of this application.
   * @member {String} shortDescription
   */
  exports.prototype['shortDescription'] = undefined;
  /**
   * An array of tags related to this application.
   * @member {String} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * The path to the wrapper script relative to the deploymentPath.
   * @member {String} templatePath
   */
  exports.prototype['templatePath'] = undefined;
  /**
   * The path to the test script relative to the deploymentPath.
   * @member {String} testPath
   */
  exports.prototype['testPath'] = undefined;
  /**
   * The UUID of this application. UUID are 36 alphanumeric string.
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * The version of the application in #.#.# format. While the version does not need to be unique, the combination of name and version does have to be unique.
   * @member {String} version
   */
  exports.prototype['version'] = undefined;



  return exports;
}));


