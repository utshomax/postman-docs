---
title: "Checking your API Health"
updated: 2023-08-15
---

> [**API Health is available on Postman Free, Basic, and Professional plans.**](https://www.postman.com/pricing)

You can check your API health by evaluating the design quality of your [API definitions](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) in Postman. The Postman API health feature identifies potential security risks your API might be vulnerable to, or potential design issues that might impact its usability.

Postman returns a design quality score based on these findings, and recommends possible fixes or improvements to your API definition file. You can also compare your API's design quality score with industry standard APIs, such as Stripe and WhatsApp. With this feature, you can create better and more secure APIs that follow industry best practices.

## Contents

* [About API health](#about-api-health)
* [Evaluating your API definition](#evaluating-your-api-definition)
* [Reviewing and fixing rule violations](#reviewing-and-fixing-rule-violations)
* [Exporting your updated API definition](#exporting-your-updated-api-definition)
* [Comparing your API](#comparing-your-api)

## About API health

Strong API health means your API design is secure and follows industry best practices. The *Postman API Health* feature evaluates your API definition using Postman API Health rules, and returns each occurrence of each rule violation, giving you the option to automatically fix each rule violation. You can use these rules as a guideline to help you identify potential security risks your API might be vulnerable to, or potential design issues that might impact its usability.

Postman provides a design quality score based on the rule violations it finds. Postman assigns an impact to each rule violation and the number of times each rule violation occurs. This impact is presented in the form of a percentage. A perfect API design quality score is 100%, but the ideal design quality score for your API may vary. Postman recommends often checking your API's health during the development process.

## Evaluating your API definition

To begin evaluating your API health, you must add your API definition file. Postman supports API health for API definitions in [OpenAPI 3.0](/docs/api-governance/api-definition/openapi3/) and [OpenAPI 2.0](/docs/api-governance/api-definition/openapi2/) format.

1. Go to the [Postman home screen](https://go.postman.co/).
1. Select **API Health** from the team information pane.
    > If an API definition is already chosen, select **Discard** to choose a new API definition. Make sure to [export the updated API definition file](#exporting-your-updated-api-definition) to download the file to your local system.
1. Choose an API definition to evaluate. Postman supports both YAML and JSON formats. There are several ways to choose an API definition:
    * Select **Paste Raw text or URL...**, then enter your API definition as raw text or enter a URL.
    * Drag and drop a file, or select a file from your local system.
    * Select **Choose API from workspace** to choose an API in Postman. Select an API from the dropdown list, then select **Generate API Quality Score**. If you don't see the API you're looking for, make sure you have [Editor or Viewer access](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) to the API.

        > To evaluate your API, it must have an [API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/).

1. Review your API's design quality score and [review and fix rule violations](#reviewing-and-fixing-rule-violations).

## Reviewing and fixing rule violations

After you [evaluate your API definition](#evaluating-your-api-definition), you can review and fix rule violations in your API definition. Each rule violation shows the impact it has on your design quality score, the number of times each violation occurred, and the severity level of the rule violation. You can expand the rule to review each occurrence of each rule violation, and learn more about a possible fix.

To fix each occurrence of a rule violation, hover over the rule and select **Autofix**. To fix all rule violations, select **Autofix all issues**.

> Postman can return new rule violations when you manually edit your API definition in the editor.

In the upper right of the API definition editor are options to change the file format, wrap text, copy, search, and undo your last change. When you finish editing your API definition, [export your updated API definition](#exporting-your-updated-api-definition).

> Edits aren't automatically saved to your API in Postman.

## Exporting your updated API definition

To save your changes, export the updated API definition. Select **Export Updated Schema** to download the updated API definition file to your local system. Then you can [import the API definition into Postman](/docs/designing-and-developing-your-api/importing-an-api/) or [add another file to your API definition in Postman](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#adding-files-and-folders).

## Comparing your API

You can compare your API with industry standard APIs, such as Stripe and WhatsApp. Select **Compare with industry standard APIs** to display a table comparing your API with several industry standard APIs. You can compare design quality score, the total number of rule violations, and the number of times each API violates several curated rules.
