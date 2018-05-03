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
    define(['ApiClient', 'Model/JobInputs', 'Model/JobParameters', 'Model/Notification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JobInputs'), require('./JobParameters'), require('./Notification'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.Job = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.JobInputs, root.AgaveJsSdk.JobParameters, root.AgaveJsSdk.Notification);
  }
}(this, function(ApiClient, JobInputs, JobParameters, Notification) {
  'use strict';




  /**
   * The Job model module.
   * @module Model/Job
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Job</code>.
   * @alias module:Model/Job
   * @class
   * @param appId {String} The unique name of the application being run by this job. This must be a valid application that the calling user has permission to run.
   * @param archive {Boolean} Whether the output from this job should be archived. If true, all new files created by this application's execution will be archived to the archivePath in the user's default storage system.
   * @param archivePath {String} The path of the archive folder for this job on default storage sytem of the user
   * @param archiveSystem {String} The unique id of the storage system on which this job output will be staged.
   * @param batchQueue {String} The queue to which this job should be submitted. This is optional and only applies when the execution system has a batch scheduler.
   * @param endTime {Date} The date the job stopped running due to termination, completion, or error in ISO 8601 format.
   * @param executionSystem {String} The system id of the execution system.
   * @param id {Number} The unique id of the job.
   * @param inputs {module:Model/JobInputs} 
   * @param localId {String} The process or local job id of the job on the remote execution system.
   * @param memoryPerNode {String} The requested memory for this application to run given in GB.
   * @param message {String} The error message incurred when the job failed.
   * @param name {String} The name of the job.
   * @param nodeCount {Number} The number of processors this application should utilize while running. If the application is not of executionType PARALLEL, this should be 1.
   * @param notifications {Array.<module:Model/Notification>} An array of notifications you wish to receive.
   * @param outputPath {String} Relative path of the job output data.
   * @param owner {String} The job owner.
   * @param parameters {module:Model/JobParameters} 
   * @param processorsPerNode {Number} The number of processors this application should utilize while running. If the application is not of executionType PARALLEL, this should be 1.
   * @param maxRunTime {String} The requested compute time needed for this application to complete given in HH:mm:ss format.
   * @param retries {Number} The number of retires it took to submit this job.
   * @param startTime {Date} The date the job started in ISO 8601 format.
   * @param status {String} The status of the job. Possible values are: PENDING, STAGING_INPUTS, CLEANING_UP, ARCHIVING, STAGING_JOB, FINISHED, KILLED, FAILED, STOPPED, RUNNING, PAUSED, QUEUED, SUBMITTING, STAGED, PROCESSING_INPUTS, ARCHIVING_FINISHED, ARCHIVING_FAILED
   * @param submitTime {Date} The date the job was submitted in ISO 8601 format.
   * @param workPath {String} The directory on the remote execution system from which the job is running.
   */
  var exports = function(appId, archive, archivePath, archiveSystem, batchQueue, endTime, executionSystem, id, inputs, localId, memoryPerNode, message, name, nodeCount, notifications, outputPath, owner, parameters, processorsPerNode, maxRunTime, retries, startTime, status, submitTime, workPath) {
    var _this = this;

    _this['appId'] = appId;
    _this['archive'] = archive;
    _this['archivePath'] = archivePath;
    _this['archiveSystem'] = archiveSystem;
    _this['batchQueue'] = batchQueue;
    _this['endTime'] = endTime;
    _this['executionSystem'] = executionSystem;
    _this['id'] = id;
    _this['inputs'] = inputs;
    _this['localId'] = localId;
    _this['memoryPerNode'] = memoryPerNode;
    _this['message'] = message;
    _this['name'] = name;
    _this['nodeCount'] = nodeCount;
    _this['notifications'] = notifications;
    _this['outputPath'] = outputPath;
    _this['owner'] = owner;
    _this['parameters'] = parameters;
    _this['processorsPerNode'] = processorsPerNode;
    _this['maxRunTime'] = maxRunTime;
    _this['retries'] = retries;
    _this['startTime'] = startTime;
    _this['status'] = status;
    _this['submitTime'] = submitTime;
    _this['workPath'] = workPath;
  };

  /**
   * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/Job} obj Optional instance to populate.
   * @return {module:Model/Job} The populated <code>Job</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('appId')) {
        obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
      }
      if (data.hasOwnProperty('archive')) {
        obj['archive'] = ApiClient.convertToType(data['archive'], 'Boolean');
      }
      if (data.hasOwnProperty('archivePath')) {
        obj['archivePath'] = ApiClient.convertToType(data['archivePath'], 'String');
      }
      if (data.hasOwnProperty('archiveSystem')) {
        obj['archiveSystem'] = ApiClient.convertToType(data['archiveSystem'], 'String');
      }
      if (data.hasOwnProperty('batchQueue')) {
        obj['batchQueue'] = ApiClient.convertToType(data['batchQueue'], 'String');
      }
      if (data.hasOwnProperty('endTime')) {
        obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
      }
      if (data.hasOwnProperty('executionSystem')) {
        obj['executionSystem'] = ApiClient.convertToType(data['executionSystem'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('inputs')) {
        obj['inputs'] = JobInputs.constructFromObject(data['inputs']);
      }
      if (data.hasOwnProperty('localId')) {
        obj['localId'] = ApiClient.convertToType(data['localId'], 'String');
      }
      if (data.hasOwnProperty('memoryPerNode')) {
        obj['memoryPerNode'] = ApiClient.convertToType(data['memoryPerNode'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nodeCount')) {
        obj['nodeCount'] = ApiClient.convertToType(data['nodeCount'], 'Number');
      }
      if (data.hasOwnProperty('notifications')) {
        obj['notifications'] = ApiClient.convertToType(data['notifications'], [Notification]);
      }
      if (data.hasOwnProperty('outputPath')) {
        obj['outputPath'] = ApiClient.convertToType(data['outputPath'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = JobParameters.constructFromObject(data['parameters']);
      }
      if (data.hasOwnProperty('processorsPerNode')) {
        obj['processorsPerNode'] = ApiClient.convertToType(data['processorsPerNode'], 'Number');
      }
      if (data.hasOwnProperty('maxRunTime')) {
        obj['maxRunTime'] = ApiClient.convertToType(data['maxRunTime'], 'String');
      }
      if (data.hasOwnProperty('retries')) {
        obj['retries'] = ApiClient.convertToType(data['retries'], 'Number');
      }
      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('submitTime')) {
        obj['submitTime'] = ApiClient.convertToType(data['submitTime'], 'Date');
      }
      if (data.hasOwnProperty('workPath')) {
        obj['workPath'] = ApiClient.convertToType(data['workPath'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique name of the application being run by this job. This must be a valid application that the calling user has permission to run.
   * @member {String} appId
   */
  exports.prototype['appId'] = undefined;
  /**
   * Whether the output from this job should be archived. If true, all new files created by this application's execution will be archived to the archivePath in the user's default storage system.
   * @member {Boolean} archive
   */
  exports.prototype['archive'] = undefined;
  /**
   * The path of the archive folder for this job on default storage sytem of the user
   * @member {String} archivePath
   */
  exports.prototype['archivePath'] = undefined;
  /**
   * The unique id of the storage system on which this job output will be staged.
   * @member {String} archiveSystem
   */
  exports.prototype['archiveSystem'] = undefined;
  /**
   * The queue to which this job should be submitted. This is optional and only applies when the execution system has a batch scheduler.
   * @member {String} batchQueue
   */
  exports.prototype['batchQueue'] = undefined;
  /**
   * The date the job stopped running due to termination, completion, or error in ISO 8601 format.
   * @member {Date} endTime
   */
  exports.prototype['endTime'] = undefined;
  /**
   * The system id of the execution system.
   * @member {String} executionSystem
   */
  exports.prototype['executionSystem'] = undefined;
  /**
   * The unique id of the job.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:Model/JobInputs} inputs
   */
  exports.prototype['inputs'] = undefined;
  /**
   * The process or local job id of the job on the remote execution system.
   * @member {String} localId
   */
  exports.prototype['localId'] = undefined;
  /**
   * The requested memory for this application to run given in GB.
   * @member {String} memoryPerNode
   */
  exports.prototype['memoryPerNode'] = undefined;
  /**
   * The error message incurred when the job failed.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * The name of the job.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The number of processors this application should utilize while running. If the application is not of executionType PARALLEL, this should be 1.
   * @member {Number} nodeCount
   */
  exports.prototype['nodeCount'] = undefined;
  /**
   * An array of notifications you wish to receive.
   * @member {Array.<module:Model/Notification>} notifications
   */
  exports.prototype['notifications'] = undefined;
  /**
   * Relative path of the job output data.
   * @member {String} outputPath
   */
  exports.prototype['outputPath'] = undefined;
  /**
   * The job owner.
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * @member {module:Model/JobParameters} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * The number of processors this application should utilize while running. If the application is not of executionType PARALLEL, this should be 1.
   * @member {Number} processorsPerNode
   */
  exports.prototype['processorsPerNode'] = undefined;
  /**
   * The requested compute time needed for this application to complete given in HH:mm:ss format.
   * @member {String} maxRunTime
   */
  exports.prototype['maxRunTime'] = undefined;
  /**
   * The number of retires it took to submit this job.
   * @member {Number} retries
   */
  exports.prototype['retries'] = undefined;
  /**
   * The date the job started in ISO 8601 format.
   * @member {Date} startTime
   */
  exports.prototype['startTime'] = undefined;
  /**
   * The status of the job. Possible values are: PENDING, STAGING_INPUTS, CLEANING_UP, ARCHIVING, STAGING_JOB, FINISHED, KILLED, FAILED, STOPPED, RUNNING, PAUSED, QUEUED, SUBMITTING, STAGED, PROCESSING_INPUTS, ARCHIVING_FINISHED, ARCHIVING_FAILED
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The date the job was submitted in ISO 8601 format.
   * @member {Date} submitTime
   */
  exports.prototype['submitTime'] = undefined;
  /**
   * The directory on the remote execution system from which the job is running.
   * @member {String} workPath
   */
  exports.prototype['workPath'] = undefined;



  return exports;
}));

