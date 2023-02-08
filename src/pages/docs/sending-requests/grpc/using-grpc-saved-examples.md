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

You can save, edit, and create example responses for gRPC requests. These [saved examples](/docs/sending-requests/examples/) can help consumers understand, document, and mock what responses will look like even before the API is up and running. gRPC saved examples are basically a blank canvas where you can create responses for any use case.

## Contents

* [Saving an example gRPC response](#saving-an-example-grpc-response)
* [Editing a saved gRPC response](#editing-a-saved-grpc-response)
    * Editing a unary response
    * Editing a streaming response
* Creating an example gRPC response without an api call

## Saving an example gRPC response

This example will create and execute a server streaming request, then save the response as an example.

> If you are using the Postman web app, Postman recommends using the Postman Desktop Agent for the best experience. See [About the Postman Agent](/docs/getting-started/about-postman-agent/) for more information.

1. In Postman, select  **New > gRPC Request** to open a request in a new tab.

    <img src="https://assets.postman.com/postman-docs/v10/grpc-new-request.gif" alt="New gRPC request" />

1. Select **Server URL** and enter `grpc.postman-echo.com`.

1. Select the **Select a method** dropdown and select **LotsOfGreetings**.

1. Select **Generate example message**. This creates a sample message using the service definition itself so that you don’t have to set the correct fields and data types.

1. Replace the sample string data with your name (or any other string) and select **Invoke**. A single message appears in the response section and the connection status is **STREAMING**.

1. Select **End Streaming**. More messages appear in the response section, including the example message with your edited string.

1. Select **Save as Example**. The saved example opens in a new tab.

## Editing a saved gRPC response
