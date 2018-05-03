# AgaveJsSdk.SystemStorageConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth** | [**SystemAuthConfig**](SystemAuthConfig.md) |  | 
**containerName** | **String** | The name of the bucket to interact with when using an object store. | [optional] 
**homeDir** | **String** | The path on the remote system to use as the home directory for all API requests. For cases where the home directory should be dynamically defined, the ${USERNAME} token can be included in the homeDir value to represent the username of the authenticated user. ex. /home/${USERNAME}. | [optional] [default to &#39;/&#39;]
**host** | **String** | The hostname or ip address of the storage server | 
**port** | **Number** | The port number of the storage server. | 
**mirror** | **Boolean** | Whether the permissions set on the server should be pushed to the storage system itself. This only applies to IRODS and AWS systems. | [optional] [default to false]
**protocol** | [**SystemStorageProtocolType**](SystemStorageProtocolType.md) |  | 
**publicAppsDir** | **String** | The path on the remote system where apps will be stored if this is set as the default public storage system. | [optional] 
**resource** | **String** | The name of the target resource when defining an IRODS system. | [optional] 
**rootDir** | **String** | The path on the remote system to use as the root for all API requests. | [optional] [default to &#39;/&#39;]
**zone** | **String** | The name of the zone when defining an IRODS system. | [optional] 


