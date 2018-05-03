# AgaveJsSdk.SystemRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Verbose description of this system. | [optional] 
**environment** | **String** | Environment variables to set upon login prior to job submission. | [optional] 
**executionType** | [**SystemExecutionType**](SystemExecutionType.md) |  | [optional] 
**id** | **String** | Unique identifier for this system. | 
**login** | [**SystemLoginConfig**](SystemLoginConfig.md) |  | [optional] 
**maxSystemJobs** | **Number** | The maximum number of jobs that can be simultaneously run on the system across all queues. | [optional] 
**maxSystemJobsPerUser** | **Number** | The maximum number of jobs that can be simultaneously run on the system across all queues by a single user. | [optional] 
**name** | **String** | Common name for this system. | 
**queues** | [**[BatchQueue]**](BatchQueue.md) | The execution paradigm used to run jobs on this system. | [optional] 
**scheduler** | [**BatchSchedulerType**](BatchSchedulerType.md) |  | [optional] 
**scratchDir** | **String** | The scratch directory where job execution directories will be created at runtime. The workDir is used if this is not specified. | [optional] 
**site** | **String** | The site associated with this system. | [optional] 
**startupScript** | **String** | Script to be run after login and prior to execution. | [optional] 
**status** | [**SystemStatusType**](SystemStatusType.md) |  | 
**storage** | [**SystemStorageConfig**](SystemStorageConfig.md) |  | 
**type** | [**SystemType**](SystemType.md) |  | 
**workDir** | **String** | The work directory where job execution directories will be created at runtime. This is used if scratchDir is not specified. If neither are specified, the job directory will be created in the system homeDir. | [optional] 


