# AgaveJsSdk.JobSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appId** | **String** | The unique name of the application being run by this job. This must be a valid application that the calling user has permission to run. | 
**endTime** | **Date** | The date the job ended in ISO 8601 format. | 
**executionSystem** | **String** | The system id of the execution system. | 
**id** | **Number** | The unique id of the job. | 
**name** | **String** | The name of the job. | 
**owner** | **String** | The job owner. | 
**startTime** | **Date** | The date the job started in ISO 8601 format. | 
**status** | **String** | The status of the job. Possible values are: PENDING, STAGING_INPUTS, CLEANING_UP, ARCHIVING, STAGING_JOB, FINISHED, KILLED, FAILED, STOPPED, RUNNING, PAUSED, QUEUED, SUBMITTING, STAGED, PROCESSING_INPUTS, ARCHIVING_FINISHED, ARCHIVING_FAILED | 


