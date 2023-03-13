---
title: "Live Collections settings"
updated: 2023-03-15
---

You can configure Live Collections from the Live Collections right sidebar. You can also configure data redaction directly within your service.

## Contents

* [Live Collections configuration options](#live-collections-configuration-options)
* [Redacting data in the service code](#redacting-data-in-the-service-code)

## Live Collections configuration options

Select the <img alt="Live Collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> in the right sidebar of a Live Collection to view configuration options.

<img alt="Live Collections settings page" src="https://assets.postman.com/postman-docs/v10/live-collections-settings-page.jpg" width="350px">

This page shows when a Live Collection was last updated. The following options are available:

* Select **Status** to turn data collection on or off for the Live Collection.
* Choose how updates are performed. You can choose whether changes to a Live Collection are automatically updated, or changes must be reviewed before updating. For more information, see [Updating Live Collections](/docs/collections/live-collections/update-live-collections/).
* Select **Save Changes** to apply changes.

## Redacting data in the service code

Data redaction and truncation settings can be configured directly in the service that was instrumented. This ensures that sensitive data does not reach Postman. The data redaction rule takes in a regular expression to identify the text that needs to be redacted.

The data redaction and data truncation rules can be set up by adding the following lines of code in the service that was instrumented:

```json
dataTruncation: true,
dataRedactions: {
    rules: {
        api_key: '\\b\\w{32}\\b',
        email_rule: '([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})',
        bearerToken: '[bB]earer ([a-zA-Z]+[0-9]|[0-9]+[a-zA-Z]])[a-zA-Z0-9/+_.-]{15,1000}(?![a-zA-Z0-9/+.-])',
    }
}
```

The data redaction rules obfuscate values for those fields.

The data truncation option in the configuration truncates the actual values for the different fields.

<img alt="Live Collections data truncation" src="https://assets.postman.com/postman-docs/v10/live-collections-data-truncation.jpg" width="250px">
