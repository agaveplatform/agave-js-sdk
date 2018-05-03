# AgaveJsSdk.Application

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **String** | Whether the application is available. | 
**checkpointable** | **String** | Whether the application supports checkpointing. | 
**defaultMaxRunTime** | **String** | The max execution time that should be used if none is given in a job description. Ignore if the system does not support schedulers. | 
**defaultMemoryPerNode** | **String** | The default memory in GB to pass to the scheduler if none is given in the job description. This must be less than the max memory parameter in the target queue definition. | 
**defaultNodeCount** | **String** | The number of nodes that should be used if none is given in a job description. Ignore if the system does not support schedulers. | 
**defaultProcessorsPerNode** | **String** | The number of processors to pass to the scheduler if none are given in the job description. This must be 1 if the app is serial. | 
**defaultQueue** | **String** | The queue on the execution system that should be used if none is given in a job description. Ignore if the system does not support schedulers. | 
**deploymentPath** | **String** | The location in default storage system containing the application wrapper and dependencies of the user | 
**deploymentSystem** | **String** | The system id of the storage system where this app should run. | 
**executionSystem** | **String** | The system id of the execution system where this app should run. | 
**executionType** | **String** | The execution type of the application. If you&#39;re unsure, it&#39;s probably HPC. | 
**helpURI** | **String** | The URL where users can go for more information about the app. | 
**id** | **String** | Unique id of this app. Comprised of the app name-version. | 
**icon** | **String** | The icon to associate with this app. | 
**inputs** | **String** | The inputs files for this application.  | 
**label** | **String** | The label to use when generating forms. | 
**lastModified** | **String** | The date this application was last modified in ISO 8601 format. | 
**longDescription** | **String** | The full text description of this input to use when generating forms. | 
**modules** | **String** | An array of modules to load prior to the execution of the application. | 
**name** | **String** | The name of the application. The name does not have to be unique, but the combination of name and version does. | 
**ontology** | **String** | An array of ontology values describing this application. | 
**outputs** | **String** | The outputs files for this application.  | 
**parallelism** | **String** | The parallelism type of the application. If you&#39;re unsure, it&#39;s probably SERIAL. | 
**parameters** | **String** | The inputs parameters for this application.  | 
**isPublic** | **String** | Whether the application is public or private. | 
**revision** | **String** | The number of times this application has been revised. | 
**shortDescription** | **String** | The short description of this application. | 
**tags** | **String** | An array of tags related to this application. | 
**templatePath** | **String** | The path to the wrapper script relative to the deploymentPath. | 
**testPath** | **String** | The path to the test script relative to the deploymentPath. | 
**uuid** | **String** | The UUID of this application. UUID are 36 alphanumeric string. | 
**version** | **String** | The version of the application in #.#.# format. While the version does not need to be unique, the combination of name and version does have to be unique. | 


