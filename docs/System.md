# AgaveJsSdk.System

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Verbose description of this system. | 
**environment** | **String** | Environment variables to set upon login prior to job submission. | [optional] 
**id** | **String** | Unique identifier for this system. | 
**isDefault** | **Boolean** | Is the system the default for the authenticated user? | [default to false]
**isPublic** | **Boolean** | Is the system publicly available? | [default to false]
**lastModified** | **Date** | The date this system was last modified in ISO 8601 format. | 
**name** | **String** | Common name for this system. | 
**revision** | **Number** | The number of times this app has been updated. | [default to 1]
**scratchDir** | **String** | The scratch directory where job execution directories will be created at runtime. The workDir is used if this is not specified. | [optional] 
**site** | **String** | The site associated with this system. | [optional] 
**status** | [**SystemStatusType**](SystemStatusType.md) |  | [optional] 
**storage** | [**SystemStorageConfig**](SystemStorageConfig.md) |  | 
**type** | [**SystemType**](SystemType.md) |  | 
**uuid** | **String** | The uuid of this system. | [optional] 


