---
title: "Managing your Private API Network"
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

You can manage folders and elements in the Private API Network. You can edit a collection's summary and environments, move folders and elements, rename folders, and remove folders and elements from the network.
[Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) and [API Network Managers](/docs/collaborating-in-postman/roles-and-permissions/#network-roles) can manage all folders and elements in your Private API Network. You can assign team members the [Folder Manager role](/docs/collaborating-in-postman/roles-and-permissions/#network-roles) at the folder level, giving them permission to manage specific folders and the elements in them. Users with the Editor role for an element can also manage the element.

> Enterprise teams can also assign the API Network Manager role to a user group. For more information about assigning team roles to groups, see [User groups](/docs/collaborating-in-postman/user-groups/).

## Contents

* [Managing folders and elements](#managing-folders-and-elements)
* [Editing collections](#editing-collections)
* [Moving folders and elements](#moving-folders-and-elements)
* [Renaming folders](#renaming-folders)
* [Removing folders and elements](#removing-folders-and-elements)

## Managing folders and elements

API Network Managers can manage all folders and elements. Folder Managers can manage folders and elements in folders they have permission to manage. Users with the Editor role for an element can also manage the element.

> You can manage elements within the [Private API Network](/docs/collaborating-in-postman/private-api-network/adding-private-network/#navigating-the-private-api-network) or with the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-b7c02959-88ca-4e2f-9b68-99538eed4533?ctx=documentation).

## Editing collections

You can change a collection's summary and associated environments in the Private API Network. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the collection you would like to edit from the network, then select **Edit collection**. Edit the collection, then select **Edit** to save your changes.

> You can also select a collection in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> in the upper-right corner, then select **Edit collection**.

## Moving folders and elements

You can move folders and elements in the Private API Network. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the folder or element you would like to move in the network, then select **Move...** or **Move element**. You can move folders and elements to an existing folder or create a new one. Select **Move Folder** or **Move element** to save your changes.

> You can also select a folder or element in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> in the upper-right corner, then select **Move...** or **Move element**.

## Renaming folders

You can rename folders in the Private API Network. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the folder you would like to rename, then select **Rename**. Enter a new name, then press **Enter**.

## Removing folders and elements

You can remove folders and elements from the Private API Network. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the folder or element you want to remove from the network, then select **Delete** or **Remove**. To confirm that you want to remove an element from the network, select **Remove**.

> You can also select a folder or element in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> in the upper-right corner, then select **Delete** or **Remove**.

If you have the Editor role for an element, you can also remove elements in your Private API Network from the workbench. For collections and APIs, open the overview then select **Remove**. For workspaces, open the overview, select <img alt="Workspace settings icon" src="https://assets.postman.com/postman-docs/v10/icon-sliders-v10.jpg#icon" width="24px"> **Workspace Settings**, then select **Remove**. To confirm, select **Remove**.

<img alt="Remove collection in Private API Network from workbench" src="https://assets.postman.com/postman-docs/v10/remove-collection-private-api-network-v10.jpg"/>

After you remove the element, team members won't have access to it through the Private API Network.
