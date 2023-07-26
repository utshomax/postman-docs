---
title: "OpenAPI 3.1 style guide for API Design Health"
updated: 2023-08-15
---

You an use [Postman API Design Health](/docs/designing-and-developing-your-api/api-design-health/checking-api-design-health/) to check the design quality of your OpenAPI documents or [API definitions](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) in [OpenAPI 3.1 format](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md). API Design Health checks your API using this style guide, and returns each occurrence of each style guide violation. Learn more about [reviewing and fixing style guide violations](/docs/designing-and-developing-your-api/api-design-health/checking-api-design-health/#reviewing-and-fixing-style-guide-violations).

<!-- screenshot: hero image -->

<!-- TO DO: add TOC -->

### Expected a 204 response to not have a body

| Issue description | Fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responses-object) for one or more DELETE [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) has a `204` HTTP status code but also defines a response body. A `204` status means "no content," so there shouldn't be a response body defined. | Make sure that DELETE methods with a `204` status code don't have a response body. |

#### Resolution

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

### Operation is missing a 2xx HTTP status code

| Issue description | Fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responses-object) for one or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API definition don't have a `2xx` class status code. Operations are expected to succeed and return a `2xx` success HTTP status code. It's rare for an operation to return a different code, such as a `3xx` redirect code, instead. | Make sure that operations return a `2xx` success status code. |

#### Resolution

```json
openapi: '3.1.0'
# ...
paths:
  /resources:
    get:
      responses:
        '200':
          description: A success response
```

&nbsp;

### Operation is missing a 5xx HTTP status code

| Issue description | Fix |
| ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responses-object) for one or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API definition doesn't have a `5xx` class status code. Since operations may fail, they need to return a `5xx` server error HTTP status code. | Make sure that all operations return a `5xx` status code. |

#### Resolution

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

### PATCH methods is missing request bodies

| Issue description | Fix |
| ----------- | ----------- |
| One or more PATCH [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object) in your API definition don't have a [request body object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md##request-body-object). Since PATCH operations are used to make partial updates, a PATCH method needs to include a request body. | Add a request body object to any PATCH operation objects. |

#### Resolution

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
