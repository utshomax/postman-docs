---
title: "OpenAPI rules for API Health"
updated: 2023-08-15
---

You can use Postman to identify security and formatting recommendations in your API definition file.

## A 204 response can't have a body

| Issue description | Possible fix | Format |
| ----------- | ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#responses-object) for one or more DELETE [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject) has a `204` HTTP status code but also defines a response body. A `204` status means "no content," so there shouldn't be a response body defined. | Make sure that DELETE methods with a `204` status code don't have a response body. | OpenAPI 3.1, 3.0, 2.0 |

### Resolution

```json
openapi: '3.1.0'
// openapi: '3.0.0'
// swagger: '2.0'
#...
paths:
  /resources:
    delete:
      responses:
        '204':
          description: a success response
```

&nbsp;

## Operation should return a 2xx HTTP status code

| Issue description | Possible fix | Format |
| ----------- | ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#responses-object) for one or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject) in your API definition don't have a `2xx` class status code. Operations are expected to succeed and return a `2xx` success HTTP status code. It's rare for an operation to return a different code, such as a `3xx` redirect code, instead. | Make sure that operations return a `2xx` success status code. | OpenAPI 3.1, 3.0, 2.0 |

### Resolution

```json
openapi: '3.1.0'
// openapi: '3.0.0'
// swagger: '2.0'
# ...
paths:
  /resources:
    get:
      responses:
        '200':
          description: A success response
```

&nbsp;

## Operation should return a 5xx HTTP status code

| Issue description | Possible fix | Format |
| ----------- | ----------- | ----------- |
| The [responses object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#responses-object) for one or more [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject) in your API definition doesn't have a `5xx` class status code. Since operations may fail, they need to return a `5xx` server error HTTP status code. | Make sure that all operations return a `5xx` status code. | OpenAPI 3.1, 3.0, 2.0 |

### Resolution

```json
openapi: '3.1.0'
// openapi: '3.0.0'
// swagger: '2.0'
# ...
paths:
  /resources:
    get:
      responses:
        '500':
          description: A server error response
```

&nbsp;

## PATCH methods should have request bodies

| Issue description | Possible fix | Format |
| ----------- | ----------- | ----------- |
| One or more PATCH [operation objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject) in your API definition don't have a [request body object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#requestBodyObject). Since PATCH operations are used to make partial updates, a PATCH method needs to include a request body. | Add a request body object to any PATCH operation objects. | OpenAPI 3.1, 3.0, 2.0 |

### Resolution

```json
openapi: '3.1.0'
// openapi: '3.0.0'
// swagger: '2.0'
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
