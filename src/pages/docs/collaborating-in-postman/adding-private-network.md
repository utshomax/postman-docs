---
title: "Your Private API Network"
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

The _Private API Network_ provides a [central directory](https://www.postman.com/api-platform/api-catalog/) of workspaces, collections, and APIs your team uses internally. Your Postman team can access these resources and start using them right away. By using the Private API Network, you can enable developers across your organization to discover, consume, and track API development in one place.

Workspaces, collections, and APIs in the Private API Network are visible to logged-in users who are on your Postman team. Users who aren't on your team can't find or access these resources.

[Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) and [API Network Managers](/docs/collaborating-in-postman/roles-and-permissions/#network-roles) can manage all folders and elements in your Private API Network. You can assign team members the [Folder Manager role](/docs/collaborating-in-postman/roles-and-permissions/#network-roles) at the folder level, giving them permission to manage specific folders and the elements in them.

> Enterprise teams can also assign this role to a user group. For more information about assigning team roles to groups, see [User groups](/docs/collaborating-in-postman/user-groups/).

<img alt="Private API Network overview" src="https://assets.postman.com/postman-docs/v10/private-api-network-overview-v10-3.jpg"/>

## Contents

* [Navigating the Private API Network](#navigating-the-private-api-network)
    * [Searching, filtering, and sorting](#searching-filtering-and-sorting)
    * [Reviewing details about elements](#reviewing-details-about-elements)
    * [Sharing folders and elements](#sharing-folders-and-elements)
    * [Watching and forking elements](#watching-and-forking-elements)
* [Organizing with folders](#organizing-with-folders)
    * [Adding sub-folders](#adding-sub-folders)
* [Editing Folder Managers](#editing-folder-managers)
* [Adding elements](#adding-elements)
    * [Adding elements in your Private API Network](#adding-elements-in-your-private-api-network)
    * [Adding a workspace from the workbench](#adding-a-workspace-from-the-workbench)
    * [Adding a collection from the workbench](#adding-a-collection-from-the-workbench)
    * [Adding an API from the workbench](#adding-an-api-from-the-workbench)
* [Requesting to add elements](#requesting-to-add-elements)
    * [Requesting to add elements in your Private API Network](#requesting-to-add-elements-in-your-private-api-network)
    * [Requesting to add a workspace from the workbench](#requesting-to-add-a-workspace-from-the-workbench)
    * [Requesting to add a collection from the workbench](#requesting-to-add-a-collection-from-the-workbench)
    * [Requesting to add an API from the workbench](#requesting-to-add-an-api-from-the-workbench)
* [Reviewing requests to add elements](#reviewing-requests-to-add-elements)
* [Managing folders and elements](#managing-folders-and-elements)
    * [Editing collections](#editing-collections)
    * [Moving folders and elements](#moving-folders-and-elements)
    * [Renaming folders](#renaming-folders)
    * [Removing folders and elements](#removing-folders-and-elements)
* [Private API Network reports](#private-api-network-reports)

## Navigating the Private API Network

The Private API Network is a good place to learn about workspaces, collections, and APIs shared within your team. Under your team name, you can browse a directory of elements shared within your team in the left sidebar.

There are two ways to access the Private API Network:

* Select **Home** from the Postman header, then select **Private API Network** in your team information on the left side.
* Select **API Network** from the Postman header, then select **Private API Network**.

### Searching, filtering, and sorting

There are several ways to search, filter, and sort elements and folders in the Private API Network. You can search and sort all elements and folders from the left sidebar. You can also select a folder to search, filter, and sort elements on the right.

You can search and sort elements and folders from the left sidebar.

* To search by name, enter the full or partial element or folder name into **Search elements and folders**.
* To sort elements and folders, select the sort icon <img alt="Sort icon" src="https://assets.postman.com/postman-docs/icon-sort.jpg#icon" width="16px">. Options are:
    * **Default** - Sort by type, grouping folders and elements by type.
    * **Date added** - Sort by the date that elements and folders were added.
    * **A to Z** - Sort elements and folders alphabetically.

<img alt="Create new folder in Private Network" src="https://assets.postman.com/postman-docs/v10/private-api-network-organize-folders-v10-2.jpg" width="300px"/>

You can select a folder to search, filter, and sort elements on the right. Select <img alt="Home icon" src="https://assets.postman.com/postman-docs/v10/icon-home-v10.jpg#icon" width="16px"> **Home** in the left sidebar to search, filter, and sort all elements in your Private API Network. Select a folder in the left sidebar to search, filter, and sort elements only in the selected folder.

* To search by name, enter the full or partial element name into **Search elements**.
* To filter based on the person who added the element, select **Added by**, then select the name of the team member.
* To filter by element type, select **Type**, then select **API**, **Collection**, or **Workspace**.
* To filter based on element tags, select **Tags**, then select the tags. Learn more about adding tags to [collections](/docs/collections/using-collections/#tagging-a-collection), [APIs](/docs/designing-and-developing-your-api/managing-apis/#tagging-apis), and [workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#tagging-a-workspace).
* To sort elements, select the **Sort by** dropdown list. Options are:
    * **Recently added** - Sort elements by the date they were added.
    * **A to Z** - Sort elements alphabetically.
    * **Trending this week** - Sort elements by your team's usage this week.
    * **Trending this month** - Sort elements by your team's usage this month.

<img alt="Private API List" src="https://assets.postman.com/postman-docs/v10/private-api-network-list-v10-2.jpg"/>

### Reviewing details about elements

To review information about an element, select it from the left sidebar. On the right, you can view the element's description and the editors who have worked on it.

For workspaces, you can view all of the collections and APIs inside them. For collections, you can view available documentation; you can select **Try Request** next to a request or **Try Example** next to an example to open it in a new tab. For APIs, you can view definitions and associated collections.

To learn more about trying an example, see [Trying an example](/docs/sending-requests/examples/#trying-an-example).

You can also open the element in its workspace. Select an element from the left sidebar, and then select either **View in Workspace** or **Open Workspace** in the upper-right corner.

### Sharing folders and elements

You can share links to folders and individual elements with other team members. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a folder or element, then select **Copy link**. This copies the link to your clipboard. You can then share the link with team members.

> You can also select a folder or element in the sidebar. Then select <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg#icon" width="18px"> **Copy link** in the upper-right corner.

### Watching and forking elements

You can watch workspaces, collections, and APIs from the Private API Network. You can also fork collections from the Private API Network.

To watch a workspace, collection, or API and get notified about any changes, select an element in the left sidebar, then select <img alt="Watch icon" src="https://assets.postman.com/postman-docs/eye.jpg#icon" width="16px"> **Watch** in the upper-right corner. To learn more about watch notifications, see [Watching a workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#watching-a-workspace), [Watching a collection](/docs/collections/using-collections/#watching-a-collection), and [Watching APIs](/docs/designing-and-developing-your-api/managing-apis/#watching-apis).

To fork a collection, select a collection in the left sidebar, then select <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="14px"> **Fork** in the upper-right corner. To learn more about forking collections, see [Forking Postman entities](/docs/collaborating-in-postman/using-version-control/forking-entities/).

## Organizing with folders

The sidebar navigation displays the folder structure for your Private API Network. API Network Managers can drag elements and sub-folders into different folders. You can add descriptions to folders to describe elements within the folders. You can also add Folder Managers to specific folders. To learn more about managing folders, see [Managing folders and elements](#managing-folders-and-elements).

<img alt="Create new folder in Private Network" src="https://assets.postman.com/postman-docs/v10/private-api-network-organize-folders-v10-2.jpg" width="300px"/>

To create a new folder from the Private API Network view, do the following:

1. Open your [Private API Network](https://go.postman.co/network/private).
1. Select the create folder icon <img alt="Create folder icon" src="https://assets.postman.com/postman-docs/v10/icon-create-folder-v10.jpg#icon" width="20px"> in the left sidebar.

    > You can also select **Create Folders** on the right from the Private API Network overview page.

1. Give the folder a name.
1. (Optional) Add Folder Managers to the folder.

    > You can also add Folder Managers to a folder later. To learn more, see [Editing Folder Managers](#editing-folder-managers).

1. (Optional) Add more folders.

    > Select <img alt="Create folder icon" src="https://assets.postman.com/postman-docs/v10/icon-create-folder-v10.jpg#icon" width="20px"> **Add Folder** to add another folder. Select the remove icon <img alt="Remove icon" src="https://assets.postman.com/postman-docs/icon-remove-api-element-v9.jpg#icon" width="16px"> next to a folder to remove it.

1. Select **Review**.

    <img alt="Create folders in Private Network" src="https://assets.postman.com/postman-docs/v10/private-api-network-create-folders-v10.jpg"/>

1. Review your folders and Folder Managers, and then select **Create Folders**.

### Adding sub-folders

To add a sub-folder to an existing folder, do the following:

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a folder, then select **Add folder**.

    > You can also select a folder in the sidebar. Then select <img alt="Create folder icon" src="https://assets.postman.com/postman-docs/v10/icon-create-folder-v10.jpg#icon" width="20px"> **Create Folder** in the upper-right corner.

1. Enter a name for the folder. Optionally, you can add a description for the sub-folder.
1. Select **Create Folder**.

## Editing Folder Managers

API Network Managers can assign team members the [Folder Manager role](/docs/collaborating-in-postman/roles-and-permissions/#network-roles), giving them permission to manage specific folders and the elements in them. Folder Managers can also assign other team members the Folder Manager role in folders they have permission to manage.

> You can't add Folder Managers to sub-folders.

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the folder, then select **Edit folder managers**.

    > You can also select a folder in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> in the upper-right corner, then select **Edit folder managers**.

1. Enter the name, email, or group name you want to assign as a Folder Manager for the folder.
1. Select **Save Changes**.

    <img alt="Edit Folder Managers in Private Network" src="https://assets.postman.com/postman-docs/v10/edit-folder-managers-v10.jpg"/>

## Adding elements

API Network Managers can add elements to the Private API Network. Folder Managers can add elements to folders they have permission to manage. Workspace Editors, Collection Editors, and API Editors must [request to add elements](#requesting-to-add-elements) to the Private API Network.

To add an element to the Private API Network, it must be in a team or public workspace. You can't add an element to the Private API Network unless all team members have at least view access to the element. Learn more about team [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

The collections and APIs you add to the Private API Network include the latest changes to these elements.

> When you add a workspace, collection, or API to the [Private API Network](https://go.postman.co/network/private), it's visible to your Postman team, but isn't visible to [partners](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/).

<!-- -->

> You can add elements to the Private API Network from the workbench and with the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-b7c02959-88ca-4e2f-9b68-99538eed4533?ctx=documentation).

### Adding elements in your Private API Network

You can add elements from inside your team's Private API Network. Workspace Editors, Collection Editors, and API Editors can [request to add elements](#requesting-to-add-elements-in-your-private-api-network) from your Private API Network.

To add elements from your Private API Network, do the following:

1. Open your [Private API Network](https://go.postman.co/network/private).
1. Select the **+** icon in the left sidebar to add elements to the root Home folder. To add elements to a specific folder, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a folder, then select **Add elements**.

    > You can also select **Add** on the right from the Private API Network overview page, or select **Add To Folder** in the upper-right corner.

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

You can add workspaces from the workbench. Workspace Editors must [request to add a workspace](#requesting-to-add-a-workspace-from-the-api-builder).

To add a workspace to the Private API Network from the workbench, do the following:

1. Open the workspace you want to add to the Private API Network.
1. In the workspace overview, select <img alt="Workspace settings icon" src="https://assets.postman.com/postman-docs/v10/icon-sliders-v10.jpg#icon" width="24px"> **Workspace Settings**.
1. Select **Add to Network**.

    > If you're a Folder Manager, select **Request to Add**. Then select a folder you have permission to manage.

    <img alt="Add workspace to the Private Network" src="https://assets.postman.com/postman-docs/v10/add-workspace-to-private-api-network-v10.jpg" width="500px"/>

1. (Optional) Select a folder or create one to keep elements organized.
1. Select **Add workspace**.

### Adding a collection from the workbench

You can add collections from the workbench. Collection Editors must [request to add a collection](#requesting-to-add-a-collection-from-the-api-builder).

To add a collection to the Private API Network from the workbench, do the following:

1. Open the collection you want to add to the Private API Network.
1. In the collection overview, select **Add to API Network**.

    > If you're a Folder Manager, select **Request to Add**. Then select a folder you have permission to manage.

    <img alt="Add collection to the Private Network" src="https://assets.postman.com/postman-docs/v10/add-collection-to-private-api-network-v10.jpg"/>

1. (Optional) Add a brief summary about the collection.
1. (Optional) Select **Select Environments** to make sure users have access to environment variables.

    > You can also edit a collection's summary and environments later. To learn more, see [Editing collections](#editing-collections).

1. (Optional) Select a folder or create one to keep elements organized.
1. Select **Add collection**.

### Adding an API from the workbench

You can add APIs from the workbench. API Editors must [request to add an API](#requesting-to-add-an-api-from-the-api-builder).

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

## Requesting to add elements

Users with the Editor role for an element can request to add it to the Private API Network.

To request to add an element to the Private API Network, it must be in a team or public workspace. You can't request to add an element to the Private API Network unless all team members have at least view access to the element. Learn more about team [roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/).

When you submit a request, Postman notifies the [API Network Manager or Folder Manager](/docs/collaborating-in-postman/roles-and-permissions/#network-roles) who will review your request and either approve or deny it. Postman will notify you of the API Network Manager or Folder Manager's decision. If they deny your request, the notification will include a comment with their reason.

> When you add a workspace, collection, or API to the [Private API Network](https://go.postman.co/network/private), it's visible to your Postman team, but isn't visible to [partners](/docs/collaborating-in-postman/using-workspaces/partner-workspaces/).

### Requesting to add elements in your Private API Network

Editors of an element can request to add elements from inside your team's Private API Network.

To request to add elements from your Private API network, do the following:

1. Open your [Private API Network](https://go.postman.co/network/private).
1. Select the **+** icon in the left sidebar to request to add elements to the root Home folder. To request to add elements to a specific folder, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the folder, then select **Request to add elements**.

    > You can also select **Add** on the right from the Private API Network overview page, or select **Add To Folder** in the upper-right corner.

1. Search for and then select collections, APIs, and workspaces you want to request to add. You can also filter elements by tags. Learn more about adding tags to [collections](/docs/collections/using-collections/#tagging-a-collection), [APIs](/docs/designing-and-developing-your-api/managing-apis/#tagging-apis), and [workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#tagging-a-workspace).

    If you're requesting to add collections, you can optionally select environments in their workspace to make sure users have access to environment variables. You can also [edit a collection's environments later](#editing-collections).

    You can select **Added elements** in the upper-right corner to show elements already added to the Private API Network. You can select the **Collections** tab and then **Forks** in the upper-right corner to show [forked collections](/docs/collaborating-in-postman/using-version-control/forking-entities/).

    > An API's editor must [publish a version of the API](#publishing-specific-api-versions) before you can add it to your Private API Network.

    <!-- -->

    > You can select an element's name to open it in its workspace in a new tab.

1. Select **Review**.

    <img alt="Add elements to the Private Network" src="https://assets.postman.com/postman-docs/v10/private-api-network-add-elements-v10-3.jpg"/>

1. Review your selections, and then select **Request to add**.

### Requesting to add a workspace from the workbench

[Workspace Editors](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) can request to add workspaces to your Private API Network from the workbench.

1. Open the workspace you want to add to the Private API Network.
1. In the workspace overview, select <img alt="Workspace settings icon" src="https://assets.postman.com/postman-docs/v10/icon-sliders-v10.jpg#icon" width="24px"> **Workspace Settings**.
1. Select **Request to Add**.

    <img alt="Request to add workspace to the Private Network" src="https://assets.postman.com/postman-docs/v10/request-to-add-workspace-to-private-api-network-v10-2.jpg" width="500px"/>

1. (Optional) Select a folder or create one to keep elements organized.
1. (Optional) Select **Add comment** to add a note for the API Network Manager or Folder Manager.
1. Select **Request workspace**.

### Requesting to add a collection from the workbench

[Collection Editors](/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) can request to add collections to your Private API Network from the workbench.

1. Open the collection you want to add to the Private API Network.
1. In the collection overview, select **Request to Add**.

    <img alt="Request to add collection to the Private Network" src="https://assets.postman.com/postman-docs/v10/request-to-add-collection-to-private-api-network-v10-2.jpg"/>

1. (Optional) Add a brief summary about the collection.
1. (Optional) Select **Select Environments** to make sure users have access to environment variables.

    > You can also edit a collection's summary and environments later. To learn more, see [Editing collections](#editing-collections).

1. (Optional) Select a folder or create one to keep elements organized.
1. (Optional) Select **Add comment** to add a note for the API Network Manager or Folder Manager.
1. Select **Request collection**.

### Requesting to add an API from the workbench

[API Editors](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) can request to add APIs to your Private API Network from the workbench.

> An API's editor must [publish a version of the API](#publishing-specific-api-versions) before you can add it to your Private API Network.

1. Open the API you want to add to the Private API Network.
1. In the API overview, select **Request to Add**.

    <img alt="Request to add API to the Private Network" src="https://assets.postman.com/postman-docs/v10/request-to-add-api-to-private-api-network-v10-2.jpg"/>

1. (Optional) Select a folder or create one to keep elements organized.
1. (Optional) Select **Add comment** to add a note for the API Network Manager or Folder Manager.
1. Select **Request API**.

## Reviewing requests to add elements

API Network Managers can review requests to add elements to the Private API Network. Folder Managers can review requests to add elements to folders they have permission to manage.

When an Editor requests to add an element to your team's Private API Network, Postman will send you an email and an in-app notification. For the list of all the pending requests, open the [Private API Network](https://go.postman.co/network/private) and select the pending requests icon <img alt="Pending requests icon" src="https://assets.postman.com/postman-docs/v10/icon-pending-request-v10.jpg#icon" width="22px"> in the left sidebar.

Pending requests include the element type, the user who submitted the request, the date they submitted it on, a link to view the element in its workspace, and an optional note from the requesting user.

<img alt="Approve or deny a request" src="https://assets.postman.com/postman-docs/v10/private-api-network-pending-requests-v10-2.jpg"/>

To approve a request, do the following:

1. Select **Approve**.
1. (Optional) Select a folder or create one to keep elements organized.
1. Select **Approve Request**.

To deny a request, do the following:

1. Select **Deny**.
1. Write a note to the Editor who submitted the request explaining why you are denying their request.
1. Select **Deny Request**.

## Managing folders and elements

API Network Managers can manage all folders and elements. Folder Managers can manage folders and elements in folders they have permission to manage. Users with the Editor role for an element can also manage the element.

> You can manage elements within the [Private API Network](#navigating-the-private-api-network) or with the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-b7c02959-88ca-4e2f-9b68-99538eed4533?ctx=documentation).

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

## Private API Network reports

The report feature makes it easier to govern your internal API landscape through deeper insights into APIs in your Private API Network.

To view Private API Network reports, select [**Home**](https://go.postman.co/) from the Postman header, then select **Reports** on the left side.

To learn more about reports, see [About reports](/docs/reports/reports-overview/).
