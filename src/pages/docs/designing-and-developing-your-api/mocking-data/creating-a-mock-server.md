---
title: "Creating a mock server"
updated: 2022-04-30
page_id: "creating_a_mock_server"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Mock servers overview"
    url: "/docs/designing-and-developing-your-api/mocking-data/mock-servers-overview/"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"

warning: false
---

A mock server simulates the behavior of a real API by returning predefined data in response to different scenarios. Create a mock server to test or integrate with an API before it's production ready or without using production data.

Postman provides several ways to create a mock server. Create a mock server from scratch to define all the endpoints and scenarios yourself. Or use a template to create a fully configured mock server and start using it right away. You can also create a mock server from a collection, an API, or the Postman History.

> You must sign into a Postman account to create a mock server.

## Contents

* [Creating a mock server from scratch](#creating-a-mock-server-from-scratch)
* [Creating a mock server using a template](#creating-a-mock-server-using-a-template)
* [Creating a mock server using a collection](#creating-a-mock-server-using-a-collection)
* [Creating a mock server from an API](#creating-a-mock-server-from-an-api)
* [Creating a mock server from history](#creating-a-mock-server-from-history)
* [Renaming or deleting a mock server](#renaming-or-deleting-a-mock-server)
* [Next steps](#next-steps)

## Creating a mock server from scratch

Select the **Create from scratch** option to create an empty mock server. You can define endpoint stubs and scenarios as needed to simulate or test your API.

1. Select **Mock Servers** in the sidebar and select **+**.
1. Select **Create from scratch** and select **Create Mock Server**.
1. Type a new name for the mock server and press **Enter**. (If the name isn't highlighted, hover over the name and select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.)

> When you create a mock server from scratch, Postman also creates an empty [collection](/docs/sending-requests/intro-to-collections/) named **New Collection** for the mock server. Postman also creates an empty [environment](/docs/sending-requests/managing-environments/) named **New Mock Server**.

<img alt="Creating a mock server from scratch" src="https://assets.postman.com/postman-docs/mock-create-from-scratch-v9-19.jpg" width="580px"/>

## Creating a mock server using a template

Select the **Use a template** option to create a mock server based on a predefined template. You can choose from a variety of mock server templates designed for simulating server responses, testing a sample API, and more. Your new mock server is fully configured, so you can begin using it right away or customize it as needed.

1. Select **Mock Servers** in the sidebar and select **+**.
1. Select **Use a template** and select the template you want to use.
1. Select **Create Mock Server**.
1. Type a new name for the mock server and press **Enter**. (If the name isn't highlighted, hover over the name and select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.)

> When you create a mock server from a template, Postman creates a [collection](/docs/sending-requests/intro-to-collections/) with predefined requests for the mock server. Postman also creates an [environment](/docs/sending-requests/managing-environments/) for the mock server.

<img alt="Creating a mock server from a template" src="https://assets.postman.com/postman-docs/mock-create-from-template-v9-19.jpg" width="580px"/>

## Creating a mock server using a collection

Select the **Use a collection** option to create a mock server based on an existing collection in your current workspace. You can use the mock server to simulate or test each of the endpoints in your collection.

1. Select **Mock Servers** in the sidebar and select **+**.
1. Select **Use a collection** and select the collection you want to use for the mock server.
1. (Optional) Select the checkbox to save the mock server URL as an [environment variable](/docs/sending-requests/managing-environments/#editing-environment-variables). Postman will create an [environment](/docs/sending-requests/managing-environments/) named **New Mock Server** with a `url` variable that's set to the URL of the new mock server.
1. Select **Create Mock Server**.
1. Type a new name for the mock server and press **Enter**. (If the name isn't highlighted, hover over the name and select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.)

<img alt="Creating a mock server from a collection" src="https://assets.postman.com/postman-docs/mock-create-from-collection-v9-19.jpg" width="580px"/>

## Creating a mock server from an API

You can create a mock server from the **Overview** tab in the API Builder. Postman can generate a collection for your mock server based on your API schema, so you can begin simulating your API right away. You can also use an existing collection or create a new collection for your mock server.

1. Select **APIs** in the sidebar, and then select an API and version.
1. Next to **Mock Servers**, select **+** and select **Create new mock server**.
1. Select an option for creating your mock server:

    * **Generate from API schema** - Postman will generate a new collection for your mock server based on your API schema. Enter a collection name. You can configure how Postman will generate the collection by selecting **Show advanced settings**. When you're ready, select **Generate Collection and Continue**.
    * **Use an existing collection** - Select the collection you want to use for the mock server and select **Select Collection and Continue**.
    * **Create a new collection** - Enter the requests your collection will contain and select **Create Collection and Continue**.

1. Enter a name for the mock server. You can also select various configuration options. Learn more about [configuring a mock server](/docs/designing-and-developing-your-api/mocking-data/using-a-mock-server/#configuring-a-mock-server).
1. When you're ready, select **Create Mock Server**.

<img alt="Creating a mock server from an API" src="https://assets.postman.com/postman-docs/mock-create-from-api-v9-19.jpg" width="530px"/>

## Creating a mock server from history

You can create a mock server based on one or more requests in your Postman history. Postman automatically adds the requests to a new collection for the mock server.

1. Select **History** in the sidebar.
1. Hover over a request, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">, and select **Mock Request**.

    > To base your mock server on all the requests from a single day, hover over a date heading in the history. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Mock Requests**.

1. Enter a name for the mock server. If you want, you can also select various configuration options. Learn more about [configuring a mock server](/docs/designing-and-developing-your-api/mocking-data/using-a-mock-server/#configuring-a-mock-server).
1. When you're ready, select **Create Mock Server**.

<img alt="Creating a mock server from history" src="https://assets.postman.com/postman-docs/mock-create-from-history-v9-19.jpg" width="507px"/>

## Renaming or deleting a mock server

After creating a mock server, you can take the following actions:

* To rename a mock server, select **Mock Servers** in the sidebar and select a mock server. Hover over the name and select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.
* To delete a mock server, select **Mock Servers** in the sidebar and select a mock server. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Delete**.

## Next steps

Start [using your new mock server](/docs/designing-and-developing-your-api/mocking-data/using-a-mock-server/), or configure your mock server with new [endpoints](/docs/designing-and-developing-your-api/mocking-data/mocking-endpoints/) and [server responses](/docs/designing-and-developing-your-api/mocking-data/mocking-server-responses/).
