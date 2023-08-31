---
title: "AsyncAPI 2.0 rules"
updated: 2023-09-15
---

You can use Postman to identify potential security and formatting issues when defining your [API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) in [AsyncAPI 2 format](https://www.asyncapi.com/docs/reference/specification/v2.6.0). For all APIs defined in AsyncAPI format, the following [Postman API Governance and Security](/docs/api-governance/api-definition/api-definition-warnings/) rules describe warning messages and possible ways to resolve them.

## Contents

* [Define metadata with the info object](#postman-asyncapi-library_category_info)
    * [The contact object should be defined in the info object](#postman-asyncapi-library_info-contact-defined)
    * [The contact email or URL should be defined in the contact object](#postman-asyncapi-library_info-contact-email-or-url-defined)
    * [The contact email should be defined in the contact object](#postman-asyncapi-library_info-contact-email-defined)
    * [The contact name should be defined in the contact object](#postman-asyncapi-library_info-contact-name-defined)
    * [The contact URL should be defined in the contact object](#postman-asyncapi-library_info-contact-url-defined)
    * [The description should be defined in the info object](#postman-asyncapi-library_info-description-defined)
    * [The license object should be defined in the info object](#postman-asyncapi-library_info-license-defined)
    * [The license URL should be defined in the license object](#postman-asyncapi-library_info-license-url-defined)
    * [The terms of service URL should be defined in the info object](#postman-asyncapi-library_info-termsofservice-defined)
* [Describe operations with the operation object](#postman-asyncapi-library_category_operation)
    * [The operation object should have a summary](#postman-asyncapi-library_operation-summary-defined)
    * [The summary shouldn't end with a period](#postman-asyncapi-library_summary-period-none)
    * [The parameter object should have a description](#postman-asyncapi-library_parameter-description-defined)
    * [The parameter object should have at least one example](#postman-asyncapi-library_parameter-examples-defined)
    * [The message object should have at least one example](#postman-asyncapi-library_message-examples-defined)
    * [The message trait object should have at least one example](#postman-asyncapi-library_messagetrait-examples-defined)
* [Model data types with the schema object](#postman-asyncapi-library_category_schema)
    * [The minimum and maximum number of items should be defined in the array's schema](#postman-asyncapi-library_schema-array-length-defined)
    * [The minimum and maximum length should be defined in the string's schema](#postman-asyncapi-library_schema-string-length-defined)
    * [The schema object property should have a description](#postman-asyncapi-library_property-description-defined)
    * [The reusable schema object should have a description](#postman-asyncapi-library_reusable-schema-description-defined)
    * [The operation object parameter should reference a reusable schema object](#postman-asyncapi-library_schema-not-inline-parameter)
    * [The message object header should reference a reusable schema object](#postman-asyncapi-library_schema-not-inline-message-headers)
    * [The message trait object header should reference a reusable schema object](#postman-asyncapi-library_schema-not-inline-message-trait-headers)
    * [The message object payload should reference a reusable schema object](#postman-asyncapi-library_schema-not-inline-payload)

<span id="postman-asyncapi-library_category_info"></span>

&nbsp;

## Define metadata with the info object

These rules enable you to define helpful metadata about your API.
This ensures your API’s consumers understand what they can do with
your API and how to contact your API’s owner.

<span id="postman-asyncapi-library_info-contact-defined"></span>

&nbsp;

### The contact object should be defined in the info object

| Issue description | Possible fix |
| ----------------- | ------------ |
| The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have the [contact object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#contactObject), which has contact information such as the name and email of the contact. Contact information defines a contact person or organization for each of your organization's APIs. Your API's consumers can use the contact information to contact the person or organization directly, or the contact information can be available at an API portal or catalog. | Add the contact object with a `name`, `email`, or `url` field to the info object. |

#### Issue

The contact object isn't defined in the info object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
```

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_info-contact-email-or-url-defined"></span>

&nbsp;

### The contact email or URL should be defined in the contact object

| Issue description | Possible fix |
| ----------------- | ------------ |
| The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have an `email` or `url` field in the [contact object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#contactObject). A contact email or URL isn't required, but including a contact email, URL, or both gives your API's consumers a way to contact the person or organization that owns your organization's APIs. | Add an `email` field, `url` field, or both to the contact object. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

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

&nbsp;

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

&nbsp;

<span id="postman-asyncapi-library_info-contact-email-defined"></span>

&nbsp;

### The contact email should be defined in the contact object

| Issue description | Possible fix |
| ----------------- | ------------ |
| The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have an `email` field in the [contact object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#contactObject). A contact email isn't required, but including a contact email gives your API's consumers a way to contact the person or organization that owns your organization's APIs. | Add an `email` field to the contact object. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_info-contact-name-defined"></span>

&nbsp;

### The contact name should be defined in the contact object

| Issue description | Possible fix |
| ----------------- | ------------ |
| The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have a `name` field in the [contact object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#contactObject). A contact name isn't required, but including a contact name gives your API's consumers the name of the person or organization to contact about your organization's APIs. | Add a `name` field to the contact object. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_info-contact-url-defined"></span>

&nbsp;

### The contact URL should be defined in the contact object

| Issue description | Possible fix |
| ----------------- | ------------ |
| The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have a `url` field in the [contact object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#contactObject). A contact URL isn't required, but including a contact URL gives your API's consumers a way to contact the person or organization that owns your organization's APIs. | Add a `url` field to the contact object. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_info-description-defined"></span>

&nbsp;

### The description should be defined in the info object

| Issue description | Possible fix |
| ----------------- | ------------ |
| The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have a `description` field. A description isn't required, but including a description enables you to provide your API's consumers with information about what the API does and how to use it. This can be anything from a short description to a long explanation of possible uses cases. Defining the API's description during the design phase can help define the API's scope. | Add a `description` field to the info object. |

#### Issue

A description isn't defined in the info object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
```

&nbsp;

#### Resolution

A description is defined in the info object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  description: An API description
channels: {}
```

&nbsp;

<span id="postman-asyncapi-library_info-license-defined"></span>

&nbsp;

### The license object should be defined in the info object

| Issue description | Possible fix |
| ----------------- | ------------ |
| The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have a [license object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#licenseObject), which has the license name and it can optionally have a URL pointing to a web page that describes the license. License information helps your API's consumers understand how the API can be copied and used. | Add a license object to the info object. |

#### Issue

A license object isn't defined in the info object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
```

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_info-license-url-defined"></span>

&nbsp;

### The license URL should be defined in the license object

| Issue description | Possible fix |
| ----------------- | ------------ |
| The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have the `url` field in the [license object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#licenseObject), which provides a link to a web page that describes the license. A license URL isn't required, but a license name alone may not be not enough information for your API's consumers, especially when you use a custom license. | Add a `url` field to the license object. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_info-termsofservice-defined"></span>

&nbsp;

### The terms of service URL should be defined in the info object

| Issue description | Possible fix |
| ----------------- | ------------ |
| The [info object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject) in your API definition doesn't have a `termsOfService` field, which has a URL pointing to the terms of service for the API. A terms of service is often mandatory for public APIs. It's also recommended that private APIs provide a link to terms and conditions of using the API. | Add the `termsOfService` field to the info object. |

#### Issue

The `termsOfService` field isn't defined in the info object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
channels: {}
```

&nbsp;

#### Resolution

The `termsOfService` field is defined in the info object.

```yaml
asyncapi: 2.6.0
info:
  title: An API name
  version: "1.0"
  termsOfService: https://example.com
channels: {}
```

&nbsp;

<span id="postman-asyncapi-library_category_operation"></span>

&nbsp;

## Describe operations with the operation object

These rules enable you to describe operations used in your API.
This ensures your API’s consumers understand how to use your API.

<span id="postman-asyncapi-library_operation-summary-defined"></span>

&nbsp;

### The operation object should have a summary

| Issue description | Possible fix |
| ----------------- | ------------ |
| One or more [operation objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationObject) in your API definition don't have a `summary` field. A summary of what the operation does provides your API's consumers with important context that the channel name and operation object type ([subscribe](https://www.asyncapi.com/docs/reference/specification/v2.6.0#channelItemObjectSubscribe) or [publish](https://www.asyncapi.com/docs/reference/specification/v2.6.0#channelItemObjectPublish)) don't provide on their own. Many organizations use the API operation description that they create during the define phase of the API development process as the summary. | Add a `summary` field to each operation object. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_summary-period-none"></span>

&nbsp;

### The summary shouldn't end with a period

| Issue description | Possible fix |
| ----------------- | ------------ |
| One or more [operation objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationObject), [operation trait objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationTraitObject), [message objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageObject), [message trait objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageTraitObject), or [message example objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageExampleObject), in your API definition have a summary that ends with a period (`.`). API documentation tools use the summary as a title, so it shouldn't end with a period. | Remove the final period from each `summary` field in each object. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_parameter-description-defined"></span>

&nbsp;

### The parameter object should have a description

| Issue description | Possible fix |
| ----------------- | ------------ |
| One or more [operation objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationObject) in your API definition don't have a `description` field in one or more [parameter objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#parameterObject). When the parameter's name and context don't provide enough information for your API's consumers, a description can provide them with useful information about the parameter. | Add a `description` field to each parameter object. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_parameter-examples-defined"></span>

&nbsp;

### The parameter object should have at least one example

| Issue description | Possible fix |
| ----------------- | ------------ |
| One or more [parameter objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#parameterObject) in your API definition don't have an example in the [schema object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject). It's important to provide examples to help your API's consumers understand what data is needed. | Add a schema object with at least one example to each parameter object. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_message-examples-defined"></span>

&nbsp;

### The message object should have at least one example

| Issue description | Possible fix |
| ----------------- | ------------ |
| One or more [message objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageObject) in your API definition don't have an example in the [message example object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageExampleObject). It's important to provide examples to help your API's consumers understand what data is needed. | Add a message example object with at least one example to each message object. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_messagetrait-examples-defined"></span>

&nbsp;

### The message trait object should have at least one example

| Issue description | Possible fix |
| ----------------- | ------------ |
| One or more [message trait objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageTraitObject) in your API definition don't have an example in the [message example object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageExampleObject). It's important to provide examples to help your API's consumers understand what data is needed. | Add a message trait object with at least one example to each message object. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_category_schema"></span>

&nbsp;

## Model data types with the schema object

These rules enable you to model data types used in your API,
ensuring your API’s consumers understand the data they’ll use
with your API. These rules also enable you to reuse components
throughout your API definition so you only need to design your
API schema once.

<span id="postman-asyncapi-library_schema-array-length-defined"></span>

&nbsp;

### The minimum and maximum number of items should be defined in the array's schema

| Issue description | Possible fix |
| ----------------- | ------------ |
| One or more [schema objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject) in your API definition have an array type property that doesn't define the `minItems` and `maxItems` fields. These fields define the minimum and maximum number of items the array type property can accept. It's important to provide item limits because applications that consume or provide APIs can only handle a limited number of items. | Add `minItems` and `maxItems` fields to array type properties in the schema object. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_schema-string-length-defined"></span>

&nbsp;

### The minimum and maximum length should be defined in the string's schema

| Issue description | Possible fix |
| ----------------- | ------------ |
| One or more [schema objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject) in your API definition have a string type property that doesn't define the `minLength` and `maxLength` fields. These fields define the minimum and maximum length the string type property can accept. It's important to provide length limits because applications that consume or provide APIs can only handle a limited string length. | Add `minLength` and `maxLength` fields to string type properties in the schema object. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_property-description-defined"></span>

&nbsp;

### The schema object property should have a description

| Issue description | Possible fix |
| ----------------- | ------------ |
| One or more properties in a [schema object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject) in your API definition don't have a `description` field. When the schema's name and context don't provide enough information for your API's consumers, a description can provide them with useful information about the property. A complicated description may indicate a problem in the API's definition or design, so spending the time to create a description can help you identify any issues. | Add a `description` field to each schema property. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_reusable-schema-description-defined"></span>

&nbsp;

### The reusable schema object should have a description

| Issue description | Possible fix |
| ----------------- | ------------ |
| One or more reusable [schema objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject) in the [components object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#componentsObject) don't have a `description` field. When the schema's name and context don't provide enough information for your API's consumers, a description can provide them with useful information about the reusable schema object. | Add a `description` field to each reusable schema object. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_schema-not-inline-parameter"></span>

&nbsp;

### The operation object parameter should reference a reusable schema object

| Issue description | Possible fix |
| ----------------- | ------------ |
| One or more [operation objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationObject) in your API definition define one or more parameters in a [parameter object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#parameterObject) that don't [reference](https://www.asyncapi.com/docs/reference/specification/v2.6.0#referenceObject) a reusable [schema object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject). Reusable schema objects are defined in the [components object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#componentsObject), enabling you to design the schema once and reuse it in your AsyncAPI document and API documentation. | Add schema objects to the components object, and reference reusable schema objects in operation object parameters. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_schema-not-inline-message-headers"></span>

&nbsp;

### The message object header should reference a reusable schema object

| Issue description | Possible fix |
| ----------------- | ------------ |
| One or more [message objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageObject) in your API definition define a `headers` field that doesn't [reference](https://www.asyncapi.com/docs/reference/specification/v2.6.0#referenceObject) a reusable [schema object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject). Reusable schema objects are defined in the [components object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#componentsObject), enabling you to design the schema once and reuse it in your AsyncAPI document and API documentation. | Add schema objects to the components object, and reference reusable schema objects in message object headers. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_schema-not-inline-message-trait-headers"></span>

&nbsp;

### The message trait object header should reference a reusable schema object

| Issue description | Possible fix |
| ----------------- | ------------ |
| One or more [message trait objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageTraitObject) in your API definition define a `headers` field that doesn't [reference](https://www.asyncapi.com/docs/reference/specification/v2.6.0#referenceObject) a reusable [schema object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject). Reusable schema objects are defined in the [components object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#componentsObject), enabling you to design the schema once and reuse it in your AsyncAPI document and API documentation. | Add schema objects to the components object, and reference reusable schema objects in message trait headers. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;

<span id="postman-asyncapi-library_schema-not-inline-payload"></span>

&nbsp;

### The message object payload should reference a reusable schema object

| Issue description | Possible fix |
| ----------------- | ------------ |
| One or more [message objects](https://www.asyncapi.com/docs/reference/specification/v2.6.0#messageObject) in your API definition define a `payload` field that doesn't [reference](https://www.asyncapi.com/docs/reference/specification/v2.6.0#referenceObject) a reusable [schema object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#schemaObject). Reusable schema objects are defined in the [components object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#componentsObject), enabling you to design the schema once and reuse it in your AsyncAPI document and API documentation. | Add schema objects to the components object, and reference reusable schema objects in message object payloads. |

#### Issue

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

&nbsp;

#### Resolution

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

&nbsp;
