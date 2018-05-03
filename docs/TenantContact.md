# AgaveJsSdk.TenantContact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Full name of the contact | [optional] 
**email** | **String** | The base url for all tenant requests. This should always be SSL enabled. | [optional] 
**url** | **String** | The code by which this tenant is known, eg. agave.prod | [optional] 
**type** | **String** | The type of contact this user represents. | [optional] 
**primary** | **Boolean** | Whether the contact is the primary contact for the tenant. | [optional] 
**contact** | [**TenantContact**](TenantContact.md) |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `admin` (value: `"admin"`)

* `support` (value: `"support"`)

* `education` (value: `"education"`)

* `media` (value: `"media"`)

* `training` (value: `"training"`)

* `security` (value: `"security"`)




