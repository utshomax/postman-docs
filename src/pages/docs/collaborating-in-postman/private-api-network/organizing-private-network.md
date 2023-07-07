---
title: "Organizing your Private API Network"
updated: 2023-06-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Private API Network | The Exploratory"
    url: "https://youtu.be/1SINcytmKsc"
  - type: link
    name: "Private API Network"
    url: "https://youtu.be/cbPT4dMFIDw"
  - type: link
    name: "Discovering APIs | Postman Enterprise"
    url: "https://youtu.be/e1v647ayIBg"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "How to Make Your APIs Available to More Consumers"
    url: "https://blog.postman.com/how-to-make-your-apis-available-to-more-consumers/"
  - type: link
    name: "Introducing an API to manage your Private API Network with more automation"
    url: "https://blog.postman.com/introducing-api-to-manage-your-private-api-network-with-automation/"
  - type: link
    name: "Simplifying API distribution and evaluation with the Private API Network"
    url: "https://blog.postman.com/simplifying-api-distribution-and-evaluation-with-the-private-api-network/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "ChargeHub plans to improve internal discovery with a Private API Network"
    url: "https://www.postman.com/case-studies/chargehub/"

---

> **[The Private API Network is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

Organizing your Private API Network with folders and elements helps your team easily discover and use your internal workspaces, collections, and APIs.

## Contents

* [Organizing with folders](#organizing-with-folders)
    * [Adding sub-folders](#adding-sub-folders)
* [Adding elements](#adding-elements)
    * [Adding elements in your Private API Network](#adding-elements-in-your-private-api-network)
    * [Adding a workspace from the workbench](#adding-a-workspace-from-the-workbench)
    * [Adding a collection from the workbench](#adding-a-collection-from-the-workbench)
    * [Adding an API from the workbench](#adding-an-api-from-the-workbench)
* [Managing folders and elements](#managing-folders-and-elements)
    * [Editing collections](#editing-collections)
    * [Moving folders and elements](#moving-folders-and-elements)
    * [Renaming folders](#renaming-folders)
    * [Removing folders and elements](#removing-folders-and-elements)

## Organizing with folders

The sidebar navigation displays the folder structure for your Private API Network. API Network Managers can drag elements and sub-folders into different folders. You can add descriptions to folders to describe elements within the folders. You can also add Folder Managers to specific folders. To learn more about managing folders, see [Managing folders and elements](#managing-folders-and-elements).

<img alt="Create new folder in Private Network" src="https://assets.postman.com/postman-docs/v10/private-api-network-organize-folders-v10-2.jpg" width="300px"/>

To create a new folder from the Private API Network view, do the following:

1. Open your [Private API Network](https://go.postman.co/network/private).
1. Select the create folder icon <img alt="Create folder icon" src="https://assets.postman.com/postman-docs/v10/icon-create-folder-v10.jpg#icon" width="20px"> in the left sidebar. You can also select **Create Folders** on the right from the Private API Network overview page.
1. Give the folder a name.
1. (Optional) Add Folder Managers to the folder. You can also add Folder Managers to a folder later. To learn more, see [Editing Folder Managers](/docs/collaborating-in-postman/private-api-network/managing-private-network/#editing-folder-managers).
1. (Optional) Add more folders. Select <img alt="Create folder icon" src="https://assets.postman.com/postman-docs/v10/icon-create-folder-v10.jpg#icon" width="20px"> **Add Folder** to add another folder. Select the remove icon <img alt="Remove icon" src="https://assets.postman.com/postman-docs/icon-remove-api-element-v9.jpg#icon" width="16px"> next to a folder to remove it.
1. Select **Review**.

    <img alt="Create folders in Private Network" src="https://assets.postman.com/postman-docs/v10/private-api-network-create-folders-v10.jpg"/>

1. Review your folders and Folder Managers, and then select **Create Folders**.

### Adding sub-folders

To add a sub-folder to an existing folder, do the following:

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a folder, then select **Add folder**. You can also select a folder in the sidebar, then select <img alt="Create folder icon" src="https://assets.postman.com/postman-docs/v10/icon-create-folder-v10.jpg#icon" width="20px"> **Create Folder** in the upper-right corner.
1. Enter a name for the folder. Optionally, you can add a description for the sub-folder.
1. Select **Create Folder**.

## Adding elements

API Network Managers can add elements to the Private API Network. Folder Managers can add elements to folders they have permission to manage. Workspace Editors, Collection Editors, and API Editors must [request to add elements](/docs/collaborating-in-postman/private-api-network/private-network-requests/#requesting-to-add-elements) to the Private API Network.

To add an element to the Private API Network, it must be in a team or public workspace. You can't add an element to the Private API Network unless all team members have at least view access to the element. Learn more about team [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

The collections and APIs you add to the Private API Network include the latest changes to these elements.

> When you add a workspace, collection, or API to the [Private API Network](https://go.postman.co/network/private), it's visible to your Postman team, but isn't visible to [partners](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/).

<!-- -->

> You can add elements to the Private API Network from the workbench and with the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-b7c02959-88ca-4e2f-9b68-99538eed4533?ctx=documentation).

### Adding elements in your Private API Network

You can add elements from inside your team's Private API Network. Workspace Editors, Collection Editors, and API Editors can [request to add elements](/docs/collaborating-in-postman/private-api-network/private-network-requests/#requesting-to-add-elements-in-your-private-api-network) from your Private API Network.

To add elements from your Private API Network, do the following:

1. Open your [Private API Network](https://go.postman.co/network/private).
1. Select the **+** icon in the left sidebar to add elements to the root Home folder. To add elements to a specific folder, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a folder, then select **Add elements**.

    > You can also select **Add** on the right from the Private API Network overview page. In a Private API Network folder, you can select **Add To Folder** in the upper-right corner.

1. Select the collections, APIs, and workspaces you want to add. You can search for elements, and filter elements by tags. Learn more about adding tags to [collections](/docs/collections/using-collections/#tagging-a-collection), [APIs](/docs/designing-and-developing-your-api/managing-apis/#tagging-apis), and [workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#tagging-a-workspace).

    If you're adding collections, you can optionally select environments in their workspace to make sure users have access to environment variables. You can also [edit a collection's environments later](#editing-collections).

    You can select **Added elements** in the upper-right corner to show elements already added to the Private API Network. You can select the **Collections** tab and then **Forks** in the upper-right corner to show [forked collections](/docs/collaborating-in-postman/using-version-control/forking-entities/).

    > An API's editor must [publish a version of the API](#publishing-specific-api-versions) before you can add it to your Private API Network.

    <!-- -->

    > You can select an element's name to open it in its workspace in a new tab.

1. Select **Review**.

    <img alt="Add elements to the Private Network" src="https://assets.postman.com/postman-docs/v10/private-api-network-add-elements-v10-3.jpg"/>

1. Review your selections, and then select **Add to Network**.

### Adding a workspace from the workbench

You can add workspaces from the workbench. Workspace Editors must [request to add a workspace](/docs/collaborating-in-postman/private-api-network/private-network-requests/#requesting-to-add-a-workspace-from-the-workbench).

To add a workspace to the Private API Network from the workbench, do the following:

1. Open the workspace you want to add to the Private API Network.
1. In the workspace overview, select <img alt="Workspace settings icon" src="https://assets.postman.com/postman-docs/v10/icon-sliders-v10.jpg#icon" width="24px"> **Workspace Settings**.
1. Select **Add to Network**.

    > If you're a Folder Manager, select **Request to Add**. Then select a folder you have permission to manage.

    <img alt="Add workspace to the Private Network" src="https://assets.postman.com/postman-docs/v10/add-workspace-to-private-api-network-v10.jpg" width="500px"/>

1. (Optional) Select a folder or create one to keep elements organized.
1. Select **Add workspace**.

### Adding a collection from the workbench

You can add collections from the workbench. Collection Editors must [request to add a collection](/docs/collaborating-in-postman/private-api-network/private-network-requests/#requesting-to-add-a-collection-from-the-workbench).

To add a collection to the Private API Network from the workbench, do the following:

1. Open the collection you want to add to the Private API Network.
1. In the collection overview, select **Add to API Network**.

    > If you're a Folder Manager, select **Request to Add**. Then select a folder you have permission to manage.

    <img alt="Add collection to the Private Network" src="https://assets.postman.com/postman-docs/v10/add-collection-to-private-api-network-v10.jpg"/>

1. (Optional) Add a brief summary about the collection.
1. (Optional) Select **Select Environments** to make sure users have access to environment variables. You can also edit a collection's summary and environments later. To learn more, see [Editing collections](#editing-collections).
1. (Optional) Select a folder or create one to keep elements organized.
1. Select **Add collection**.

### Adding an API from the workbench

You can add APIs from the workbench. API Editors must [request to add an API](/docs/collaborating-in-postman/private-api-network/private-network-requests/#requesting-to-add-an-api-from-the-workbench).

> An API's editor must [publish a version of the API](#publishing-specific-api-versions) before you can add it to your Private API Network.

To add an API to the Private API Network from the workbench, do the following:

1. Open the API you want to add to the Private API Network.
1. In the API overview, select **Add to API Network**.

    > If you're a Folder Manager, select **Request to Add**. Then select a folder you have permission to manage.

    <img alt="Add API to the Private Network" src="https://assets.postman.com/postman-docs/v10/add-api-to-private-api-network-v10.jpg"/>

1. (Optional) Select a folder or create one to keep elements organized.
1. Select **Add API**.

#### Publishing specific API versions

Publishing a version creates a static representation of your API that consumers can view on the Private API Network. If your API is connected to a Git repository, you need to publish an API version to update your team or public workspace with the latest changes. When you publish a version, the API's definition and collections are synced to the Postman cloud.

Learn more about [publishing an API version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/).

#### Importing APIs from a code repository

You can make all your existing APIs discoverable on the Private API Network after you import them from a code repository. Learn more about [importing an API](/docs/designing-and-developing-your-api/importing-an-api/).


## Managing folders and elements

API Network Managers can manage all folders and elements. Folder Managers can manage folders and elements in folders they have permission to manage. Users with the Editor role for an element can also manage the element.

> You can manage elements within the [Private API Network](/docs/collaborating-in-postman/private-api-network/adding-private-network/#navigating-the-private-api-network) or with the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-b7c02959-88ca-4e2f-9b68-99538eed4533?ctx=documentation).

### Editing collections

You can change a collection's summary and associated environments in the Private API Network. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection you would like to edit from the network, then select **Edit collection**. Edit the collection, then select **Edit** to save your changes.

> You can also select a collection in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> in the upper-right corner, then select **Edit collection**.

### Moving folders and elements

You can move folders and elements in the Private API Network. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the folder or element you would like to move in the network, then select **Move...** or **Move element**. You can move folders and elements to an existing folder or create a new one. Select **Move Folder** or **Move element** to save your changes.

> You can also select a folder or element in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> in the upper-right corner, then select **Move...** or **Move element**.

### Renaming folders

You can rename folders in the Private API Network. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the folder you would like to rename, then select **Rename**. Enter a new name, then press **Enter**.

### Removing folders and elements

You can remove folders and elements from the Private API Network. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the folder or element you want to remove from the network, then select **Delete** or **Remove**. To confirm that you want to remove an element from the network, select **Remove**.

> You can also select a folder or element in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> in the upper-right corner, then select **Delete** or **Remove**.

If you have the Editor role for an element, you can also remove elements in your Private API Network from the workbench. For collections and APIs, open the overview then select **Remove**. For workspaces, open the overview, select <img alt="Workspace settings icon" src="https://assets.postman.com/postman-docs/v10/icon-sliders-v10.jpg#icon" width="24px"> **Workspace Settings**, then select **Remove**. To confirm, select **Remove**.

<img alt="Remove collection in Private API Network from workbench" src="https://assets.postman.com/postman-docs/v10/remove-collection-private-api-network-v10.jpg"/>

After you remove the element, team members won't have access to it through the Private API Network.
