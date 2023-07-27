---
title: "Check your API design health"
updated: 2023-08-15
---

> [**API Design Health is available on Postman Free, Basic, and Professional plans.**](https://www.postman.com/pricing)

You can use [Postman API Design Health](https://go.postman.co/api-health/) to check the design quality of your OpenAPI documents or your [API definitions in Postman](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/). API Design Health identifies potential design issues that might impact its usability. Postman supports API Design Health for OpenAPI documents and API definitions in OpenAPI 3.1, OpenAPI 3.0, and OpenAPI 2.0 format.

<!-- screenshot: hero image -->

## Contents

* [About API Design Health](#about-api-design-health)
* [Upload your API to API Design Health](#upload-your-api-to-api-design-health)
* [Review and fix style guide violations](#review-and-fix-style-guide-violations)
    * [Compare your API with top APIs](#compare-your-api-with-top-apis)
* [Export your updated file](#export-your-updated-file)

## About API Design Health

Strong API design health means your API design follows industry best practices. API Design Health checks your OpenAPI document or API definition using a style guide specific to your OpenAPI version, and returns each occurrence of each style guide violation. You then have the option to fix each found violation. To learn more about the style guide and fixing violations, see [Review and fix style guide violations](#review-and-fix-style-guide-violations).

API Design Health provides an API design quality score for your API based on each style guide violation it finds. Each style guide violation shows the impact it has on your design quality score and the number of times each violation occurs. A perfect API design quality score is 100%, but the ideal API design quality score for your API may vary. You can also [compare your API's design quality score with top APIs](#compare-your-api-with-top-apis), such as Postman and GitHub. Postman recommends often checking your API's design health during the development process to ensure your API is well-designed.

## Upload your API to API Design Health

To begin checking your API design, you can upload your OpenAPI document or API definition file to API Design Health. Then you can review your API design quality score and fix any style guide violations it finds.

1. Go to [Postman API Design Health](https://go.postman.co/api-health/).
1. Choose an OpenAPI document or API definition to check. Postman supports both YAML and JSON formats. There are several ways to choose an API:
    * Select **Paste Raw text or URL...**, then enter your OpenAPI document or API definition as raw text or enter a URL.
    * Drag and drop a file, or select a file from your local system.
    * Select **Choose API from workspace** to choose an API in Postman. Select an API from the dropdown list, then select **Generate API Quality Score**. If you don't see the API you're looking for, make sure you have [Editor access](/docs/collaborating-in-postman/roles-and-permissions/#api-roles) to the API.

        > To check an API already in Postman, it must have an [API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/).

    <!-- screenshot: adding screen -->

1. [Review your API's design quality score, and review and fix style guide violations](#review-and-fix-style-guide-violations).

## Review and fix style guide violations

After you [upload your API to API Design Health](#upload-your-api-to-api-design-health), you can review and fix style guide violations in your OpenAPI document or API definition. Each style guide violation shows the impact it has on your design quality score, the number of times each violation occurred, and the severity level of each style guide violation. You can expand each guideline to review each occurrence of each violation, and learn more about how to fix it. You can also [compare your API with top APIs](#comparing-your-api-with-top-apis) to help you identify your ideal design quality score.

To fix each occurrence of a style guide violation, hover over the occurrence and select **Auto fix**. API Design Health will edit your OpenAPI document or API definition file in the editor, removing or adding fields depending on the issue. If fields are added, you might need to edit them to fix the style guide violation. To learn more about the style guide and how to fix each violation, see the style guide relevant to your OpenAPI version: [OpenAPI 3.1 and OpenAPI 3.0](/docs/designing-and-developing-your-api/api-design-health/openapi-3-style-guide/), or [OpenAPI 2.0](/docs/designing-and-developing-your-api/api-design-health/openapi-2-style-guide/).

In the upper right of the editor are options to change the file format, wrap text, copy, search, and undo your last change.

<!-- screenshot: select fix -->

> Postman can return new style guide violations when you manually edit your OpenAPI document or API definition in the editor.

When you finish editing your API definition, [export your updated OpenAPI document or API definition](#export-your-updated-file) to save your changes.

> If you're checking an API already in Postman, edits aren't automatically saved to your API definition file in Postman.

### Comparing your API with top APIs

You can compare your API with top APIs, such as Postman and GitHub. Select **Compare with top APIs** to display a table comparing your API with several top APIs.

You can compare design quality score, the total number of style guide violations, and the number of times each API violates several curated guidelines. You can use this information to help you identify the ideal design quality score for your API.

<!-- screenshot: comparing screen -->

## Export your updated file

To save your changes, select **Export Updated Schema** to download the updated OpenAPI document or API definition to your local system.

<!-- screenshot: select export -->

To check a new API, select **Discard** in the upper-right corner to discard your changes. Select **Discard** to confirm, then [upload a new API](#upload-your-api-to-api-design-health).

<!-- screenshot: select discard -->

To add your updated OpenAPI document or API definition file into Postman, see [Importing an API](/docs/designing-and-developing-your-api/importing-an-api/).
