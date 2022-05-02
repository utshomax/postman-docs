---
title: "Using a mock server"
updated: 2022-04-30
page_id: "using_a_mock_server"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"

warning: false
---

You can make calls to a mock server to simulate interacting with your API for development or testing purposes. A mock server uses endpoint stubs to mock the paths and behavior of your API under various scenarios. Depending on how you created it, your mock server may already include endpoint stubs, and you can add more as needed.

Use Postman or another application to make calls to the mock server URL and the endpoints you defined. You can configure the mock server to customize how it responds to requests. After making calls to the mock server, view the call logs to see details about incoming requests and outgoing responses.

## Contents

* [Configuring a mock server](#configuring-a-mock-server)
* [Viewing call logs](#viewing-call-logs)

## Configuring a mock server

Configure a mock server to control who can access it or to simulate network delay when making calls. If you based your mock server on a collection, you can also customize the environment and release used by the mock server.

1. Select **Mock Servers** in the sidebar, and then select a mock server.
1. Select the **Config** tab.
1. Change any configuration options:

    * **Access Control** - Mock servers are publicly available by default. To make your mock server private, select the checkbox. To make a call to a private mock server, you need to add an `x-api-key` header with a valid [Postman API key](/docs/developer/intro-api/) to the request.
    * **Set Network Delay** - You can simulate network delay when making a call to the mock server. Select **2G** or **3G** to simulate the delay of legacy mobile networks, or select **Custom** an enter a delay value in milliseconds.
    * **Environment** - For collection-based mock servers, you can select the Postman [environment](/docs/sending-requests/managing-environments/) to use.
    * **Release** - For collection-based mock servers, you can select the [release](/docs/designing-and-developing-your-api/versioning-an-api/) to use.

1. Select **Save** to save your changes.

## Viewing call logs

Postman logs a record of all calls made to a mock server. Use the call log to view the requests sent to and the responses sent from your mock server.

To view logged calls, select **Mock Servers** in the sidebar, select a mock server, and then select the **Call Logs** tab. For each logged call, you can view the date and time received, the request method and path, and the scenario used for the response.

* Expand a request to see the full request headers, request body, response headers, and response body.
* Enter a search term in the box to filter the call log based on the response scenario.
* Select **Refresh** <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> to view the latest calls to the mock server.
