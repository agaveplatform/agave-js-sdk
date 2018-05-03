# AgaveJsSdk.JobsApi

All URIs are relative to *https://public.agaveapi.co*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addJobPermission**](JobsApi.md#addJobPermission) | **POST** /jobs/v2/{jobId}/pems | 
[**clearJobPermissions**](JobsApi.md#clearJobPermissions) | **DELETE** /jobs/v2/{jobId}/pems | 
[**deleteJob**](JobsApi.md#deleteJob) | **DELETE** /jobs/v2/{jobId} | 
[**deleteJobPermission**](JobsApi.md#deleteJobPermission) | **DELETE** /jobs/v2/{jobId}/pems/{username} | 
[**downloadJobOutput**](JobsApi.md#downloadJobOutput) | **GET** /jobs/v2/{jobId}/outputs/media/{filePath} | 
[**getJobDetails**](JobsApi.md#getJobDetails) | **GET** /jobs/v2/{jobId} | 
[**getJobHistory**](JobsApi.md#getJobHistory) | **GET** /jobs/v2/{jobId}/history | 
[**getJobPermission**](JobsApi.md#getJobPermission) | **GET** /jobs/v2/{jobId}/pems/{username} | 
[**getJobStatus**](JobsApi.md#getJobStatus) | **GET** /jobs/v2/{jobId}/status | 
[**listJobOutputs**](JobsApi.md#listJobOutputs) | **GET** /jobs/v2/{jobId}/outputs/listings/{filePath} | 
[**listJobPermissions**](JobsApi.md#listJobPermissions) | **GET** /jobs/v2/{jobId}/pems | 
[**listJobs**](JobsApi.md#listJobs) | **GET** /jobs/v2/ | 
[**resubmitJob**](JobsApi.md#resubmitJob) | **POST** /jobs/v2/{jobId} | 
[**submitJob**](JobsApi.md#submitJob) | **POST** /jobs/v2/ | 
[**updateJobPermission**](JobsApi.md#updateJobPermission) | **POST** /jobs/v2/{jobId}/pems/{username} | 


<a name="addJobPermission"></a>
# **addJobPermission**
> Permission addJobPermission(jobId, body, opts)



Add a user permission for the given job.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var jobId = "jobId_example"; // String | The id of the job.

var body = new AgaveJsSdk.Permission(); // Permission | The permission add or update. 

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.addJobPermission(jobId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The id of the job. | 
 **body** | [**Permission**](Permission.md)| The permission add or update.  | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearJobPermissions"></a>
# **clearJobPermissions**
> clearJobPermissions(jobId, opts)



Deletes all permissions on an job.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var jobId = "jobId_example"; // String | The id of the job.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.clearJobPermissions(jobId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The id of the job. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteJob"></a>
# **deleteJob**
> deleteJob(jobId, opts)



Deletes a job from history of the user

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var jobId = "jobId_example"; // String | The id of the job.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteJob(jobId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The id of the job. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteJobPermission"></a>
# **deleteJobPermission**
> deleteJobPermission(jobId, username, opts)



Deletes all permissions for the given user on an job.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var jobId = "jobId_example"; // String | The id of the job for which to delete the user permissions.

var username = "username_example"; // String | The username for whom to delete permissions

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.deleteJobPermission(jobId, username, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The id of the job for which to delete the user permissions. | 
 **username** | **String**| The username for whom to delete permissions | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="downloadJobOutput"></a>
# **downloadJobOutput**
> downloadJobOutput(jobId, filePath, force)



Download an output file from a specific job.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var jobId = "jobId_example"; // String | The id of the job.

var filePath = "filePath_example"; // String | The path to an output file relative to the job output directory. 

var force = false; // Boolean | If true, the Content-Disposition header is set to force a file download from the browser.

apiInstance.downloadJobOutput(jobId, filePath, force).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The id of the job. | 
 **filePath** | **String**| The path to an output file relative to the job output directory.  | 
 **force** | **Boolean**| If true, the Content-Disposition header is set to force a file download from the browser. | [default to false]

### Return type

null (empty response body)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getJobDetails"></a>
# **getJobDetails**
> Job getJobDetails(jobId, opts)



Get details of the job with the specific job id.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var jobId = 789; // Number | The id of the job.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getJobDetails(jobId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **Number**| The id of the job. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Job**](Job.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getJobHistory"></a>
# **getJobHistory**
> [JobHistory] getJobHistory(jobId, opts)



Get the history of this job.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var jobId = "jobId_example"; // String | The id of the job.

var opts = { 
  'naked': true, // Boolean | 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.getJobHistory(jobId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The id of the job. | 
 **naked** | **Boolean**|  | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**[JobHistory]**](JobHistory.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getJobPermission"></a>
# **getJobPermission**
> Permission getJobPermission(jobId, username, opts)



Get a specific user permission for a job.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var jobId = "jobId_example"; // String | The id of the job.

var username = "username_example"; // String | The username of the api user associated with the permission.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getJobPermission(jobId, username, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The id of the job. | 
 **username** | **String**| The username of the api user associated with the permission. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getJobStatus"></a>
# **getJobStatus**
> JobStatusSummary getJobStatus(jobId, opts)



Get the status of the job.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var jobId = "jobId_example"; // String | The id of the job.

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.getJobStatus(jobId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The id of the job. | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**JobStatusSummary**](JobStatusSummary.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listJobOutputs"></a>
# **listJobOutputs**
> [FileInfo] listJobOutputs(jobId, filePath, opts)



List the output folder for a job.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var jobId = "jobId_example"; // String | The id of the job.

var filePath = "filePath_example"; // String | The path to an output file or folder relative to the job output directory. This resource will follow data around as it moves from the execution system to archival storage.

var opts = { 
  'naked': true, // Boolean | 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0 // Number | The number of results skipped in the result set returned from this query
};
apiInstance.listJobOutputs(jobId, filePath, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The id of the job. | 
 **filePath** | **String**| The path to an output file or folder relative to the job output directory. This resource will follow data around as it moves from the execution system to archival storage. | 
 **naked** | **Boolean**|  | [optional] [default to true]
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results skipped in the result set returned from this query | [optional] [default to 0]

### Return type

[**[FileInfo]**](FileInfo.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listJobPermissions"></a>
# **listJobPermissions**
> [Permission] listJobPermissions(jobId, opts)



Get the permissions granted for this job.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var jobId = "jobId_example"; // String | The id of the job.

var opts = { 
  'limit': 100, // Number | The maximum number of results returned from this query
  'offset': 0, // Number | The number of results to skip in the result set for this query
  'naked': true // Boolean | 
};
apiInstance.listJobPermissions(jobId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The id of the job. | 
 **limit** | **Number**| The maximum number of results returned from this query | [optional] [default to 100]
 **offset** | **Number**| The number of results to skip in the result set for this query | [optional] [default to 0]
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**[Permission]**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listJobs"></a>
# **listJobs**
> [Job] listJobs(opts)



Get a list of jobs the authenticated user had submitted.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var opts = { 
  'appId': "appId_example", // String | The id of the app run by the job.
  'archive': "true", // String | Boolean flag stating whether the job output was archived. (Acceptable values are: \"true\", \"false\")
  'archivePath': "archivePath_example", // String | Path on the archive system where the job output was archived if the archive flag was true.
  'archiveSystem': "archiveSystem_example", // String | The id of the system where the job output was archived if the archive flag was true.
  'batchQueue': "batchQueue_example", // String | The system queue in which the job ran.
  'executionSystem': "executionSystem_example", // String | The execution system where the job ran.
  'id': "id_example", // String | The id of the job.
  'inputs': "inputs_example", // String | The job inputs. Note, this is a partial text search.
  'localId': "localId_example", // String | The local job id of the job on the execution system.
  'maxRuntime': "maxRuntime_example", // String | The maximum run time of the job in HH:mm:ss format.
  'memoryPerNode': "memoryPerNode_example", // String | The memory requested by the job specified in GB.
  'name': "name_example", // String | The name of the job.
  'nodeCount': 789, // Number | The number of nodes requested for the job.
  'outputPath': "outputPath_example", // String | The remote work directory path of the job.
  'parameters': "parameters_example", // String | The job parameters. Note, this is a partial text search.
  'processorsPerNode': 789, // Number | The number of processors per node requested by the job.
  'retries': 789, // Number | The number of retry attempts made on this job.
  'startTime': "startTime_example", // String | The date the job began running. Results are rounded by day. You may specify using YYYY-MM-DD format or free form timeframes such as 'yesterday' or '3 days ago'.
  'status': "status_example", // String | The job status.
  'submitTime': "submitTime_example", // String | The date the job was submitted to the remote execution system to run. Results are rounded by day. You may specify using YYYY-MM-DD format or free form timeframes such as 'yesterday' or '3 days ago'.
  'visible': "true", // String | Boolean flag indicating whether or not to show deleted jobs. Defaults to false. (Acceptable values are: \"true\", \"false\")
  'limit': 789, // Number | Boolean flag indicating whether or not to show deleted jobs. Defaults to false.
  'offset': 789, // Number | Boolean flag indicating whether or not to show deleted jobs. Defaults to false.
  'naked': true // Boolean | 
};
apiInstance.listJobs(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| The id of the app run by the job. | [optional] 
 **archive** | **String**| Boolean flag stating whether the job output was archived. (Acceptable values are: \&quot;true\&quot;, \&quot;false\&quot;) | [optional] [default to true]
 **archivePath** | **String**| Path on the archive system where the job output was archived if the archive flag was true. | [optional] 
 **archiveSystem** | **String**| The id of the system where the job output was archived if the archive flag was true. | [optional] 
 **batchQueue** | **String**| The system queue in which the job ran. | [optional] 
 **executionSystem** | **String**| The execution system where the job ran. | [optional] 
 **id** | **String**| The id of the job. | [optional] 
 **inputs** | **String**| The job inputs. Note, this is a partial text search. | [optional] 
 **localId** | **String**| The local job id of the job on the execution system. | [optional] 
 **maxRuntime** | **String**| The maximum run time of the job in HH:mm:ss format. | [optional] 
 **memoryPerNode** | **String**| The memory requested by the job specified in GB. | [optional] 
 **name** | **String**| The name of the job. | [optional] 
 **nodeCount** | **Number**| The number of nodes requested for the job. | [optional] 
 **outputPath** | **String**| The remote work directory path of the job. | [optional] 
 **parameters** | **String**| The job parameters. Note, this is a partial text search. | [optional] 
 **processorsPerNode** | **Number**| The number of processors per node requested by the job. | [optional] 
 **retries** | **Number**| The number of retry attempts made on this job. | [optional] 
 **startTime** | **String**| The date the job began running. Results are rounded by day. You may specify using YYYY-MM-DD format or free form timeframes such as &#39;yesterday&#39; or &#39;3 days ago&#39;. | [optional] 
 **status** | **String**| The job status. | [optional] 
 **submitTime** | **String**| The date the job was submitted to the remote execution system to run. Results are rounded by day. You may specify using YYYY-MM-DD format or free form timeframes such as &#39;yesterday&#39; or &#39;3 days ago&#39;. | [optional] 
 **visible** | **String**| Boolean flag indicating whether or not to show deleted jobs. Defaults to false. (Acceptable values are: \&quot;true\&quot;, \&quot;false\&quot;) | [optional] [default to true]
 **limit** | **Number**| Boolean flag indicating whether or not to show deleted jobs. Defaults to false. | [optional] 
 **offset** | **Number**| Boolean flag indicating whether or not to show deleted jobs. Defaults to false. | [optional] 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**[Job]**](Job.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resubmitJob"></a>
# **resubmitJob**
> Job resubmitJob(jobId, body, opts)



Resubmits the job with the given job id as a new job with a unique id.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var jobId = "jobId_example"; // String | The id of the job to resubmit

var body = new AgaveJsSdk.JobResubmitAction(); // JobResubmitAction | The resubmit action request

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.resubmitJob(jobId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The id of the job to resubmit | 
 **body** | [**JobResubmitAction**](JobResubmitAction.md)| The resubmit action request | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Job**](Job.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitJob"></a>
# **submitJob**
> Job submitJob(body, opts)



Submit a new job request.

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var body = new AgaveJsSdk.JobRequest(); // JobRequest | The JSON description of the job to submit. 

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.submitJob(body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobRequest**](JobRequest.md)| The JSON description of the job to submit.  | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Job**](Job.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateJobPermission"></a>
# **updateJobPermission**
> Permission updateJobPermission(jobId, username, body, opts)



Update a user permission for the given job and username

### Example
```javascript
var AgaveJsSdk = require('agave-js-sdk');
var defaultClient = AgaveJsSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: agaveImplicit
var agaveImplicit = defaultClient.authentications['agaveImplicit'];
agaveImplicit.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new AgaveJsSdk.JobsApi();

var jobId = "jobId_example"; // String | The id of the job for which the permissions will be updated

var username = "username_example"; // String | The user for whom the permission will be udpated

var body = new AgaveJsSdk.Permission(); // Permission | The permission to update

var opts = { 
  'naked': true // Boolean | 
};
apiInstance.updateJobPermission(jobId, username, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| The id of the job for which the permissions will be updated | 
 **username** | **String**| The user for whom the permission will be udpated | 
 **body** | [**Permission**](Permission.md)| The permission to update | 
 **naked** | **Boolean**|  | [optional] [default to true]

### Return type

[**Permission**](Permission.md)

### Authorization

[agaveImplicit](../README.md#agaveImplicit)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

