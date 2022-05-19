---
title: "Mock servers overview"
updated: 2022-04-30
page_id: "mock_servers_overview"
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

Postman enables you to create mock servers to assist with API development and testing. A mock server simulates the behavior of a real API server by accepting requests and returning responses. The responses can include example data similar to what your API would return in a production environment.

To view existing mock servers in your workspace, or to create a new mock server, select **Mock Servers** in the side bar.

## Contents

* [Mock servers and API development](#mock-servers-and-api-development)
* [How Postman's mock servers work](#how-postmans-mock-servers-work)
* [Putting it all together](#putting-it-all-together)
* [Next steps](#next-steps)

## Mock servers and API development

Throughout the API development lifecycle, there are times when interacting with a production-ready API isn't practical or possible. Maybe you need to develop an integration with an API that's still in development. Or maybe you want to test an API's behavior without affecting live data. That's where a mock server can help.

You can send a request to a mock server's endpoints, just like you would to your API. Based on the request, the mock server returns a response with pre-defined example data, or even with dynamic data. This enables you to simulate interactions with your API without having to make calls to a fully functioning API server.

Here are some more ways you can use mock servers for API development:

* View example requests and responses for different usage scenarios to understand how an API works.
* Mock external systems to avoid being blocked if a dependency is unavailable.
* Perform tests that can't be run on live servers due to security or data integrity reasons.
* Simulate internal server errors and other 5xx responses without having to take down your API server.
* Prototype an API so you can get feedback from consumers.

## How Postman's mock servers work

In Postman, you can select **Mock Servers** in the sidebar to create a new mock server, add endpoints, and define example response data. At the same time, Postman does some work behind the scenes to keep everything organized.

Here are some important concepts to keep in mind as you create and use mock servers in Postman:

* **Collections** - Postman uses a [collection](/docs/sending-requests/intro-to-collections/) to store all the endpoints for your mock server. When you create a mock server, you can choose to create a new collection or use an existing collection. You can also generate a collection from your API schema to begin mocking your API right away.

* **Endpoint stubs** - Add an [endpoint stub](/docs/designing-and-developing-your-api/mocking-data/mocking-endpoints/) to your mock server to simulate an API endpoint, such as `GET /users`. Each endpoint stub corresponds to a request in the mock server's collection .

* **Scenarios** - [Scenarios](/docs/designing-and-developing-your-api/mocking-data/mocking-endpoints/#defining-scenarios) represent different use cases for an endpoint. With scenarios, the mock server can send different data in response to different inputs. For example, you might have two scenarios for the `GET /users` endpoint stub, each with different query parameters and response bodies.

* **Examples** - Postman users [examples](/docs/sending-requests/examples/) to store the request and response information for each scenario. When you add a scenario to an endpoint stub, Postman adds an example to the corresponding request in the mock server's collection.

* **Server stubs** - You can add server stubs to simulate internal server errors and other 5xx responses on your mock server.

## Putting it all together

Endpoint stubs, scenarios, and collections all play a part in making your mock server work. Here's what happens when you send a request to the mock server:

1. Each endpoint defined for the mock server corresponds to a request in the mock server's collection. Similarly, each scenario corresponds to an example saved under a request in the collection.
1. When the mock server receives a request, it uses a [matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/) to locate the saved example that best matches the request's method, path, headers, and (optionally) body.
1. The mock server returns the response data defined in the saved example.

> Mock servers are public by default, but you can choose to make a mock server private. Learn more about [controlling access to mock servers](/docs/designing-and-developing-your-api/mocking-data/using-a-mock-server/#configuring-a-mock-server).

## Next steps

To begin mocking your API, [create a new mock server](/docs/designing-and-developing-your-api/mocking-data/creating-a-mock-server/) from scratch, from an existing collection, or from your API schema. [Add endpoints and scenarios](/docs/designing-and-developing-your-api/mocking-data/mocking-endpoints/) for various use cases, and then [use your mock server](/docs/designing-and-developing-your-api/mocking-data/using-a-mock-server/) to simulate making calls to your API. You can also [simulate server errors](/docs/designing-and-developing-your-api/mocking-data/mocking-server-responses/) and other 5xx status response codes.
