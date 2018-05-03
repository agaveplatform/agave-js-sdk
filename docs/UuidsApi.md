# AgaveJsSdk.UuidsApi

All URIs are relative to *https://public.agaveapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUuid**](UuidsApi.md#createUuid) | **POST** /uuids/v2/ | 
[**resolveUuid**](UuidsApi.md#resolveUuid) | **GET** /uuids/v2/{uuid} | 
[**resolveUuids**](UuidsApi.md#resolveUuids) | **GET** /uuids/v2/ | 


<a name="createUuid"></a>
# **createUuid**
> [UUIDResolution] createUuid(body, opts)



Generate a new UUID for a given resource type

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.UuidsApi();

var body = new AgaveJsSdk.UUIDRequest(); // UUIDRequest | The type of resource for which the UUID should be generated.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.createUuid(body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UUIDRequest**](UUIDRequest.md)| The type of resource for which the UUID should be generated. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**[UUIDResolution]**](UUIDResolution.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resolveUuid"></a>
# **resolveUuid**
> [UUIDResolution] resolveUuid(uuid, opts)



Resolve one or more UUID to their resource URL and type

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.UuidsApi();

var uuid = "uuid_example"; // String | A valid Agave UUID to resolve

var opts = { 
  'naked': true, // Boolean | 
  'expand': false // Boolean | If true, the summary object will be expanded to the full resource representation.
};
apiInstance.resolveUuid(uuid, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| A valid Agave UUID to resolve | 
 **naked** | **Boolean**|  | [optional] [default to true]
 **expand** | **Boolean**| If true, the summary object will be expanded to the full resource representation. | [optional] [default to false]

### Return type

[**[UUIDResolution]**](UUIDResolution.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resolveUuids"></a>
# **resolveUuids**
> [UUIDSummary] resolveUuids(opts)



Resolve one or more UUID to their resource URL and type

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.UuidsApi();

var opts = { 
  'uuids': "uuids_example", // String | A comma-separated list of UUID to resolve
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0, // Number | The number of results skipped in the result set returned from this query
  'naked': true, // Boolean | 
  'expand': false // Boolean | If true, the summary object will be expanded to the full resource representation.
};
apiInstance.resolveUuids(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuids** | **String**| A comma-separated list of UUID to resolve | [optional] 
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]
 **naked** | **Boolean**|  | [optional] [default to true]
 **expand** | **Boolean**| If true, the summary object will be expanded to the full resource representation. | [optional] [default to false]

### Return type

[**[UUIDSummary]**](UUIDSummary.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

