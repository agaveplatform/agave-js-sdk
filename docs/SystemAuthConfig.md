# AgaveJsSdk.SystemAuthConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential** | **String** | The credential used to authenticate to the remote system. Depending on the authentication protocol of the remote system, this could be an OAuth Token, X.509 certificate, Kerberose token, or an private key.. | 
**internalUsername** | **String** | The username of the internal user associated with this credential. | 
**password** | **String** | The password on the remote system used to authenticate. | 
**publicKey** | **String** | The public ssh key used to authenticate to the remote system. | 
**privateKey** | **String** | The public ssh key used to authenticate to the remote system.. | 
**server** | [**SystemAuthConfigServer**](SystemAuthConfigServer.md) |  | 
**type** | [**SystemLoginAuthenticationType**](SystemLoginAuthenticationType.md) |  | 
**username** | **String** | The local username on the remote system used to authenticate. | 
**caCerts** | **String** | A public URL to the location of the trusted CA certs to use with this credential. | 


