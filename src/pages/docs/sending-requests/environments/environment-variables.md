---
title: "Edit and set environment variables in Postman"
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

An [environment](/docs/sending-requests/environments/managing-environments/) is a group of variables whose values you can change depending on your work context in Postman. After you [create an environment](/docs/sending-requests/environments/managing-environments/#create-an-environment), you can add new environment variables, change initial or current values, or delete variables. You can also set environment values using scripts, and you can persist variable values to make them available to your team.

## Contents

* [Edit environment variables](#edit-environment-variables)
* [Edit variables from the environment quick look](#edit-variables-from-the-environment-quick-look)
* [Set environment variables from scripts](#set-environment-variables-from-scripts)
* [Persist environment variables](#persist-environment-variables)

## Edit environment variables

You can edit environment variables by adding new variables, changing a variable's type and values, or deleting variables.

To edit environment variables, select **Environments** in the sidebar and select an environment. From here you can take the following actions:

* To filter the list of environment variables by name, enter text in the **Filter variables** box.
* To sort the list of environment variables, select a column heading. You can toggle between ascending and descending order. To manually sort the list, clear the active sort, then drag rows using the handle.
* To add a new environment variable, select **Add new variable** in the bottom row of the table.
* To delete an environment variable, hover over a variable and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">.
* To make an environment variable unavailable without deleting it, clear the checkbox next to the variable. Any references to the variable will be unresolved. To make the variable available again, select the checkbox.
* Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save any changes you've made.

![Add Environment](https://assets.postman.com/postman-docs/v10/environment-editor-v10-18.jpg)

To edit an environment variable, select the variable and change any of the following:

* **Type** - If you select **default** the variable value is stored in plain text. If you select **secret** the variable value is masked. Learn more about [variable types](/docs/sending-requests/variables/#variable-types).
* **Initial value (shared)** - This value is synced to your account using Postman's cloud servers. It's shared with any collaborators who have access to the environment. It's also made public when [publishing an environment along with a collection](/docs/publishing-your-api/publishing-your-docs/). If the value includes sensitive data, such as a password or key, you can mask the value by selecting the **secret** variable type.
* **Current value (local)** - This value is used when sending requests in your local instance of Postman. It's never synced to your account or shared with your team _unless you [choose to persist it](#persist-environment-variables)_. If you leave the current value blank, the initial value is copied to the current value when you save the environment.

When you are done editing environment variables, select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save your changes.

> If you are working with environments as part of a team, you must have the Editor role to be able to edit the environment or change initial values for variables. Learn more about [managing environment roles](/docs/sending-requests/environments/team-environments/#manage-environment-roles).

## Edit variables from the environment quick look

You can also edit the current value for variables in the active environment from the environment quick look. Select the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> next to the environment selector. Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to a variable, then enter a new current value.

<img alt="Using the environment quick look" src="https://assets.postman.com/postman-docs/v10/environment-quick-look-edit-v10.jpg" width="700px"/>

## Set environment variables from scripts

You can also update environment variable values from your test scripts.

Your __Pre-request__ and __Tests__ scripts can update environment variable values.

Use [pm.environment](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) to set an environment variable in the active (currently selected) environment:

```js
pm.environment.set("variable_key", "variable_value");
```

You can only create new variables from a script in an environment that you have edit access to. If you update or unset a value in a script with Viewer access to the environment, that change will only be visible to you and not shared with your team.

> If you use scripts to set environment variable values, these will be reflected for all requests referencing the variables. For example, you can use environments [in conjunction with the collection runner](/docs/collections/running-collections/intro-to-collection-runs/) and [monitors](/docs/monitoring-your-api/intro-monitors/) to share updated values throughout a run for a series of requests as well as after it completes.

## Persist environment variables

* The __Initial value__ is synced to your account using the Postman servers. It's shared with any collaborators who have access to the environment.
* The __Current value__ is used in your local instance of Postman, and is never synced to your account or shared with your team _unless you choose to persist it_.

To update the synced variable with your local value, set the initial value to the current value by selecting the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> and choosing __Persist__. To reset your local (current) value with the synced value shared with your workspace / collaborators, select __Reset__. You can persist or reset all values in the environment using __Persist All__ and __Reset All__.

You can also define environment variables by **Type**. Variables are automatically assigned the default type when created, which is shown as plain text and has no extra properties. You can change sensitive variables to [secret type](/docs/sending-requests/variables/#variable-types), which masks the initial and current values for all workspace members. Secret type can be used to prevent unintentional disclosure of sensitive data, including API secrets, passwords, tokens, and keys.
