---
title: "Creating a scheduled task with Postman Flows"
updated: 2023-08-07
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Flows: The Next Generation of Software Development"
    url: "https://blog.postman.com/postman-flows-the-next-generation-of-software-development/"
  - type: link
    name: "Postman Flows Is Now More Powerful and User-Friendly"
    url: "https://blog.postman.com/postman-flows-is-now-more-powerful-and-user-friendly/"
---

You can enhance the efficiency and productivity of an API workflow by incorporating task scheduling and automation. This can be accomplished by using monitors with Postman Flows. This tutorial shows how to create a monitor and a flow to get weather information for a specified ZIP code and automatically share it on a Twitter account.

You can see this tutorial's completed flow [here](https://postman.postman-beta.co/workspace/testing-features~e08a6ce3-3b63-4a67-9e38-3f910d42a4ca/flow/64cc406bfc627a00318636c0).

## Contents

* [Goal](#goal)
* [Creating the flow](#creating-the-flow)
* [Prerequisites](#prerequisites)

## Goal

Create a monitor and a flow to get the high and low temperature forecasts for a given ZIP code and post them to a Twitter account daily.

## Prerequisites

* A [Twitter](https://twitter.com/) account
* A [Twitter app](https://developer.twitter.com/en/docs/apps/overview)
    * For the **User authentication settings**, select **Read and write**.
    * For **Type of App**, select **Web App, Automated App or Bot**.
    * For the **Callback URI** and **Website URL**, enter `https://postman.postman.co/`.
* Twitter keys and secrets:
    * API (consumer) key
    * API (consumer) key secret
    * Client ID
    * Client secret
    * Bearer token
    * Set each variable's **Type** to `secret`.
* A ZIP code

## Creating the flow

1. Begin by [forking](/docs/collaborating-in-postman/using-version-control/forking-entities/) (copying) the [Weather Application for Postman Flows](https://www.postman.com/postman/workspace/utility-flows/collection/23919558-5840d707-ec50-4739-bf61-291b1bbc0bf0?action=share&creator=21580188), the [Twitter API v2 collection](https://www.postman.com/postman/workspace/utility-flows/collection/21580188-a3cb6477-6f61-451e-a2c2-e24fd44267f9?action=share&creator=21580188) and the [Twitter API v2 environment](https://www.postman.com/postman/workspace/utility-flows/environment/21580188-a2d4586a-c79c-4f70-8cc0-05d22e417370) to your workspace.

    * In your fork of the environment, add your [Twitter app's](https://developer.twitter.com/) key and secret values to their corresponding variables, and save the environment:
        * API (consumer) key
        * API (consumer) key secret
        * Client ID
        * Client secret
        * Bearer token

    ![Add keys and secrets to the environment](https://assets.postman.com/postman-docs/v10/flows-tut-sched-environment-v10.jpg)

1. Create a flow and add a **Send Request** block.
    * In the **Send Request** block, select **Weather Application for Postman Flows > Get coordinates for zip code**.
    * Select the **Twitter API v2** environment.
    * Add a **String** block and enter a ZIP code.

    <img src="https://assets.postman.com/postman-docs/v10/flows-tut-sched-zip-v10.gif" alt="Add a string block and enter a ZIP code" fetchpriority="low" loading="lazy" >

1. Connect a second **Send Request** block to the first and select **Weather Application for Postman Flows > get current weather**. The block automatically selects the **Twitter API v2** environment.
    * Connect the first **Send Request** block’s **Success** output to each variable in the second **Send Request** block.
    * Add **Select** blocks to each variable and enter the following:
        * For the `lat` variable, enter `body.results.0.latitude`.
        * For the `long` variable, enter `body.results.0.longitude`.
        * For the `timezone` variable, enter `body.results.0.timezone`.

    ![Get the current weather](https://assets.postman.com/postman-docs/v10/flows-tut-sched-get-weather-v10.jpg)

1. Connect a **Template** block to the second **Send Request** block's **Success** output and enter `The weather in your ZIP code will include a high of {{high}} degrees and a low of {{low}} degrees.`
    * Change `key` to `high` and enter the path `body.daily.temperature_2m_max.0`.
    * Also connect the **Send Request** block’s **Success** output to the **Template** block’s **variable** input.
    * Change `value2` to `low` and enter the path `body.daily.temperature_2m_min.0`.

    ![Add a Template block](https://assets.postman.com/postman-docs/v10/flows-tut-sched-template-v10.jpg)

1. Connect the **Template** block’s **Data** output to a **Send Request** block.
    * Select **Twitter API v2 > Manage Tweets > Create a Tweet**.
    * Select the **Twitter API v2** environment.
    * Also connect the **Template** block's **Data** output to the **Send Request** block's `tweet` input.

    ![Add another Send Request block](https://assets.postman.com/postman-docs/v10/flows-tut-sched-create-tweet-v10.jpg)

1. In the sidebar, under **Applications**, select **Webhook > Publish** and copy the flow's webhook URL.

    <img src="https://assets.postman.com/postman-docs/v10/flows-tut-sched-webhook-v10.gif" alt="Copy the webhook" fetchpriority="low" loading="lazy" >

## Scheduling the flow with a monitor

1. Create an HTTP POST request and enter the flow's webhook URL. Save the request to a new collection named `Scheduled Flow`.
1. Create a monitor named `Scheduled Flow Monitor` and enter the following information:
    * **Collection**: `Scheduled Flow`.
    * **Run this monitor**: `Week timer`, `Every day`, `8:00 AM`.
1. Select **Create Monitor**. The monitor will trigger the flow daily at 8:00 AM.
