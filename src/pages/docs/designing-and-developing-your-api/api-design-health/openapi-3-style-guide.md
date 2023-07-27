---
title: "OpenAPI 3 style guide for API Design Health"
updated: 2023-08-15
---

You an use [Postman API Design Health](/docs/designing-and-developing-your-api/api-design-health/checking-api-design-health/) to check the design quality of your OpenAPI documents or [API definitions](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) in [OpenAPI 3.1 format](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md) and [OpenAPI 3.0 format](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md). API Design Health checks your API using this style guide, and returns each occurrence of each style guide violation. Learn more about [reviewing and fixing style guide violations](/docs/designing-and-developing-your-api/api-design-health/checking-api-design-health/#reviewing-and-fixing-style-guide-violations).

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

## Expected a 204 response to not have a response body

| Issue description | Fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responses-object) for one or more DELETE [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) has a `204` HTTP status code but also defines a response body. A `204` status means "no content," so there shouldn't be a response body defined. | Each response body is removed from DELETE methods with a `204` status code. |

### Resolution

```json
openapi: '3.1.0'
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
| One or more [path item objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#path-item-object) in your API definition's [paths object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#paths-object) have a trailing slash at the end of the path. Some tools treat a path that ends with a trailing slash (`/path/`) differently from the way that they treat paths without a trailing slash (`/path`), which can lead to problems that require long hours of debugging. | Trailing slashes are removed from paths in your API definition's paths object. |

### Resolution

```json
openapi: '3.0.3'
# ...
paths:
  '/resources':
```

&nbsp;

## Missing 2XX response code for the operation

| Issue description | Fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responses-object) for one or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API definition don't have a `2xx` class status code. Operations are expected to succeed and return a `2xx` success HTTP status code. It's rare for an operation to return a different code, such as a `3xx` redirect code, instead. | Adds a `200` success status code to a GET operation object. Make sure to add your own description of the status code. |

### Resolution

```json
openapi: '3.0.3'
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
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responses-object) for one or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API definition doesn't have a `5xx` class status code. Since operations may fail, they need to return a `5xx` server error HTTP status code. | Adds a `500` status code to a GET operation object. Make sure to add your own description of the status code. |

### Resolution

```json
openapi: '3.1.0'
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
| One or more PATCH [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API definition don't have a [request body object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#request-body-object). Since PATCH operations are used to make partial updates, a PATCH method needs to include a request body. | Adds a request body object and `content` field to a PATCH operation object. |

### Resolution

```json
openapi: '3.1.0'
# ...
paths:
  /resources:
    patch:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
```

&nbsp;

## Missing request body in POST method

| Issue description | Fix |
| ----------- | ----------- |
| One or more POST [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API definition don't have a [request body object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#request-body-object). Even though the HTTP protocol permits POST requests without a body, this often hides a design problem. | Adds a request body object and `content` field to a POST operation object. |

### Resolution

```json
openapi: '3.1.0'
# ...
paths:
  /resources:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
```

&nbsp;

## Missing request body in PUT method

| Issue description | Fix |
| ----------- | ----------- |
| One or more PUT [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API definition don't have a [request body object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#request-body-object). Since a PUT operation is often used to replace or create something, not having a request body might be an error. However, this use might make sense in some cases (for example, to link two resources with a PUT, like `/resource-ones/id1/other-resources/id2`). | Adds a request body object and `content` field to a PUT operation object. |

### Resolution

```json
openapi: '3.1.0'
# ...
paths:
  /resources:
    put:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
```

&nbsp;

## Missing example for the request body

| Issue description | Fix |
| ----------- | ----------- |
| One or more [request body objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#request-body-object) in your API definition don't have an example. It's important to provide undocumented examples (using the `example` property) or documented examples (using the `examples` property) to help your API's consumers understand what data they'll receive. It may also help them to generate [mock servers](/docs/designing-and-developing-your-api/mocking-data/) or a [collection](/docs/getting-started/creating-the-first-collection/). | Adds an `example` field to a request body object. Make sure to add your own example key and value. |

### Resolution

```json
openapi: '3.1.0'
# ...
paths:
  /resources:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              # ...
            example:
              aProperty: example value
```

&nbsp;

## Missing example for the response body

| Issue description | Fix |
| ----------- | ----------- |
| One or more [response objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responses-object) in your API definition don't have an example. It's important to provide undocumented examples (using the `example` property) or documented examples (using the `examples` property) to help your API's consumers understand what data they'll receive. It may also help them to generate [mock servers](/docs/designing-and-developing-your-api/mocking-data/) or a [collection](/docs/getting-started/creating-the-first-collection/). | Adds an `example` field to a response object. Make sure to add your own example key and value. |

### Resolution

```json
openapi: '3.1.0'
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
                # ...
              example:
                aProperty: example
```

&nbsp;

## Missing summary in the operation

| Issue description | Fix |
| ----------- | ----------- |
| One or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API definition don't have a summary. A summary of what the operation does provides your API's consumers with important context that the HTTP method and path don't provide on their own. Many organizations use the API operation description that they create during the define phase of the API development process as the summary. | Adds a `summary` field to an operation object. Make sure to add your own description for the operation object. |

### Resolution

```json
openapi: '3.1.0'
# ...
paths:
  /resources:
    get:
      summary: A GET operation summary
```

&nbsp;
