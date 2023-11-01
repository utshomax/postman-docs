---
title: "Listen to Socket.IO events"
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

### Listen to Socket.IO events

In Socket.IO, you have the ability to listen to specific events. The **Messages** pane will display the received events for which you've added listeners. Events will be color-coded by event to make them easier to find.

The **Listeners** pane shows listener events. To listen to a new event, enter the name of an event and select **+** to add it. Select the toggle next to an event to turn listening on or off for that event. If you hover over the toggle, you can delete the event listener.

![Socket.IO message body](https://assets.postman.com/postman-docs/socketio-message-body.jpg)

Messages will indicate if they have multiple arguments. When you expand the message, it will have tabs for each argument.

![WebSocket message body](https://assets.postman.com/postman-docs/socketio-message-with-args.jpg)

Prior to making a connection, you can also add events in the **Events** tab. This enables you to add a description for each event and select if the event will listen when the connection is made.
