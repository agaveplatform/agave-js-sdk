# AgaveJsSdk.BatchQueue

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customDirectives** | **String** | Any custom directives that should be appended to scheduler directives. ex. #$ -A TG-12345 | 
**isDefault** | **Boolean** | Is this the default queue for the system. | 
**maxJobs** | **Number** | The maximum number of jobs that can be in queue at once. | 
**maxUserJobs** | **Number** | The maximum number of jobs per user that can be in queue at once. | 
**maxNodes** | **String** | The max nodes available per node to jobs submitted to this queue. | 
**maxMemoryPerNode** | **String** | The max memory available per node to jobs submitted to this queue. | 
**maxProcessorsPerNode** | **Number** | The max processors per node available to jobs submitted to this queue. | 
**maxRequestedTime** | **String** | The max length of jobs submitted to this queue in hhh:mm:ss format. | 
**name** | **String** | The name of the batch queue. | 


