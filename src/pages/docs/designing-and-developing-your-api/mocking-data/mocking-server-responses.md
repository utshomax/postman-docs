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

Server stubs enable you to simulate internal server errors and other 5xx responses on your mock server. A 5xx response status code indicates the server cannot complete the request (for example, if your API is unavailable). Instead of adding a server error scenario to each endpoint stub in your mock server, you can create one or more server stubs.

Create a server stub to simulate a server error scenario with the 5xx response status code you specify. You can set one server response to be active at a time. Your mock server will return the active server response for all requests. This enables you to test how other applications react when receiving a 5xx response from your API.


