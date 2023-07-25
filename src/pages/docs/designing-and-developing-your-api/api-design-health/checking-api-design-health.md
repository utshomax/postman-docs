---
title: "Checking your API design health"
updated: 2023-08-15
---

> [**API Design Health is available on Postman Free, Basic, and Professional plans.**](https://www.postman.com/pricing)

You can check your API design health by evaluating the design quality of your [API definitions](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/) in Postman. API Design Health identifies potential security risks your API might be vulnerable to, or potential design issues that might impact its usability.

API Design Health returns a design quality score based on these findings, and recommends possible fixes or improvements to your API definition file. You can also compare your API's design quality score with popular APIs, such as Stripe and WhatsApp. With this feature, you can create better and more secure APIs that follow industry best practices.

<!-- screenshot: hero image -->

## Contents

* [About API Design Health](#about-api-design-health)
* [Adding your API definition](#adding-your-api-definition)
* [Reviewing and fixing style guide violations](#reviewing-and-fixing-style-guide-violations)
    * [Comparing your API](#comparing-your-api)
* [Exporting your updated API definition](#exporting-your-updated-api-definition)

## About API Design Health

Strong API design health means your API design is secure and follows industry best practices. API Design Health checks your API definition using the API Design Health style guide for your OpenAPI version, and returns each occurrence of each style guide violation, giving you the option to automatically fix each violation. You can use this style guide as a guideline to help you identify potential security risks your API might be vulnerable to, or potential design issues that might impact its usability.

API Design Health provides an API design quality score based on the style guide violations it finds. It assigns an impact to each violation and the number of times each violation occurs. This impact is presented in the form of a percentage. A perfect API design quality score is 100%, but the ideal API design quality score for your API may vary. Postman recommends often checking your API's design health during the development process to ensure your API design is secure and well-designed.

## Adding your API definition

To begin checking your API design health, you must add your API definition file. Postman supports API Design Health for API definitions in OpenAPI 3.1, OpenAPI 3.0, and OpenAPI 2.0 format.

1. Go to [Postman API Design Health](https://go.postman.co/api-health/).
    > If an API definition is already chosen, select **Discard** to choose a new API definition. Make sure to [export the updated API definition file](#exporting-your-updated-api-definition) to download the file to your local system.
1. Choose an API definition to check. Postman supports both YAML and JSON formats. There are several ways to choose an API definition:
    * Select **Paste Raw text or URL...**, then enter your API definition as raw text or enter a URL.
    * Drag and drop a file, or select a file from your local system.
    * Select **Choose API from workspace** to choose an API in Postman. Select an API from the dropdown list, then select **Generate API Quality Score**. If you don't see the API you're looking for, make sure you have [Editor or Viewer access](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) to the API.

        > To check an API already in Postman, it must have an [API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/).

    <!-- screenshot: adding screen -->

1. [Review your API's design quality score, and review and fix style guide violations](#reviewing-and-fixing-style-guide-violations).

## Reviewing and fixing style guide violations

After you [add your API definition](#adding-your-api-definition), you can review and fix style guide violations in your API definition. Each style guide violation shows the impact it has on your design quality score, the number of times each violation occurred, and the severity level of the style guide violation. You can expand the guideline to review each occurrence of each violation, and learn more about how to fix it.

To fix each occurrence of a style guide violation, hover over the guideline and select **Fix**. API Design Health will insert a template into your API definition file in the editor. Fill out the template to fix the style guide violation. To learn more about the style guide for each supported OpenAPI version, see in [OpenAPI 3.1](/docs/designing-and-developing-your-api/api-design-health/openapi-31-style-guide/), [OpenAPI 3.0](/docs/designing-and-developing-your-api/api-design-health/openapi-31-style-guide/), and [OpenAPI 2.0](/docs/designing-and-developing-your-api/api-design-health/openapi-31-style-guide/).

<!-- screenshot: select fix -->

> Postman can return new style guide violations when you manually edit your API definition in the editor.

In the upper right of the API definition editor are options to change the file format, wrap text, copy, search, and undo your last change. When you finish editing your API definition, [export your updated API definition](#exporting-your-updated-api-definition).

> If you're checking an API already in Postman, edits aren't automatically saved to your API in Postman.

### Comparing your API

You can compare your API with industry standard APIs, such as Stripe and WhatsApp. Select **Compare with industry standard APIs** to display a table comparing your API with several industry standard APIs. You can compare design quality score, the total number of style guide violations, and the number of times each API violates several curated guidelines.

<!-- screenshot: comparing screen -->

## Exporting your updated API definition

To save your changes, export the updated API definition. Select **Export Updated Schema** to download the updated API definition file to your local system. To add your updated API definition file into Postman, you can [import the API definition into Postman](/docs/designing-and-developing-your-api/importing-an-api/) or [add another file to your API definition in Postman](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#adding-files-and-folders).

<!-- screenshot: exporting screen -->
