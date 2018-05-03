# AgaveJsSdk.SystemCredential

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential** | **String** | The credential used to authenticate to the remote system. Depending on the authentication protocol of the remote system, this could be an OAuth Token, X.509 certificate, Kerberose token, or an private key.. | 
**expirationDate** | **Date** | The date the credential expires in ISO 8601 format. | 
**internalUsername** | **String** | The username of the internal user associated with this credential. | 
**isDefault** | **Boolean** | Is this the default credential for this internal user of this type on this system? | 
**parentType** | [**SystemType**](SystemType.md) |  | 
**password** | **String** | The password on the remote system used to authenticate. | 
**publicKey** | **String** | The public ssh key used to authenticate to the remote system. | 
**privateKey** | **String** | The public ssh key used to authenticate to the remote system.. | 
**server** | [**SystemAuthConfigServerProtocolType**](SystemAuthConfigServerProtocolType.md) |  | 
**type** | [**AuthenticationType**](AuthenticationType.md) |  | 
**username** | **String** | The local username on the remote system used to authenticate. | 
**valid** | **Boolean** | Is the credential still valid or has it expired?. | 
**caCerts** | **String** | A public URL to the location of the trusted CA certs to use with this credential. | 


