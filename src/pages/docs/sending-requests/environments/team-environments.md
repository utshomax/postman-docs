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
    * [Export an environment](#export-an-environment)
    * [Share an environment](#share-an-environment)
* [Manage environment roles](#manage-environment-roles)
    * [Use an environment in Viewer role](#use-an-environment-in-viewer-role)
    * [Use an environment in Editor role](#use-an-environment-in-editor-role)
    * [Request access to an environment](#request-access-to-an-environment)
    * [Manage sensitive variable values](#manage-sensitive-variable-values)
* [Fork environments](#fork-environments)
* [View pull requests, forks, and environment details](#view-pull-requests-forks-and-environment-details)

## Move an environment to a shared workspace

To collaborate with others, move an environment to a shared workspace. You can share data with other team members in private and workspaces, or share data with anyone using public workspaces.

> You must be an Editor on an environment or a Workspace Admin to move the environment to another workspace. Learn more about [managing environment roles](#manage-environment-roles).

To move an environment to another workspace, do the following:

1. Select **Environments** in the sidebar and select an environment.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Move**.
1. Use the search bar to find the workspace you want to move the environment to. You can also select the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px"> to filter workspaces by type.

    > You can move environments to personal, private, team, and public workspaces that you have access to. You can't move environments from team, private, or public workspaces to a personal workspace.

1. Select the workspace, then select **Move Environment**.

    <img alt="Move environment" src="https://assets.postman.com/postman-docs/move-environment-v9.1.jpg" width="400px"/>

> Monitors, mock servers, and integrations in the original workspace that use the environment may no longer work and will need to be reconfigured in the new workspace. Collections and APIs that use the environment must be [moved separately](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/#moving-elements-to-team-workspaces).

### Export an environment

Another way to move an environment is to export it from one workspace and import it into a different workspace.

1. Select **Environments** in the sidebar and select an environment.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Export**.
1. Select **Save** to download the generated JSON file.

You can import the JSON file into another workspace. Learn more about [data import and export](/docs/getting-started/importing-and-exporting/importing-and-exporting-overview/).

### Share an environment

After you move an environment, you can share it with others and add them as collaborators.

1. Select **Environments** in the sidebar and select an environment.
1. Select the share icon <img alt="Share icon" src="https://assets.postman.com/postman-docs/icon-share.jpg#icon" width="16px">.
1. Enter the names, group names, or email addresses you want to share the environment with.
1. If you have the Editor role for the environment, select the role you want your collaborators to have (Viewer or Editor).
1. Select **Share**.

Postman will notify the people you shared the element with about your request to collaborate. Learn more about [sharing your work in Postman](/docs/collaborating-in-postman/sharing/).

> To copy a link to the environment you can share with others, select the link icon <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg#icon" width="18px"> next to the environment's name.

## Manage environment roles

Your role determines that actions you can take with an environment. You can have the Editor or Viewer role for an environment.

> You must be an Editor on an environment or a Workspace Admin to assign environment roles. Learn more about [environment roles](/docs/collaborating-in-postman/roles-and-permissions/#environment-roles).

To manage roles for an environment, do the following:

1. Select **Environments** in the sidebar and select an environment.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and select **Manage Roles**.
1. Enter the name, group name, or email address you want to assign a role to.
1. Select the role you want your collaborators to have:

    * **Editor** - Users can manage and edit the environment.
    * **Viewer** - Users can view and share the environment.
    * **Remove** - Users will no longer have access to the environment.

1. Select **Update Roles**.

### Use an environment in Viewer role

If you have the Viewer role for an environment, you can access the values of all variables in the environment. You can update a variable's current value, which is used to send requests in your local Postman instance and isn't shared with your team or synced to your Postman account. You can't edit the environment or update a variable's initial value, which is synced to the workspace and shared with your team.

If you have Viewer access to an environment, a lock icon <img alt="Lock icon" src="https://assets.postman.com/postman-docs/icon-lock.jpg#icon" width="11px"> displays next to the environment's name to indicate that it's read-only. If you need to edit the environment or initial values for variables, [request Editor access to the environment](#request-access-to-an-environment).

### Use an environment in Editor role

If you have the Editor role for an environment, you can edit the environment and update a variable's initial value. You can also [create and update variables from your scripts](/docs/sending-requests/environments/environment-variables/#set-environment-variables-from-scripts).

When you edit the initial value of a shared environment variable, your updated value will be reflected for everyone who has access to the environment. Make sure it's safe to share the value with your team and sync it with Postman's servers. Learn more about [managing sensitive variable values](#manage-sensitive-variable-values).

> If you clear the checkbox next to an environment variable, the variable is not available for use, and references to the variable will be unresolved. Users with the Viewer role won't be able to change this setting to make the variable available again.

### Request access to an environment

If you need to update the initial value of a variable in an environment you have Viewer access to, you can request Editor access.

1. Select **Environments** in the sidebar and select an environment.
1. Select **Request Access**.
1. Select the team member you want to send the request to, and select the **Editor** role.
1. Select **Send Request**. You'll get an email when your request is approved.

![Viewer role on environment](https://assets.postman.com/postman-docs/request-access-env-v9.13.jpg)

### Manage sensitive variable values

If you are using sensitive data like API credentials, it's safer to use the current value of an environment variable for these. You won't be able to __Persist__ the current values to update the initial values of environment variables without edit access to the environment. You can use the __Reset__ option to update your local current values with the shared initial value at any time.

If you are using sensitive data such as API secrets, passwords, tokens, or keys, you can define variables as [secret type](/docs/sending-requests/variables/#variable-types) to mask their initial and current values. You can also opt to only use current values, which aren't synced or shared with your team.


In a shared workspace, any global variables you create and update will be available to others in the workspace. You can define variables as [secret type](/docs/sending-requests/variables/#variable-types) to mask the initial and current values for all workspace members and prevent unintentional disclosure of sensitive data. You can also use the __Current Value__ of global variables to restrict certain values from collaborators, but by default the __Initial value__ of a global variable is generally accessible throughout the workspace.

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
