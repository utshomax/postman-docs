---
title: "AsyncAPI 2.0 rules"
updated: 2023-09-15
---

You can use Postman to identify potential security and formatting issues when defining your [API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) in [AsyncAPI format](https://www.asyncapi.com/docs/reference/specification/v2.6.0). For all APIs defined in AsyncAPI format, the following [Postman API Governance and Security](/docs/api-governance/api-definition/api-definition-warnings/) rules describe warning messages and possible ways to resolve them.

- [The info object should have contact information](#info-contact-defined)
- [The info object should have a contact email or URL](#info-contact-email-or-url-defined)
- [The info object should have a contact email](#info-contact-email-defined)
- [The info object should have a contact name](#info-contact-name-defined)
- [The info object should have a contact URL](#info-contact-url-defined)
- [The info object should have a description](#info-description-defined)
- [The info object should have license information](#info-license-defined)
- [The info object should have a license URL](#info-license-url-defined)
- [The info object should have a terms of service URL](#info-termsofservice-defined)
- [Arrays should define a minimum and maximum number of items](#schema-array-length-defined)
- [Strings should define a minimum and maximum length](#schema-string-length-defined)
- [Message object headers should reference a reusable schema object](#schema-not-inline-message-headers)
- [Message trait object headers should reference a reusable schema object](#schema-not-inline-message-trait-headers)
- [Message object payloads should reference a reusable schema object](#schema-not-inline-payload)
- [Operation object parameters should reference a reusable schema object](#schema-not-inline-parameter)
- [Schema object properties should have descriptions](#property-description-defined)
- [Reusable schema objects should have descriptions](#reusable-schema-description-defined)
- [Operation objects should have summaries](#operation-summary-defined)
- [Operation object summaries shouldn't end with a period](#summary-period-none)
- [Parameter objects should have descriptions](#parameter-description-defined)
- [Parameter objects should have at least one example](#parameters-examples-defined)
- [Message objects should have at least one example](#message-examples-defined)
- [Message trait objects should have at least one example](#messagetrait-examples-defined)

## <a name="info-contact-defined"></a>The info object should have contact information

|Issue description|Possible fix|
|-----------------|------------|
|The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have the [contact object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#contactObject), which has contact information such as the name and email of the contact. Contact information defines a contact person or organization for each of your organization's APIs. Your API's consumers can use the contact information to contact the person or organization directly, or the contact information can be available at an API portal or catalog. |Add the contact object with a `name`, `email`, or `url` field to the info object. |

### Issue

The contact object isn't defined in the info object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}

```

### Resolution

The contact object is defined in the info object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  contact:
    name: A contact name
    url: https://example.com
    email: contact@example.com
channels: {}

```

## <a name="info-contact-email-or-url-defined"></a>The info object should have a contact email or URL

|Issue description|Possible fix|
|-----------------|------------|
|The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have an `email` or `url` field in the [contact object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#contactObject). A contact email or URL isn't required, but including a contact email, URL, or both gives your API's consumers a way to contact the person or organization that owns your organization's APIs. |Add an `email` field, `url` field, or both to the contact object. |

### Issue

An email or URL isn't defined in the contact object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  contact:
    name: A contact name
channels: {}

```

### Resolution

An email is defined in the contact object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  contact:
    name: A contact name
    email: contact@example.com
channels: {}

```

A URL is defined in the contact object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  contact:
    name: A contact name
    url: https://example.com
channels: {}

```

An email and URL are defined in the contact object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  contact:
    name: A contact name
    url: https://example.com
    email: contact@example.com
channels: {}

```

## <a name="info-contact-email-defined"></a>The info object should have a contact email

|Issue description|Possible fix|
|-----------------|------------|
|The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have an `email` field in the [contact object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#contactObject). A contact email isn't required, but including a contact email gives your API's consumers a way to contact the person or organization that owns your organization's APIs. |Add an `email` field to the contact object. |

### Issue

An email isn't defined in the contact object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  contact:
    name: A contact name
channels: {}

```

### Resolution

An email is defined in the contact object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  contact:
    name: A contact name
    email: contact@example.com
channels: {}

```

## <a name="info-contact-name-defined"></a>The info object should have a contact name

|Issue description|Possible fix|
|-----------------|------------|
|The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have a `name` field in the [contact object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#contactObject). A contact name isn't required, but including a contact name gives your API's consumers the name of the person or organization to contact about your organization's APIs. |Add a `name` field to the contact object. |

### Issue

A name isn't defined in the contact object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  contact:
    url: https://example.com
channels: {}

```

### Resolution

A name is defined in the contact object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  contact:
    name: A contact name
    url: https://example.com
channels: {}

```

## <a name="info-contact-url-defined"></a>The info object should have a contact URL

|Issue description|Possible fix|
|-----------------|------------|
|The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have a `url` field in the [contact object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#contactObject). A contact URL isn't required, but including a contact URL gives your API's consumers a way to contact the person or organization that owns your organization's APIs. |Add a `url` field to the contact object. |

### Issue

A URL isn't defined in the contact object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  contact:
    name: A contact name
channels: {}

```

### Resolution

A URL is defined in the contact object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  contact:
    name: A contact name
    url: https://example.com
channels: {}

```

## <a name="info-description-defined"></a>The info object should have a description

|Issue description|Possible fix|
|-----------------|------------|
|The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have a `description` field. A description isn't required, but including a description enables you to provide your API's consumers with information about what the API does and how to use it. This can be anything from a short description to a long explanation of possible uses cases. Defining the API's description during the design phase can help define the API's scope. |Add a `description` field to the info object. |

### Issue

A description isn't defined in the info object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}

```

### Resolution

A description is defined in the info object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  description: An API description
channels: {}

```

## <a name="info-license-defined"></a>The info object should have license information

|Issue description|Possible fix|
|-----------------|------------|
|The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have a [license object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#licenseObject), which has the license name and it can optionally have a URL pointing to a web page that describes the license. License information helps your API's consumers understand how the API can be copied and used. |Add a license object to the info object. |

### Issue

A license object isn't defined in the info object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}

```

### Resolution

A license object is defined in the info object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  description: An API description
  license:
    name: Apache 2.0
    url: https://opensource.org/licenses/Apache-2.0
channels: {}

```

## <a name="info-license-url-defined"></a>The info object should have a license URL

|Issue description|Possible fix|
|-----------------|------------|
|The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have the `url` field in the [license object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#licenseObject), which provides a link to a web page that describes the license. A license URL isn't required, but a license name alone may not be not enough information for your API's consumers, especially when you use a custom license. |Add a `url` field to the license object. |

### Issue

A license URL isn't defined in the license object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  license:
    name: Apache 2.0
channels: {}

```

### Resolution

A license URL is defined in the license object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  description: An API description
  license:
    name: Apache 2.0
    url: https://opensource.org/licenses/Apache-2.0
channels: {}

```

## <a name="info-termsofservice-defined"></a>The info object should have a terms of service URL

|Issue description|Possible fix|
|-----------------|------------|
|The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have a `termsOfService` field, which has a URL pointing to the terms of service for the API. A terms of service is often mandatory for public APIs. It's also recommended that private APIs provide a link to terms and conditions of using the API. |Add the `termsOfService` field to the info object. |

### Issue

The `termsOfService` field isn't defined in the info object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}

```

### Resolution

The `termsOfService` field is defined in the info object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  termsOfService: https://example.com
channels: {}

```

## <a name="schema-array-length-defined"></a>Arrays should define a minimum and maximum number of items

|Issue description|Possible fix|
|-----------------|------------|
|One or more [schema objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject) in your API definition have an array type property that doesn't define the `minItems` and `maxItems` fields. These fields define the minimum and maximum number of items the array type property can accept. It's important to provide item limits because API consumers and publishers can't handle an infinite number of items. |Add `minItems` and `maxItems` fields to array type properties in the schema object. |

### Issue

The minimum and maximum number of items aren't defined in the array type property.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
components:
  schemas:
    Schema:
      properties:
        anArray:
          type: array
          items:
            type: string

```

### Resolution

The minimum and maximum number of items are defined in the array type property.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
components:
  schemas:
    Schema:
      properties:
        anArray:
          type: array
          minItems: 0
          maxItems: 10
          items:
            type: string

```

## <a name="schema-string-length-defined"></a>Strings should define a minimum and maximum length

|Issue description|Possible fix|
|-----------------|------------|
|One or more [schema objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject) in your API definition have a string type property that doesn't define the `minLength` and `maxLength` fields. These fields define the minimum and maximum length the string type property can accept. It's important to provide length limits because API consumers and publishers can't handle an infinite string length. |Add `minLength` and `maxLength` fields to string type properties in the schema object. |

### Issue

The minimum and maximum length aren't defined in the string type property.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
components:
  schemas:
    Schema:
      properties:
        aString:
          type: string

```

### Resolution

The minimum and maximum length are defined in the string type property.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
components:
  schemas:
    Schema:
      properties:
        aString:
          type: string
          minLength: 0
          maxLength: 10

```

## <a name="schema-not-inline-message-headers"></a>Message object headers should reference a reusable schema object

|Issue description|Possible fix|
|-----------------|------------|
|One or more [message objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageObject) in your API definition define a `headers` field that doesn't [reference](https://www.asyncapi.com/docs/reference/specification/v2.6.0#referenceObject) a reusable [schema object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject). Reusable schema objects are defined in the [components object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#componentsObject), enabling you to design the schema once and reuse it in your AsyncAPI document and API documentation. |Add schema objects to the components object, and reference reusable schema objects in message object headers.|

### Issue

The headers schema isn't defined in a reusable schema object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
components:
  messages:
    reusableMessage:
      headers:
        type: object

```

### Resolution

The headers schema is defined in a reusable schema object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
components:
  messages:
    reusableMessage:
      headers:
        $ref: "#/components/schemas/headerSchema"
  schemas:
    headerSchema:
      type: object

```

## <a name="schema-not-inline-message-trait-headers"></a>Message trait object headers should reference a reusable schema object

|Issue description|Possible fix|
|-----------------|------------|
|One or more [message trait objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageTraitObject) in your API definition define a `headers` field that doesn't [reference](https://www.asyncapi.com/docs/reference/specification/v2.6.0#referenceObject) a reusable [schema object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject). Reusable schema objects are defined in the [components object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#componentsObject), enabling you to design the schema once and reuse it in your AsyncAPI document and API documentation. |Add schema objects to the components object, and reference reusable schema objects in message trait headers.|

### Issue

The headers schema isn't defined in a reusable schema object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
components:
  messageTraits:
    reusableMessageTrait:
      headers:
        type: object

```

### Resolution

The headers schema is defined in a reusable schema object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
components:
  messageTraits:
    reusableMessageTrait:
      headers:
        $ref: "#/components/schemas/headerSchema"
  schemas:
    headerSchema:
      type: object

```

## <a name="schema-not-inline-payload"></a>Message object payloads should reference a reusable schema object

|Issue description|Possible fix|
|-----------------|------------|
|One or more [message objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageObject) in your API definition define a `payload` field that doesn't [reference](https://www.asyncapi.com/docs/reference/specification/v2.6.0#referenceObject) a reusable [schema object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject). Reusable schema objects are defined in the [components object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#componentsObject), enabling you to design the schema once and reuse it in your AsyncAPI document and API documentation. |Add schema objects to the components object, and reference reusable schema objects in message object payloads.|

### Issue

The payload schema isn't defined in a reusable schema object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels:
  aChannel:
    publish:
      message:
        payload:
          type: object

```

### Resolution

The payload schema is defined in a reusable schema object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels:
  aChannel:
    publish:
      message:
        payload:
          $ref: "#/components/schemas/payloadSchema"
components:
  schemas:
    payloadSchema:
      type: object

```

## <a name="schema-not-inline-parameter"></a>Operation object parameters should reference a reusable schema object

|Issue description|Possible fix|
|-----------------|------------|
|One or more [operation objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationObject) in your API definition define one or more parameters in a [parameter object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#parameterObject) that don't [reference](https://www.asyncapi.com/docs/reference/specification/v2.6.0#referenceObject) a reusable [schema object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject). Reusable schema objects are defined in the [components object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#componentsObject), enabling you to design the schema once and reuse it in your AsyncAPI document and API documentation. |Add schema objects to the components object, and reference reusable schema objects in operation object parameters.|

### Issue

The parameter schema isn't defined in a reusable schema object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels:
  aChannel:
    parameters:
      aParameter:
        schema:
          type: object

```

### Resolution

The parameter schema is defined in a reusable schema object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels:
  aChannel:
    parameters:
      aParameter:
        schema:
          $ref: "#/components/schemas/parameterSchema"
components:
  schemas:
    parameterSchema:
      type: object

```

## <a name="property-description-defined"></a>Schema object properties should have descriptions

|Issue description|Possible fix|
|-----------------|------------|
|One or more properties in a [schema object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject) in your API definition don't have a `description` field. When the schema's name and context don't provide enough information for your API's consumers, a description can provide them with useful information about the property. A complicated description may indicate a problem in the API's definition or design, so spending the time to create a description can help you identify any issues. |Add a `description` field to each schema property. |

### Issue

A description isn't defined in the property.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
components:
  schemas:
    aSchema:
      properties:
        aProperty:
          type: string

```

### Resolution

A description is defined in the property.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
components:
  schemas:
    aSchema:
      properties:
        aProperty:
          description: Description of the property
          type: string

```

## <a name="reusable-schema-description-defined"></a>Reusable schema objects should have descriptions

|Issue description|Possible fix|
|-----------------|------------|
|One or more reusable [schema objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject) in the [components object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#componentsObject) don't have a `description` field. When the schema's name and context don't provide enough information for your API's consumers, a description can provide them with useful information about the reusable schema object. |Add a `description` field to each reusable schema object. |

### Issue

A description isn't defined in the reusable schema object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
components:
  schemas:
    aSchema: {}

```

### Resolution

A description is defined in the reusable schema object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
components:
  schemas:
    aSchema:
      description: Description of the reusable schema object

```

## <a name="operation-summary-defined"></a>Operation objects should have summaries

|Issue description|Possible fix|
|-----------------|------------|
|One or more [operation objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationObject) in your API definition don't have a `summary` field. A summary of what the operation does provides your API's consumers with important context that the channel name and operation object type ([subscribe](https://www.asyncapi.com/docs/reference/specification/v2.6.0#channelItemObjectSubscribe) or [publish](https://www.asyncapi.com/docs/reference/specification/v2.6.0#channelItemObjectPublish)) don't provide on their own. Many organizations use the API operation description that they create during the define phase of the API development process as the summary. |Add a `summary` field to each operation object. |

### Issue

A summary isn't defined in the operation object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels:
  aChannel:
    publish: {}

```

### Resolution

A summary is defined in the operation object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels:
  aChannel:
    publish:
      summary: Summary of the operation

```

## <a name="summary-period-none"></a>Operation object summaries shouldn't end with a period

|Issue description|Possible fix|
|-----------------|------------|
|One or more [operation objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationObject) in your API definition have a summary that ends with a period (`.`). API documentation tools use the summary as a title, so it shouldn't end with a period. |Remove the final period from each `summary` field in each operation object. |

### Issue

The summary ends with a period.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels:
  aChannel:
    publish:
      summary: Summary of the channel.

```

### Resolution

The summary doesn't end with a period.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels:
  aChannel:
    publish:
      summary: Summary of the channel

```

## <a name="parameter-description-defined"></a>Parameter objects should have descriptions

|Issue description|Possible fix|
|-----------------|------------|
|One or more [operation objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationObject) in your API definition don't have a `description` field in one or more [parameter objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#parameterObject). When the parameter's name and context don't provide enough information for your API's consumers, a description can provide them with useful information about the parameter. |Add a `description` field to each parameter object. |

### Issue

A description isn't defined in the parameter.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels:
  aChannel:
    parameters:
      aParameter: {}

```

### Resolution

A description is defined in the parameter.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels:
  aChannel:
    parameters:
      aParameter:
        description: Description of the parameter

```

## <a name="parameters-examples-defined"></a>Parameter objects should have at least one example

|Issue description|Possible fix|
|-----------------|------------|
|One or more [parameter objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#parameterObject) in your API definition don't have an example in the [schema object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject). It's important to provide examples to help your API's consumers understand what data is needed. |Add a schema object with at least one example to each parameter object. |

### Issue

An example isn't defined in the schema object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels:
  aChannel:
    parameters:
      aParameter:
        schema:
          type: string

```

### Resolution

An example is defined in the schema object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels:
  aChannel:
    parameters:
      aParameter:
        schema:
          type: string
          examples:
            - example

```

## <a name="message-examples-defined"></a>Message objects should have at least one example

|Issue description|Possible fix|
|-----------------|------------|
|One or more [message objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageObject) in your API definition don't have an example in the [message example object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageExampleObject). It's important to provide examples to help your API's consumers understand what data is needed. |Add a message example object with at least one example to each message object. |

### Issue

An example isn't defined in a message example object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels:
  aChannel:
    publish:
      message:
        payload:
          properties:
            aProperty:
              type: string

```

### Resolution

An example is defined in a message example object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels:
  aChannel:
    publish:
      message:
        payload:
          properties:
            aProperty:
              type: string
        examples:
          - name: An example name
            payload:
              aProperty: An example value

```

## <a name="messagetrait-examples-defined"></a>Message trait objects should have at least one example

|Issue description|Possible fix|
|-----------------|------------|
|One or more [message trait objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageTraitObject) in your API definition don't have an example in the [message example object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageExampleObject). It's important to provide examples to help your API's consumers understand what data is needed. |Add a message trait object with at least one example to each message object. |

### Issue

No `examples` is defined in the `ReusableMessageTrait` message trait.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
components:
  messageTraits:
    ReusableMessageTrait:
      headers:
        type: object
        properties:
          aHeader:
            type: string

```

### Resolution

A non empty `examples` is defined in the `ReusableMessageTrait` message trait.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
components:
  messageTraits:
    ReusableMessageTrait:
      headers:
        type: object
        properties:
          aHeader:
            type: string
      examples:
        - name: An example name
          headers:
            aHeader: An example value

```
