---
title: "About resource usage"
updated: 2022-12-09
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: link
    name: "Postman Plans and Pricing"
    url: "https://www.postman.com/pricing/"
  - type: link
    name: "Resource Usage dashboard"
    url: "https://go.postman.co/billing/add-ons/overview"
---

Postman provides you with a limited number of resources you can use each month, depending on your Postman plan. Monthly resources include calls to the Postman API, requests made by monitors and scheduled collection runs, mock server requests, serverless requests, and cloud agent requests. Your Postman plan also has other limits, such as the number of integrations you can create, the number of custom domains, and image and file storage.

To find out what the resource limits are for your plan, go to the [Postman Plans and Pricing page](https://www.postman.com/pricing/). To view the resources you are currently using, go to your [Resource Usage dashboard](https://go.postman.co/billing/add-ons/overview). You can view how close you are to your limits and when your monthly limits will reset. If you need additional resources, you can [purchase an add-on](/docs/administration/billing/#purchasing-add-ons) or [upgrade your plan](/docs/administration/billing/#team-and-plan-changes).

Refer to the following sections to understand what happens when your resource usage reaches the limits set by your Postman plan.

## Contents

* [Mock usage](#mock-usage)
* [Monitoring usage](#monitoring-usage)
* [Custom domains](#custom-domains)
* [Storage usage](#storage-usage)
* [Postman API usage](#postman-api-usage)
* [Serverless requests](#serverless-requests)
* [Integrations](#integrations)
* [Cloud agent usage](#cloud-agent-usage)

## Mock usage

Your Postman plan gives you a limited number of requests that can be sent to your [Postman mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) each month. Requests to all of your mock servers count toward this same limit. After the limit is reached, you will get a `Usage limit reached` error message when sending a request to one of your mock servers.

![Mock server usage error](https://assets.postman.com/postman-docs/v10/usage-error-mocks-v10.jpg)

If you want to make more requests to your mock server before your monthly limit resets, you can [purchase an add-on](/docs/administration/billing/#purchasing-add-ons) or [upgrade your plan](/docs/administration/billing/#team-and-plan-changes).

## Monitoring usage

Your Postman plan gives you a limited number of requests that can be run by your [Postman Monitors](/docs/monitoring-your-api/setting-up-monitor/) each month. Requests run by your [scheduled collection runs](/docs/running-collections/scheduling-collection-runs/) count toward this same limit. After the limit is reached, you will get a notification by email and in the Postman app letting you know that you've reached the usage limit for monitors.

<img alt="Monitors usage error" src="https://assets.postman.com/postman-docs/v10/usage-error-monitors-v10.jpg" width="361px"/>

Once you've reached your usage limit, your monitors and scheduled collection runs will no longer run on their configured schedules and can't be run manually. If you want to resume running your monitors and scheduled collection runs before your monthly limit resets, you can [purchase an add-on](/docs/administration/billing/#purchasing-add-ons) or [upgrade your plan](/docs/administration/billing/#team-and-plan-changes).

> Learn more about [viewing and managing your monitor usage](/docs/monitoring-your-api/monitor-usage/).

## Custom domains

Postman Basic, Professional, and Enterprise plans give you a limited number of [custom domains](/docs/publishing-your-api/custom-doc-domains/) you can use when publishing API documentation. After the limit is reached, you won't be able to add a new custom domain.

![Custom domains limit reached](https://assets.postman.com/postman-docs/v10/usage-error-custom-domains-v10.jpg)

To add a new custom domain, delete one of your existing custom domains or [upgrade your plan](/docs/administration/billing/#team-and-plan-changes).

## Storage usage

## Postman API usage

## Serverless requests

## Integrations

## Cloud agent usage

The [Postman Cloud Agent](/docs/getting-started/installation-and-updates/#selecting-the-agent-for-requests) enables you to send requests from the Postman web app without encountering Cross Object Resource Sharing (CORS) limitations. Your Postman plan gives you a limited number of requests that can be sent using the Cloud Agent each month. After the limit is reached, you will get a `Cloud Agent Error` message when sending a request from the Postman web app using the Cloud Agent.

![Cloud Agent usage error](https://assets.postman.com/postman-docs/v10/usage-error-cloud-agent-v10.jpg)

If you want to continue sending requests from the Postman web app before your monthly limit resets, [upgrade your plan](/docs/administration/billing/#team-and-plan-changes) or switch to the Postman Desktop Agent. In the error message, select **Use Postman's Desktop Agent**. If you haven't already installed the Desktop Agent, you'll be prompted to download it.

> Learn more about [installing and using the Postman Desktop Agent](/docs/getting-started/installation-and-updates/#installing-the-postman-desktop-agent).
