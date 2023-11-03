---
title: "Work with environments as a team in Postman"
updated: 2023-10-26
search_keyword: "pm.globals.set, globals.set, pm.environment.set, environment.set, pm.variables.get, variables.get, pm.globals.get, globals.get, pm.environment.get, environment.get"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman | How to Use Environments"
    url:  "https://youtu.be/oCEDjp3XMco"
  - type: link
    name: "Intro to Postman | Chain Requests"
    url: "https://youtu.be/4fULCou_7Wc"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "How to Control Access to Variables, Workflows, and More"
    url:  "https://blog.postman.com/postman-environments-how-to-control-access-to-variables-workflows-and-more/"
  - type: link
    name: "Dynamically unset environment variables"
    url: "https://blog.postman.com/pro-tip-dynamically-unset-postman-environment-variables/"
  - type: link
    name: "Securely Using API Keys in Postman"
    url: "https://blog.postman.com/how-to-use-api-keys/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Hathway uses separate environments for each client"
    url: "https://www.postman.com/case-studies/hathway/"
---

An [environment](/docs/sending-requests/environments/managing-environments/) enables you to collaborate on Postman data when you're working as part of a team. You can use environments to share a group of variable values and use those values when sending requests. You can also use environments to share and manage the visibility of sensitive data such as API secrets, passwords, tokens, and keys.

To get started, [create a new environment](/docs/sending-requests/environments/managing-environments/#create-an-environment), move an environment, or fork an environment in your team workspace. Then assign roles to team members to specify who can view or edit the environment.

## Contents

* [Move an environment to a shared workspace](#move-an-environment-to-a-shared-workspace)
* [Manage environment roles](#manage-environment-roles)
    * [Use an environment in Viewer role](#use-an-environment-in-viewer-role)
    * [Request environment access](#request-environment-access)
    * [Use an environment in Editor role](#use-an-environment-in-editor-role)
* [Fork environments](#fork-environments)
* [View pull requests, forks, and environment details](#view-pull-requests-forks-and-environment-details)

## Move an environment to a shared workspace

You can move environments to shared workspaces to collaborate with your team.

> You must be an Editor on an environment or the Workspace Admin to move an environment to another workspace. To learn more about roles and permissions, see [Defining roles](/docs/collaborating-in-postman/roles-and-permissions/).

In the sidebar, select the environment you want to share, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Move**.

Use the search bar to find the workspace you want to move the environment to, or filter by workspace visibility by selecting the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px">.

You can share environments to personal, private, team, and public workspaces that you have access to. Shared private, team, and public workspaces allow you to collaborate with others.

> You can't move environments from team, private, or public workspaces to a personal workspace.

<!-- -->

> Refer to [Roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/) for information on workspace access control within your team.

Select the workspace, then **Move Environment**.

<img alt="Move environment" src="https://assets.postman.com/postman-docs/move-environment-v9.1.jpg" width="400px"/>

Note that monitors, mock servers, and integrations in the original workspace that are using the environment may no longer work and will need to be re-configured in the new workspace. Collections and APIs that use the environment must be [moved separately](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/#moving-elements-to-team-workspaces).

You can manage roles on an environment by navigating to it in the sidebar, selecting it, then selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Manage Roles**.

<img alt="Manage roles environment" src="https://assets.postman.com/postman-docs/environment-manage-roles-v9.1.jpg" width="250px"/>

You can also remove a shared environment from a workspace by selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the environment name and choosing __Move__ to move it to a different workspace or **Delete** to delete it entirely.

To export an environment, select it and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> in the upper right > **Export**.

<img alt="Export environment" src="https://assets.postman.com/postman-docs/environment-export-v9.1.jpg" width="250px" />

> If you want to make variables available in the workspace no matter which environment is active, use global variables. In a shared workspace, any global variables you create and update will be available to others in the workspace. You can define variables as [secret type](/docs/sending-requests/variables/#variable-types) to mask the initial and current values for all workspace members and prevent unintentional disclosure of sensitive data. You can also use the __Current Value__ of global variables to restrict certain values from collaborators, but by default the __Initial value__ of a global variable is generally accessible throughout the workspace.

## Manage environment roles

You can manage roles on an environment by selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> in the upper right > **Manage Roles**.

You can assign collaborators the Editor or Viewer role. Team members with the Viewer role can only edit the current values of variables, but they can use the environment when sending requests. If a user requires edit access, they can request it when viewing the environment in the editor.

If you have Viewer access to an environment, a lock icon <img alt="Lock icon" src="https://assets.postman.com/postman-docs/icon-lock.jpg#icon" width="11px"> next to the name indicates that it's read-only. You will only be able to edit the current value, which is visible only to you and not synced with your Postman account or workspace. To edit initial values you will need to **Request Access**.

> If you are working with environments as part of a team, you must have the Editor role to be able to edit the environment or change initial values for variables. If you have the Viewer role, you can access all variables in environments shared with you and edit current values, but you won't be able to edit the environment or initial values. Learn more about [managing environment roles](/docs/sending-requests/environments/team-environments/#manage-environment-roles).

![Viewer role on environment](https://assets.postman.com/postman-docs/request-access-env-v9.13.jpg)

For more details, see [Environment roles](/docs/collaborating-in-postman/roles-and-permissions/#environment-roles).

### Use an environment in Viewer role

If you have the Viewer role for an environment, you will be able to access the value of the variables to use them in your requests, but won't be able to update the __Initial value__, which is shared with your team. You can update the __Current value__, but this isn't shared with anyone on your team or synced with your Postman account.

If you are using sensitive data like API credentials, it's safer to use the current value of an environment variable for these. You won't be able to __Persist__ the current values to update the initial values of environment variables without edit access to the environment. You can use the __Reset__ option to update your local current values with the shared initial value at any time.

### Request environment access

If you need to update the initial value of a variable in an environment you have read-only access to, you can request edit access. Open the environment from __Environments__ in the sidebar and select __Request Access__.

[![Viewer role on environment](https://assets.postman.com/postman-docs/request-access-env-v9.13.jpg)](https://assets.postman.com/postman-docs/request-access-env-v9.13.jpg)

Select the team member you want to submit the request to, and select the __Editor__ role. Select __Request Access__. You will receive an email when your request is approved.

### Use an environment in Editor role

If you have edit access to an environment, you can update the variable values from Postman and from your scripts. If you are using sensitive data such as API secrets, passwords, tokens, or keys, you can define variables as [secret type](/docs/sending-requests/variables/#variable-types) to mask their initial and current values. You can also opt to only use current values, which aren't synced or shared with your team.

When you edit the initial value of a shared environment variable, your updated value will be reflected for everyone who has access to the environment, so ensure that you only do this when you are happy for your value to be synced with the Postman servers.

> If you clear the checkbox for a variable in your environment, it will only be available to collaborators who also have Editor access to the environment. The variable's listing will also indicate whether it's active. Anyone with the Viewer role for the environment won't be able to access the cleared variable.

With the Editor role, you can [configure access for other team members](#managing-environment-roles). If you need to specify access but don't have the Editor role, you can [request access](#request-environment-access).

## Fork environments

You can fork environments to change them without impacting their base versions, or to contribute to their development without having Editor access.

1. Hover over the environment in the sidebar and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.
2. Select **Create a Fork**.

> You can also fork an environment by selecting **Fork** <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="14px"> in the environment overview tab.

You can edit your environment fork and use it as needed, or you can [create a pull request](/docs/collaborating-in-postman/using-version-control/creating-pull-requests/) to update the original environment.

## View pull requests, forks, and environment details

You can view all pull requests, forks, and details about an environment from the right sidebar.

* To view pull requests, select the pull request icon <img alt="Pull request icon" src="https://assets.postman.com/postman-docs/icon-pull-request.jpg#icon" width="16px">
* To view forks, select the fork icon <img alt="Fork icon" src="https://assets.postman.com/postman-docs/icon-fork.jpg#icon" width="16px">
* To view additional information about the environment, including its ID, creator, and any mock servers or monitors that use it, select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px">

If you have [Editor access](/docs/collaborating-in-postman/roles-and-permissions/#environment-roles) on the environment, you can [review pull requests](/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/#reviewing-pull-requests) and [merge changes into the parent environment](/docs/collaborating-in-postman/using-version-control/forking-elements/#merging-changes-from-a-fork).
