---
title: "Using gRPC saved examples"
updated: 2023-02-08
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Invoke your first gRPC request"
    url: "/docs/sending-requests/grpc/first-grpc-request/"
  - type: link
    name: "Specifying examples"
    url: "/docs/sending-requests/examples/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working with gRPC | The Exploratory"
    url: "https://youtu.be/RbHOs2xchGE"
---

You can save, edit, and create examples for gRPC requests. These [saved examples](/docs/sending-requests/examples/) can help API consumers understand and document what responses will look like even before the API is up and running. gRPC saved examples are basically a blank canvas where you can create responses for any use case.

## Contents

* [Saving a gRPC example](#saving-a-grpc-example)
* [Editing a gRPC saved example](#editing-a-grpc-saved-example)
* [Creating a gRPC saved example without an api call](#creating-a-grpc-saved-example-without-an-api-call)
* [Creating example-specific documentation in the context bar](#creating-example-specific-documentation-in-the-context-bar)

## Saving a gRPC example

This example will create and execute a server streaming request, then save the response as an example.

> If you are using the Postman web app, Postman recommends using the Postman Desktop Agent for the best experience. See [About the Postman Agent](/docs/getting-started/about-postman-agent/) for more information.

1. In Postman, select  **New > gRPC Request** to open a request in a new tab.

    <img src="https://assets.postman.com/postman-docs/v10/grpc-new-request.gif" alt="New gRPC request" />

1. Select **Server URL** and enter `grpc.postman-echo.com`.

1. Select the **Select a method** dropdown and select **LotsOfGreetings**.

1. Select **Generate example message**.

1. Replace the sample string data with your name (or any other string) and select **Invoke**. A single message appears in the response section and the connection status is **STREAMING**.

1. Select **End Streaming**. More messages appear in the response section, including the example message with your edited string.

  > You can't save a gRPC example while streaming is active.

1. Select **Save as Example**. The saved example opens in a new tab and you can see the saved example under the request in the sidebar.

## Editing a gRPC saved example

1. Select a saved gRPC response in the sidebar.

1. In the response section, select the message you want to edit.

1. Select the entire response and replace it with `Not found`.

1. Select `NOT_FOUND` from the status code dropdown list.

1. Select **Save**.

## Creating a gRPC saved example without an api call

1. In the sidebar, hover over a gRPC collection.

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Add request > gRPC Request**.

1. Hover over the gRPC request you created, select the more actions icon, and select **Add example**.

1. In the new example that opens, select the response section and enter the following text:

    ``` json
    {
        "Test response": "Response successful"
    }

1. Select **Save**.

## Creating example-specific documentation in the context bar

1. In the sidebar, select a gRPC saved example.

1. In the right sidebar, select the the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px">.

1. Hover over **Add example description...** and select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.

1. Enter your documentation for this example and select **Save**.
