# AgaveJsSdk.AbstractApplicationParameterValue

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultValue** | **String** | The default value for this parameter. The type will be determined by the value.type field. | [optional] 
**enumValues** | **String** | An array of enumerated object values. | [optional] 
**enquote** | **Boolean** | Whether the argument value should be surrounded by quotation marks before injection into the wrapper template at runtime | [default to false]
**order** | **Number** | The order in which this parameter should be printed when generating an execution command for forked execution. This will also be the order in which paramters are returned in the response json. | [default to 0]
**required** | **Boolean** | Is this parameter required? If visible is false, this must be true. | [default to false]
**type** | **String** | The type of this parameter value. (Acceptable values are: \&quot;string\&quot;, \&quot;number\&quot;, \&quot;enumeration\&quot;, \&quot;bool\&quot;, \&quot;flag\&quot;) | [default to &#39;string&#39;]
**validator** | **String** | The regular expression used to validate this parameter value. For enumerations, separate values with | | [optional] 
**visible** | **Boolean** | Should this parameter be visible? If not, there must be a default and it will be required. | [default to true]


