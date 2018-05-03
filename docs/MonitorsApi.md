# AgaveJsSdk.MonitorsApi

All URIs are relative to *https://public.agaveapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMonitoringTasks**](MonitorsApi.md#addMonitoringTasks) | **POST** /monitors/v2/ | 
[**deleteMonitoringTask**](MonitorsApi.md#deleteMonitoringTask) | **DELETE** /monitors/v2/{monitorId} | 
[**forceMonitoringTaskCheck**](MonitorsApi.md#forceMonitoringTaskCheck) | **POST** /monitors/v2/{monitorId}/checks | 
[**getMonitoringTask**](MonitorsApi.md#getMonitoringTask) | **GET** /monitors/v2/{monitorId} | 
[**getMonitoringTaskCheck**](MonitorsApi.md#getMonitoringTaskCheck) | **GET** /monitors/v2/{monitorId}/checks/{checkId} | 
[**listMonitoringTaskChecks**](MonitorsApi.md#listMonitoringTaskChecks) | **GET** /monitors/v2/{monitorId}/checks | 
[**listMonitoringTasks**](MonitorsApi.md#listMonitoringTasks) | **GET** /monitors/v2/ | 
[**updateMonitoringTask**](MonitorsApi.md#updateMonitoringTask) | **POST** /monitors/v2/{monitorId} | 


<a name="addMonitoringTasks"></a>
# **addMonitoringTasks**
> MonitoringTaskDetails addMonitoringTasks(body, opts)



Add a new monitoring task

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MonitorsApi();

var body = new AgaveJsSdk.MonitoringTaskSummary(); // MonitoringTaskSummary | The description of the monitoring task to run

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.addMonitoringTasks(body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MonitoringTaskSummary**](MonitoringTaskSummary.md)| The description of the monitoring task to run | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**MonitoringTaskDetails**](MonitoringTaskDetails.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteMonitoringTask"></a>
# **deleteMonitoringTask**
> deleteMonitoringTask(monitorId, opts)



Deletes a monitor.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MonitorsApi();

var monitorId = "monitorId_example"; // String | The id of the monitor to delete

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteMonitoringTask(monitorId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitorId** | **String**| The id of the monitor to delete | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="forceMonitoringTaskCheck"></a>
# **forceMonitoringTaskCheck**
> MonitoringTaskDetails forceMonitoringTaskCheck(monitorId, opts)



Forces a monitor check to run.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MonitorsApi();

var monitorId = "monitorId_example"; // String | The id of the monitor

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.forceMonitoringTaskCheck(monitorId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitorId** | **String**| The id of the monitor | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**MonitoringTaskDetails**](MonitoringTaskDetails.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMonitoringTask"></a>
# **getMonitoringTask**
> MonitoringTaskDetails getMonitoringTask(monitorId, opts)



Retrieve a specific monitor.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MonitorsApi();

var monitorId = "monitorId_example"; // String | The id of the monitor

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getMonitoringTask(monitorId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitorId** | **String**| The id of the monitor | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**MonitoringTaskDetails**](MonitoringTaskDetails.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMonitoringTaskCheck"></a>
# **getMonitoringTaskCheck**
> MonitoringTaskCheck getMonitoringTaskCheck(monitorId, checkId, opts)



Retrieve a specific monitor check

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MonitorsApi();

var monitorId = "monitorId_example"; // String | The id of the monitor

var checkId = "checkId_example"; // String | The id of the monitor check

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getMonitoringTaskCheck(monitorId, checkId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitorId** | **String**| The id of the monitor | 
 **checkId** | **String**| The id of the monitor check | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**MonitoringTaskCheck**](MonitoringTaskCheck.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listMonitoringTaskChecks"></a>
# **listMonitoringTaskChecks**
> [MonitoringTaskCheck] listMonitoringTaskChecks(monitorId, opts)



Retrieve checks for a specific monitor

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MonitorsApi();

var monitorId = "monitorId_example"; // String | The id of the monitor

var opts = { 
  'startDate': "startDate_example", // String | A timestamp indicating the earliest time of the first monitor check in ISO 8601 format
  'endDate': "endDate_example", // String | A timestamp indicating the latest time of the first monitor check in ISO 8601 format
  'result': "result_example", // String | A timestamp indicating the latest time of the first monitor check in ISO 8601 format
  'limit': 250, // Number | The max number of results.
  'offset': 0, // Number | The number of records to when returning the results. When paginating results, the page number = ceil(offset/limit)
  'naked': true // Boolean | 
};
apiInstance.listMonitoringTaskChecks(monitorId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitorId** | **String**| The id of the monitor | 
 **startDate** | **String**| A timestamp indicating the earliest time of the first monitor check in ISO 8601 format | [optional] 
 **endDate** | **String**| A timestamp indicating the latest time of the first monitor check in ISO 8601 format | [optional] 
 **result** | **String**| A timestamp indicating the latest time of the first monitor check in ISO 8601 format | [optional] 
 **limit** | **Number**| The max number of results. | [optional] [default to 250]
 **offset** | **Number**| The number of records to when returning the results. When paginating results, the page number &#x3D; ceil(offset/limit) | [optional] [default to 0]
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**[MonitoringTaskCheck]**](MonitoringTaskCheck.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listMonitoringTasks"></a>
# **listMonitoringTasks**
> [MonitoringTaskSummary] listMonitoringTasks(opts)



Retrieve Monitor for a specific resource.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MonitorsApi();

var opts = { 
  'target': "target_example", // String | The target system to search for.
  'active': "true", // String | Filter by monitors that are active or inactive.
  'naked': true, // Boolean | 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listMonitoringTasks(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | **String**| The target system to search for. | [optional] 
 **active** | **String**| Filter by monitors that are active or inactive. | [optional] [default to true]
 **naked** | **Boolean**|  | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**[MonitoringTaskSummary]**](MonitoringTaskSummary.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateMonitoringTask"></a>
# **updateMonitoringTask**
> MonitoringTaskDetails updateMonitoringTask(body, monitorId, opts)



Updates an existing monitor.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MonitorsApi();

var body = new AgaveJsSdk.MonitoringTaskSummary(); // MonitoringTaskSummary | The description of the app to add or update. This can be either a file upload or json posted to the request body.

var monitorId = "monitorId_example"; // String | The id of the monitor to update

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateMonitoringTask(body, monitorId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MonitoringTaskSummary**](MonitoringTaskSummary.md)| The description of the app to add or update. This can be either a file upload or json posted to the request body. | 
 **monitorId** | **String**| The id of the monitor to update | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**MonitoringTaskDetails**](MonitoringTaskDetails.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

