---
title: "Creating a mock server"
updated: 2022-04-30
page_id: "creating_a_mock_server"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Mock Servers | The Exploratory"
    url: "https://youtu.be/n_7UUghLpco"
  - type: link
    name: "Dynamic Mock Behavior | Postman Level Up"
    url: "https://youtu.be/av7SZo9sZAE"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Using Mock Servers throughout the API Lifecycle"
    url:  "https://blog.postman.com/using-mock-servers-throughout-the-api-lifecycle/"
  - type: link
    name: "Introducing Postman Mock Call Logs"
    url:  "https://blog.postman.com/introducing-postman-mock-call-logs/"

warning: false
---

A mock server simulates the behavior of a real API by returning predefined data in response to different scenarios. Create a new mock server to test or integrate with an API before it's production ready or without using production data.

Postman provides several ways to create a mock server. Create a mock server from scratch to define all the endpoints and scenarios yourself. Or use a template to create a fully configured mock server and start using it right away. You can also create a mock server from a collection, an API, or the Postman History.

> You must sign into a Postman account to create a mock server.

## Contents

* [Creating a mock server from scratch](#creating-a-mock-server-from-scratch)
* [Creating a mock server using a template](#creating-a-mock-server-using-a-template)
* [Creating a mock server using a collection](#creating-a-mock-server-using-a-collection)
* [Creating a mock server from an API](#creating-a-mock-server-from-an-api)
* [Creating a mock server from History](#creating-a-mock-server-from-history)
* [Renaming or deleting a mock server](#renaming-or-deleting-a-mock-server)
* [Next steps](#next-steps)

## Creating a mock server from scratch

Select the **Create from scratch** option to create an empty mock server. You can define endpoint stubs and scenarios as needed to simulate or test your API.

1. Select **Mock Servers** in the sidebar and select **+**.
1. Select **Create from scratch** and select **Create Mock Server**.

> When you create a mock server from scratch, Postman also creates a new, empty collection for the mock server.

## Creating a mock server using a template

Select the **Use a template** option to create a mock server based on a predefined template. You can select from a variety of mock server templates designed for UI testing, simulating server responses, and more. Your new mock server is fully configured, so you can begin using it right away or customize it as needed.

1. Select **Mock Servers** in the sidebar and select **+**.
1. Select **Use a template** and select the template you want to use.
1. Select **Create Mock Server**.

> When you create a mock server from a template, Postman also creates a new collection with predefined requests for the mock server. Depending on the template, Postman may also created an environment for the mock server.

## Creating a mock server using a collection

Select the **Use a collection** option to create a mock server based on an existing collection in your current workspace. You can use the mock server to simulate or test each of the endpoints in your collection.

1. Select **Mock Servers** in the sidebar and select **+**.
1. Select **Use a collection** and select the collection you want to use.
1. (Optional) Select the checkbox to save the mock server URL as an environment variable. Postman will create a new environment with a **url** variable that's set to the URL of the new mock server.
1. Select **Create Mock Server**.

## Creating a mock server from an API

You can create a mock server from the **Overview** tab in the API builder. Postman can generate a collection for your mock server based on your API schema. You can also use an existing collection or create a new collection for your mock server.

1. Select **APIs** in the sidebar, and then select an API and version.
1. Next to **Mock Servers**, select **+** and select **Create new mock server**.
1. Select an option for creating your mock server:

    * **Generate from API schema**: Postman generates a new collection for your mock server based on your API schema. Enter a collection name and, if you want, configure how Postman will generate the collection by selecting **Show advanced settings**. When you're ready, select **Generate Collection and Continue**.
    * **Use an existing collection**: Select a collection in the dropdown list and select **Select Collection and Continue**.
    * **Create a new collection**: Enter the requests your collection will contain and select **Create Collection and Continue**.

1. Enter a name for the mock server. If you want, you can also select various configuration options. Learn more about configuring a mock server.
1. When you're ready, select **Create Mock Server**.

## Creating a mock server from history

You can create a mock server based on one or more requests in your Postman history. Postman automatically adds the requests to a new collection for the mock server.

1. Select **History** in the sidebar.
1. Hover over a request, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">, and then select **Mock Request**.

    > To base your mock server on all the requests for a single day, hover over a date heading in the history. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">, and then select **Mock Requests**.

1. Enter a name for the mock server. If you want, you can also select various configuration options. Learn more about configuring a mock server.
1. When you're ready, select **Create Mock Server**.

<img alt="Mock history" src="https://assets.postman.com/postman-docs/mock-history-v8.jpg" width="350px"/>

## Renaming or deleting a mock server

After creating a mock server, you can take the following actions:

* To rename a mock server, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">. Select **Rename** and enter a new name.
* To delete a mock server, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Delete**.

## Next steps

Start using your new mock server, or learn about configuring your mock server with new endpoints, scenarios, and more.
