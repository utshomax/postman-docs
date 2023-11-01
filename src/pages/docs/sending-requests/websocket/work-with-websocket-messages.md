---
title: "Work with WebSocket messages"
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

WebSocket messages are data packets sent over a WebSocket connection. WebSocket messages include information about the type and length of the message, and whether it's the final message or part of a larger set of messages. You can send, save, and view WebSocket messages in Postman. You can also add names and arguments to Socket.IO events.

## Contents

* [Send WebSocket messages](#send-websocket-messages)
* [Save WebSocket messages](#save-websocket-messages)
* [View WebSocket messages](#view-websocket-messages)
* [Add Socket.IO event names and arguments](#add-socketio-event-names-and-arguments)

## Send WebSocket messages

After making a WebSocket connection, you can use the editor pane to compose and send messages.

![WebSocket message editor](https://assets.postman.com/postman-docs/websocket-message-editor.jpg)

In the bottom left corner of the editor, you can select the format of your message: **Text**, **JSON**, **XML**, **HTML**, or **Binary**. If you select **Binary**, you can then select **Base64** or **Hexadecimal**. The editor has syntax highlighting according to the selected format. You can also select **{}** to beautify JSON, XML, or HTML messages.

When you have finished composing your message, select **Send**. The sent message will remain in the window, in case you want to change it and resend, or save it.

## Save WebSocket messages

You can save composed messages, then resend them later.

To save a message, do the following:

1. Compose a message (see [Send WebSocket messages](#send-websocket-messages)).
1. Select **Save Message**.
1. The message title ("New Message" by default) is editable. Enter a new title and press Return.

To load a saved message, do the following:

1. Open the **Saved Messages** pane next to the editor pane.
1. Select a saved message. It will be loaded into the editor pane.
1. You can then send the message, or edit it and select **Save Message** to save the changes. Select **Discard Changes** to remove them.

You can also create a new message from the **Saved Messages** pane by selecting <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> **Compose Message**.

To rename, duplicate, or delete a saved message, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and then select **Rename**, **Duplicate**, or **Delete**.

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

## Add Socket.IO event names and arguments

Sending events with a Socket.IO connection includes the ability to add event names and arguments. This enables you to listen to specific events.

For a Socket.IO connection, you can enter an event name to publish next to **Send**. If you select **Send** without entering a name, the default name `message` will be used.

If the **Acknowledgement** option is selected, the server will acknowledge that it has received the message.

<img src="https://assets.postman.com/postman-docs/socketio-event-name.jpg" alt="Socket.IO event name" width="500px">

You can also add arguments to a Socket.IO connection. Select **+ Arg** in the editor pane. This opens a sidebar with a new argument that you can use to add the argument's message. Hover over an existing argument and select **x** to delete it. The workflow to inspect each argument's message is similar.

<img src="https://assets.postman.com/postman-docs/socketio-second-arg.jpg" alt="Socket.IO arguments" width="400px">
