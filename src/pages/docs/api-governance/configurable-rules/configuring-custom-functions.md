---
title: "Configuring custom functions"
updated: 2023-03-15
---

> [Configurable API Governance custom functions are available on Postman Enterprise plans.](https://www.postman.com/pricing) If you don't have an Enterprise account, you'll be able to see the API Governance page, but you won't be able to configure custom functions.

Team Admins with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can can create custom functions that you can use in your [custom API Governance rules](/docs/api-governance/configurable-rules/configuring-api-governance-rules/#adding-custom-rules). You can write custom functions in JavaScript.

## Contents

* [Adding a custom function](#adding-a-custom-function)
* [Adding a custom function to a custom rule](#adding-a-custom-function-to-a-custom-rule)
* [Editing a custom function](#editing-a-custom-function)
* [Removing a custom function](#removing-a-custom-function)

## Adding a custom function

You can add custom governance functions to use in your [custom API Governance rules](/docs/api-governance/configurable-rules/configuring-api-governance-rules/#adding-custom-rules). Postman provides you with a boilerplate function to help you start writing your custom governance function.

1. Go to the [Postman home screen](https://go.postman.co/), and then select **API Governance** from the team information pane.
1. Select the **Rule Library** tab, and then select the **Functions** tab.
1. Select **Create Function**.
1. Name the function, and then write the function in the editor. For more information about writing custom functions, see the [Spectral documentation](https://github.com/stoplightio/spectral/blob/develop/docs/guides/5-custom-functions.md).

    > Postman will prompt you with suggestions as you enter text. Select one to autocomplete your code.

1. Select **Create**.

## Adding a custom function to a custom rule

To add a custom function to a custom API Governance rule, first [add a custom function](#adding-a-custom-function), and then begin the steps to [add a custom rule](/docs/api-governance/configurable-rules/configuring-api-governance-rules/#adding-custom-rules).

To use a custom function, add the following property-value pairs to your custom rule:

* **Load the function in your rule.** Add the `functions` property to the rule, and add the custom function name as its value to load it in your rule (for example, `functions: [custom_function_name]`).
* **Use the function in your rule.** Add the `then.function` property to the rule, and add the custom function name as its value to use it in your rule (for example, `function: custom_function_name`). If your custom function accepts options, you can also add the `then.functionOptions` property.

```json
functions: [custom_function_name]
rules:
  custom_rule_name:
    # ...
    then:
      function: custom_function_name
```

> For more information about adding a custom function to a custom rule, see the [Spectral documentation](https://github.com/stoplightio/spectral/blob/develop/docs/guides/5-custom-functions.md).

Then select **Create** to create a custom rule that uses a custom function.

> You can't edit rules. To add a custom function to an existing rule, delete the rule and then use the custom function in the new rule.

## Editing a custom function

To edit a custom API Governance function, select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to its name. Edit the function, and then select **Save**.

## Removing a custom function

To remove a custom API Governance function, select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to its name.

If you remove a custom function using the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">, you'll need to add it back into Postman using **Create Function** if you want to use it again.
