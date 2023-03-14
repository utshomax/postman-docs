---
title: "Live Collection settings"
updated: 2023-03-15
---

You can configure Live Collections settings such as update preference or status from the right sidebar in Postman. You can configure data redaction and data truncation settings only within the instrumentation code in your service.

## Contents

* [Live Collections configuration options](#live-collections-configuration-options)
* [Redacting sensitive data](#redacting-sensitive-data)

## Live Collections configuration options

To view Live Collections configuration options, select a collection, and then select the Live Collections icon <img alt="Live collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> in the right sidebar. You can also hover over the Live Collections icon <img alt="Live collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> next to the collection name, then select **Live settings**.

<img alt="Live Collections settings page" src="https://assets.postman.com/postman-docs/v10/live-collections-settings-page.jpg" width="350px">

The following configuration options are available:

* Select **Status** to turn data collection on or off for the Live Collection. Turning off data collection ensures that the Postman SDK does not send any data to the Postman cloud. This will also stop detecting any changes to the request, and stop automatic or manual updates to the collection.

* Select how updates are performed. You can choose whether changes to a Live Collection are automatically updated, or if changes must be reviewed before updating. For more information, see [Updating Live Collections](/docs/collections/live-collections/update-live-collections/).
* Select **Save Changes** to apply changes.

## Redacting sensitive data

You can configure data redaction and truncation settings for your application. This ensures that sensitive data does not reach Postman. The data redaction rule uses a regular expression to identify the text to be redacted.

To set up the data redaction and data truncation rules add the following lines of code in your application:

```json
truncateData: true,
redactSensitiveData: {
	enable: true,
	rules: {
		api_key: '\\b\\w{32}\\b',
		email_rule: '([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})',
		bearerToken: '[bB]earer ([a-zA-Z]+[0-9]|[0-9]+[a-zA-Z]])[a-zA-Z0-9/+_.-]{15,1000}(?![a-zA-Z0-9/+.-])',
	}
}
```

The data redaction rules obfuscate values for the fields matched by the regular expression.

The data truncation option in the configuration truncates the actual values for all the fields.

<img alt="Live Collections data truncation" src="https://assets.postman.com/postman-docs/v10/live-collections-data-truncation.jpg" width="350px">
