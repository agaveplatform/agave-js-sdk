# AgaveJsSdk.JobRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appId** | **String** | The unique name of the application being run by this job. This must be a valid application that the calling user has permission to run. | 
**archive** | **Boolean** | Whether the output from this job should be archived. If true, all new files created by this application&#39;s execution will be archived to the archivePath in the user&#39;s default storage system. | [default to true]
**archivePath** | **String** | The path of the archive folder for this job on default storage sytem of the user | [optional] 
**archiveSystem** | **String** | The unique id of the storage system on which this job output will be staged. | [optional] 
**batchQueue** | **String** | The queue to which this job should be submitted. This is optional and only applies when the execution system has a batch scheduler. | [optional] 
**inputs** | **Object** | The application specific input files needed for this job. These vary from application to application and should be entered as multiple individual parameters in the form. Inputs may be given as relative paths in the user&#39;s default storage system or as URI. If a URI is given, the data will be staged in by the IO service and made avaialble to the application at run time. | [optional] 
**memoryPerNode** | **Number** | The requested memory for this application to run given in GB. | [optional] 
**name** | **String** | The name of the job. | 
**nodeCount** | **Number** | The number of processors this application should utilize while running. If the application is not of executionType PARALLEL, this should be 1. | [optional] 
**notifications** | [**[Notification]**](Notification.md) | An array of notifications you wish to receive. | 
**parameters** | **Object** | The application specific parameters needed for this job. These vary from application to application and should be entered as multiple individual parameters in the form. The actual dataType will be determined by the application description. | [optional] 
**processorsPerNode** | **Number** | The number of processors this application should utilize while running. If the application is not of executionType PARALLEL, this should be 1. | [optional] 
**maxRunTime** | **String** | The requested compute time needed for this application to complete given in HH:mm:ss format. | [optional] 


