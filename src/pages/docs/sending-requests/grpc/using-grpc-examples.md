---
title: "Using gRPC examples"
updated: 2023-02-09
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Invoke your first gRPC request"
    url: "/docs/sending-requests/grpc/first-grpc-request/"
  - type: link
    name: "Specifying examples"
    url: "/docs/sending-requests/examples/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working with gRPC | The Exploratory"
    url: "https://youtu.be/RbHOs2xchGE"
---
<!-- TODO: Add blog post link to front matter -->
You can save, edit, and share gRPC request-response pairs as [examples](/docs/sending-requests/examples/). You can even create gRPC examples from scratch.

APIs can be complex, and so can the guidelines for using them. Examples help consumers understand APIs by capturing the request sent from the client and the response received from the server in a single visual snapshot. You can combine these snapshots in a request and store the request in a collection to illustrate how the API functions under different scenarios. Examples help API producers tell the world beautifully what their API is about.

## Contents

* [Saving a gRPC example](#saving-a-grpc-example)
* [Editing a gRPC example](#editing-a-grpc-example)
* [Creating a gRPC example without an API call](#creating-a-grpc-example-without-an-api-call)
* [Creating example-specific documentation](#creating-example-specific-documentation)

## Saving a gRPC example

This example creates and executes a client streaming request, then saves the response as a gRPC example.

> If you are using the Postman web app, Postman recommends using the Postman Desktop Agent for the best experience. See [About the Postman Agent](/docs/getting-started/about-postman-agent/) for more information.

1. In Postman, select  **New > gRPC Request** to open a request in a new tab.

1. Select **Enter Server URL** and enter `grpcb.in:9001`.

1. Select the **Select a method** dropdown list and select **LotsOfGreetings**.

    ![New gRPC request](https://assets.postman.com/postman-docs/v10/grpc-save-example-1request-v10.jpg)

1. Select **Generate example message**.

1. Replace the example message string data with your name (or any other string).

1. Save the gRPC request to a collection.

    ![gRPC request](https://assets.postman.com/postman-docs/v10/grpc-save-example-2collection-v10.jpg)

    > gRPC examples can't be saved unless the request is in a collection.

1. Select **Invoke**. A `Sent request` message appears in the response section and the connection status is **STREAMING**.

1. Select **Send**. A response message with your string appears in the response section.

    ![Response message](https://assets.postman.com/postman-docs/v10/grpc-save-example-3send-v10.jpg)

1. Select **End Streaming**. More messages appear in the response section, including a `reply` message with your string.

    > gRPC examples can't be saved while streaming is active.

1. Select **Save as Example**.

    ![gRPC Save example button](https://assets.postman.com/postman-docs/v10/grpc-save-example-4saveExampleButton-v10.jpg)

    The saved example opens in a new tab and you can see the saved example under the request in the sidebar.

    ![gRPC example](https://assets.postman.com/postman-docs/v10/grpc-save-example-4savedExample-v10.jpg)

## Editing a gRPC example

1. [Create a gRPC request, save it to a collection, and save a gRPC example.](#saving-a-grpc-example)

1. Select the gRPC example in the sidebar.

    ![Select a gRPC example](https://assets.postman.com/postman-docs/v10/grpc-save-example-1select-example-v10.jpg)

1. In the response section, select the message you want to edit. The editor opens below the message.

    ![Select a message](https://assets.postman.com/postman-docs/v10/grpc-save-example-2select-message-v10.jpg)

1. Replace the `reply` response with `Not found` or any string.

    ![Edit the message](https://assets.postman.com/postman-docs/v10/grpc-save-example-3edit-message-v10.jpg)

1. Select the message again to close the editor.

1. Hover over a message. A handle appears to the left of the message. Select and drag the handle to reposition the message in the timeline.

    ![Reposition the message](https://assets.postman.com/postman-docs/v10/grpc-save-example-4reposition-v10.jpg)

1. Select **Save**.

## Creating a gRPC example without an API call

1. Create a gRPC request and add it to a collection.

1. Hover over the gRPC request you created and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

1. Select **Add example**.

    ![Select Add example](https://assets.postman.com/postman-docs/v10/grpc-create-example-1add-v10.jpg)

1. An empty example opens in the workbench and appears below the request in the sidebar.

    ![New example](https://assets.postman.com/postman-docs/v10/grpc-create-example-2save-v10.jpg)

1. [Edit the gRPC example.](#editing-a-grpc-example)

    > For examples with streaming methods, select the **Add a Message** button to create a message, then edit the message.

1. Select **Save**.

## Creating example-specific documentation

1. [Create a gRPC request, save it to a collection, and save a gRPC example.](#saving-a-grpc-example)

1. Select the gRPC example in the sidebar.

    ![Select a saved example](https://assets.postman.com/postman-docs/v10/grpc-save-example-1select-example-v10.jpg)

1. In the right sidebar, select the the documentation icon <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px">.

1. Hover over **Add example description...** and select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.

    ![Select the edit icon](https://assets.postman.com/postman-docs/v10/grpc-doc-example-1edit-v10.jpg)

1. Enter your documentation for the gRPC example and select **Save**.

    ![Save documentation](https://assets.postman.com/postman-docs/v10/grpc-doc-example-1save-v10.jpg)
