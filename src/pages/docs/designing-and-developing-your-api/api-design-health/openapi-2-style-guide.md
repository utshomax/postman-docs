---
title: "OpenAPI 2 style guide for API Design Health"
updated: 2023-08-15
---

You an use [Postman API Design Health](/docs/designing-and-developing-your-api/api-design-health/checking-api-design-health/) to check the design quality of your OpenAPI documents or [API definitions](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) in [OpenAPI 2.0 format](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md). API Design Health checks your API using this style guide, and returns each occurrence of each style guide violation. Learn more about [reviewing and fixing style guide violations](/docs/designing-and-developing-your-api/api-design-health/checking-api-design-health/#reviewing-and-fixing-style-guide-violations).

> You can also review the API Design Health style guide for [OpenAPI 3.1 and 3.0 formats](/docs/designing-and-developing-your-api/api-design-health/openapi-3-style-guide/).

<!-- screenshot: hero image -->

## Contents

* [Expected a 204 response to not have a response body](#expected-a-204-response-to-not-have-a-response-body)
* [Trailing slashes found on the paths](#trailing-slashes-found-on-the-paths)
* [Missing 2XX response code for the operation](#missing-2xx-response-code-for-the-operation)
* [Missing 5XX response code for the operation](#missing-5xx-response-code-for-the-operation)
* [Missing request body in PATCH method](#missing-request-body-in-patch-method)
* [Missing request body in POST method](#missing-request-body-in-post-method)
* [Missing request body in PUT method](#missing-request-body-in-put-method)
* [Missing example for the request body](#missing-example-for-the-request-body)
* [Missing example for the response body](#missing-example-for-the-response-body)
* [Missing summary in the operation](#missing-summary-in-the-operation)
* [Missing content type for the form parameter](#missing-content-type-for-the-form-parameter)
* [Missing or invalid host information](#missing-or-invalid-host-information)
* [Invalid example for the defined schema](#invalid-example-for-the-defined-schema)
* [Invalid example for the defined schema in request and response bodies](#invalid-example-for-the-defined-schema-in-request-and-response-bodies)

## Expected a 204 response to not have a response body

| Issue description | Fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#responses-object) for one or more DELETE [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operation-object) has a `204` HTTP status code but also defines a response body. A `204` status means "no content," so there shouldn't be a response body defined. | Removes a response body from a DELETE method with a `204` status code. |

### Resolution

```json
swagger: '2.0'
#...
paths:
  /resources:
    delete:
      responses:
        '204':
          description: a success response
```

&nbsp;

## Trailing slashes found on the paths

| Issue description | Fix |
| ----------- | ----------- |
| One or more [path item objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#path-item-object) in your OpenAPI document's or API definition's [paths object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#paths-object) have a trailing slash at the end of the path. Some tools treat a path that ends with a trailing slash (`/path/`) differently from the way that they treat paths without a trailing slash (`/path`), which can lead to problems that require long hours of debugging. | Removes a trailing slash from a path in your OpenAPI document's or API definition's paths object. |

### Resolution

```json
swagger: '2.0'
# ...
paths:
  '/resources':
```

&nbsp;

## Missing 2XX response code for the operation

| Issue description | Fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#responses-object) for one or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operation-object) in your OpenAPI document or API definition don't have a `2xx` class status code. Operations are expected to succeed and return a `2xx` success HTTP status code. It's rare for an operation to return a different code, such as a `3xx` redirect code, instead. | Adds a `200` success status code to an operation object. Make sure to add your own description of the response. |

### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    get:
      responses:
        '200':
          description: A success response
```

&nbsp;

## Missing 5XX response code for the operation

| Issue description | Fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#responses-object) for one or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operation-object) in your OpenAPI document or API definition doesn't have a `5xx` class status code. Since operations may fail, they need to return a `5xx` server error HTTP status code. | Adds a `500` status code to an operation object. Make sure to add your own description of the response. |

### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    get:
      responses:
        '500':
          description: A server error response
```

&nbsp;

## Missing request body in PATCH method

| Issue description | Fix |
| ----------- | ----------- |
| One or more PATCH [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operation-object) in your OpenAPI document or API definition don't have a [body parameter object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#parameter-object). Since PATCH operations are used to make partial updates, a PATCH method needs to include a request body. | TBD |

### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    patch:
      parameters:
        - in: body
          name: body
          schema:
            type: object
```

&nbsp;

## Missing request body in POST method

| Issue description | Fix |
| ----------- | ----------- |
| One or more POST [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operation-object) in your OpenAPI document or API definition don't have a [body parameter object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#parameter-object). Even though the HTTP protocol permits POST requests without a body, this often hides a design problem. | TBD |

### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    post:
      parameters:
        - in: body
          name: body
          schema:
            type: object
```

&nbsp;

## Missing request body in PUT method

| Issue description | Fix |
| ----------- | ----------- |
| One or more PUT [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operation-object) in your OpenAPI document or API definition don't have a [body parameter object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#parameter-object). Since a PUT operation is often used to replace or create something, not having a request body might be an error. However, this use might make sense in some cases (for example, to link two resources with a PUT, like `/resource-ones/id1/other-resources/id2`). | TBD |

### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    put:
      parameters:
        - in: body
          name: body
          schema:
            type: object
```

&nbsp;

## Missing example for the request body

| Issue description | Fix |
| ----------- | ----------- |
| A [schema object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#schema-object) in one or more [body parameter objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#parameter-object) in your OpenAPI document or API definition don't have an example. It's important to provide an example of the request body to help your API's consumers understand what data they'll receive. It may also help them to generate [mock servers](/docs/designing-and-developing-your-api/mocking-data/) or a [collection](/docs/getting-started/creating-the-first-collection/). | Adds an `example` field to the schema of a body parameter. Make sure to add your own example key-value pair to describe the content of the request. |

### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    post:
      parameters:
        - in: body
          name: body
          schema:
            type: object
            example:
              key: value
```

&nbsp;

## Missing example for the response body

| Issue description | Fix |
| ----------- | ----------- |
| One or more [responses objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#response-object) in your OpenAPI document or API definition don't have an [example object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#example-object). It's important to provide an example of the response to help your API's consumers understand what data they'll receive. It may also help them to generate [mock servers](/docs/designing-and-developing-your-api/mocking-data/) or a [collection](/docs/getting-started/creating-the-first-collection/). | TBD |

### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    get:
      responses:
        '200':
          description: A success response
          'application/json':
            key: value
```

&nbsp;

## Missing summary in the operation

| Issue description | Fix |
| ----------- | ----------- |
| One or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operation-object) in your OpenAPI document or API definition don't have a summary. A summary of what the operation does provides your API's consumers with important context that the HTTP method and path don't provide on their own. Many organizations use the API operation description that they create during the define phase of the API development process as the summary. | Adds a `summary` field to an operation object. Make sure to add your own summary of the operation object. |

### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    get:
      summary: A GET operation summary
```

&nbsp;

## Missing content type for the form parameter

| Issue description | Fix |
| ----------- | ----------- |
| One or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#operation-object) in your OpenAPI document or API definition specify a [form parameter object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#parameter-object). But the operation object doesn't specify the [mime type](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#mime-types) (content type) of the form data in the request body as either `application/x-www-form-urlencoded` or `multipart/form-data`. Use the `consumes` field to specify the mime type used to encode form data when making a request. | Adds a `consumes` field to an operation object with the value `application/x-www-form-urlencoded`. If you'd like to encode form data as `multipart/form-data`, make sure to replace the default mime type. |

### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    post:
      summary: A POST operation summary
      consumes: application/x-www-form-urlencoded
      parameters:
        - in: formData
          name: fullName
```

&nbsp;

## Missing or invalid host information

| Issue description | Fix |
| ----------- | ----------- |
| Your OpenAPI document or API definition doesn't have the `host` field or the value is an empty string in the [Swagger object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#swagger-object). The `host` field provides your API's consumers with the server hosting your API, enabling them to make a request to your API. | Adds the `host` field to the Swagger object in your OpenAPI document or API definition. Make sure to add your own URL to the host. |

### Resolution

```json
swagger: '2.0'
host: https://my.host.example.com/
# ...
```

&nbsp;

## Invalid example for the defined schema

| Issue description | Fix |
| ----------- | ----------- |
| One or more examples in the [schema object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#schema-object) don't match the defined schema in your OpenAPI document or API definition. It's important to provide examples that match the schema to help your API's consumers understand the request and response. | TBD |

### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    get:
      responses:
        '200':
          description: A success response
          content:
            'application/json':
              schema:
                $ref: '#/components/schemas/User'
              example:
                id: 10
                name: John Doe
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
```

## Invalid example for the defined schema in request and response bodies

| Issue description | Fix |
| ----------- | ----------- |
| One or more examples in the [body parameter object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#parameter-object) or [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#responses-object) don't match the [schema object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md#schema-object) in your OpenAPI document or API definition. It's important to provide examples that match the schema to help your API's consumers understand the request and response. | TBD |

### Resolution

```json
swagger: '2.0'
# ...
paths:
  /resources:
    get:
      responses:
        '200':
          description: A success response
          content:
            'application/json':
              schema:
                $ref: '#/components/schemas/User'
              example:
                id: 10
                name: John Doe
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
```
