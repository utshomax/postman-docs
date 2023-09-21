---
title: "Set up authentication for public APIs"
updated: 2023-07-17
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Set Up Authorization for Your Public Apis"
    url: "https://youtu.be/u-FyOBgIB0c"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Announcing easier API authentication in Postman"
    url: "https://blog.postman.com/easier-api-authentication-in-postman/"
---

You can onboard your API consumers quickly and efficiently by setting up API authentication for your public APIs in Postman. This feature enables you to communicate the steps users need to take to successfully make their first request to your API, such as registering for a developer account or creating an app on your dashboard. When a user creates a request to your API, Postman will automatically recognize it requires authentication and prompt them with your provided steps to set it up.

<img alt="Postman API set up new authorization" src="https://assets.postman.com/postman-docs/v10/easy-auth-flow-v10.16.gif"/>

## Contents

* [Setting up API authentication](#setting-up-api-authentication)
    * [Verifying your domain](#verifying-your-domain)

## Setting up API authentication

To set up API authentication for your public APIs, open Postman and select **Team** in the upper right, then **Team Settings > Set Up API authorization**. Or, open your public profile by selecting **API Network > Public API Network** in the Postman header, then selecting **[Set up API authorization](https://go.postman.co/settings/team/api-authentication)**.

Select **Set Up API authorization**.

This example shows you how to configure API authentication for an API that uses [OAuth 2.0](/docs/sending-requests/authorization/oauth-20/):

1. Enter the base URL of your API. You'll need to [verify it](#verifying-your-domain) to enable authorization in a later step.

    <img alt="Enter base URL of your API" src="https://assets.postman.com/postman-docs/v10/enter-base-url-api-v10.16.jpg"/>

2. Select the authorization type, which in this example is [**OAuth 2.0**](/docs/sending-requests/authorization/oauth-20/).

    <img alt="Select authorization type for API" src="https://assets.postman.com/postman-docs/v10/select-authorization-type-v10.16.jpg" width="150px"/>

3. Select the grant type from the dropdown list. In this example, it's **Authorization code**.

    <img alt="Enter grant type" src="https://assets.postman.com/postman-docs/v10/enter-grant-type-v10.16.jpg"/>

4. Select **Generate Callback URL**. Copy the URL and add it to the allowed list in your application’s settings.

    <img alt="Generate callback URL" src="https://assets.postman.com/postman-docs/v10/generate-callback-url-v10.16.jpg"/>

5. Enter the **Access token URL**. This URL is the endpoint for your authentication server and will be used to obtain an access token.

    <img alt="Enter access token URL" src="https://assets.postman.com/postman-docs/v10/enter-access-token-url-v10.16.jpg"/>

6. Enter the **Authorization URL**. This is where users will be sent to authenticate with your API.

    <img alt="Enter authorization URL" src="https://assets.postman.com/postman-docs/v10/enter-authorization-url-v10.16.jpg"/>

7. Enter the **Application client ID** for the application you created for this integration.

    <img alt="Enter application client ID" src="https://assets.postman.com/postman-docs/v10/enter-app-client-id-v10.16.jpg"/>

8. Enter the **Application client secret** for the application you created for this integration.

    <img alt="Enter application client secret" src="https://assets.postman.com/postman-docs/v10/enter-app-client-secret-v10.16.jpg"/>

9. (Optional) Enter **Authentication scopes** as a comma-separated list to restrict what Postman users can access.

    <img alt="Enter authentication scopes" src="https://assets.postman.com/postman-docs/v10/enter-authentication-scopes-v10.16.jpg"/>

10. Select if client credentials should be sent as a Basic Auth header or in the request body.

    <img alt="Choose how to send client credentials" src="https://assets.postman.com/postman-docs/v10/how-to-send-client-credentials-v10.16.jpg" width="250px"/>

11. Note any prerequisite steps users need to take to successfully make a request to your API. This could include items like registering for a developer account, creating an integration, or copying a token. This content will be shown to users when they create a request to your API and will guide them through setting up authentication.

    <img alt="Describe steps for users to take" src="https://assets.postman.com/postman-docs/v10/describe-prereq-steps-for-users-v10.16.jpg"/>

    > You can use basic Markdown syntax for bold, italics, underline, bullet points, and links to structure your content.

12. (Optional) Select **> Advanced Settings** to add a refresh token URL or parameters to different types of requests.
13. (Required) [Verify your domain](#verifying-your-domain) to complete adding authorization.
14. Select **Save** to save your API authorization settings.

### Verifying your domain

You must verify your domain for your API authentication configuration to be shared with the Postman community. To do so, select the copy icon<img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> to copy the TXT Record.

<img alt="Verify domain for API authentication" src="https://assets.postman.com/postman-docs/v10/domain-verification-v10.16.jpg"/>

Add the copied value to your domain as a DNS TXT record.

![Adding a TXT record](https://assets.postman.com/postman-docs/v10/custom-domains-add-txt.jpg)

Select **Verify Domain** in Postman to confirm. After your domain is verified, Postman will recognize newly created requests to your API and prompt users to authenticate through the steps you've provided.
