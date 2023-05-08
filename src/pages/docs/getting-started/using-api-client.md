---
title: "Using the Postman API Client"
updated: 2023-05-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Installing and updating Postman"
    url: "/docs/getting-started/installation-and-updates/"
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Part 1: Send a Request"
    url: "https://youtu.be/2oOSnxZ28fA"
  - type: section
    name: "Next steps"
  - type: link
    name: "Sending your first request"
    url: "/docs/getting-started/sending-the-first-request/"
---


The _Postman API Client_ is a space where you can work if you're using the Postman desktop app and not connected to Postman servers. When you aren't signed in to Postman, you can still use the offline API Client to build and send requests. You can use the API Client to send HTTP, WebSocket, gRPC, and GraphQL requests.

All of your work in the API Client is stored locally and isn't synced online with Postman. After you sign in to Postman, you can move your open requests and request history into a workspace where you can collaborate with others.

> **What happened to the Scratch Pad?** New Postman users who download the Postman desktop app use the Postman API Client when not signed in to Postman. Postman users who have data in the Scratch Pad will continue to use the Scratch Pad when not connected to Postman's servers. Learn more about [using the Scratch Pad](/docs/getting-started/using-scratch-pad/).

## Accessing the API Client

When you open the Postman desktop app for the first time, you can create a free Postman account or sign in to your Postman account. If you choose to skip creating or signing in to an account, you will enter the offline API Client. You'll also enter the API Client if you sign out of Postman.

<img alt="Postman Offline API Client" src="https://assets.postman.com/postman-docs/v10/api-client-v10-14.jpg">

## API Client features

While you're in the API Client, you can create new requests, send requests and receive responses, and view the history of your sent requests.

* To create a new request, select **New** in the sidebar and then select the type of request you want to create. You can create HTTP, WebSocket, gRPC, or GraphQL requests. Each request you create opens in a new tab. Learn more about [building requests](/docs/sending-requests/requests/).

* Select **Send** to send a request and view the response. Learn more about [receiving responses](/docs/sending-requests/responses/).

* The sidebar shows a history of the requests you've sent. Select a request in the history to open it in a new tab. Learn more about [viewing your request history](/docs/getting-started/navigating-postman/#history).

> You can also use the API Client to write and execute [test scripts](/docs/writing-scripts/pre-request-scripts/) and to [visualize response data](/docs/sending-requests/visualizer/).

## Moving from the API Client to a workspace

[Workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/) enable you to organize your Postman work and collaborate with teammates. When you're in a workspace, you can save requests to [collections](/docs/collections/using-collections/), use [environments](/docs/sending-requests/managing-environments/) and [variables](/docs/sending-requests/variables/), build [APIs](/docs/designing-and-developing-your-api/the-api-workflow/), and more.

To switch to a workspace, you need to sign up for a Postman account or sign in to your existing Postman account. You can move all of your open requests and history from the API Client to your workspace, so you can pick up right where you left off.

### Signing up for Postman from the API Client

If you don't have a Postman account, or want to use a new account, select **Create Account** in the header. Follow the onscreen instructions, or learn more about [signing up for Postman account](/docs/getting-started/postman-account/#signing-up-for-a-postman-account).

After you create your account, your open requests and request history are automatically copied from the offline API Client to your default personal workspace. Learn more about [using workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).

### Signing in to Postman from the API Client

To sign in to your Postman account, select **Sign In** in the header. Follow the onscreen instructions, or learn more about [signing in to Postman](/docs/getting-started/postman-account/#signing-in-to-postman).

After signing in, you can move your open requests and request history from the API Client to a workspace. Select the workspace where you want to migrate your data and select **Move Data**. You can also create a new personal workspace for your data.

Your open requests and request history are copied from the API Client to the workspace you selected. Learn more about [using workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).

<img alt="Migrating API Client data" src="https://assets.postman.com/postman-docs/v10/api-client-migrate-data-v10-14.jpg" width="442px">
