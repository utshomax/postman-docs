---
title: "Postman API overview"
updated: 2022-11-30
search_keyword: "postman-api"
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

The format for APIs created in Postman changed in Postman v10. The Postman API now supports endpoints for working with APIs created in v10. To use these endpoints, you must pass an `Accept` header with the value `application/vnd.api.v10+json`. Learn more about [using the Postman v10 endpoints for APIs](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-daed38dc-2fd4-4373-a73b-cbdbb72f5819).

The endpoints for working with APIs created in v9 are deprecated. You can continue to use these endpoints, but at a future time they will no longer be available. You should [update your APIs to the v10 format](/docs/designing-and-developing-your-api/creating-an-api/#updating-an-api) as soon as possible. After updating, you can use the v10 endpoints to work with your API.
