---
title: "Sentry"
updated: 2022-04-30
search_keyword: "Sentry, Sentry.io, error tracking"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: link
    name: "Intro to Monitoring"
    url: "/docs/monitoring-your-api/intro-monitors/"
---

[Sentry](https://sentry.io/welcome/) is a real-time error tracking system for applications and APIs. It supports a wide range of frameworks and languages, including JavaScript, Node, Python, and more. Sentry provides a detailed view of handled and unhandled issues with a stack trace for easy debugging.

To set up Sentry integration for your API, you'll need to create an [auth token](https://docs.sentry.io/api/auth/) in Sentry and configure your API in Postman. After you set up the integration, you can view Sentry issues in the Postman API Builder.

## Creating a Sentry auth token

1. Sign in to [Sentry](https://sentry.io/auth/login/).
1. Create a new [internal integration](https://docs.sentry.io/product/integrations/integration-platform/). Sentry automatically generates an auth token for the integration.
1. In the new internal integration, give read permission to **Project**, **Issues & Event**, and **Organization**, and then save the changes.
1. Copy the new auth token. (You might want to save the token somewhere safe.)

## Configuring a Sentry integration

1. Open your API by selecting **APIs** in the sidebar, and then selecting an API and a version.
1. Select the **Monitoring** tab.
1. Under **Connect Postman to your monitoring workflows**, select **Sentry**.
1. Enter a **Nickname** to help you recognize the integration later.
1. Enter your Sentry **Organization slug**. You can find the organization slug in Sentry in **Settings > General Settings**.

    >You can also get the organization slug from your browser's address bar when you are logged in to Sentry. Locate the slug in the Sentry URL as follows: `https://sentry.io/organizations/<organization_slug>/`

1. For **Access token**, enter your Sentry auth token.
1. Select the **Sentry project** used for your API.
1. Select **Add integration**.

    <img alt="Connecting to Sentry" src="https://assets.postman.com/postman-docs/sentry-connection-v9-19.jpg" width="516px"/>

## Viewing Sentry issues

After you set up a Sentry integration, information for Sentry issues is available in Postman. For each issue you can view the level, if it's handled or not, when it was first and last seen, the number of events, and the number of affected users.

To view Sentry issues, open an API version and select the **Monitoring** tab. The most recent issues are listed under **Sentry**.

* Expand an issue to view more details, or select an issue to open it in Sentry.
* To view all Sentry issues, select **View all issues**.
* Use the **Environments** dropdown list to filter issues by [Sentry environment](https://docs.sentry.io/product/sentry-basics/environments/).
* Use the **Duration** dropdown list to view issues for a longer or shorter time period.
* To view the latest issues, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px">.
* To edit or delete the integration, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-three-dots-v9.jpg#icon" width="18px">.

<img alt="Viewing Sentry issues" src="https://assets.postman.com/postman-docs/sentry-view-issues-v9-19.jpg"/>
