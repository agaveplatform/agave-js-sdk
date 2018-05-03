# AgaveJsSdk.SystemsApi

All URIs are relative to *https://public.agaveapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addExecutionSystem**](SystemsApi.md#addExecutionSystem) | **POST** /systems/v2/ | 
[**addStorageSystem**](SystemsApi.md#addStorageSystem) | **POST** /systems/v2 | 
[**addSystemCredential**](SystemsApi.md#addSystemCredential) | **POST** /systems/v2/{systemId}/credentials | 
[**addSystemRole**](SystemsApi.md#addSystemRole) | **POST** /systems/{systemId}/roles | 
[**clearSystemAuthCredentials**](SystemsApi.md#clearSystemAuthCredentials) | **DELETE** /systems/v2/{systemId}/credentials | 
[**clearSystemAuthCredentialsForInternalUser**](SystemsApi.md#clearSystemAuthCredentialsForInternalUser) | **DELETE** /systems/v2/{systemId}/credentials/{internalUsername} | 
[**clearSystemRoles**](SystemsApi.md#clearSystemRoles) | **DELETE** /systems/v2/{systemId}/roles | 
[**deleteSystem**](SystemsApi.md#deleteSystem) | **DELETE** /systems/v2/{systemId} | 
[**deleteSystemAuthCredentialForInternalUser**](SystemsApi.md#deleteSystemAuthCredentialForInternalUser) | **DELETE** /systems/v2/{systemId}/credentials/{internalUsername}/{credentialType} | 
[**deleteSystemRole**](SystemsApi.md#deleteSystemRole) | **DELETE** /systems/v2/{systemId}/roles/{username} | 
[**getSystemCredential**](SystemsApi.md#getSystemCredential) | **GET** /systems/v2/{systemId}/credentials/{internalUsername}/{credentialType} | 
[**getSystemDetails**](SystemsApi.md#getSystemDetails) | **GET** /systems/v2/{systemId} | 
[**getSystemRole**](SystemsApi.md#getSystemRole) | **GET** /systems/v2/{systemId}/roles/{username} | 
[**invokeSystemAction**](SystemsApi.md#invokeSystemAction) | **PUT** /systems/v2/{systemId} | 
[**listCredentialsForInternalUser**](SystemsApi.md#listCredentialsForInternalUser) | **GET** /systems/v2/{systemId}/credentials/{internalUsername} | 
[**listSystemCredentials**](SystemsApi.md#listSystemCredentials) | **GET** /systems/v2/{systemId}/credentials | 
[**listSystemRoles**](SystemsApi.md#listSystemRoles) | **GET** /systems/v2/{systemId}/roles | 
[**listSystems**](SystemsApi.md#listSystems) | **GET** /systems/v2/ | 
[**updateSystem**](SystemsApi.md#updateSystem) | **POST** /systems/v2/{systemId} | 
[**updateSystemCredential**](SystemsApi.md#updateSystemCredential) | **POST** /systems/v2/{systemId}/credentials/{internalUsername} | 
[**updateSystemCredentialOfType**](SystemsApi.md#updateSystemCredentialOfType) | **POST** /systems/v2/{systemId}/credentials/{internalUsername}/{credentialType} | 
[**updateSystemRole**](SystemsApi.md#updateSystemRole) | **POST** /systems/v2/{systemId}/roles/{username} | 


<a name="addExecutionSystem"></a>
# **addExecutionSystem**
> ExecutionSystem addExecutionSystem(body, opts)



Add a new execution system

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var body = new AgaveJsSdk.SystemRequest(); // SystemRequest | The description of the system to add or update.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.addExecutionSystem(body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SystemRequest**](SystemRequest.md)| The description of the system to add or update. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**ExecutionSystem**](ExecutionSystem.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addStorageSystem"></a>
# **addStorageSystem**
> StorageSystem addStorageSystem(body, opts)



Add  a storage system

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var body = new AgaveJsSdk.SystemRequest(); // SystemRequest | Description of a storage system

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.addStorageSystem(body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SystemRequest**](SystemRequest.md)| Description of a storage system | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**StorageSystem**](StorageSystem.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addSystemCredential"></a>
# **addSystemCredential**
> [SystemCredential] addSystemCredential(systemId, body, opts)



Add an internal user&#39;s credential on a system. This applies both to storage and, if applicable, login credentials.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system.

var body = new AgaveJsSdk.SystemCredential(); // SystemCredential | The description of the internal user credential to add or update.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.addSystemCredential(systemId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **body** | [**SystemCredential**](SystemCredential.md)| The description of the internal user credential to add or update. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**[SystemCredential]**](SystemCredential.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addSystemRole"></a>
# **addSystemRole**
> SystemRole addSystemRole(systemId, body, opts)



Adds a role on the system for the given user

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system on which to grant the role

var body = new AgaveJsSdk.SystemRoleRequest(); // SystemRoleRequest | The new role to grant

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.addSystemRole(systemId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system on which to grant the role | 
 **body** | [**SystemRoleRequest**](SystemRoleRequest.md)| The new role to grant | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**SystemRole**](SystemRole.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearSystemAuthCredentials"></a>
# **clearSystemAuthCredentials**
> clearSystemAuthCredentials(systemId, opts)



Deletes all credentials registered to a system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.clearSystemAuthCredentials(systemId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearSystemAuthCredentialsForInternalUser"></a>
# **clearSystemAuthCredentialsForInternalUser**
> clearSystemAuthCredentialsForInternalUser(systemId, internalUsername, opts)



Deletes all internal user credentials registered to a system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system.

var internalUsername = "internalUsername_example"; // String | The username of a internal user on this system.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.clearSystemAuthCredentialsForInternalUser(systemId, internalUsername, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **internalUsername** | **String**| The username of a internal user on this system. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearSystemRoles"></a>
# **clearSystemRoles**
> clearSystemRoles(systemId, opts)



Deletes all roles on a system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.clearSystemRoles(systemId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSystem"></a>
# **deleteSystem**
> deleteSystem(systemId, opts)



Delete a system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The unique id of the system

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteSystem(systemId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The unique id of the system | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSystemAuthCredentialForInternalUser"></a>
# **deleteSystemAuthCredentialForInternalUser**
> deleteSystemAuthCredentialForInternalUser(systemId, internalUsername, credentialType, opts)



Deletes the internal user credentials for the given credential type on a system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system.

var internalUsername = "internalUsername_example"; // String | The username of a internal user on this system.

var credentialType = "credentialType_example"; // String | The configuration type to which to apply this credential.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteSystemAuthCredentialForInternalUser(systemId, internalUsername, credentialType, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **internalUsername** | **String**| The username of a internal user on this system. | 
 **credentialType** | **String**| The configuration type to which to apply this credential. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSystemRole"></a>
# **deleteSystemRole**
> deleteSystemRole(systemId, username, opts)



Deletes all roles for a user on a system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system.

var username = "username_example"; // String | The username of the api user associated with the role

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteSystemRole(systemId, username, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **username** | **String**| The username of the api user associated with the role | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSystemCredential"></a>
# **getSystemCredential**
> SystemCredential getSystemCredential(systemId, internalUsername, credentialType, opts)



Get the internal user credential of the given type on the system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system.

var internalUsername = "internalUsername_example"; // String | The username of a internal user on this system.

var credentialType = "credentialType_example"; // String | The configuration type to which to apply this credential.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getSystemCredential(systemId, internalUsername, credentialType, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **internalUsername** | **String**| The username of a internal user on this system. | 
 **credentialType** | **String**| The configuration type to which to apply this credential. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**SystemCredential**](SystemCredential.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSystemDetails"></a>
# **getSystemDetails**
> System getSystemDetails(systemId, opts)



Find information about an individual system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The unique id of the system

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getSystemDetails(systemId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The unique id of the system | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**System**](System.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSystemRole"></a>
# **getSystemRole**
> SystemRole getSystemRole(systemId, username, opts)



Get a specific user role on this system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system.

var username = "username_example"; // String | The username of the user about whose role you are inquiring.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getSystemRole(systemId, username, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **username** | **String**| The username of the user about whose role you are inquiring. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**SystemRole**](SystemRole.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="invokeSystemAction"></a>
# **invokeSystemAction**
> invokeSystemAction(systemId, body, opts)



Perform a management action on the system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system receiving the action

var body = new AgaveJsSdk.SystemAction(); // SystemAction | The action to invoke

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.invokeSystemAction(systemId, body, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system receiving the action | 
 **body** | [**SystemAction**](SystemAction.md)| The action to invoke | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listCredentialsForInternalUser"></a>
# **listCredentialsForInternalUser**
> SystemCredentialsResponse listCredentialsForInternalUser(systemId, internalUsername)



Get a list of all internal users and their credentials on this system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system.

var internalUsername = "internalUsername_example"; // String | The username of a internal user on this system.

apiInstance.listCredentialsForInternalUser(systemId, internalUsername).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **internalUsername** | **String**| The username of a internal user on this system. | 

### Return type

[**SystemCredentialsResponse**](SystemCredentialsResponse.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSystemCredentials"></a>
# **listSystemCredentials**
> [SystemCredential] listSystemCredentials(systemId, opts)



Get a list of all internal user credentials on this system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system.

var opts = { 
  'naked': true, // Boolean | 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listSystemCredentials(systemId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **naked** | **Boolean**|  | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**[SystemCredential]**](SystemCredential.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSystemRoles"></a>
# **listSystemRoles**
> MultipleSystemRoleResponse listSystemRoles(systemId, opts)



Get a list of all users and their roles on this system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system.

var opts = { 
  'naked': true, // Boolean | 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listSystemRoles(systemId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **naked** | **Boolean**|  | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**MultipleSystemRoleResponse**](MultipleSystemRoleResponse.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSystems"></a>
# **listSystems**
> [SystemSummary] listSystems(offset, opts)



Show all systems available to the user.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var offset = 0; // Number | The number of results skipped in the result set returned from this query

var opts = { 
  'type': "type_example", // String | The type of system to return
  '_default': true, // Boolean | If true, only default systems be returned
  '_public': true, // Boolean | If true, only public systems will be returned. If false, no public systems will be returned. If null, both public and private systems will be returned.
  'naked': true, // Boolean | 
  'limit': 100 // Number | The maximum number of results returned from this query
};
apiInstance.listSystems(offset, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [default to 0]
 **type** | **String**| The type of system to return | [optional] 
 **_default** | **Boolean**| If true, only default systems be returned | [optional] 
 **_public** | **Boolean**| If true, only public systems will be returned. If false, no public systems will be returned. If null, both public and private systems will be returned. | [optional] 
 **naked** | **Boolean**|  | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]

### Return type

[**[SystemSummary]**](SystemSummary.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSystem"></a>
# **updateSystem**
> System updateSystem(systemId, body, opts)



Update a system description

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The unique id of the system

var body = new AgaveJsSdk.SystemRequest(); // SystemRequest | The description of the system to update.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateSystem(systemId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The unique id of the system | 
 **body** | [**SystemRequest**](SystemRequest.md)| The description of the system to update. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**System**](System.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSystemCredential"></a>
# **updateSystemCredential**
> SystemCredential updateSystemCredential(systemId, internalUsername, body, opts)



Update an internal user credential on a system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system.

var internalUsername = "internalUsername_example"; // String | The username of a internal user on this system.

var body = new AgaveJsSdk.SystemAuthConfig(); // SystemAuthConfig | The description of the internal user credential to add or update.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateSystemCredential(systemId, internalUsername, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **internalUsername** | **String**| The username of a internal user on this system. | 
 **body** | [**SystemAuthConfig**](SystemAuthConfig.md)| The description of the internal user credential to add or update. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**SystemCredential**](SystemCredential.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSystemCredentialOfType"></a>
# **updateSystemCredentialOfType**
> SystemCredential updateSystemCredentialOfType(systemId, internalUsername, credentialType, body, opts)



Add or update a credential of the given type on a system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system.

var internalUsername = "internalUsername_example"; // String | The username of a internal user on this system.

var credentialType = "credentialType_example"; // String | The configuration type to which to apply this credential.

var body = new AgaveJsSdk.SystemAuthConfig(); // SystemAuthConfig | The description of the internal user credential to add or update.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateSystemCredentialOfType(systemId, internalUsername, credentialType, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **internalUsername** | **String**| The username of a internal user on this system. | 
 **credentialType** | **String**| The configuration type to which to apply this credential. | 
 **body** | [**SystemAuthConfig**](SystemAuthConfig.md)| The description of the internal user credential to add or update. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**SystemCredential**](SystemCredential.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSystemRole"></a>
# **updateSystemRole**
> SystemRole updateSystemRole(systemId, username, body, opts)



Update a user role on a system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.SystemsApi();

var systemId = "systemId_example"; // String | The id of the system.

var username = "username_example"; // String | The username of the api user associated with the role

var body = new AgaveJsSdk.SystemRoleRequest(); // SystemRoleRequest | The role to update.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateSystemRole(systemId, username, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemId** | **String**| The id of the system. | 
 **username** | **String**| The username of the api user associated with the role | 
 **body** | [**SystemRoleRequest**](SystemRoleRequest.md)| The role to update. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**SystemRole**](SystemRole.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

