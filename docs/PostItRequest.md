# AgaveJsSdk.PostItRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | The url that will be invoked when the PostIt is redeemed. | 
**internalUsername** | **String** | The username of the internal user attached to this PostIt. | 
**method** | [**PostItRequestMethod**](PostItRequestMethod.md) |  | 
**lifetime** | **Number** | The maximum lifetime in seconds of this PostIt on this token. Defaults to 2592000 (30 days) | 
**maxUses** | **Number** | The maximum number of invocations remaining on this PostIt. Defaults to no limit | 
**noauth** | **Boolean** | If true, the provided url will be called without authentication. Default is false | 


