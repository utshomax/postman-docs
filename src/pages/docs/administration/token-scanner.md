---
title: "Secret Scanner"
updated: 2023-06-08
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

The Postman Secret Scanner scans public workspaces to detect any exposed secrets. It checks all of the collections, global variables, environment variables, API schemas, and documentation in a public workspace to safeguard your organization from potential threats and prevent malicious users from accessing any exposed secrets.

> The Secret Scanner is available on all Postman plans and is turned on by default.

## Contents

* [Use cases](#use-cases)
* [Secret Scanner dashboard](#secret-scanner-dashboard)
* [Supported tokens](#supported-tokens)
    * [Default alerts](#default-alerts)
    * [Custom alerts](#custom-alerts)
* [Protecting Postman API keys in GitHub](#protecting-postman-api-keys-in-github)

## Use cases

A scan starts whenever team members do any of the following actions:

* Change the workspace visibility to Public.
* Share a collection or environment to a public workspace.
* Make changes to a collection or environment that's present in a public workspace.
* Write new documentation for a Postman Collection and make it public.

Postman delivers the scan results in the [Security audit reports](/docs/reports/security-audit-reports/) section of the [**Reports** dashboard](/docs/reports/reports-overview/).

> **[Security Audit Reports are available on Postman Enterprise plans.](https://www.postman.com/pricing/)**

## Secret Scanner dashboard

To open the [Secret Scanner dashboard](https://go.postman.co/settings/team/secret-scanner/), select **Team > Team Settings** in the Postman header. Then select **Secret Scanner** in the left sidebar.

<img alt="Secret Scanner dashboard" src="https://assets.postman.com/postman-docs/v10/secret-scanner-v10.15.jpg"/>

In the dashboard, you can view secrets that the Secret Scanner has found under **Secrets detected**. You can select each found secret to get more details and resolve the findings.

Select **Configure alerts** to view configured [default](#default-alerts) and [custom](#custom-alerts) alerts.

Select **Reports** to review the frequency of secrets being detected and resolved. You can also review which workspaces have unresolved secrets and the types of secrets that are being found by the Secret Scanner.

## Supported tokens

The Secret Scanner scans a variety of tokens [by default](#default-alerts). You can also add your team's proprietary third-party app tokens that aren't supported yet using [custom alerts](#custom-alerts).

### Default alerts

By default, the Secret Scanner checks for tokens issued by common service providers like Amazon, Google, Github, Stripe, and Twilio. To view the complete list of default alerts, open the [Secret Scanner](https://go.postman.co/settings/team/secret-scanner/alerts).

### Custom alerts

You can use custom alerts to scan your team's proprietary tokens and any third-party app tokens that aren't scanned by default.

> **[Custom alerts are available on Postman Enterprise plans.](https://www.postman.com/pricing/)**

Your team can add a total of five alerts. You must be a **Community Manager** or team member with both **Developer** and **Admin** roles to add custom alerts.

To add custom alerts, do the following:

1. Go to **Team > Team Settings**.
2. Select **Secret Scanner** in the left sidebar, then **Configure alerts**.
2. In the **Custom alerts** section, select **+ Add Alert**.
3. Add the details for the custom token, then select **Create Alert**.

## Protecting Postman API keys in GitHub

Postman also works with GitHub to ensure that your Postman API keys are secure. If you commit a valid Postman API key to a public GitHub repository, Postman notifies you by email and in-app notification. You can also set up Postman's [Slack integration](/docs/integrations/available-integrations/slack/) to alert you in Slack if this occurs.

It's recommended you delete the exposed API key in your [API keys dashboard](https://go.postman.co/settings/me/api-keys). You can then [generate a new API key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key) to continue working with the Postman API.
