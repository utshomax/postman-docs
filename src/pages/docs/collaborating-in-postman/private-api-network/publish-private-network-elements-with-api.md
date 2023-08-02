---
title: "Publishing Private API Network elements with the Postman API"
updated: 2023-08-02
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Private API Network | The Exploratory"
    url: "https://youtu.be/1SINcytmKsc"
  - type: link
    name: "Private API Network"
    url: "https://youtu.be/cbPT4dMFIDw"
  - type: link
    name: "Discovering APIs | Postman Enterprise"
    url: "https://youtu.be/e1v647ayIBg"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "How to Make Your APIs Available to More Consumers"
    url: "https://blog.postman.com/how-to-make-your-apis-available-to-more-consumers/"
  - type: link
    name: "Introducing an API to manage your Private API Network with more automation"
    url: "https://blog.postman.com/introducing-api-to-manage-your-private-api-network-with-automation/"
  - type: link
    name: "Simplifying API distribution and evaluation with the Private API Network"
    url: "https://blog.postman.com/simplifying-api-distribution-and-evaluation-with-the-private-api-network/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "ChargeHub plans to improve internal discovery with a Private API Network"
    url: "https://www.postman.com/case-studies/chargehub/"

---

> **[The Private API Network is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

You can use the Postman API to programmatically manage your Private API Network’s resources. With it, you can easily automate the publication of your team's Private API Network.

## Contents

* [Getting started](#getting-started)
* [Create a Private API Network folder](#create-a-private-api-network-folder)
  * [Add a collection to a folder](#add-a-collection-to-a-folder)
  * [Add an API to a folder](#add-an-api-to-a-folder)
  * [Add a workspace to a folder](#add-a-workspace-to-a-folder)

## Getting started

You can get started by [forking the Postman API collection](https://www.postman.com/postman/workspace/postman-public-workspace/collection/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a/fork?origin=sidebar) in the Postman Public Workspace. This collection contains all the available [Private API Network endpoints](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a?entity=folder-b7c02959-88ca-4e2f-9b68-99538eed4533&branch=&version=).

You will also need an API key to use the Postman API. For information, see [Generate a Postman API key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key).

> Access rate limits for your Postman API key depend on your Postman plan. For more information, see [Postman API rate limits](/docs/developer/postman-api/postman-api-rate-limits/).

## Create a Private API Network folder

This HTTP request [creates a folder](https://www.postman.com/postman/workspace/postman-public-workspace/example/12959542-22a2c7a4-aa34-4501-9eca-d22ea620f07f) in your Private API Network. A folder can contain multiple elements, such as [workspaces](#add-a-workspace-to-a-folder), [collections](#add-a-collection-to-a-folder), or [APIs](#add-an-api-to-a-folder).

In your request, use an `{{apiKey}}` environment variable so you can easily reuse your API key:

```http
POST /network/private HTTP/1.1
Host: api.getpostman.com
Content-Type: application/json
X-API-Key: {{api-key}}
Content-Length: 124

{
    "folder": {
        "name": "Billing",
        "description": "The Billing API.",
        "parentFolderId": 12345
    }
}
```

> The `description` field is required for Private API Network folders.

The request’s response will look similar to the following:

```json
{
    "id": 1,
    "parentFolderId": 0,
    "updatedAt": "2022-12-07T18:00:39.000Z",
    "updatedBy": 12345678,
    "createdBy": 12345678,
    "createdAt": "2022-12-07T18:00:39.000Z",
    "name": "Billing",
    "description": "The Billing API.",
    "type": "folder"
}
```

Save the value returned in the `id` field (for example, save it as a collection variable). You can then use it as the `parentFolderId` value for new folders or elements.

Your Private API Network folder's elements (collections, APIs, and workspaces) are references to the original resource. If that source element changes, then the Private API Network automatically reflects these changes.

### Add a collection to a folder

Use this HTTP request to [add a collection](https://www.postman.com/postman/workspace/postman-public-workspace/example/12959542-c3766325-01d8-4f71-963f-a95892451acc) to your Private API Network folder. The request uses the `{{folderId}}` variable, which references the `id` value returned when you created the Private API Network folder (for example, `1`):

```http
POST /network/private HTTP/1.1
Host: api.getpostman.com
Content-Type: application/json
x-api-key: {{apiKey}}
Content-Length: 122

{
    "collection": {
        "id": "12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2",
        "parentFolderId": {{folderId}}
    }
}
```

You don’t need to provide a `name` or `summary` value because this data is retrieved from the collection’s data.

The response to this request will look similar to the following:

```json
{
    "addedAt": "2022-12-07T18:22:15.000Z",
    "addedBy": 12345678,
    "createdBy": 12345678,
    "createdAt": "2022-12-07T18:22:15.000Z",
    "updatedBy": 12345678,
    "updatedAt": "2022-12-07T18:22:15.000Z",
    "type": "collection",
    "id": "12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2",
    "name": "Billing API Collection",
    "summary": "The Billing API collection.",
    "description": null,
    "href": "https://api.getpostman.com/collections/12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2",
    "parentFolderId": 1
}
```

### Add an API to a folder

Before you add an API to your Private API Network folder, first make sure it's published. Private API Network APIs must have a published version associated with it.

Then, use the following HTTP request to [add an API](https://www.postman.com/postman/workspace/postman-public-workspace/example/12959542-66c2f1f2-0532-4c65-8508-2392935b82ce) to the Private API Network folder:

```html
POST /network/private HTTP/1.1
Host: api.getpostman-beta.com
Content-Type: application/json
x-api-key: {{apiKey}}
Content-Length: 107

{
    "api": {
        "id": "5360b75f-447e-467c-9299-12fd6c92450d",
        "parentFolderId": {{folderId}}
    }
}
```

You don’t need to provide a `name` or `summary` value because this data is retrieved from the API's data.

The response to this request will be similar to this:

```json
{
    "addedAt": "2022-06-09T14:48:45.000Z",
    "addedBy": 12345678,
    "createdBy": 12345678,
    "createdAt": "2021-10-11T09:39:33.000Z",
    "updatedBy": 12345678,
    "updatedAt": "2022-12-07T17:54:33.000Z",
    "type": "api",
    "id": "5360b75f-447e-467c-9299-12fd6c92450d",
    "name": "Billing API",
    "summary": "The payments and account services API.",
    "description": null,
    "href": "https://api.getpostman.com/apis/5360b75f-447e-467c-9299-12fd6c92450d",
    "parentFolderId": 1
}
```

### Add a workspace to a folder

Use this HTTP request to [add a workspace](https://www.postman.com/postman/workspace/postman-public-workspace/example/12959542-afbc11ef-ecc1-4245-ad3f-988fccd47936) to your Private API Network folder:

```html
POST /network/private HTTP/1.1
Host: api.getpostman.com
Content-Type: application/json
x-api-key: {{apiKey}}
Content-Length: 110

{
    "workspace": {
        "id": "1f0df51a-8658-4ee8-a2a1-d2567dfa09a9",
        "parentFolderId": {{folderId}}
    }
}
```

You don’t need to provide a `name` or `summary` value because this data is retrieved from the workspace's data.

The response to this request will be similar to this:

```json
{
    "addedAt": "2022-12-07T17:59:23.000Z",
    "addedBy": 12345678,
    "createdBy": 12345678,
    "createdAt": "2022-12-07T17:59:23.000Z",
    "updatedBy": 12345678,
    "updatedAt": "2022-12-07T17:59:23.000Z",
    "type": "workspace",
    "id": "1f0df51a-8658-4ee8-a2a1-d2567dfa09a9",
    "name": "Billing Team Workspace",
    "summary": "The Billing team's workspace.",
    "description": null,
    "href": "https://api.getpostman.com/workspaces/1f0df51a-8658-4ee8-a2a1-d2567dfa09a9",
    "parentFolderId": 1
}
```
