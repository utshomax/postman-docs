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

Postman enables you to create mock servers to assist with API development and testing. A mock server simulates the behavior of a real API server by accepting requests and returning responses. The responses can include sample data similar to what your API would return in a production environment.

To view existing mock servers in your workspace, or to create a new mock server, select **Mock Servers** in the side bar.

## Contents

* [Mock servers and API development](#mock-servers-and-api-development)
* [How Postman's mock servers work](#how-postmans-mock-servers-work)
* [Next steps](#next-steps)

## Mock servers and API development

Throughout the API development lifecycle, there are times when interacting with a production-ready API isn't practical or possible. Maybe you need to develop an integration with an API that's still in development. Or maybe you want to test an API's behavior without affecting live data. That's where a mock server can help.

You can send a request to a mock server's endpoints, just like you would to your API's endpoints. Based on the request, the mock server returns a response with pre-defined example data, or even with dynamic data. This enables you to simulate interactions with your API without having to make calls to a fully-functioning API server.

Here are some more ways you can use mock servers for API development:

* View example requests and responses for different usage scenarios to understand how an API works
* Mock external systems to avoid being blocked if a dependency is unavailable
* Perform tests that can't be run on live servers due to security or data integrity reasons
* Simulate internal server errors and other 5xx responses without having to take down your API server
* Prototype an API so you can get early feedback from consumers

## How Postman's mock servers work

collections, examples, stubs, scenarios, pattern matching

With scenarios, the mock server can send different data in response to different inputs
When the mock server receives a request, it locates the scenario that most closely matches the request and then returns the response defined for that scenario
You can also set a default response
Also can simulate server-level responses (5xx)

Can be public or private, must include x-api-key if private

## Next steps
