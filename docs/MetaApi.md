# AgaveJsSdk.MetaApi

All URIs are relative to *https://public.agaveapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMetadata**](MetaApi.md#addMetadata) | **POST** /meta/v2/data | 
[**addMetadataPermission**](MetaApi.md#addMetadataPermission) | **POST** /meta/v2/data/{uuid}/pems | 
[**addMetadataSchema**](MetaApi.md#addMetadataSchema) | **POST** /meta/v2/schemas | 
[**addMetadataSchemaPermission**](MetaApi.md#addMetadataSchemaPermission) | **POST** /meta/v2/schemas/{uuid}/pems | 
[**clearMetadataPermissions**](MetaApi.md#clearMetadataPermissions) | **DELETE** /meta/v2/data/{uuid}/pems | 
[**clearMetadataSchemaPermissions**](MetaApi.md#clearMetadataSchemaPermissions) | **DELETE** /meta/v2/schemas/{uuid}/pems | 
[**deleteMetadata**](MetaApi.md#deleteMetadata) | **DELETE** /meta/v2/data/{uuid} | 
[**deleteMetadataPermission**](MetaApi.md#deleteMetadataPermission) | **DELETE** /meta/v2/data/{uuid}/pems/{username} | 
[**deleteMetadataSchema**](MetaApi.md#deleteMetadataSchema) | **DELETE** /meta/v2/schemas/{uuid} | 
[**deleteSchemaPermission**](MetaApi.md#deleteSchemaPermission) | **DELETE** /meta/v2/schemas/{uuid}/pems/{username} | 
[**getMetadata**](MetaApi.md#getMetadata) | **GET** /meta/v2/data/{uuid} | 
[**getMetadataPermission**](MetaApi.md#getMetadataPermission) | **GET** /meta/v2/data/{uuid}/pems/{username} | 
[**getMetadataSchema**](MetaApi.md#getMetadataSchema) | **GET** /meta/v2/schemas/{uuid} | 
[**getMetadataSchemaPermission**](MetaApi.md#getMetadataSchemaPermission) | **GET** /meta/v2/schemas/{uuid}/pems/{username} | 
[**listMetadata**](MetaApi.md#listMetadata) | **GET** /meta/v2/data | 
[**listMetadataPermissions**](MetaApi.md#listMetadataPermissions) | **GET** /meta/v2/data/{uuid}/pems | 
[**listMetadataSchema**](MetaApi.md#listMetadataSchema) | **GET** /meta/v2/schemas | 
[**listMetadataSchemaPermissions**](MetaApi.md#listMetadataSchemaPermissions) | **GET** /meta/v2/schemas/{uuid}/pems | 
[**updateMetadata**](MetaApi.md#updateMetadata) | **POST** /meta/v2/data/{uuid} | 
[**updateMetadataPermission**](MetaApi.md#updateMetadataPermission) | **POST** /meta/v2/data/{uuid}/pems/{username} | 
[**updateMetadataSchema**](MetaApi.md#updateMetadataSchema) | **POST** /meta/v2/schemas/{uuid} | 
[**updateMetadataSchemaPermission**](MetaApi.md#updateMetadataSchemaPermission) | **POST** /meta/v2/schemas/{uuid}/pems/{username} | 


<a name="addMetadata"></a>
# **addMetadata**
> Metadata addMetadata(body, opts)



Update or Add new Metadata.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var body = new AgaveJsSdk.Metadata(); // Metadata | The metadata to add.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.addMetadata(body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Metadata**](Metadata.md)| The metadata to add. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Metadata**](Metadata.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addMetadataPermission"></a>
# **addMetadataPermission**
> Permission addMetadataPermission(uuid, body, opts)



Add a user permission for the given metadata.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata item

var body = new AgaveJsSdk.Permission(); // Permission | The metadata permission to update.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.addMetadataPermission(uuid, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata item | 
 **body** | [**Permission**](Permission.md)| The metadata permission to update. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addMetadataSchema"></a>
# **addMetadataSchema**
> MetadataSchema addMetadataSchema(body, opts)



Add a new Metadata Schema.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var body = new AgaveJsSdk.MetadataSchema(); // MetadataSchema | A valid JSON Schema object

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.addMetadataSchema(body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MetadataSchema**](MetadataSchema.md)| A valid JSON Schema object | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**MetadataSchema**](MetadataSchema.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addMetadataSchemaPermission"></a>
# **addMetadataSchemaPermission**
> Permission addMetadataSchemaPermission(uuid, body, opts)



Add a user permission for the given schema.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata schema item

var body = new AgaveJsSdk.Permission(); // Permission | The schema permission to update.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.addMetadataSchemaPermission(uuid, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata schema item | 
 **body** | [**Permission**](Permission.md)| The schema permission to update. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearMetadataPermissions"></a>
# **clearMetadataPermissions**
> clearMetadataPermissions(uuid, opts)



Deletes all permissions on the given metadata.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata item

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.clearMetadataPermissions(uuid, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata item | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearMetadataSchemaPermissions"></a>
# **clearMetadataSchemaPermissions**
> clearMetadataSchemaPermissions(uuid, opts)



Deletes all permissions on the given schema.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata schema item

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.clearMetadataSchemaPermissions(uuid, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata schema item | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteMetadata"></a>
# **deleteMetadata**
> deleteMetadata(uuid, opts)



Remove Metadata from the system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata item

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteMetadata(uuid, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata item | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteMetadataPermission"></a>
# **deleteMetadataPermission**
> deleteMetadataPermission(uuid, username, opts)



Removes user permissions for a user on a given metadata resource.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata item

var username = "username_example"; // String | The username of the permission owner

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteMetadataPermission(uuid, username, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata item | 
 **username** | **String**| The username of the permission owner | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteMetadataSchema"></a>
# **deleteMetadataSchema**
> deleteMetadataSchema(uuid, opts)



Remove Metadata Schema from the system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata schema item

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteMetadataSchema(uuid, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata schema item | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSchemaPermission"></a>
# **deleteSchemaPermission**
> deleteSchemaPermission(uuid, username, opts)



Deletes all metadata schema permissions on the given metadata.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata schema item

var username = "username_example"; // String | The username of the permission owner

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteSchemaPermission(uuid, username, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata schema item | 
 **username** | **String**| The username of the permission owner | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMetadata"></a>
# **getMetadata**
> Metadata getMetadata(uuid, opts)



Retrieve Metadata.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata item

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getMetadata(uuid, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata item | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Metadata**](Metadata.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMetadataPermission"></a>
# **getMetadataPermission**
> Permission getMetadataPermission(uuid, username, opts)



Get the user permission for this metadata.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata item

var username = "username_example"; // String | The username of the permission owner

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getMetadataPermission(uuid, username, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata item | 
 **username** | **String**| The username of the permission owner | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMetadataSchema"></a>
# **getMetadataSchema**
> MetadataSchema getMetadataSchema(uuid, opts)



Retrieve Metadata Schemata.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata schema item

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getMetadataSchema(uuid, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata schema item | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**MetadataSchema**](MetadataSchema.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMetadataSchemaPermission"></a>
# **getMetadataSchemaPermission**
> Permission getMetadataSchemaPermission(uuid, username, opts)



Get the user permission for this schema.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata schema item

var username = "username_example"; // String | The username of the permission owner

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getMetadataSchemaPermission(uuid, username, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata schema item | 
 **username** | **String**| The username of the permission owner | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listMetadata"></a>
# **listMetadata**
> [Metadata] listMetadata(q, opts)



List and/or search metadata.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var q = "q_example"; // String | The query to perform. Traditional MongoDB queries are supported

var opts = { 
  'naked': true, // Boolean | 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listMetadata(q, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query to perform. Traditional MongoDB queries are supported | 
 **naked** | **Boolean**|  | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**[Metadata]**](Metadata.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listMetadataPermissions"></a>
# **listMetadataPermissions**
> Permission listMetadataPermissions(uuid, opts)



Get the permission ACL for this metadata.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata item

var opts = { 
  'naked': true, // Boolean | 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listMetadataPermissions(uuid, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata item | 
 **naked** | **Boolean**|  | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listMetadataSchema"></a>
# **listMetadataSchema**
> [MetadataSchema] listMetadataSchema(q, opts)



List and query Metadata Schemata.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var q = "q_example"; // String | A valid query object defining the search parameters.

var opts = { 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0, // Number | The number of results skipped in the result set returned from this query
  'naked': true // Boolean | 
};
apiInstance.listMetadataSchema(q, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| A valid query object defining the search parameters. | 
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**[MetadataSchema]**](MetadataSchema.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listMetadataSchemaPermissions"></a>
# **listMetadataSchemaPermissions**
> [Permission] listMetadataSchemaPermissions(uuid, opts)



Get the permission for this schema.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata schema item

var opts = { 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0, // Number | The number of results skipped in the result set returned from this query
  'naked': true // Boolean | 
};
apiInstance.listMetadataSchemaPermissions(uuid, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata schema item | 
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**[Permission]**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateMetadata"></a>
# **updateMetadata**
> Metadata updateMetadata(uuid, body, opts)



Update or Add new Metadata.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata item

var body = new AgaveJsSdk.Metadata(); // Metadata | The metadata to update.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateMetadata(uuid, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata item | 
 **body** | [**Metadata**](Metadata.md)| The metadata to update. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Metadata**](Metadata.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateMetadataPermission"></a>
# **updateMetadataPermission**
> Permission updateMetadataPermission(uuid, username, body, opts)



Update a user permission for the given metadata.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata item

var username = "username_example"; // String | The username of the permission owner

var body = new AgaveJsSdk.Permission(); // Permission | The metadata permission to update.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateMetadataPermission(uuid, username, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata item | 
 **username** | **String**| The username of the permission owner | 
 **body** | [**Permission**](Permission.md)| The metadata permission to update. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateMetadataSchema"></a>
# **updateMetadataSchema**
> MetadataSchema updateMetadataSchema(uuid, body, opts)



Update an existing Metadata Schema.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata schema item

var body = new AgaveJsSdk.Permission(); // Permission | A valid JSON Schema object

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateMetadataSchema(uuid, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata schema item | 
 **body** | [**Permission**](Permission.md)| A valid JSON Schema object | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**MetadataSchema**](MetadataSchema.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateMetadataSchemaPermission"></a>
# **updateMetadataSchemaPermission**
> Permission updateMetadataSchemaPermission(uuid, username, body, opts)



Add or update a user permission for the given metadata schema.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.MetaApi();

var uuid = "uuid_example"; // String | The uuid of the metadata schema item

var username = "username_example"; // String | The username of the permission owner

var body = new AgaveJsSdk.Permission(); // Permission | The schema permission to update.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateMetadataSchemaPermission(uuid, username, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the metadata schema item | 
 **username** | **String**| The username of the permission owner | 
 **body** | [**Permission**](Permission.md)| The schema permission to update. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

