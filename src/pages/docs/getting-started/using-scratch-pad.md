---
title: "Using the Scratch Pad"
page_id: "using-the-scratch-pad"
updated: 2023-05-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Accessing Scratchpad in Postman | Postman Level Up"
    url: "https://youtu.be/AHpdO8AetjA"
  - type: link
    name: "Importing Data from the Scratchpad | Postman Level Up"
    url: "https://youtu.be/GZWf7F-aVDc"
---

The _Scratch Pad_ is a space where you can work if you're using the Postman desktop app and not connected to Postman servers. When you aren't signed in or don't have a network connection, you can still access some Postman features offline, such as creating collections and requests, or sending requests.

All your work in the Scratch Pad is stored locally and isn't synced online with Postman. After working in the Scratch Pad, you can later move your work into a workspace once you sign in.

> **Meet the new Postman API Client.** New Postman users who download the Postman desktop app now use the Postman API Client when not connected to Postman's servers. You can use the API Client to send API requests, including HTTP, WebSocket, gRPC, and GraphQL requests. Postman users who have data in the Scratch Pad will continue to use the Scratch Pad when not connected to Postman's servers. Learn more about the [Postman API Client](/docs/getting-started/using-api-client/).

## Entering the Scratch Pad

If you sign out or your connection to Postman breaks, Postman displays a global banner at the top of the screen indicating that you're already in the Scratch Pad.

<img alt="Scratch Pad global banner" src="https://assets.postman.com/postman-docs/scratch-pad-notice.jpg" width="350px" />

If you are signed in and want to go to the Scratch Pad, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Scratch Pad**.

## Scratch Pad features

While you are in the Scratch Pad, you can:

* Create, edit, rename, or delete a collection, folder, environment, HTTP request, or WebSocket request.
* Send a request.
* View your history of your sent requests.
* Write and execute test scripts and visualizers.
* Export collections and environments.
* Edit documentation for a collection or request.

## Leaving the Scratch Pad

1. Ensure you have a network connection to Postman, and [sign in to Postman](/docs/getting-started/postman-account/#signing-in-to-postman).
1. Switch to a workspace by selecting **Workspaces** from the header. For more information, see [Using and managing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).

> You can also select **Switch to a Workspace** from the Scratch Menu global banner at the top of the screen.

## Migrating Scratch Pad data to a workspace

Workspaces enable you to organize your Postman work and collaborate with teammates. To switch to a workspace, you need to sign in to your Postman account or sign up for a new Postman account. You can move all of your collections, environments, and history from the Scratch Pad to your workspace, so you can pick up right where you left off.

### Signing up for Postman from the Scratch Pad

When you [sign up for a Postman account](/docs/getting-started/postman-account/#signing-up-for-a-postman-account), your collections, environments, and history are automatically copied from the Scratch Pad to your default personal workspace. (Open tabs aren't migrated.)

### Signing in to Postman from the Scratch Pad

When you [sign in to Postman](/docs/getting-started/postman-account/#signing-in-to-postman), your data isn't automatically migrated from the Scratch Pad.

To copy your Scratch Pad data to a workspace:

1. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header, select **Settings**, and select the **Data** tab.
1. STEPS TBD

All of your collections, environments, and history are copied from the Scratch Pad to the workspace you selected. (Open tabs aren't migrated.)

## Exporting and importing data from the Scratch Pad

When you sign in to Postman, your data remains on the Scratch Pad and isn't automatically transferred to your workspace. You can [migrate all of your Scratch Pad data to a workspace](#migrating-scratch-pad-data-to-a-workspace).

If you don't want to migrate all of your Scratch Pad data, you can export individual collections and environments from the Scratch Pad as JSON, then import them to a workspace.

For more information on exporting a single collection or an environment, see [Exporting Postman data](/docs/getting-started/importing-and-exporting-data/#exporting-postman-data).

> You can export individual collections and environments from the Scratch Pad. You can't make bulk data exports of all collections and environments at once.

To import Scratch Pad data into your workspace, do the following:

1. Sign in and switch to a workspace by selecting **Workspaces** from the header. For more information, see [Using and managing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).
1. Select **Import** in the sidebar.
1. Drag your exported collection or environment and select **Import**.

For more information on importing, see [Importing data into Postman](/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman).
