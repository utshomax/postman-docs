---
title: "View Websocket messages"
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

## View WebSocket messages

The **Messages** pane displays a list of messages for the WebSocket connection, including incoming, outgoing, and network messages.

At the top of the message pane is a connection details badge. It shows if the connection is connecting, connected, disconnecting, or disconnected. Hover over the badge to show details on the connection. Select the arrow next to the badge to show or hide messages.

![WebSocket messages](https://assets.postman.com/postman-docs/websocket-messages.jpg)

The **Messages** pane has the following controls:

* Search control - Enter a search term to display messages containing the term. Select <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> to end the search.
* Message type list - Select if you want to view all messages, or incoming or outgoing messages.
* Trash - Select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> to clear all messages.

The following are displayed for each message:

* If you hover over a message, a checkbox is displayed. Select the checkboxes for two messages, and the time difference between the messages will be displayed. Select **Deselect** to remove the time display.
  ![WebSocket time difference](https://assets.postman.com/postman-docs/websocket-time-difference.gif)
* Select the arrow next to a message to expand or collapse it.
* The time is displayed as your local time.
* If you hover over the time of a raw Socket.IO message, an information icon is displayed. Hover over it for the time, MIME type, and size of the message.
* If you hover over the time, a copy icon is also shown. Select this to copy the message to your clipboard.

In an expanded message:

* Select **Text**, **HTML**, **JSON**, or **XML** to change the formatting of the message.
* Select **Wrap Line** to add or remove line wraps.
* Select **Show Hexdump** or **Show Message** to show the message in hex or text.
* Use the search control to search the body of the message.
* Hover over a line number and select the arrow to expand or collapse message blocks.
![WebSocket message body](https://assets.postman.com/postman-docs/websocket-message-body.jpg)
