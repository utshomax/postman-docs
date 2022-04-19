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
  - type: section
    name: "Next Steps"
  - type: link
    name: "Test scripts"
    url: "/docs/writing-scripts/test-scripts/"

warning: false
---

A mock server simulates the behavior of a real API by returning predefined data in response to different scenarios. Create a new mock server to develop or test against an API before it's production ready or without using production data.

Postman provides several ways to create a mock server. Create a mock server from scratch to define all the endpoints and scenarios yourself, or use a template to create a fully configured mock server and start using it right away. You can also create a mock server from a collection, an API, or the Postman History.

## Contents

* [Creating a mock server from scratch](#creating-a-mock-server-from-scratch)
* [Creating a mock server using a template](#creating-a-mock-server-using-a-template)
* [Creating a mock server using a collection](#creating-a-mock-server-using-a-collection)
* [Creating a mock server from an API](#creating-a-mock-server-from-an-api)
* [Creating a mock server from the History](#creating-a-mock-server-from-the-history)
* [Next steps](#next-steps)

## Creating a mock server from scratch

Select the **Create from scratch** option to create an empty mock server. You can then define endpoint stubs and scenarios as needed to simulate or test your API.

1. Select **Mock Servers** in the sidebar and select **+**.
1. Select **Create from scratch** and select **Create Mock Server**.

> When you create a mock server from scratch, Postman also creates a new, empty collection for the mock server.

## Creating a mock server using a template

Select the **Use a template** option to create a mock server based on a predefined template. You can select from a variety of mock server templates designed for UI testing, simulating server responses, and more. Your new mock server is fully configured, so you can begin using it right away or customize it as needed.

1. Select **Mock Servers** in the sidebar and select **+**.
1. Select **Use a template** and select the template you want to use.
1. Select **Create Mock Server**.

> When you create a mock server from a template, Postman also creates a new, predefined collection for the mock server.

## Creating a mock server using a collection

Select the **Use a collection** option to create a mock server based on an existing collection. You can then use the mock server to simulate or test each of the endpoints in your collection.

1. Select **Mock Servers** in the sidebar and select **+**.
1. Select **Use a collection** and select the collection you want to use.
1. (Optional) Select the checkbox to save the mock server URL as an environment variable. Postman will create a new environment with a **url** variable that is set to the URL of the new mock server.
1. Select **Create Mock Server**.

## Creating a mock server from an API

## Creating a mock server from the History

## Next steps
