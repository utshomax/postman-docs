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

Postman enables you to create mock servers to assist with API development and testing. A mock server simulates the behavior of a real API server by accepting requests and returning responses. The responses can include example data that's similar to what your API would return in a production environment.

To view existing mock servers in your workspace, or to create a new mock server, select **Mock Servers** in the side bar.

## Contents

* [Using a mock server for API development](#using-a-mock-server-for-api-development)
* [How Postman's mock servers work](#how-postmans-mock-servers-work)
* [Next steps](#next-steps)

## Using a mock server for API development

Mock servers can help you throughout the API development lifecycle.

A mock server can help developers and tests to understand how an API works by viewing how responses are defined for different usage scenarios. You can use the mock server to integrate with an API that's not yet available in production, or to test an API without using production data.

use for prototyping, try out the API as you design it
run tests without having to make calls against a live system, to verify requests and responses, and find errors or dependencies
run tests that are hard to run on real servers due to security reasons or without using real data, allows you to send multiple requests
front end devs can use to understand how backend responds to requests
enables consumers to work with your API before it's production-ready, can get feedback sooner

## How Postman's mock servers work

collections, examples, stubs, scenarios, pattern matching

With scenarios, the mock server can send different data in response to different inputs
When the mock server receives a request, it locates the scenario that most closely matches the request and then returns the response defined for that scenario
You can also set a default response
Also can simulate server-level responses (5xx)

Can be public or private, must include x-api-key if private

## Next steps
