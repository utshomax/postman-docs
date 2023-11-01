---
title: "Add Socket.io event names and arguments"
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

## Add Socket.IO event names and arguments

Sending events with a Socket.IO connection includes the ability to add event names and arguments. This enables you to listen to specific events.

For a Socket.IO connection, you can enter an event name to publish next to **Send**. If you select **Send** without entering a name, the default name `message` will be used.

If the **Acknowledgement** option is selected, the server will acknowledge that it has received the message.

<img src="https://assets.postman.com/postman-docs/socketio-event-name.jpg" alt="Socket.IO event name" width="500px">

You can also add arguments to a Socket.IO connection. Select **+ Arg** in the editor pane. This opens a sidebar with a new argument that you can use to add the argument's message. Hover over an existing argument and select **x** to delete it. The workflow to inspect each argument's message is similar.

<img src="https://assets.postman.com/postman-docs/socketio-second-arg.jpg" alt="Socket.IO arguments" width="400px">
