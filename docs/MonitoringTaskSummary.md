# AgaveJsSdk.MonitoringTaskSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | Whether this monitor is currently active. | [default to true]
**frequency** | **Number** | The interval in minutes on which this monitor will run. Minimum is 5. Default is 720. | 
**internalUsername** | **String** | Internal user account used to perform the check. | [optional] 
**target** | **String** | The id of the sytem to be monitored. This must be an active system registered with the Systems service. | 
**updateSystemStatus** | **Boolean** | Whether this Monitor should update the system status when the results change. You must have the ADMIN role on the target system to use this feature. | [default to false]
**id** | **String** | The unique id of the monitor | 


