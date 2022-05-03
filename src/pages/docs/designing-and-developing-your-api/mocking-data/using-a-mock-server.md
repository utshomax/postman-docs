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

You can make calls to a mock server to simulate interacting with your API for development or testing purposes. Use Postman or another application to make calls to the mock server URL and the endpoints you defined.

You can configure the mock server to customize how it responds to requests. After making calls to the mock server, view the call logs to see details about incoming requests and outgoing responses.

## Contents

* [Viewing mock servers](#viewing-mock-servers)
* [Making calls to a mock server](#making-calls-to-a-mock-server)
* [Configuring a mock server](#configuring-a-mock-server)
* [Viewing call logs](#viewing-call-logs)
* [Adding optional request headers](#adding-optional-request-headers)

## Viewing mock servers

To make calls to a mock server, you need to know the mock server's URL and the endpoints that have been defined for it. You can find the URL and the available endpoints and scenarios by viewing a mock server in Postman. You can then make calls to the mock server by creating a new request in Postman or using another application.

To view a mock server, select **Mock Servers** in the sidebar, and then select a mock server.

* The available endpoints are listed under **Endpoint Stubs**. Each endpoint stub can have one or more scenarios, which represent different ways of using an endpoint. Learn more about [endpoint stubs and scenarios](/docs/designing-and-developing-your-api/mocking-data/mocking-endpoints/).
* The available server responses are listed under **Server Stubs**. You can use server responses to simulate internal server errors and other 5xx status codes. Learn more about [server responses](/docs/designing-and-developing-your-api/mocking-data/mocking-server-responses/).
* To get the URL of the mock server, select <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> **Copy URL**. By default, mock servers are publicly available. To make a mock server private, see [Configuring a mock server](#configuring-a-mock-server).
* To view additional details, select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the context bar. You can view the mock server URL, the associated collection and environment (if any), and usage information.

## Making calls to a mock server

To make a call to a mock server endpoint, first add the endpoint path to the end of the mock server URL. Then send the request using the appropriate HTTP method. For example: `GET https://<mock-server-url>/users`

You can send a request to a mock server from within Postman:

1. On the **Stubs** tab, under an endpoint stub, select a scenario.
1. Select **Test Endpoint**. Postman opens a new request with the URL of the mock server and the path defined in the scenario.
1. Select **Send** to send the request. You can view the response and status code in the response pane.

When you make a call, the mock server returns a response based on the scenario that mostly closely matches the request. For example, under the `/users` endpoint stub, you can have two different scenarios, `/users?id=123` and `/users?id-456`. If you send a request to `http://<mock-server-url>/users?id-123`, the mock server returns the response defined in the `/users/id=123` scenario. Learn more about [how mock servers match scenarios](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/).

> In Postman, you can use an environment variable to store the mock server URL.

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

## Adding optional request headers

Postman mock servers accept optional headers you can use to customize how the mock server responds to requests. Using these headers, you can specify which saved examples the mock server will return. Without these headers, the mock server will follow a [matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/) to decide which example to return in a response.

### Matching a response code

Use the header `x-mock-response-code` to specify the HTTP response code the returned response will match. For example, `500` will return an example with the HTTP 500 response.

### Matching a response name or ID

Use the headers `x-mock-response-name` or `x-mock-response-id` to specify the exact response you want the mock server to return by matching the `id` or the `name` of the saved example. You can get the example response `id` or `name` by using the Postman API to [GET a Single Collection](https://documenter.getpostman.com/view/12959542/UV5XjJV8?&_ga=2.100400478.1771040895.1644854022-1154140310.1627600155#a6a282df-907e-438b-8fe6-e5efaa60b8bf) and searching for your example in the response.

### Matching a request body or header

Use the headers `x-mock-match-request-body` or `x-mock-match-request-headers` to specify the exact response you want the mock server to return by matching the headers or body of the saved example.

* To enable request body matching, set the value of `x-mock-match-request-body` to `true`.

* To enable request header matching, include the header `x-mock-match-request-headers` and set its value to a comma-separated string of header keys that you want to match against the saved examples. Header matching isn't case-sensitive.
