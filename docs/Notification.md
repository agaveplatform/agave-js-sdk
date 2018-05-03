# AgaveJsSdk.Notification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **String** | The event you wish to recieve a notification about. Specify * for all events. | 
**persistent** | **Boolean** | Whether this event should remain active after it triggers the first time. | 
**url** | **Number** | The URI to notify when the import is complete. This can be an email address or URL. If a URL is given, a POST will be made to this address. URL templating is supported. Valid template values are: ${JOB_STATUS}, ${JOB_URL}, ${JOB_ID}, ${JOB_SYSTEM}, ${JOB_NAME}, ${JOB_START_TIME}, ${JOB_END_TIME}, ${JOB_SUBMIT_TIME}, ${JOB_ARCHIVE_PATH}, ${JOB_ARCHIVE_URL}, ${JOB_ERROR} | 


