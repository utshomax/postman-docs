---
title: "Secret scanner"
order: 115
page_id: "secret-scanner"
updated: 2023-04-06
search_keyword: "password security, secret scanning, secret, API key security"
warning: false
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman Token Scanner | Postman Level Up"
    url: "https://youtu.be/9XxkqPQF-Rw"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "2 Big Improvements to the Postman Token Scanner"
    url: "https://blog.postman.com/2-big-improvements-to-the-postman-token-scanner/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Postman Security"
    url:  "https://www.postman.com/postman/workspace/62d58d93-7e0c-45bf-9daa-cc8e531fc344"
---

The Postman secret scanner scans your team's public workspaces, collections, environments, and documentation to find exposed secrets. This protects your organization and prevents malicious users from exploiting sensitive data, like authentication tokens and Zoom meeting links. This feature is available on all Postman plans and is turned on by default.

Secret scanning for non-public (personal, private, team, and [partner](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/)) workspaces and collections is in open beta for [Enterprise](/docs/administration/about-postman-enterprise/) teams.

## Contents

* [How secret scanner works](#how-secret-scanner-works)
* [Secret scanner dashboard](#secret-scanner-dashboard)
* [Supported tokens](#supported-tokens)
    * [Default alerts](#default-alerts)
    * [Custom alerts](#custom-alerts)
* [Protecting Postman API keys in GitHub](#protecting-postman-api-keys-in-github)

## How secret scanner works

Postman's secret scanner follows all updates made by team members and scans them for [supported tokens](#supported-tokens). For example, a scan starts whenever team members take the following actions:

* Change the workspace visibility to Public.
* Share a collection or environment to a public workspace.
* Make changes to a collection or environment that's present in a public workspace.
* Write new documentation for a Postman Collection and make it public.

Secret scanner is turned on by default for all Postman teams and will monitor your team's public workspaces, collections, environments, and documentation for exposed secrets. Postman delivers scan results for public entities in the [Security audit reports](/docs/reports/security-audit-reports/) section of the [Reports dashboard](/docs/reports/reports-overview/).

> **[Security Audit Reports are available on Postman Enterprise plans.](https://www.postman.com/pricing/)**

Secret scanning across non-public (personal, private, team, and [partner](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/)) workspaces and collections is available as an open beta for [Enterprise](/docs/administration/about-postman-enterprise/) teams. You must be an Admin or Super Admin to view findings detected in non-public workspaces in the [secret scanner dashboard](#secret-scanner-dashboard).

## Secret scanner dashboard

You can view your team's configured [default](#default-alerts) and [custom](#custom-alerts) alerts in your [data security dashboard](https://go.postman.co/settings/team/token-scanner). Select **Team** in the Postman header, then select **Team Settings**. Then, select **Secret Scanner** on the left.

<img alt="Data security dashboard" src="https://assets.postman.com/postman-docs/data-security-dashboard.jpg"/>
<!-- change to configure alerts view -->

Enterprise teams also have access to the **Secrets Detected** tab with the open beta, where Admins and Super Admins can view findings from non-public workspaces. You can filter findings by workspace visibility type, workspace name, and secret type. To view the details for a finding, select it from the list.

<!-- screenshot resolving -->

You can resolve a finding by selecting **Unresolved**, then selecting the reason for resolving it.

> Any Postman-owned API keys found by the secret scanner are marked as a “valid secret” in the **Secrets Detected** tab, helping you prioritize valid Postman-owned key findings.

## Supported tokens

The secret scanner scans a variety of tokens [by default](#default-alerts). You can also add your team's proprietary third-party app tokens that aren't supported yet using [custom alerts](#custom-alerts).

### Default alerts

By default, Postman automatically creates alerts for 90 proprietary and third-party secrets. This includes secrets issued by popular service providers, including:

* Amazon
* GitHub
* Google
* Shopify
* Slack
* Square
* Twilio
* Zoom

For a complete list of default alerts, see the [secret scanner dashboard](#secret-scanner-dashboard).

### Custom alerts

You can use custom alerts to scan your team's proprietary tokens and any third-party app tokens that aren't scanned by default.

> **[Custom alerts are available on Postman Enterprise plans.](https://www.postman.com/pricing/)**

Your team can add a total of five alerts. You must be a Community Manager or team member with both Developer and Admin roles to add custom alerts.

To add custom alerts, do the following:

1. Go to **Team > Team Settings > Token scanner**.
2. In the **Custom alerts** section, select **Add Alert**.
3. On the **Add Alert** page, define the custom token.

## Protecting Postman API keys in GitHub

Postman also works with GitHub to ensure that your Postman API keys are secure. If you commit a valid Postman API key to a public GitHub repository, Postman notifies you by email and in-app notification. You can also set up Postman's [Slack integration](/docs/integrations/available-integrations/slack/) to alert you in Slack if this occurs.

It's recommended you delete the exposed API key in your [API keys dashboard](https://go.postman.co/settings/me/api-keys). You can then [generate a new API key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key) to continue working with the Postman API.
