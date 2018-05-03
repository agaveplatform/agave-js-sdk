# AgaveJsSdk.Job

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appId** | **String** | The unique name of the application being run by this job. This must be a valid application that the calling user has permission to run. | 
**archive** | **Boolean** | Whether the output from this job should be archived. If true, all new files created by this application&#39;s execution will be archived to the archivePath in the user&#39;s default storage system. | 
**archivePath** | **String** | The path of the archive folder for this job on default storage sytem of the user | 
**archiveSystem** | **String** | The unique id of the storage system on which this job output will be staged. | 
**batchQueue** | **String** | The queue to which this job should be submitted. This is optional and only applies when the execution system has a batch scheduler. | 
**endTime** | **Date** | The date the job stopped running due to termination, completion, or error in ISO 8601 format. | 
**executionSystem** | **String** | The system id of the execution system. | 
**id** | **Number** | The unique id of the job. | 
**inputs** | [**JobInputs**](JobInputs.md) |  | 
**localId** | **String** | The process or local job id of the job on the remote execution system. | 
**memoryPerNode** | **String** | The requested memory for this application to run given in GB. | 
**message** | **String** | The error message incurred when the job failed. | 
**name** | **String** | The name of the job. | 
**nodeCount** | **Number** | The number of processors this application should utilize while running. If the application is not of executionType PARALLEL, this should be 1. | 
**notifications** | [**[Notification]**](Notification.md) | An array of notifications you wish to receive. | 
**outputPath** | **String** | Relative path of the job output data. | 
**owner** | **String** | The job owner. | 
**parameters** | [**JobParameters**](JobParameters.md) |  | 
**processorsPerNode** | **Number** | The number of processors this application should utilize while running. If the application is not of executionType PARALLEL, this should be 1. | 
**maxRunTime** | **String** | The requested compute time needed for this application to complete given in HH:mm:ss format. | 
**retries** | **Number** | The number of retires it took to submit this job. | 
**startTime** | **Date** | The date the job started in ISO 8601 format. | 
**status** | **String** | The status of the job. Possible values are: PENDING, STAGING_INPUTS, CLEANING_UP, ARCHIVING, STAGING_JOB, FINISHED, KILLED, FAILED, STOPPED, RUNNING, PAUSED, QUEUED, SUBMITTING, STAGED, PROCESSING_INPUTS, ARCHIVING_FINISHED, ARCHIVING_FAILED | 
**submitTime** | **Date** | The date the job was submitted in ISO 8601 format. | 
**workPath** | **String** | The directory on the remote execution system from which the job is running. | 


