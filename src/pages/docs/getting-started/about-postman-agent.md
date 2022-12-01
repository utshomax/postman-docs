---
title: "About the Postman Agent"
updated: 2022-11-30
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Agent for the Postman Web Client | Postman Level Up"
    url:  "https://www.youtube.com/watch?v=6xlJUx2ZMy4&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=3"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Introducing the Postman Agent: Send API Requests from Your Browser without Limits"
    url: "https://blog.postman.com/introducing-the-postman-agent-send-api-requests-from-your-browser-without-limits/"
---

Postman has multiple agents you can use to send your API requests from the [Postman web app](/docs/getting-started/installation-and-updates/#using-the-postman-web-app): Desktop Agent, Cloud Agent, or Browser Agent.

> If you are using the Postman web app, Postman recommends using the [Postman Desktop Agent](#the-postman-desktop-agent) for the best experience.

## Contents

* [The Postman Desktop Agent](#the-postman-desktop-agent)
* [The Postman Cloud Agent](#the-postman-cloud-agent)
* [The Postman Browser Agent](#the-postman-browser-agent)
* [Selecting the agent for requests](#selecting-the-agent-for-requests)

## The Postman Desktop Agent

The Postman Desktop Agent is a micro-application that runs locally on your desktop. It enables you to bypass the limitations that exist in the browser by allowing API requests to originate in the browser, but be routed through your local machine and network. The Postman Desktop Agent overcomes the Cross Object Resource Sharing (CORS) limitations of browsers and acts as your agent for making API requests from the Postman web app.

You will be prompted to download and install the Desktop Agent so you can make requests from the Postman web app. You can also download the agent directly from [the Postman Agent page](https://www.postman.com/downloads/postman-agent/). Once you have the Desktop Agent installed, you will be able to use it with web requests.

To learn more about the Postman Desktop Agent, read the [Introducing the Postman Agent](https://blog.postman.com/introducing-the-postman-agent-send-api-requests-from-your-browser-without-limits/) blog post.

## The Postman Cloud Agent

The Postman Cloud Agent enables you to bypass the limitations that exist in the browser by allowing API requests to originate in the browser, but be routed through Postman's cloud servers. The Postman Cloud Agent overcomes the CORS limitations of browsers and acts as your agent for making API requests from the Postman web app.

> Postman recommends using the Postman Cloud Agent when you're unable to use the Postman Desktop Agent.

## The Postman Browser Agent

The Postman Browser Agent sends API requests using your browser, with some [limitations](/docs/getting-started/installation-and-updates/#web-limitations). You might experience the CORS limitations of browsers when using the Postman Browser Agent.

## Selecting the agent for requests

From the Postman web app, you can enable **Auto-select** for Postman to automatically select the best agent for your requests. You can also manually select the agent for your requests.

1. Select **Auto-select agent**, **Cloud Agent**, **Desktop Agent**, or **Browser Agent** from the Postman footer.
1. Select the agent you would like to use for your requests.

    * **Auto-select** - Postman automatically selects the best agent to use for your request.
    * **Cloud Agent** - Manually select this option to send HTTP requests using Postman's cloud servers.
    * **Desktop Agent** - Manually select this option to send requests using the Postman Desktop Agent.
    * **Browser Agent** - Manually select this option to send requests using your browser, with some [limitations](/docs/getting-started/installation-and-updates/#web-limitations).

    <img alt="Select agent" src="https://assets.postman.com/postman-docs/select-agent-for-requests.gif">

> If you send a request and it isn't successful because the agent isn't selected, you can use the provided link in the response area to switch to the agent and send your request again.
