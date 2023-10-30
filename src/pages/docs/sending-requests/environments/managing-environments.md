---
title: "Group sets of variables in Postman using environments"
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

In Postman, an _environment_ is a set of one or more [variables](/docs/sending-requests/variables/) that you can reference when [sending requests](/docs/sending-requests/requests/) or [writing test scripts](/docs/writing-scripts/test-scripts/). You can create environments for the different types of work you do in Postman. When you switch between environments, all of the variables in your requests and scripts will use the values from the current environment. This is helpful if you need to use different values in your requests depending on the context, for example, if you're sending a request to a test server or a production server.

> Environments can also help you to collaborate on Postman data if you're working as part of a team. You can use environments to share variables and manage the visibility of sensitive data such as API secrets, passwords, tokens, and keys. Learn more about [working with environments as a team in Postman](/docs/sending-requests/environments/team-environments/).

## Contents

* [Create an environment](#create-an-environment)
* [Add environment variables](#add-environment-variables)
* [Switch between environments](#switch-between-environments)
* [Edit an environment](#edit-an-environment)
* [Next steps](#next-steps)

## Create an environment

Create a new environment when you want to be able to change the values of variables depending on your work context in Postman, or to share values with other team members.

To create a new environment, do the following:

1. Select **Environments** in the sidebar and select **+**.

    <img src="https://assets.postman.com/postman-docs/environment-create-new-v9.13.jpg" alt="Create new environment" width="300px"/>

1. Enter a name for your new environment.

1. Add any variables you want to the environment. You can also add variables later. Learn more about [adding environment variables](#add-environment-variables).

1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save any environment variables you added.

1. To use the new environment, select it from the environment selector at the top right of the workbench. This makes it the active environment and sets all variables to the values specified in the environment. Learn more about [switching between environments](#switch-between-environments).

    <img src="https://assets.postman.com/postman-docs/v10/environment-selector-v10.jpg" alt="Environment selector" width="200px">

> You can turn on autosave to automatically save your changes to collections, requests, and environments. Learn more about [autosave](/docs/getting-started/installation/settings/#application).

## Add environment variables

When you add a variable to an environment, you can specify the _Initial value_ (shared) and the _Current value_ (local) for the variable:

* **Initial (shared) value** - This value is synced to your account using Postman's servers. It's shared with any collaborators who have access to the environment. If the value includes sensitive data such as a password or key, you can mask the value by selecting the **secret** variable type.
* **Current (local) value** - This value is used to send requests in your local instance of Postman. It's never synced to your account or shared with your team _unless you [choose to persist it](/docs/sending-requests/variables/#sharing-and-persisting-data)_.

To add variables to an environment, do the following:

1. Select **Environments** in the sidebar and select an environment. To add a new variable, select the bottom row of the table.

    ![Add Environment](https://assets.postman.com/postman-docs/v10/environment-editor-v10-18.jpg)

1. Enter a name for the **Variable**.

1. Select a variable **Type**. If you select **default** the variable value is stored in plain text. If you select **secret** the variable value is masked.

    > If you are sharing an environment, make sure to choose the **secret** variable type to not expose data to your team.




Enter a name for your variable, and specify its __Initial__ and __Current__ values. By default the current value will copy the initial value when you save the environment.

* The __Initial value__ is synced to your account using the Postman servers. It's shared with any collaborators who have access to the environment.
* The __Current value__ is used in your local instance of Postman, and is never synced to your account or shared with your team _unless you choose to persist it_.

## Switch between environments

Postman displays the active environment in the environment selector, located in the top right of the workbench.

You can access all environments from __Environments__ in the sidebar. Select the set active icon <img alt="Set active icon" src="https://assets.postman.com/postman-docs/icon-checkmark-v9.jpg#icon" width="16px"> next to an environment to make it the active environment.

Select an environment's name to open the environment editor.

<img alt="Environment editor" src="https://assets.postman.com/postman-docs/v10/environment-editor-select-env-v10-10.jpg" width="250px">

The environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> is next to the environment selector. The environment quick look lists variables for the active environment, and any global variables you have declared or that are shared in your workspace.

<img alt="Selecting the environment quick look" src="https://assets.postman.com/postman-docs/v10/environment-quick-look-selector-v10.jpg" width="250px"/>

To use the variables in an environment, select it from the environment selector at the top right of the workbench.

<img src="https://assets.postman.com/postman-docs/v10/environment-selector-v10.jpg" alt="Environment selector" width="200px">

To check a variable value at a glance, use the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px">.

When you choose an environment using the environment selector, Postman treats it as the active environment and runs all requests with values from that environment (if your requests reference environment variables).

To use an environment variable value in a request, reference it by name, surrounded with [double curly braces](/docs/sending-requests/variables/):

```js
{{base_url}}
```

You can use the same variable notation in request URLs, parameters, headers, and body data.

<img alt="Environment var reference" src="https://assets.postman.com/postman-docs/v10/env-hover-v10.jpg" width="500px"/>

Hover over a variable reference to get its current value.

> If more than one variable with the same name is available to a request, Postman will use the value from the variable with narrowest [scope](/docs/sending-requests/variables/#variable-scopes). This means that if you have an environment variable with the same name as a collection or global variable, Postman will use the environment variable, but local and data variable values will supersede environment values. The value of any overridden variables will display with a strikethrough.

You can access current environment variable values in your __Pre-request__ and __Tests__ code.

```js
pm.environment.get("variable_key");
```

> You can publish environments with your [API documentation](/docs/publishing-your-api/publishing-your-docs/) and the [Run in Postman button](/docs/publishing-your-api/run-in-postman/creating-run-button/).

## Edit an environment

You can access your environment variables from Postman and from your request elements, including the URL, parameters, body data, and test scripts.

For the list of all your environments, select __Environments__ in the sidebar.

<img src="https://assets.postman.com/postman-docs/environments-view-menu-v9.13.jpg" alt="View all environments" width="300px"/>

Here you can add, share, duplicate, download, manage access, delete, and remove a shared environment from a workspace. You can also access your global variables by selecting __Globals__.

To view the variables in an environment, select its name. You can edit, add, and remove variables from the environment here. You can also use the **Filter variables** control to search for variables in the environment.

![Edit environment](https://assets.postman.com/postman-docs/v10/environment-editor-v10-18.jpg)

Edit the variable names and values inline, or use the close icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> to delete a variable. Enter the name and values for a new variable on a new line. __Save__ when your changes are complete.

Alternatively, select the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> and edit inline.

> If you are working with environment variables as part of a team, you will only be able to change initial values if you have [edit access to the environment](#managing-environment-roles). You can access all variables in environments shared with you, but may have read-only access to initial values if you have a Viewer role.

## Next steps

Shared environments allow you to leverage collaboration within Postman. Check out some more resources on how you can work with team members on your API development projects:

* To learn more about how to use Postman with your team, visit [Collaborating in Postman](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/).
* To learn more about how create a workspace in Postman, visit [Intro to workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/).
* To learn more about how to share access to your APIs, visit [Managing and sharing APIs](/docs/designing-and-developing-your-api/managing-apis/).
* To learn how to use version control to collaboratively build an API, visit [Version control in Postman](/docs/collaborating-in-postman/using-version-control/version-control-overview/).
