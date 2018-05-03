# AgaveJsSdk.ProfilesApi

All URIs are relative to *https://public.agaveapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInternalUser**](ProfilesApi.md#addInternalUser) | **POST** /profiles/v2/{apiUsername}/users | 
[**addProfile**](ProfilesApi.md#addProfile) | **POST** /profiles/v2 | 
[**clearInternalUsers**](ProfilesApi.md#clearInternalUsers) | **DELETE** /profiles/v2/{apiUsername}/users | 
[**deleteInternalUser**](ProfilesApi.md#deleteInternalUser) | **DELETE** /profiles/v2/{apiUsername}/users/{internalUsername} | 
[**deleteProfile**](ProfilesApi.md#deleteProfile) | **DELETE** /profiles/v2/{apiUsername} | 
[**getInternalUser**](ProfilesApi.md#getInternalUser) | **GET** /profiles/v2/{apiUsername}/users/{internalUsername} | 
[**getProfile**](ProfilesApi.md#getProfile) | **GET** /profiles/v2/{apiUsername} | 
[**listInternalUsers**](ProfilesApi.md#listInternalUsers) | **GET** /profiles/v2/{apiUsername}/users | 
[**listProfiles**](ProfilesApi.md#listProfiles) | **GET** /profiles/v2 | 
[**updateInternalUser**](ProfilesApi.md#updateInternalUser) | **POST** /profiles/v2/{apiUsername}/users/{internalUsername} | 
[**updateProfile**](ProfilesApi.md#updateProfile) | **POST** /profiles/v2/{apiUsername} | 


<a name="addInternalUser"></a>
# **addInternalUser**
> InternalUser addInternalUser(apiUsername, body, opts)



Create or update an internal user.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.ProfilesApi();

var apiUsername = "apiUsername_example"; // String | The username of a valid api user

var body = new AgaveJsSdk.ProfileRequest(); // ProfileRequest | The internal user to create.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.addInternalUser(apiUsername, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiUsername** | **String**| The username of a valid api user | 
 **body** | [**ProfileRequest**](ProfileRequest.md)| The internal user to create. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**InternalUser**](InternalUser.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addProfile"></a>
# **addProfile**
> Profile addProfile(body, opts)



Add a new user profile

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.ProfilesApi();

var body = new AgaveJsSdk.Profile(); // Profile | The user profile to add

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.addProfile(body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Profile**](Profile.md)| The user profile to add | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Profile**](Profile.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearInternalUsers"></a>
# **clearInternalUsers**
> clearInternalUsers(apiUsername, opts)



Delete all internal users created by the authenticated user.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.ProfilesApi();

var apiUsername = "apiUsername_example"; // String | The username of a valid api user

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.clearInternalUsers(apiUsername, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiUsername** | **String**| The username of a valid api user | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInternalUser"></a>
# **deleteInternalUser**
> InternalUser deleteInternalUser(apiUsername, internalUsername, opts)



Delete all internal users created by the authenticated user.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.ProfilesApi();

var apiUsername = "apiUsername_example"; // String | The username of a valid api user

var internalUsername = "internalUsername_example"; // String | The username of a valid internal user

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteInternalUser(apiUsername, internalUsername, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiUsername** | **String**| The username of a valid api user | 
 **internalUsername** | **String**| The username of a valid internal user | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**InternalUser**](InternalUser.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProfile"></a>
# **deleteProfile**
> EmptyClientResponse deleteProfile(apiUsername, opts)



Delte a user profile by name

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.ProfilesApi();

var apiUsername = "apiUsername_example"; // String | The username of the profile to update

var opts = { 
  'filter': "*", // String | A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects
  'naked': true // Boolean | 
};
apiInstance.deleteProfile(apiUsername, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiUsername** | **String**| The username of the profile to update | 
 **filter** | **String**| A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects | [optional] [default to *]
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**EmptyClientResponse**](EmptyClientResponse.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInternalUser"></a>
# **getInternalUser**
> InternalUser getInternalUser(apiUsername, internalUsername, opts)



Find api user profile by their api username

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.ProfilesApi();

var apiUsername = "apiUsername_example"; // String | The username of a valid api user

var internalUsername = "internalUsername_example"; // String | The username of a valid internal user

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getInternalUser(apiUsername, internalUsername, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiUsername** | **String**| The username of a valid api user | 
 **internalUsername** | **String**| The username of a valid internal user | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**InternalUser**](InternalUser.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProfile"></a>
# **getProfile**
> Profile getProfile(apiUsername, opts)



Get a user profile by name

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.ProfilesApi();

var apiUsername = "apiUsername_example"; // String | The username of the profile to update

var opts = { 
  'filter': "*", // String | A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects
  'naked': true // Boolean | 
};
apiInstance.getProfile(apiUsername, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiUsername** | **String**| The username of the profile to update | 
 **filter** | **String**| A comma-separated list of fields in the response objects to return. This allows developers to create their own response objects | [optional] [default to *]
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Profile**](Profile.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listInternalUsers"></a>
# **listInternalUsers**
> [InternalUser] listInternalUsers(apiUsername, opts)



List all internal users created by the authenticated user

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.ProfilesApi();

var apiUsername = "apiUsername_example"; // String | The username of a valid api user

var opts = { 
  'username': "username_example", // String | The username of the internal user
  'name': "name_example", // String | The full name of the internal user
  'email': "email_example", // String | The email address of the internal user
  'naked': true // Boolean | 
};
apiInstance.listInternalUsers(apiUsername, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiUsername** | **String**| The username of a valid api user | 
 **username** | **String**| The username of the internal user | [optional] 
 **name** | **String**| The full name of the internal user | [optional] 
 **email** | **String**| The email address of the internal user | [optional] 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**[InternalUser]**](InternalUser.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listProfiles"></a>
# **listProfiles**
> [Profile] listProfiles(opts)



List user profiles

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.ProfilesApi();

var opts = { 
  'username': "username_example", // String | The username to search for
  'name': "name_example", // String | The user full name
  'email': "email_example", // String | The user email address
  'naked': true // Boolean | 
};
apiInstance.listProfiles(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The username to search for | [optional] 
 **name** | **String**| The user full name | [optional] 
 **email** | **String**| The user email address | [optional] 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**[Profile]**](Profile.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInternalUser"></a>
# **updateInternalUser**
> InternalUser updateInternalUser(apiUsername, internalUsername, body, opts)



Create or update the given internal user.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.ProfilesApi();

var apiUsername = "apiUsername_example"; // String | The username of a valid api user

var internalUsername = "internalUsername_example"; // String | The username of a valid internal user

var body = new AgaveJsSdk.ProfileRequest(); // ProfileRequest | A JSON description of the internal user to update

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateInternalUser(apiUsername, internalUsername, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiUsername** | **String**| The username of a valid api user | 
 **internalUsername** | **String**| The username of a valid internal user | 
 **body** | [**ProfileRequest**](ProfileRequest.md)| A JSON description of the internal user to update | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**InternalUser**](InternalUser.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProfile"></a>
# **updateProfile**
> Profile updateProfile(apiUsername, body, opts)



Update an existing user profile

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.ProfilesApi();

var apiUsername = "apiUsername_example"; // String | The username of the profile to update

var body = new AgaveJsSdk.ProfileRequest(); // ProfileRequest | The updated profile

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateProfile(apiUsername, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiUsername** | **String**| The username of the profile to update | 
 **body** | [**ProfileRequest**](ProfileRequest.md)| The updated profile | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Profile**](Profile.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

