# AgaveJsSdk.TransformsApi

All URIs are relative to *https://public.agaveapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncTransform**](TransformsApi.md#asyncTransform) | **POST** /transforms/v2/{transformId}/async/{owner}/{filePath} | 
[**getTransform**](TransformsApi.md#getTransform) | **GET** /transforms/v2/{transformId} | 
[**listTransforms**](TransformsApi.md#listTransforms) | **GET** /transforms/v2/ | 
[**syncTransform**](TransformsApi.md#syncTransform) | **POST** /transforms/v2/{transformId}/sync/{owner}/{filePath} | 


<a name="asyncTransform"></a>
# **asyncTransform**
> Transform asyncTransform(transformId, owner, filePath, body, opts)



Transform a file and stage it to a specified location.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TransformsApi();

var transformId = "transformId_example"; // String | The name of the transform to apply to the given file.

var owner = "owner_example"; // String | The name of the api user owning the file at the given path.

var filePath = "filePath_example"; // String | The path to the file to be transformed and staged

var body = new AgaveJsSdk.TransformRequest(); // TransformRequest | The transfer request details.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.asyncTransform(transformId, owner, filePath, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transformId** | **String**| The name of the transform to apply to the given file. | 
 **owner** | **String**| The name of the api user owning the file at the given path. | 
 **filePath** | **String**| The path to the file to be transformed and staged | 
 **body** | [**TransformRequest**](TransformRequest.md)| The transfer request details. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Transform**](Transform.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTransform"></a>
# **getTransform**
> Transform getTransform(transformId, opts)



Find the transform of the given uuid

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TransformsApi();

var transformId = "transformId_example"; // String | The name of the transform requested.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getTransform(transformId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transformId** | **String**| The name of the transform requested. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Transform**](Transform.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTransforms"></a>
# **listTransforms**
> [Transform] listTransforms(opts)



List and search for transforms

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TransformsApi();

var opts = { 
  'name': "name_example", // String | The name of the transform
  'version': "version_example", // String | The name of the transform
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0, // Number | The number of results skipped in the result set returned from this query
  'naked': true, // Boolean | 
  'tags': "tags_example" // String | One or more tags of the transform
};
apiInstance.listTransforms(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the transform | [optional] 
 **version** | **String**| The name of the transform | [optional] 
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]
 **naked** | **Boolean**|  | [optional] [default to true]
 **tags** | **String**| One or more tags of the transform | [optional] 

### Return type

[**[Transform]**](Transform.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="syncTransform"></a>
# **syncTransform**
> syncTransform(transformId, owner, filePath, body, opts)



Transform a file and download it directly.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TransformsApi();

var transformId = "transformId_example"; // String | The name of the transform to apply to the given file.

var owner = "owner_example"; // String | The name of the api user owning the file at the given path.

var filePath = "filePath_example"; // String | The path to the file to be transformed and downloaded.

var body = new AgaveJsSdk.TransformRequest(); // TransformRequest | The transfer request details.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.syncTransform(transformId, owner, filePath, body, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transformId** | **String**| The name of the transform to apply to the given file. | 
 **owner** | **String**| The name of the api user owning the file at the given path. | 
 **filePath** | **String**| The path to the file to be transformed and downloaded. | 
 **body** | [**TransformRequest**](TransformRequest.md)| The transfer request details. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

