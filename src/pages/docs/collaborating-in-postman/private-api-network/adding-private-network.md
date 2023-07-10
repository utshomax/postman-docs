---
title: "Private API Network overview"
updated: 2023-07-07
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

Workspaces, collections, and APIs in the Private API Network are visible to logged-in users who are on your Postman team. Users who aren't on your team can't find or access these resources. [Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) and [API Network Managers](/docs/collaborating-in-postman/roles-and-permissions/#network-roles) can manage all folders and elements in your Private API Network.

<img alt="Private API Network overview" src="https://assets.postman.com/postman-docs/v10/private-api-network-overview-v10-3.jpg"/>

## Contents

* [Navigating the Private API Network](#navigating-the-private-api-network)
* [Searching, filtering, and sorting](#searching-filtering-and-sorting)
* [Reviewing details about elements](#reviewing-details-about-elements)
* [Sharing folders and elements](#sharing-folders-and-elements)
* [Watching and forking elements](#watching-and-forking-elements)
* [Private API Network reports](#private-api-network-reports)

## Navigating the Private API Network

The Private API Network is a good place to learn about workspaces, collections, and APIs shared within your team. Under your team name, you can browse a directory of elements shared within your team in the left sidebar.

There are two ways to access the Private API Network:

* Select **Home** from the Postman header, then select **Private API Network** in your team information on the left sidebar.
* Select **API Network** from the Postman header, then select **Private API Network**.

## Searching, filtering, and sorting

There are several ways to search, filter, and sort elements and folders in the Private API Network. You can search and sort all elements and folders from the left sidebar. You can also select a folder to search, filter, and sort elements on the right.

You can search and sort elements and folders from the left sidebar.

<img alt="Create new folder in Private Network" src="https://assets.postman.com/postman-docs/v10/private-api-network-organize-folders-v10-2.jpg" width="300px"/>

Select <img alt="Home icon" src="https://assets.postman.com/postman-docs/v10/icon-home-v10.jpg#icon" width="16px"> **Home** in the left sidebar to search, filter, and sort all elements in your Private API Network.

* To search by name, enter the full or partial element or folder name into **Search elements and folders**.
* To sort elements and folders, select the sort icon <img alt="Sort icon" src="https://assets.postman.com/postman-docs/icon-sort.jpg#icon" width="16px">. Options are:
    * **Default** - Sort by type, grouping folders and elements by type.
    * **Date added** - Sort by the date that elements and folders were added.
    * **A to Z** - Sort elements and folders alphabetically.

### Search using the Private API Network overview

You can search, filter, and sort Private API Network folders as well as elements with the overview feature.

* Select <img alt="Home icon" src="https://assets.postman.com/postman-docs/v10/icon-home-v10.jpg#icon" width="16px"> **Home** in the left sidebar to search, filter, and sort all elements in your Private API Network.
* Select a folder from the left sidebar to search, filter, and sort its elements in the folder overview on the right.

<img alt="Private API List" src="https://assets.postman.com/postman-docs/v10/private-api-network-list-v10-2.jpg"/>

The **All APIs, collections and workspaces** section in the overview lets you search, sort, and filter with the following options:

* To search by name, enter the full or partial element name into **Search elements**.
* To filter based on the person who added the element, select **Added by**, then select the name of the team member.
* To filter by element type, select **Type**, then select **API**, **Collection**, or **Workspace**.
* To filter based on element tags, select **Tags**, then select the tags. Learn more about adding tags to [collections](/docs/collections/using-collections/#tagging-a-collection), [APIs](/docs/designing-and-developing-your-api/managing-apis/#tagging-apis), and [workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#tagging-a-workspace).
* To sort elements, select the **Sort by** dropdown list. Options are:
    * **Recently added** - Sort elements by the date they were added.
    * **A to Z** - Sort elements alphabetically.
    * **Trending this week** - Sort elements by your team's usage this week.
    * **Trending this month** - Sort elements by your team's usage this month.

## Reviewing details about elements

To review information about an element, select it from the left sidebar. On the right, you can view the element's description and the editors who have worked on it.

For workspaces, you can view all of the collections and APIs inside them. For collections, you can view available documentation; you can select **Try Request** next to a request or **Try Example** next to an example to open it in a new tab. For APIs, you can view definitions and associated collections.

To learn more about trying an example, see [Trying an example](/docs/sending-requests/examples/#trying-an-example).

You can also open the element in its workspace. Select an element from the left sidebar, and then select either **View in Workspace** or **Open Workspace** in the upper-right corner.

## Sharing folders and elements

You can share links to folders and individual elements with other team members. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a folder or element, then select **Copy link**. This copies the link to your clipboard. You can then share the link with team members.

> You can also select a folder or element in the sidebar. Then select <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg#icon" width="18px"> **Copy link** in the upper-right corner.

## Watching and forking elements

You can watch workspaces, collections, and APIs from the Private API Network. You can also fork collections from the Private API Network.

To watch a workspace, collection, or API and get notified about any changes, select an element in the left sidebar, then select <img alt="Watch icon" src="https://assets.postman.com/postman-docs/eye.jpg#icon" width="16px"> **Watch** in the upper-right corner. To learn more about watch notifications, see [Watching a workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#watching-a-workspace), [Watching a collection](/docs/collections/using-collections/#watching-a-collection), and [Watching APIs](/docs/designing-and-developing-your-api/managing-apis/#watching-apis).

To fork a collection, select a collection in the left sidebar, then select <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="14px"> **Fork** in the upper-right corner. To learn more about forking collections, see [Forking Postman entities](/docs/collaborating-in-postman/using-version-control/forking-entities/).

## Private API Network reports

The report feature makes it easier to govern your internal API landscape through deeper insights into APIs in your Private API Network.

To view Private API Network reports, select [**Home**](https://go.postman.co/) from the Postman header, then select **Reports** on the left side.

To learn more about reports, see [About reports](/docs/reports/reports-overview/).
