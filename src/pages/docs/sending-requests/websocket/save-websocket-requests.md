---
title: "Save WebSocket requests"
updated: 2023-11-01
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "WebSocket Requests | Postman Level Up"
    url: "https://youtu.be/H-7EZVj9D-k"
  - type: link
    name: "Set Up a WebSockets Server in Node.js"
    url: "https://youtu.be/e__oWJ4wNtw"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Save and Document WebSocket Requests in Collections"
    url: "https://blog.postman.com/save-and-document-websocket-requests-in-collections/"
  - type: link
    name: "Powering home automation with WebSocket APIs"
    url: "https://blog.postman.com/powering-home-automation-with-websocket-apis/"
  - type: link
    name: "Postman Supports Socket.IO"
    url: "https://blog.postman.com/postman-now-supports-socket-io/"
---

## Save WebSocket requests

You can save your WebSocket requests into a collection. This enables you to reuse requests, share them with other team members, and add documentation to the collection of requests.

To save a request, do the following:

1. Select **Save** in the request tab.
1. In **Save request**, under **Save to**, select a collection, or select **Create collection**. (Note that there are limitations to WebSocket requests in collections. Keep reading for more information.)
1. If you are creating a new collection, enter a name and select **Create**.
1. Select **Save**.

Postman will display your collection and saved request in **Collections** in the sidebar:

<img alt="Collection sidebar" src="https://assets.postman.com/postman-docs/websocket-collection-v2.jpg" width="400px"/>

Because WebSocket requests have different features than HTTP requests, when they're added to a collection, it causes the collection to be in a beta state with certain limitations.

When in this state, a collection can contain WebSocket or gRPC requests. It can't contain HTTP requests. Some features related to collections aren't supported, such as collaboration, version control, or scripting.
