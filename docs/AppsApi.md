# AgaveJsSdk.AppsApi

All URIs are relative to *https://public.agaveapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addApp**](AppsApi.md#addApp) | **POST** /apps/v2/ | 
[**addAppPermission**](AppsApi.md#addAppPermission) | **POST** /apps/v2/{appId}/pems | 
[**clearAppPermissions**](AppsApi.md#clearAppPermissions) | **DELETE** /apps/v2/{appId}/pems | 
[**deleteApp**](AppsApi.md#deleteApp) | **DELETE** /apps/v2/{appId} | 
[**deleteAppPermission**](AppsApi.md#deleteAppPermission) | **DELETE** /apps/v2/{appId}/pems/{username} | 
[**getAppDetails**](AppsApi.md#getAppDetails) | **GET** /apps/v2/{appId} | 
[**getAppPermission**](AppsApi.md#getAppPermission) | **GET** /apps/v2/{appId}/pems/{username} | 
[**getAppSubmissionForm**](AppsApi.md#getAppSubmissionForm) | **GET** /apps/v2/{appId}/form | 
[**invokeAppAction**](AppsApi.md#invokeAppAction) | **PUT** /apps/v2/{appId} | 
[**listAppHistory**](AppsApi.md#listAppHistory) | **GET** /apps/v2/{appId}/history | 
[**listAppPermissions**](AppsApi.md#listAppPermissions) | **GET** /apps/v2/{appId}/pems | 
[**listApps**](AppsApi.md#listApps) | **GET** /apps/v2/ | List apps
[**updateApp**](AppsApi.md#updateApp) | **POST** /apps/v2/{appId} | 
[**updateAppPermission**](AppsApi.md#updateAppPermission) | **POST** /apps/v2/{appId}/pems/{username} | 


<a name="addApp"></a>
# **addApp**
> Application addApp(opts)



Register and update new applications.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.AppsApi();

var opts = { 
  'body': new AgaveJsSdk.Application(), // Application | The description of the app to add or update. 
  'naked': true // Boolean | 
};
apiInstance.addApp(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Application**](Application.md)| The description of the app to add or update.  | [optional] 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Application**](Application.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addAppPermission"></a>
# **addAppPermission**
> Permission addAppPermission(appId, body, opts)



Grant a user permission for an application.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.AppsApi();

var appId = "appId_example"; // String | The id of the application. The application id is made up of the name and version separated by a dash.

var body = new AgaveJsSdk.Permission(); // Permission | The permission add or update. 

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.addAppPermission(appId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The id of the application. The application id is made up of the name and version separated by a dash. | 
 **body** | [**Permission**](Permission.md)| The permission add or update.  | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearAppPermissions"></a>
# **clearAppPermissions**
> clearAppPermissions(appId, opts)



Deletes all permissions on an application.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.AppsApi();

var appId = "appId_example"; // String | The id of the application. The application id is made up of the name and version separated by a dash.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.clearAppPermissions(appId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The id of the application. The application id is made up of the name and version separated by a dash. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteApp"></a>
# **deleteApp**
> deleteApp(appId, opts)



Deletes an application.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.AppsApi();

var appId = "appId_example"; // String | The id of the application. The application id is made up of the name and version separated by a dash.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteApp(appId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The id of the application. The application id is made up of the name and version separated by a dash. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAppPermission"></a>
# **deleteAppPermission**
> deleteAppPermission(appId, username, opts)



Deletes all permissions for the given user on an application.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.AppsApi();

var appId = "appId_example"; // String | The id of the application. The application id is made up of the name and version separated by a dash.

var username = "username_example"; // String | The username of the api user associated with the permission

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteAppPermission(appId, username, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The id of the application. The application id is made up of the name and version separated by a dash. | 
 **username** | **String**| The username of the api user associated with the permission | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppDetails"></a>
# **getAppDetails**
> Application getAppDetails(appId, opts)



Get details of an application by its unique id.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.AppsApi();

var appId = "appId_example"; // String | The id of the application. The application id is made up of the name and version separated by a dash.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getAppDetails(appId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The id of the application. The application id is made up of the name and version separated by a dash. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Application**](Application.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppPermission"></a>
# **getAppPermission**
> Permission getAppPermission(appId, username, opts)



Get a specific user permission for an application.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.AppsApi();

var appId = "appId_example"; // String | The id of the application. The application id is made up of the name and version separated by a dash.

var username = "username_example"; // String | The username of the api user associated with the permission.

var opts = { 
  'filter': "*", // String | A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects
  'naked': "true" // String | If true, the response wrapper is stripped and the raw object is returned
};
apiInstance.getAppPermission(appId, username, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The id of the application. The application id is made up of the name and version separated by a dash. | 
 **username** | **String**| The username of the api user associated with the permission. | 
 **filter** | **String**| A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects | [optional] [default to *]
 **naked** | **String**| If true, the response wrapper is stripped and the raw object is returned | [optional] [default to true]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppSubmissionForm"></a>
# **getAppSubmissionForm**
> &#39;String&#39; getAppSubmissionForm(appId, opts)



Get a submission form for the named application.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.AppsApi();

var appId = "appId_example"; // String | The app for which to create the form

var opts = { 
  'naked': "true" // String | If true, the response wrapper is stripped and the raw object is returned
};
apiInstance.getAppSubmissionForm(appId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The app for which to create the form | 
 **naked** | **String**| If true, the response wrapper is stripped and the raw object is returned | [optional] [default to true]

### Return type

**&#39;String&#39;**

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invokeAppAction"></a>
# **invokeAppAction**
> Application invokeAppAction(appId, body, opts)



Edit an application.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.AppsApi();

var appId = "appId_example"; // String | The id of the application. The application id is made up of the name and version separated by a dash.

var body = new AgaveJsSdk.ApplicationAction(); // ApplicationAction | The operation to perform.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.invokeAppAction(appId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The id of the application. The application id is made up of the name and version separated by a dash. | 
 **body** | [**ApplicationAction**](ApplicationAction.md)| The operation to perform. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Application**](Application.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAppHistory"></a>
# **listAppHistory**
> HistoryEvent listAppHistory(appId, opts)



List the event history of this app

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.AppsApi();

var appId = "appId_example"; // String | The id of the app for which the history will be returned

var opts = { 
  'status': "status_example", // String | The event status
  'created': "created_example", // String | The date the event occurred
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0, // Number | The number of results skipped in the result set returned from this query
  'naked': true // Boolean | 
};
apiInstance.listAppHistory(appId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The id of the app for which the history will be returned | 
 **status** | **String**| The event status | [optional] 
 **created** | **String**| The date the event occurred | [optional] 
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**HistoryEvent**](HistoryEvent.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAppPermissions"></a>
# **listAppPermissions**
> [Permission] listAppPermissions(appId, opts)



Get the permission for this application.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.AppsApi();

var appId = "appId_example"; // String | The id of the application. The application id is made up of the name and version separated by a dash.

var opts = { 
  'filter': "*", // String | A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects
  'naked': "true", // String | If true, the response wrapper is stripped and the raw object is returned
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listAppPermissions(appId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The id of the application. The application id is made up of the name and version separated by a dash. | 
 **filter** | **String**| A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects | [optional] [default to *]
 **naked** | **String**| If true, the response wrapper is stripped and the raw object is returned | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**[Permission]**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listApps"></a>
# **listApps**
> [ApplicationSummary] listApps(opts)

List apps

Get a list of available applications.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.AppsApi();

var opts = { 
  '_public': true, // Boolean | Whether to return only public apps. (Acceptable values are: \"true\", \"false\")
  'name': "name_example", // String | The name of the app
  'executionSystem': "executionSystem_example", // String | The execution system of the system
  'tags': "tags_example", // String | A free text tag associated with an app
  'filter': "*", // String | A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects
  'naked': "true", // String | If true, the response wrapper is stripped and the raw object is returned
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listApps(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_public** | **Boolean**| Whether to return only public apps. (Acceptable values are: \&quot;true\&quot;, \&quot;false\&quot;) | [optional] 
 **name** | **String**| The name of the app | [optional] 
 **executionSystem** | **String**| The execution system of the system | [optional] 
 **tags** | **String**| A free text tag associated with an app | [optional] 
 **filter** | **String**| A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects | [optional] [default to *]
 **naked** | **String**| If true, the response wrapper is stripped and the raw object is returned | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**[ApplicationSummary]**](ApplicationSummary.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateApp"></a>
# **updateApp**
> Application updateApp(appId, body, opts)



Update an application.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.AppsApi();

var appId = "appId_example"; // String | The id of the application. The application id is made up of the name and version separated by a dash.

var body = new AgaveJsSdk.Application(); // Application | The description of the app to add or update. 

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateApp(appId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The id of the application. The application id is made up of the name and version separated by a dash. | 
 **body** | [**Application**](Application.md)| The description of the app to add or update.  | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Application**](Application.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAppPermission"></a>
# **updateAppPermission**
> Permission updateAppPermission(appId, username, body, opts)



Add or update a user permission for an application.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.AppsApi();

var appId = "appId_example"; // String | The id of the application. The application id is made up of the name and version separated by a dash.

var username = "username_example"; // String | The username of the api user associated with the permission

var body = new AgaveJsSdk.Permission(); // Permission | The permission add or update. 

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateAppPermission(appId, username, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The id of the application. The application id is made up of the name and version separated by a dash. | 
 **username** | **String**| The username of the api user associated with the permission | 
 **body** | [**Permission**](Permission.md)| The permission add or update.  | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

