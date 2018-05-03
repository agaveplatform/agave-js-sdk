# AgaveJsSdk.ApplicationArgumentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description of this input. | [optional] 
**label** | **String** | The label for this input | [optional] 
**argument** | **String** | The command line value of this input (ex -n, --name, -name, etc) | [optional] 
**showArgument** | **Boolean** | Whether the argument value should be passed into the wrapper at run time | [default to false]
**repeatArgument** | **Boolean** | Whether the argument value should be repeated in front of each user-supplied input before injection into the wrapper template at runtime | [default to false]


