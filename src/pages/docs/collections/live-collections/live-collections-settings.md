---
title: "Live Collections settings"
updated: 2023-03-15
---

You can configure Live Collections from the right sidebar in Postman. You can also configure data redaction within your service.

## Contents

* [Live Collections configuration options](#live-collections-configuration-options)
* [Redacting data in the service code](#redacting-data-in-the-service-code)

## Live Collections configuration options

To view Live Collections configuration options, select a collection, and then select the Live Collections icon <img alt="Live collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> in the right sidebar.

<img alt="Live Collections settings page" src="https://assets.postman.com/postman-docs/v10/live-collections-settings-page.jpg" width="350px">

The following configuration options are available:

* Select **Status** to turn data collection on or off for the Live Collection.
* Select how updates are performed. You can choose whether changes to a Live Collection are automatically updated, or if changes must be reviewed before updating. For more information, see [Updating Live Collections](/docs/collections/live-collections/update-live-collections/).
* Select **Save Changes** to apply changes.

## Redacting data in the service code

You can configure data redaction and truncation settings for your application. This ensures that sensitive data does not reach Postman. The data redaction rule uses a regular expression to identify the text to be redacted.

To set up the data redaction and data truncation rules add the following lines of code in your application:

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

The data redaction rules obfuscate values for the specified fields.

The data truncation option in the configuration truncates the actual values for the specified fields.

<img alt="Live Collections data truncation" src="https://assets.postman.com/postman-docs/v10/live-collections-data-truncation.jpg" width="350px">
