# AgaveJsSdk.ClientsApi

All URIs are relative to *https://public.agaveapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addClient**](ClientsApi.md#addClient) | **POST** /clients/v2/ | 
[**addClientAPISubscription**](ClientsApi.md#addClientAPISubscription) | **POST** /clients/v2/{clientName}/subscriptions | 
[**clearClientAPISubscriptions**](ClientsApi.md#clearClientAPISubscriptions) | **DELETE** /clients/v2/{clientName}/subscriptions | 
[**deleteClient**](ClientsApi.md#deleteClient) | **DELETE** /clients/v2/{clientName} | 
[**getClient**](ClientsApi.md#getClient) | **GET** /clients/v2/{clientName} | 
[**listClientApiSubscriptions**](ClientsApi.md#listClientApiSubscriptions) | **GET** /clients/v2/{clientName}/subscriptions | 
[**listClients**](ClientsApi.md#listClients) | **GET** /clients/v2/ | 


<a name="addClient"></a>
# **addClient**
> SingleClientResponse addClient(body)



Create a new client

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure HTTP basic authorization: agaveBasic
var agaveBasic = defaultClient.authentications['agaveBasic'];
agaveBasic.username = 'YOUR USERNAME';
agaveBasic.password = 'YOUR PASSWORD';

var apiInstance = new AgaveJsSdk.ClientsApi();

var body = new AgaveJsSdk.ClientRequest(); // ClientRequest | The api client to create

apiInstance.addClient(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ClientRequest**](ClientRequest.md)| The api client to create | 

### Return type

[**SingleClientResponse**](SingleClientResponse.md)

### Authorization

[agaveBasic](../README.md#agaveBasic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addClientAPISubscription"></a>
# **addClientAPISubscription**
> SingleSubscriptionResponse addClientAPISubscription(clientName, body)



Add a new API subscription to the given client

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure HTTP basic authorization: agaveBasic
var agaveBasic = defaultClient.authentications['agaveBasic'];
agaveBasic.username = 'YOUR USERNAME';
agaveBasic.password = 'YOUR PASSWORD';

var apiInstance = new AgaveJsSdk.ClientsApi();

var clientName = "clientName_example"; // String | The name of the client to be subscribe to this api

var body = new AgaveJsSdk.ClientSubscriptionRequest(); // ClientSubscriptionRequest | The api client to create

apiInstance.addClientAPISubscription(clientName, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientName** | **String**| The name of the client to be subscribe to this api | 
 **body** | [**ClientSubscriptionRequest**](ClientSubscriptionRequest.md)| The api client to create | 

### Return type

[**SingleSubscriptionResponse**](SingleSubscriptionResponse.md)

### Authorization

[agaveBasic](../README.md#agaveBasic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearClientAPISubscriptions"></a>
# **clearClientAPISubscriptions**
> EmptyClientResponse clearClientAPISubscriptions(clientName)



Unsubscribe the client from all APIs

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure HTTP basic authorization: agaveBasic
var agaveBasic = defaultClient.authentications['agaveBasic'];
agaveBasic.username = 'YOUR USERNAME';
agaveBasic.password = 'YOUR PASSWORD';

var apiInstance = new AgaveJsSdk.ClientsApi();

var clientName = "clientName_example"; // String | The name of the client to be deleted

apiInstance.clearClientAPISubscriptions(clientName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientName** | **String**| The name of the client to be deleted | 

### Return type

[**EmptyClientResponse**](EmptyClientResponse.md)

### Authorization

[agaveBasic](../README.md#agaveBasic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClient"></a>
# **deleteClient**
> EmptyClientResponse deleteClient(clientName)



Immediately deletes this client and renders the API keys useless.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure HTTP basic authorization: agaveBasic
var agaveBasic = defaultClient.authentications['agaveBasic'];
agaveBasic.username = 'YOUR USERNAME';
agaveBasic.password = 'YOUR PASSWORD';

var apiInstance = new AgaveJsSdk.ClientsApi();

var clientName = "clientName_example"; // String | The name of the client to be deleted

apiInstance.deleteClient(clientName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientName** | **String**| The name of the client to be deleted | 

### Return type

[**EmptyClientResponse**](EmptyClientResponse.md)

### Authorization

[agaveBasic](../README.md#agaveBasic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClient"></a>
# **getClient**
> MultipleClientResponse getClient(clientName)



Returns a detailed description of a named client.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure HTTP basic authorization: agaveBasic
var agaveBasic = defaultClient.authentications['agaveBasic'];
agaveBasic.username = 'YOUR USERNAME';
agaveBasic.password = 'YOUR PASSWORD';

var apiInstance = new AgaveJsSdk.ClientsApi();

var clientName = "clientName_example"; // String | The name of the client to be deleted

apiInstance.getClient(clientName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientName** | **String**| The name of the client to be deleted | 

### Return type

[**MultipleClientResponse**](MultipleClientResponse.md)

### Authorization

[agaveBasic](../README.md#agaveBasic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listClientApiSubscriptions"></a>
# **listClientApiSubscriptions**
> MultipleSubscriptionResponse listClientApiSubscriptions(clientName, opts)



Lists all APIs to which the client is subscribed

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure HTTP basic authorization: agaveBasic
var agaveBasic = defaultClient.authentications['agaveBasic'];
agaveBasic.username = 'YOUR USERNAME';
agaveBasic.password = 'YOUR PASSWORD';

var apiInstance = new AgaveJsSdk.ClientsApi();

var clientName = "clientName_example"; // String | The name of the client to be deleted

var opts = { 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listClientApiSubscriptions(clientName, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientName** | **String**| The name of the client to be deleted | 
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**MultipleSubscriptionResponse**](MultipleSubscriptionResponse.md)

### Authorization

[agaveBasic](../README.md#agaveBasic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listClients"></a>
# **listClients**
> MultipleClientResponse listClients()



List existing clients

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure HTTP basic authorization: agaveBasic
var agaveBasic = defaultClient.authentications['agaveBasic'];
agaveBasic.username = 'YOUR USERNAME';
agaveBasic.password = 'YOUR PASSWORD';

var apiInstance = new AgaveJsSdk.ClientsApi();
apiInstance.listClients().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MultipleClientResponse**](MultipleClientResponse.md)

### Authorization

[agaveBasic](../README.md#agaveBasic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

