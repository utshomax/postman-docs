---
title: "Using a mock server"
updated: 2022-04-30
page_id: "using_a_mock_server"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"

warning: false
---

You can make calls to a mock server to simulate interacting with your API for development or testing purposes. A mock server uses endpoint stubs to replicate the paths and mimic the behavior of your API for various scenarios. Depending on how you created it, your mock server may already include endpoint stubs, and you can add more as needed.

Use Postman or another application to make calls to the mock server URL and the endpoints you defined. You can configure the mock server to customize how it responds to requests. After making calls to the mock server, view the call logs to see details about incoming requests and outgoing responses.

## Adding an endpoint stub

Add endpoint stubs to your mock server to simulate the behavior of your API. Each endpoint stub includes an operation (such as `GET`) and a path (such as `/users`). You can define one or more scenarios for each stub.

1. Select **Mock Servers** in the sidebar, and then select a mock server.
1. On the **Stubs** tab, select **+** next to **Endpoint Stubs**.
1. Select the new endpoint stub and customize it for the endpoint you want to simulate:

    * Enter a name for the endpoint stub.
    * Select an operation in the dropdown list, or leave `GET` selected.
    * Enter the path for the endpoint stub. (You can't edit the mock server URL.)
    * Select the checkbox to enable body matching. Learn more about body matching.
    * Select the 5xx **Status Code** you want the mock server to return.
    * Enter any **Params** or **Headers** you want the mock server to return when this endpoint is called. These parameters and headers will be pre-filled for any scenarios you create for this endpoint stub.

1. Select **Save** to save your changes.

### Defining scenarios

Scenarios (also called examples in Postman) represent different use cases for an endpoint stub. For example, you might define two scenarios for the same stub, each with a different response status code.

You can define a unique response for each scenario, including body data, headers, and status code. The mock server will return a response based on the scenario that best matches the request. You can also set a default response for an endpoint.

### Working with endpoint stubs

After adding a server stub, you can take the following actions:
