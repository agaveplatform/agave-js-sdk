# AgaveJsSdk.FileImportRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileType** | **String** | The file format this file is in. Defaults to raw. This will be used in file transform operations. | [optional] 
**notifications** | [**[NotificationRequest]**](NotificationRequest.md) | Notifications to set with the successful acceptance of this upload request | [optional] 
**fileName** | **String** | The name to give the upload file. If unset, takes the original file name. | [optional] 
**append** | **Boolean** | Boolean flag indicating this file should be appended to the target file | [optional] [default to false]
**urlToImport** | **String** | The URL to import the file from. This parameter is used if not file is uploaded with this post. | [optional] 


