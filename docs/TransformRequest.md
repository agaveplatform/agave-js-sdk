# AgaveJsSdk.TransformRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nativeFormat** | **String** | The original file type of the file. If not given, the file type is assumed to be raw. | 
**url** | **String** | The uri to which the transformed file will be staged. | 
**callbackUrl** | **String** | The URI to notify when the transfer is complete. This can be an email address or http URL. If a URL is given, a GET will be made to this address. URL templating is supported. Valid template values are: ${NAME}, ${SOURCE_FORMAT}, ${DEST_FORMAT}, ${STATUS} | 


