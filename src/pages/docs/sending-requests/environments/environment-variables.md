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

An environment is a set of [variables](/docs/sending-requests/variables/) you can use in your Postman requests. You can use environments to group related sets of values together and manage access to shared Postman data if you are working as part of a team.

## Contents

* [Editing environment variables](#editing-environment-variables)
* [Setting environment variables from scripts](#setting-environment-variables-from-scripts)
* [Persist environment variables](#persist-environment-variables)

## Editing environment variables

You can edit variables either by opening an environment from __Environments__ on the left, or by selecting the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> next to the [environment selector in the workbench](/docs/getting-started/basics/navigating-postman/#environment-selector-and-environment-quick-look) and selecting __Edit__. You can sort the list of variables by selecting any column heading to toggle between alphabetical ascending or descending order and custom order. To sort the list by a custom order, clear the active sort then drag rows to reorder using the handle on the left-hand side.

> You will only be able to edit environments where you have [Editor access](#requesting-environment-access).

![Edit environment](https://assets.postman.com/postman-docs/v10/environment-editor-v10-18.jpg)

Edit the environment name, or the names, [types](/docs/sending-requests/variables/#variable-types), and values of your variables, bearing in mind that __Initial values__ will be synced with your Postman account and shared with any collaborators who have access to the environment. Select __Save__ when your edits are complete.

[![Viewer role on environment](https://assets.postman.com/postman-docs/request-access-env-v9.13.jpg)](https://assets.postman.com/postman-docs/request-access-env-v9.13.jpg)

If you have Viewer access to an environment, a lock icon <img alt="Lock icon" src="https://assets.postman.com/postman-docs/icon-lock.jpg#icon" width="11px"> next to the name indicates that it's read-only. You will only be able to edit the current value, which is visible only to you and not synced with your Postman account or workspace. To edit initial values you will need to **Request Access**.

> You can edit current values for variables in an active (currently selected) environment directly using the environment quick look. Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> to edit your chosen value.

<img alt="Using the environment quick look" src="https://assets.postman.com/postman-docs/v10/environment-quick-look-edit-v10.jpg" width="700px"/>

You can also update environment variable values from your test scripts.

## Setting environment variables from scripts

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
