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

You can make calls to a mock server to simulate interactions with your API for development or testing purposes. A mock server uses endpoint stubs to replicate the paths and mimic the behavior of your API for various scenarios. Depending on how you created it, your mock server may already include endpoint stubs, and you can add more as needed.

To use a mock server, use Postman or another application to make calls to the mock server URL and the endpoints you defined. You can configure the mock server to customize how it responds to requests. After making calls to the mock server, view the call logs to see details about incoming requests and outgoing responses.

## Adding an endpoint stub

Add endpoint stubs to your mock server to simulate the behavior of your API. Each endpoint stub includes an operation (such as `GET`) and a path (such as `/users`). You can define one or more scenarios for each stub.

### Defining scenarios

Each scenario represents a different way of using an endpoint. You can define a unique response for each scenario. The mock server will return a response based on the scenario that best matches the request. You can also set a scenario as the default response for a path.

### Working with endpoint stubs

After adding a server stub, you can take the following actions:
