# AgaveJsSdk.Tenant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | uuid of the tenant | [optional] 
**name** | **String** | human readable name of the tenant organization | [optional] 
**baseUrl** | **String** | The base url for all tenant requests. This should always be SSL enabled. | [optional] 
**code** | **String** | The code by which this tenant is known, eg. agave.prod | [optional] 
**created** | **Date** | When the tenant was created in ISO8601 format | [optional] 
**lastUpdated** | **Date** | When the tenant was last updated in ISO8601 format | [optional] 
**contact** | [**TenantContact**](TenantContact.md) |  | [optional] 


