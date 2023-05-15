---
title: "Requesting access to elements"
order: 73
page_id: "requesting-access-to-elements"
updated: 2023-05-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sharing your work"
    url: "/docs/collaborating-in-postman/sharing/"
  - type: link
    name: "Defining roles"
    url: "/docs/collaborating-in-postman/roles-and-permissions/"
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Requesting Edit Access | Postman Level Up"
    url: "https://youtu.be/H-93OfONSsg"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "2 Ways to Access and Edit a Postman Element"
    url: "https://blog.postman.com/access-and-edit-postman-element/"
warning: false

---

By default, you can view [workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/) and the Postman elements in them that are shared with your team. If you need to edit an element, such as a workspace, collection, API, environment, mock server, or monitor, you can request [Editor role](/docs/collaborating-in-postman/roles-and-permissions/) access.

To request role access for an element, you first need to join or get invited to the [shared workspace](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/) that has the element, or be an [external user with permission to view a collection](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections). After you submit a request for access, your teammates with Admin access for the workspace or Editor access for the API, collection, environment, mock server, or monitor will receive a notification requesting their approval.

> Roles and permissions are available depending on your [Postman plan](https://www.postman.com/pricing).

## Contents

* [Requesting role access for workspaces](#requesting-role-access-for-workspaces)
* [Requesting Editor role access for elements](#requesting-editor-role-access-for-elements)
    * [Requesting Editor role access for an element](#requesting-editor-role-access-for-an-element)
    * [Requesting Editor role access for a collection as an external user](#requesting-editor-role-access-for-a-collection-as-an-external-user)
* [Approving requests for access](#approving-requests-for-access)

## Requesting role access for workspaces

You can request Editor access for a workspace to gain [additional permissions](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles).

To request an Editor role, open the workspace overview, then select **Request to Edit** in the upper-right corner. Alternatively, you can request access when you attempt to create an element in the workspace by selecting the create new icon <img alt="Create new icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px"> in the left sidebar.

<img alt="Request workspace editor role" src="https://assets.postman.com/postman-docs/v10/request-workspace-editor-role-v10.14.0.jpg" width="400">

You can add a note to the Workspace Admins, then select **Request Access**.

Workspace Admins will receive an in-app and email notification detailing your request. When it's approved or denied, you'll be notified in-app and by email of their response.

## Requesting Editor role access for elements

If you can view an element in a workspace but can't edit it, there is a lock icon <img alt="Lock icon" src="https://assets.postman.com/postman-docs/icon-lock.jpg#icon" width="11px"> next to the name of the collection, API, environment, mock server, or monitor.

<img alt="Collection Lock" src="https://assets.postman.com/postman-docs/collection-lock-v9-14.jpg" width="292px">

### Requesting Editor role access for an element

1. Select **Collections**, **APIs**, **Environments**, **Mock Servers**, or **Monitors** in the sidebar.

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the element name and select **Manage Roles**.

    <img alt="Collection Context Menu" src="https://assets.postman.com/postman-docs/collection-context-menu-v9-14.jpg" width="292px">

1. Select **Request Access**.

    <img alt="Manage Roles Blocked" src="https://assets.postman.com/postman-docs/manage-roles-blocked-v9-14.jpg" width="848">

1. Select the person you want to send the request to, and select the **Editor** role.

    <img alt="Request Editor Access" src="https://assets.postman.com/postman-docs/request-additional-access-v9-14.jpg" width="482">

1. Select **Request Access**.

Postman will send an in-app and email notification to the person you selected. Once they approve your request, you will also get notified in-app and by email. Your request will expire after 15 days, after which you can request access again.

### Requesting Editor role access for a collection as an external user

You can request Editor role access for a collection if you're an [external user who is allowed to view the collection](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections). When you get Editor role access to a collection, your [team role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) also changes from the Guest role to the Developer role. This team role change adds you to the team and gives you access to all team resources and workspaces.

1. Select **Collections** in the sidebar.
1. Select the collection.
1. Select **Request to Edit**.

![Request Editor role](https://assets.postman.com/postman-docs/v10/guest-role-request-to-edit-v10.jpg)

> Your team must have [available seats](/docs/administration/billing/#changing-your-plan) or [Auto-Flex enabled](/docs/administration/billing/#using-auto-flex) to give an external user Editor role access to a collection.

Postman will send in-app and email notifications to team members with Editor role access to the collection.

## Approving requests for access

If you're an Admin of a workspace or an Editor of an API, collection, environment, mock server, or monitor, you may receive a request to give a teammate role access.

When a teammate requests Editor role access for an API, collection, environment, mock server, or monitor, you'll receive an in-app and email notification that details the request. Select **Approve Request** if you want to give your teammate Editor role access to the collection, API, environment, mock server, or monitor. If you don't want to give Editor access, you can ignore the request. The request will expire after 15 days.

When a teammate requests Editor role access for a workspace, you'll receive an in-app and email notification detailing the request. Select **Respond to Request** to open the workspace settings. You can select the role you'd like to give the user, then **Approve** or **Deny** the request.
