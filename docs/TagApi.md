# AgaveJsSdk.TagApi

All URIs are relative to *https://public.agaveapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTag**](TagApi.md#addTag) | **POST** /tags/v2 | Creat a new tag
[**addTagResource**](TagApi.md#addTagResource) | **POST** /tags/v2/{tagId}/resources | Add resources to tag
[**clearTagPermissions**](TagApi.md#clearTagPermissions) | **DELETE** /tags/v2/{tagId}/pems | Clear tag permissions
[**clearTagResources**](TagApi.md#clearTagResources) | **DELETE** /tags/v2/{tagId}/resources | Clear all tagged resources
[**deleteTag**](TagApi.md#deleteTag) | **DELETE** /tags/v2/{tagId} | Delete tag
[**deleteTagPermissionForUser**](TagApi.md#deleteTagPermissionForUser) | **DELETE** /tags/v2/{tagId}/pems/{username} | Remove user tag permission
[**getTagDetails**](TagApi.md#getTagDetails) | **GET** /tags/v2/{tagId} | Tag Details
[**getTagPermissionForUser**](TagApi.md#getTagPermissionForUser) | **GET** /tags/v2/{tagId}/pems/{username} | List tag permissions for a user
[**getTaggedResource**](TagApi.md#getTaggedResource) | **GET** /tags/v2/{tagId}/resources/{uuid} | Get tagged item details
[**listTagHistory**](TagApi.md#listTagHistory) | **GET** /tags/v2/{tagId}/history | Tag history
[**listTagPermissions**](TagApi.md#listTagPermissions) | **GET** /tags/v2/{tagId}/pems | List permissionss set for a given tag id
[**listTagResources**](TagApi.md#listTagResources) | **GET** /tags/v2/{tagId}/resources | Tagged items
[**listTags**](TagApi.md#listTags) | **GET** /tags/v2 | Available tags
[**removeTagResource**](TagApi.md#removeTagResource) | **DELETE** /tags/v2/{tagId}/resources/{uuid} | Remove resource from tag
[**updateTag**](TagApi.md#updateTag) | **PUT** /tags/v2/{tagId} | Update tag
[**updateTagPermission**](TagApi.md#updateTagPermission) | **POST** /tags/v2/{tagId}/pems | Grant permission
[**updateTagPermissionForUser**](TagApi.md#updateTagPermissionForUser) | **POST** /tags/v2/{tagId}/pems/{username} | Update user permission on tag
[**updateTagResource**](TagApi.md#updateTagResource) | **PUT** /tags/v2/{tagId}/resources/{uuid} | Add resource to tag


<a name="addTag"></a>
# **addTag**
> Tag addTag(body, opts)

Creat a new tag

Creates a new tag

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var body = new AgaveJsSdk.Tag(); // Tag | JSON Tag object

var opts = { 
  'naked': true // Boolean | If true return only the payload, not the standard response wrapper
};
apiInstance.addTag(body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Tag**](Tag.md)| JSON Tag object | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]

### Return type

[**Tag**](Tag.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="addTagResource"></a>
# **addTagResource**
> [Tag] addTagResource(tagId, body, opts)

Add resources to tag

Adds the list of resources to the given tag

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var body = new AgaveJsSdk.TagResource(); // TagResource | List of resource uuid to add

var opts = { 
  'naked': true // Boolean | If true return only the payload, not the standard response wrapper
};
apiInstance.addTagResource(tagId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **body** | [**TagResource**](TagResource.md)| List of resource uuid to add | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]

### Return type

[**[Tag]**](Tag.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearTagPermissions"></a>
# **clearTagPermissions**
> clearTagPermissions(tagId, opts)

Clear tag permissions

Removes all permissions save ownership from the given tag

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var opts = { 
  'naked': true // Boolean | If true return only the payload, not the standard response wrapper
};
apiInstance.clearTagPermissions(tagId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearTagResources"></a>
# **clearTagResources**
> clearTagResources(tagId, opts)

Clear all tagged resources

Removes all resources from the given tag

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var opts = { 
  'naked': true // Boolean | If true return only the payload, not the standard response wrapper
};
apiInstance.clearTagResources(tagId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTag"></a>
# **deleteTag**
> deleteTag(tagId, opts)

Delete tag

Deletes the tag and all permissions

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var opts = { 
  'naked': true // Boolean | If true return only the payload, not the standard response wrapper
};
apiInstance.deleteTag(tagId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTagPermissionForUser"></a>
# **deleteTagPermissionForUser**
> deleteTagPermissionForUser(tagId, username, opts)

Remove user tag permission

Removes permissions for the given user on the given tag

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var username = "username_example"; // String | Username to revoke permission

var opts = { 
  'naked': true // Boolean | If true return only the payload, not the standard response wrapper
};
apiInstance.deleteTagPermissionForUser(tagId, username, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **username** | **String**| Username to revoke permission | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTagDetails"></a>
# **getTagDetails**
> Tag getTagDetails(tagId, opts)

Tag Details

Returns detailed information about the named tag

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var opts = { 
  'naked': true // Boolean | If true return only the payload, not the standard response wrapper
};
apiInstance.getTagDetails(tagId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]

### Return type

[**Tag**](Tag.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTagPermissionForUser"></a>
# **getTagPermissionForUser**
> [Permission] getTagPermissionForUser(tagId, username, opts)

List tag permissions for a user

Returns the permission set on the given tag for a specific user.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var username = "username_example"; // String | Valid username

var opts = { 
  'naked': true // Boolean | If true return only the payload, not the standard response wrapper
};
apiInstance.getTagPermissionForUser(tagId, username, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **username** | **String**| Valid username | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]

### Return type

[**[Permission]**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaggedResource"></a>
# **getTaggedResource**
> TagResource getTaggedResource(tagId, uuid, opts)

Get tagged item details

Returns a list of items with the given tag.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var uuid = "uuid_example"; // String | Unique id of a resource

var opts = { 
  'naked': true // Boolean | If true return only the payload, not the standard response wrapper
};
apiInstance.getTaggedResource(tagId, uuid, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **uuid** | **String**| Unique id of a resource | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]

### Return type

[**TagResource**](TagResource.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTagHistory"></a>
# **listTagHistory**
> [TagHistory] listTagHistory(tagId, opts)

Tag history

Returns a list of items with the given tag.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var opts = { 
  'naked': true, // Boolean | If true return only the payload, not the standard response wrapper
  'limit': 100, // Number | Maximum number of responses. Default 100
  'offset': 0 // Number | Number of results to skip by default
};
apiInstance.listTagHistory(tagId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]
 **limit** | **Number**| Maximum number of responses. Default 100 | [optional] [default to 100]
 **offset** | **Number**| Number of results to skip by default | [optional] [default to 0]

### Return type

[**[TagHistory]**](TagHistory.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTagPermissions"></a>
# **listTagPermissions**
> [Permission] listTagPermissions(tagId, opts)

List permissionss set for a given tag id

Returns a list of permission objects set on this Tag

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the system

var opts = { 
  'naked': true, // Boolean | If true return only the payload, not the standard response wrapper
  'limit': 100, // Number | Maximum number of responses. Default 100
  'offset': 0 // Number | Number of results to skip by default
};
apiInstance.listTagPermissions(tagId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the system | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]
 **limit** | **Number**| Maximum number of responses. Default 100 | [optional] [default to 100]
 **offset** | **Number**| Number of results to skip by default | [optional] [default to 0]

### Return type

[**[Permission]**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTagResources"></a>
# **listTagResources**
> [TagResource] listTagResources(tagId, opts)

Tagged items

Returns a list of items with the given tag.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var opts = { 
  'naked': true, // Boolean | If true return only the payload, not the standard response wrapper
  'limit': 100, // Number | Maximum number of responses. Default 100
  'offset': 0 // Number | Number of results to skip by default
};
apiInstance.listTagResources(tagId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]
 **limit** | **Number**| Maximum number of responses. Default 100 | [optional] [default to 100]
 **offset** | **Number**| Number of results to skip by default | [optional] [default to 0]

### Return type

[**[TagResource]**](TagResource.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTags"></a>
# **listTags**
> [TagSummary] listTags(opts)

Available tags

The Tags endpoint returns summary information about the available list of tags right now.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var opts = { 
  'name': "name_example", // String | Name of the tag for which to search
  'resourceType': "resourceType_example", // String | Search for tags associated with one or resources of named type
  'resourceId': "resourceId_example", // String | Id of tagged resource
  'lastModified': "lastModified_example", // String | Date at which tag was modified in ISO8601 format
  'created': "created_example", // String | Date at which tag was created in ISO8601 format
  'naked': true, // Boolean | If true return only the payload, not the standard response wrapper
  'limit': 100, // Number | Maximum number of responses. Default 100
  'offset': 0 // Number | Number of results to skip by default
};
apiInstance.listTags(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of the tag for which to search | [optional] 
 **resourceType** | **String**| Search for tags associated with one or resources of named type | [optional] 
 **resourceId** | **String**| Id of tagged resource | [optional] 
 **lastModified** | **String**| Date at which tag was modified in ISO8601 format | [optional] 
 **created** | **String**| Date at which tag was created in ISO8601 format | [optional] 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]
 **limit** | **Number**| Maximum number of responses. Default 100 | [optional] [default to 100]
 **offset** | **Number**| Number of results to skip by default | [optional] [default to 0]

### Return type

[**[TagSummary]**](TagSummary.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeTagResource"></a>
# **removeTagResource**
> removeTagResource(tagId, uuid, opts)

Remove resource from tag

Removes the given uuid from this tag

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var uuid = "uuid_example"; // String | UUID of the resource to delete

var opts = { 
  'naked': true // Boolean | If true return only the payload, not the standard response wrapper
};
apiInstance.removeTagResource(tagId, uuid, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **uuid** | **String**| UUID of the resource to delete | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTag"></a>
# **updateTag**
> Tag updateTag(tagId, body, opts)

Update tag

Updates the given tag with the updated information

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var body = new AgaveJsSdk.Tag(); // Tag | JSON Tag object

var opts = { 
  'naked': true // Boolean | If true return only the payload, not the standard response wrapper
};
apiInstance.updateTag(tagId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **body** | [**Tag**](Tag.md)| JSON Tag object | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]

### Return type

[**Tag**](Tag.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="updateTagPermission"></a>
# **updateTagPermission**
> Permission updateTagPermission(tagId, body, opts)

Grant permission

Adds a permission for a given user to a given tag

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var body = new AgaveJsSdk.Permission(); // Permission | Unique id of a resource

var opts = { 
  'naked': true // Boolean | If true return only the payload, not the standard response wrapper
};
apiInstance.updateTagPermission(tagId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **body** | [**Permission**](Permission.md)| Unique id of a resource | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="updateTagPermissionForUser"></a>
# **updateTagPermissionForUser**
> Permission updateTagPermissionForUser(tagId, username, body, opts)

Update user permission on tag

Resets the user permission on the given tag

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var username = "username_example"; // String | Valid username

var body = new AgaveJsSdk.Permission(); // Permission | Valid permission value

var opts = { 
  'naked': true // Boolean | If true return only the payload, not the standard response wrapper
};
apiInstance.updateTagPermissionForUser(tagId, username, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **username** | **String**| Valid username | 
 **body** | [**Permission**](Permission.md)| Valid permission value | 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="updateTagResource"></a>
# **updateTagResource**
> TagResource updateTagResource(tagId, uuid, opts)

Add resource to tag

Adds the resource with the given uuid to the given tag

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.TagApi();

var tagId = "tagId_example"; // String | Unique id of the tag

var uuid = "uuid_example"; // String | Unique id of a resource

var opts = { 
  'body': new AgaveJsSdk.TagResource(), // TagResource | empty body
  'naked': true // Boolean | If true return only the payload, not the standard response wrapper
};
apiInstance.updateTagResource(tagId, uuid, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Unique id of the tag | 
 **uuid** | **String**| Unique id of a resource | 
 **body** | [**TagResource**](TagResource.md)| empty body | [optional] 
 **naked** | **Boolean**| If true return only the payload, not the standard response wrapper | [optional] [default to true]

### Return type

[**TagResource**](TagResource.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

