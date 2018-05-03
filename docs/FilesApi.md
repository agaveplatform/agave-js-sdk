# AgaveJsSdk.FilesApi

All URIs are relative to *https://public.agaveapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearFileItemPermissions**](FilesApi.md#clearFileItemPermissions) | **DELETE** /files/v2/pems/system/{systemId}/{filePath} | 
[**deleteFileItem**](FilesApi.md#deleteFileItem) | **DELETE** /files/v2/media/system/{systemId}/{filePath} | 
[**deleteFileItemOnDefaultSystem**](FilesApi.md#deleteFileItemOnDefaultSystem) | **DELETE** /files/v2/media/{filePath} | 
[**downloadFileItem**](FilesApi.md#downloadFileItem) | **GET** /files/v2/media/system/{systemId}/{filePath} | 
[**downloadFileItemOnDefaultSystem**](FilesApi.md#downloadFileItemOnDefaultSystem) | **GET** /files/v2/media/{filePath} | 
[**importFileItem**](FilesApi.md#importFileItem) | **POST** /files/v2/media/system/{systemId}/{filePath} | 
[**importFileItemToDefaultSystem**](FilesApi.md#importFileItemToDefaultSystem) | **POST** /files/v2/media/{filePath} | 
[**invokeFileActionOnDefaultSystem**](FilesApi.md#invokeFileActionOnDefaultSystem) | **PUT** /files/v2/media/{filePath} | 
[**invokeFileItemAction**](FilesApi.md#invokeFileItemAction) | **PUT** /files/v2/media/system/{systemId}/{filePath} | 
[**listFileItemHistory**](FilesApi.md#listFileItemHistory) | **GET** /files/v2/history/system/{systemId}/{filePath} | 
[**listFileItemHistoryOnDefaultSystem**](FilesApi.md#listFileItemHistoryOnDefaultSystem) | **GET** /files/v2/history/{filePath} | 
[**listFileItemPermissions**](FilesApi.md#listFileItemPermissions) | **GET** /files/v2/pems/system/{systemId}/{filePath} | 
[**listFileItemPermissionsOnDefaultSystem**](FilesApi.md#listFileItemPermissionsOnDefaultSystem) | **GET** /files/v2/pems/{filePath} | 
[**listFileItems**](FilesApi.md#listFileItems) | **GET** /files/v2/listings/system/{systemId}/{filePath} | 
[**listFileItemsOnDefaultSystem**](FilesApi.md#listFileItemsOnDefaultSystem) | **GET** /files/v2/listings/{filepath} | 
[**updateFileItemPermission**](FilesApi.md#updateFileItemPermission) | **POST** /files/v2/pems/system/{systemId}/{filePath} | 
[**updateFileItemPermissionsOnDefaultSystem**](FilesApi.md#updateFileItemPermissionsOnDefaultSystem) | **POST** /files/v2/pems/{filePath} | 


<a name="clearFileItemPermissions"></a>
# **clearFileItemPermissions**
> clearFileItemPermissions(filePath, systemId, opts)



Deletes all permissions on a file except those of the owner.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var filePath = "filePath_example"; // String | The path of the file relative to the default storage location of the user.

var systemId = "systemId_example"; // String | The id of the system on which the file item lives.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.clearFileItemPermissions(filePath, systemId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePath** | **String**| The path of the file relative to the default storage location of the user. | 
 **systemId** | **String**| The id of the system on which the file item lives. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFileItem"></a>
# **deleteFileItem**
> deleteFileItem(systemId, filePath, opts)



Deletes a file or folder at the specified path on the specified remote system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var systemId = "systemId_example"; // String | The unique id of the system on which the data resides.

var filePath = "filePath_example"; // String | The path of the file relative to the default storage location of the user.

var opts = { 
  'naked': "true" // String | If true, the response wrapper is stripped and the raw object is returned
};
apiInstance.deleteFileItem(systemId, filePath, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The unique id of the system on which the data resides. | 
 **filePath** | **String**| The path of the file relative to the default storage location of the user. | 
 **naked** | **String**| If true, the response wrapper is stripped and the raw object is returned | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFileItemOnDefaultSystem"></a>
# **deleteFileItemOnDefaultSystem**
> deleteFileItemOnDefaultSystem(filePath, opts)



Deletes a file or folder on default storage system of the user

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var filePath = "filePath_example"; // String | The path of the file relative to the default storage location of the user.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteFileItemOnDefaultSystem(filePath, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePath** | **String**| The path of the file relative to the default storage location of the user. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="downloadFileItem"></a>
# **downloadFileItem**
> downloadFileItem(systemId, filePath, opts)



Download a file from the given system

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var systemId = "systemId_example"; // String | The unique id of the system on which the data resides.

var filePath = "filePath_example"; // String | The path of the file relative to the default storage location of the user.

var opts = { 
  'force': false // Boolean | Boolean flag to indicate whether the Content-Disposition header should be set to force a browser download.
};
apiInstance.downloadFileItem(systemId, filePath, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The unique id of the system on which the data resides. | 
 **filePath** | **String**| The path of the file relative to the default storage location of the user. | 
 **force** | **Boolean**| Boolean flag to indicate whether the Content-Disposition header should be set to force a browser download. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

<a name="downloadFileItemOnDefaultSystem"></a>
# **downloadFileItemOnDefaultSystem**
> downloadFileItemOnDefaultSystem(filePath, opts)



Download a file from the default storage location of the user.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var filePath = "filePath_example"; // String | The path of the file relative to the default storage location of the user

var opts = { 
  'force': false // Boolean | Boolean flag to indicate whether the Content-Disposition header should be set to force browser file download.
};
apiInstance.downloadFileItemOnDefaultSystem(filePath, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePath** | **String**| The path of the file relative to the default storage location of the user | 
 **force** | **Boolean**| Boolean flag to indicate whether the Content-Disposition header should be set to force browser file download. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

<a name="importFileItem"></a>
# **importFileItem**
> FileInfo importFileItem(systemId, filePath, body, opts)



Import file item from a remote URL to the target system

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var systemId = "systemId_example"; // String | The id of the system.

var filePath = "filePath_example"; // String | The relative or absolute path where the file item should be imported

var body = new AgaveJsSdk.FileImportRequest(); // FileImportRequest | The import request

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.importFileItem(systemId, filePath, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **filePath** | **String**| The relative or absolute path where the file item should be imported | 
 **body** | [**FileImportRequest**](FileImportRequest.md)| The import request | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**FileInfo**](FileInfo.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importFileItemToDefaultSystem"></a>
# **importFileItemToDefaultSystem**
> FileInfo importFileItemToDefaultSystem(filePath, body, opts)



Import file item from a remote URL to the target system

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var filePath = "filePath_example"; // String | The relative or absolute path where the file item should be imported

var body = new AgaveJsSdk.FileImportRequest(); // FileImportRequest | The import request

var opts = { 
  'naked': "true" // String | If true, the response wrapper is stripped and the raw object is returned
};
apiInstance.importFileItemToDefaultSystem(filePath, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePath** | **String**| The relative or absolute path where the file item should be imported | 
 **body** | [**FileImportRequest**](FileImportRequest.md)| The import request | 
 **naked** | **String**| If true, the response wrapper is stripped and the raw object is returned | [optional] [default to true]

### Return type

[**FileInfo**](FileInfo.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invokeFileActionOnDefaultSystem"></a>
# **invokeFileActionOnDefaultSystem**
> Object invokeFileActionOnDefaultSystem(filePath, body, opts)



Perform an action on a file or folder.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var filePath = "filePath_example"; // String | The path of the file relative to the default storage location of the user.

var body = new AgaveJsSdk.FileAction(); // FileAction | The operation to perform

var opts = { 
  'naked': "true" // String | If true, the response wrapper is stripped and the raw object is returned
};
apiInstance.invokeFileActionOnDefaultSystem(filePath, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePath** | **String**| The path of the file relative to the default storage location of the user. | 
 **body** | [**FileAction**](FileAction.md)| The operation to perform | 
 **naked** | **String**| If true, the response wrapper is stripped and the raw object is returned | [optional] [default to true]

### Return type

**Object**

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invokeFileItemAction"></a>
# **invokeFileItemAction**
> Object invokeFileItemAction(systemId, filePath, body, opts)



Perform an action on a file or folder.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var systemId = "systemId_example"; // String | The unique id of the system on which the data resides.

var filePath = "filePath_example"; // String | The path of the file relative to the default storage location of the user.

var body = new AgaveJsSdk.FileAction(); // FileAction | The operation to perform. 

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.invokeFileItemAction(systemId, filePath, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The unique id of the system on which the data resides. | 
 **filePath** | **String**| The path of the file relative to the default storage location of the user. | 
 **body** | [**FileAction**](FileAction.md)| The operation to perform.  | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

**Object**

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listFileItemHistory"></a>
# **listFileItemHistory**
> HistoryEvent listFileItemHistory(filePath, systemId, opts)



Download a file from the default storage location of the user.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var filePath = "filePath_example"; // String | The path of the file relative to the given system root location.

var systemId = "systemId_example"; // String | The system on which the file item resides

var opts = { 
  'status': "status_example", // String | The status of the event
  'created': "created_example", // String | The date the event occurred
  'filter': "*", // String | A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects
  'naked': "true", // String | If true, the response wrapper is stripped and the raw object is returned
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listFileItemHistory(filePath, systemId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePath** | **String**| The path of the file relative to the given system root location. | 
 **systemId** | **String**| The system on which the file item resides | 
 **status** | **String**| The status of the event | [optional] 
 **created** | **String**| The date the event occurred | [optional] 
 **filter** | **String**| A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects | [optional] [default to *]
 **naked** | **String**| If true, the response wrapper is stripped and the raw object is returned | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**HistoryEvent**](HistoryEvent.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listFileItemHistoryOnDefaultSystem"></a>
# **listFileItemHistoryOnDefaultSystem**
> [HistoryEvent] listFileItemHistoryOnDefaultSystem(filePath, opts)



List event history of a file item on the default storage system of the user

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var filePath = "filePath_example"; // String | The path of the file relative to the default storage location of the user.

var opts = { 
  'status': "status_example", // String | The event status
  'created': "created_example", // String | The date the event occurred
  'filter': "*", // String | A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects
  'naked': "true", // String | If true, the response wrapper is stripped and the raw object is returned
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listFileItemHistoryOnDefaultSystem(filePath, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePath** | **String**| The path of the file relative to the default storage location of the user. | 
 **status** | **String**| The event status | [optional] 
 **created** | **String**| The date the event occurred | [optional] 
 **filter** | **String**| A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects | [optional] [default to *]
 **naked** | **String**| If true, the response wrapper is stripped and the raw object is returned | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**[HistoryEvent]**](HistoryEvent.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listFileItemPermissions"></a>
# **listFileItemPermissions**
> [FilePermission] listFileItemPermissions(filePath, systemId, opts)



List all the share permissions for a file or folder.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var filePath = "filePath_example"; // String | The path of the file relative to the default storage location of the user.

var systemId = "systemId_example"; // String | The system id

var opts = { 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0, // Number | The number of results skipped in the result set returned from this query
  'naked': true // Boolean | 
};
apiInstance.listFileItemPermissions(filePath, systemId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePath** | **String**| The path of the file relative to the default storage location of the user. | 
 **systemId** | **String**| The system id | 
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**[FilePermission]**](FilePermission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listFileItemPermissionsOnDefaultSystem"></a>
# **listFileItemPermissionsOnDefaultSystem**
> [FilePermission] listFileItemPermissionsOnDefaultSystem(filePath, opts)



List all the share permissions for a file or folder.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var filePath = "filePath_example"; // String | The path of the file relative to the default storage location of the user.

var opts = { 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0, // Number | The number of results skipped in the result set returned from this query
  'naked': true // Boolean | 
};
apiInstance.listFileItemPermissionsOnDefaultSystem(filePath, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePath** | **String**| The path of the file relative to the default storage location of the user. | 
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**[FilePermission]**](FilePermission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listFileItems"></a>
# **listFileItems**
> [FileInfo] listFileItems(systemId, filePath, opts)



Get a remote directory listing on a specific system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var systemId = "systemId_example"; // String | The unique id of the system on which the data resides.

var filePath = "filePath_example"; // String | The path of the file relative to the default storage location of the user.

var opts = { 
  'naked': true, // Boolean | 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listFileItems(systemId, filePath, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The unique id of the system on which the data resides. | 
 **filePath** | **String**| The path of the file relative to the default storage location of the user. | 
 **naked** | **Boolean**|  | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**[FileInfo]**](FileInfo.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listFileItemsOnDefaultSystem"></a>
# **listFileItemsOnDefaultSystem**
> [FileInfo] listFileItemsOnDefaultSystem(filepath, opts)



Get a remote directory listing on the default storage system of the user

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var filepath = "filepath_example"; // String | The path of the file relative to the default storage location of the user

var opts = { 
  'filter': "*", // String | A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects
  'naked': "true", // String | If true, the response wrapper is stripped and the raw object is returned
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listFileItemsOnDefaultSystem(filepath, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filepath** | **String**| The path of the file relative to the default storage location of the user | 
 **filter** | **String**| A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects | [optional] [default to *]
 **naked** | **String**| If true, the response wrapper is stripped and the raw object is returned | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**[FileInfo]**](FileInfo.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFileItemPermission"></a>
# **updateFileItemPermission**
> FilePermission updateFileItemPermission(filePath, systemId, body, opts)



Update permissions for a single user.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var filePath = "filePath_example"; // String | The path of the file relative to the default storage location of the user.

var systemId = "systemId_example"; // String | The id of the system on which the file resides

var body = new AgaveJsSdk.PermissionRequest(); // PermissionRequest | The updated permission value

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateFileItemPermission(filePath, systemId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePath** | **String**| The path of the file relative to the default storage location of the user. | 
 **systemId** | **String**| The id of the system on which the file resides | 
 **body** | [**PermissionRequest**](PermissionRequest.md)| The updated permission value | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**FilePermission**](FilePermission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFileItemPermissionsOnDefaultSystem"></a>
# **updateFileItemPermissionsOnDefaultSystem**
> FilePermission updateFileItemPermissionsOnDefaultSystem(filePath, body, filePath2)



Update permissions for a single user on their default storage system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.FilesApi();

var filePath = "filePath_example"; // String | The path of the file relative to the default storage location of the user.

var body = new AgaveJsSdk.FilePermissionRequest(); // FilePermissionRequest | The permission add or update. 

var filePath2 = true; // Boolean | 

apiInstance.updateFileItemPermissionsOnDefaultSystem(filePath, body, filePath2).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePath** | **String**| The path of the file relative to the default storage location of the user. | 
 **body** | [**FilePermissionRequest**](FilePermissionRequest.md)| The permission add or update.  | 
 **filePath2** | **Boolean**|  | [default to true]

### Return type

[**FilePermission**](FilePermission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

