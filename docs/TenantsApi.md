# AgaveJsSdk.TenantsApi

All URIs are relative to *https://public.agaveapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTenantDetails**](TenantsApi.md#getTenantDetails) | **GET** /tenants/v2/{codeOrUuid} | Resolve Tenant details
[**listTenants**](TenantsApi.md#listTenants) | **GET** /tenants/v2 | List all active tenants


<a name="getTenantDetails"></a>
# **getTenantDetails**
> Tenant getTenantDetails(codeOrUuid, opts)

Resolve Tenant details

Returns information about the tenant with the given code or id

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TenantsApi();

var codeOrUuid = "codeOrUuid_example"; // String | Unique tenant code or id of the tenant

var opts = { 
  'filter': "*", // String | A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects
  'naked': true // Boolean | If true, the response wrapper is stripped and the raw object is returned.
};
apiInstance.getTenantDetails(codeOrUuid, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeOrUuid** | **String**| Unique tenant code or id of the tenant | 
 **filter** | **String**| A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects | [optional] [default to *]
 **naked** | **Boolean**| If true, the response wrapper is stripped and the raw object is returned. | [optional] [default to true]

### Return type

[**Tenant**](Tenant.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTenants"></a>
# **listTenants**
> [Tenant] listTenants(opts)

List all active tenants

Lists all active tenants publicly available

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TenantsApi();

var opts = { 
  'filter': "*", // String | A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects
  'naked': true // Boolean | If true, the response wrapper is stripped and the raw object is returned.
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listTenants(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects | [optional] [default to *]
 **naked** | **Boolean**| If true, the response wrapper is stripped and the raw object is returned. | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**[Tenant]**](Tenant.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

