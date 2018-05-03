# AgaveJsSdk.NotificationsApi

All URIs are relative to *https://public.agaveapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNotification**](NotificationsApi.md#addNotification) | **POST** /notifications/v2/ | 
[**deleteNotification**](NotificationsApi.md#deleteNotification) | **DELETE** /notifications/v2/{uuid} | 
[**getNotification**](NotificationsApi.md#getNotification) | **GET** /notifications/v2/{uuid} | 
[**listNotifications**](NotificationsApi.md#listNotifications) | **GET** /notifications/v2/ | 
[**updateNotification**](NotificationsApi.md#updateNotification) | **POST** /notifications/v2/{uuid} | 


<a name="addNotification"></a>
# **addNotification**
> Notification addNotification(body, opts)



Add new notification.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.NotificationsApi();

var body = new AgaveJsSdk.NotificationRequest(); // NotificationRequest | The notification to add.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.addNotification(body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NotificationRequest**](NotificationRequest.md)| The notification to add. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Notification**](Notification.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNotification"></a>
# **deleteNotification**
> deleteNotification(uuid, opts)



Remove notification from the system.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.NotificationsApi();

var uuid = "uuid_example"; // String | The uuid of the notification item

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteNotification(uuid, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the notification item | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNotification"></a>
# **getNotification**
> Notification getNotification(uuid, opts)



Retrieve notification.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.NotificationsApi();

var uuid = "uuid_example"; // String | The uuid of the notification item

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getNotification(uuid, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the notification item | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Notification**](Notification.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listNotifications"></a>
# **listNotifications**
> [Notification] listNotifications(associatedUuid, opts)



Retrieve notification for a specific resource.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.NotificationsApi();

var associatedUuid = "associatedUuid_example"; // String | The uuid of the associated resource. All notifications for this resource visible to the user will be returned.

var opts = { 
  'naked': true, // Boolean | 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listNotifications(associatedUuid, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **associatedUuid** | **String**| The uuid of the associated resource. All notifications for this resource visible to the user will be returned. | 
 **naked** | **Boolean**|  | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**[Notification]**](Notification.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNotification"></a>
# **updateNotification**
> Notification updateNotification(uuid, body, opts)



Update existing notification.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.NotificationsApi();

var uuid = "uuid_example"; // String | The uuid of the notification item

var body = new AgaveJsSdk.NotificationRequest(); // NotificationRequest | The notification to update.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateNotification(uuid, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The uuid of the notification item | 
 **body** | [**NotificationRequest**](NotificationRequest.md)| The notification to update. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Notification**](Notification.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

