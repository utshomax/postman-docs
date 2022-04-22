---
title: "Mocking server responses"
updated: 2022-04-30
page_id: "mocking_server_responses"
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

Server stubs enable you to simulate server down and other 5xx responses on your mock server. Instead of adding a server level example to each endpoint and path in your API, you can define one or more server stubs.

Each server stub simulates the 5xx error you specify, and you can set one server response to be active at a time. Your mock server will return the active server response for all requests.

Users can define mock responses(5xx) at the server level instead of adding server-level examples on each path.

Create server stubs to simulate a server down scenario. All your requests exposed on this Mock Server will start returning the active server response.
