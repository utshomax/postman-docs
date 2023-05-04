---
title: "Postman API documentation"
updated: 2022-11-30
search_keyword: "Postman API docs"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to the Postman API | Postman Level Up"
    url: "https://www.youtube.com/watch?v=iEtsp6o4AJg"
  - type: link
    name: "User Info from the Postman API | Postman Level Up"
    url: "https://www.youtube.com/watch?v=k2bvdqxDcsU"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Filtering and Sorting APIs Using the Postman API"
    url: "https://blog.postman.com/filtering-and-sorting-apis-using-the-postman-api/"
  - type: link
    name: "Introducing an API to Access Mock Server Call Logs"
    url: "https://blog.postman.com/introducing-an-api-to-access-mock-server-call-logs/"
  - type: link
    name: "Introducing APIs to Access and Manage Server-Level Responses on a Mock Server"
    url: "https://blog.postman.com/apis-to-access-manage-server-level-responses-mock-server/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Postman API collection"
    url:  "https://www.postman.com/postman/workspace/postman-public-workspace/collection/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a?ctx=documentation"
  - type: link
    name: "Postman API definition"
    url:  "https://www.postman.com/postman/workspace/postman-public-workspace/api/72a32ca3-f06a-4e83-a933-2821a0e6616f/definition/d429098b-1789-4c62-b77b-cf02024aba53?view=documentation"
  - type: subtitle
    name: "Next steps"
  - type: link
    name: "Continuous Integration"
    url: "/docs/running-collections/using-newman-cli/continuous-integration/"
---

The [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) endpoints let you integrate Postman in your development toolchain.

You can add new collections, update collections and environments, add and run monitors, and more with the API. This lets you programmatically access data stored in your Postman account. You can also [combine the Postman API with Newman](/docs/running-collections/using-newman-cli/continuous-integration/) to integrate Postman with your CI/CD workflow.

## Getting started

You can get started with the API by [forking the collection](https://www.postman.com/postman/workspace/postman-public-workspace/collection/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a/fork?origin=sidebar) in the Postman Public Workspace. For more details, see the [Postman API documentation](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a).

You will need an [API key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key) to access the Postman API.

> The Postman API is [rate limited](/docs/developer/postman-api/postman-api-rate-limits/).

## About v9 and v10 APIs

The format for APIs created in Postman changed in Postman v10. The Postman API now supports endpoints for working with APIs created in v10.

The endpoints for working with APIs created in v9 are deprecated. You can continue to use these endpoints, but at a future time they will no longer be available. You should start using the [new v10 API endpoints](#new-v10-api-endpoints) as soon as possible.

To view the v9 and v10 endpoints, go to the [public workspace for the Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/collection/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a?ctx=documentation) and select the **API > v9** or **API > v10** folder.

### Deprecated v9 API endpoints

The following Postman API endpoints are deprecated. You can continue to use these endpoints, but at a future time they will no longer be available. You should start using the [new v10 API endpoints](#new-v10-api-endpoints) as soon as possible.

* `/apis`
* `/apis/{apiId}`
* `/apis/{apiId}/versions`
* `/apis/{apiId}/versions/{apiVersionId}`
* `/apis/{apiId}/versions/{apiVersionId}/unclassified`
* `/apis/{apiId}/versions/{apiVersionId}/contracttest`
* `/apis/{apiId}/versions/{apiVersionId}/documentation`
* `/apis/{apiId}/versions/{apiVersionId}/environment`
* `/apis/{apiId}/versions/{apiVersionId}/integrationtest`
* `/apis/{apiId}/versions/{apiVersionId}/mock`
* `/apis/{apiId}/versions/{apiVersionId}/monitor`
* `/apis/{apiId}/versions/{apiVersionId}/relations`
* `/apis/{apiId}/versions/{apiVersionId}/schemas`
* `/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}`
* `/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}/collections`
* `/apis/{apiId}/versions/{apiVersionId}/test`
* `/apis/{apiId}/versions/{apiVersionId}/testsuite`
* `/apis/{apiId}/versions/{apiVersionId}/{relationType}/{entityId}/syncWithSchema`

### New v10 API endpoints

To use the new Postman API endpoints, you must [update your APIs to the v10 format](/docs/designing-and-developing-your-api/creating-an-api/#updating-an-api). You must also pass an `Accept` header with the value `application/vnd.api.v10+json`. (Some of the new endpoints appear the same as the deprecated endpoints, but they use the new v10 behavior when you send this `Accept` header.)

* `/apis`
* `/apis/{apiId}`
* `/apis/{apiId}/schemas`
* `/apis/{apiId}/collections`
* `/apis/{apiId}/versions`
* `/apis/{apiId}/tasks/{taskId}`
* `/apis/{apiId}/schemas/{schemaId}`
* `/apis/{apiId}/versions/{versionId}`
* `/apis/{apiId}/schemas/{schemaId}/files`
* `/apis/{apiId}/collections/{collectionId}`
* `/apis/{apiId}/schemas/{schemaId}/files/{file-path}`
* `/apis/{apiId}/collections/{collectionId}/sync-with-schema-tasks`
