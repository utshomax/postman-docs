---
title: "Mocking server responses"
updated: 2022-04-30
page_id: "mocking_server_responses"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Mock servers overview"
    url: "/docs/designing-and-developing-your-api/mocking-data/mock-servers-overview/"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"

warning: false
---

Server stubs enable you to simulate internal server errors and other 5xx responses on your mock server. A 5xx response status code indicates the server can't complete the request (for example, if your API is unavailable). Instead of adding a 5xx error scenario to each endpoint stub in your mock server, you can add one or more server stubs.

A server stub simulates a server error scenario with the 5xx response status code you specify. You can set one server response to be active at a time. Your mock server will return the active server response for all requests. This enables you to test how other applications react when receiving a 5xx response from your API.

## Contents

* [Adding a server stub](#adding-a-server-stub)
* [Working with server stubs](#working-with-server-stubs)
* [Setting an active server response](#setting-an-active-server-response)
* [Testing server responses](#testing-server-responses)

## Adding a server stub

Add a server stub to your mock server to simulate a server error scenario with a specific 5xx response status code.

1. Select **Mock Servers** in the sidebar and select a mock server.
1. On the **Stubs** tab, select **+** next to **Server Stubs**. Postman creates a new _Internal Server Error_ stub.
1. Select the new server stub and customize it for the server error scenario you want to simulate:

    * To rename the server stub, hover over the name and select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> and enter a new name.
    * Select the 5xx **Status Code** you want the mock server to return.
    * On the **Body** tab, enter the response body you want the mock server to return and select a content type.
    * On the **Header** tab, enter any key-value pairs you want the mock server to return. Drag the handle to the left of a header to change the order. Select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> to the right of a header to delete it.

1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save your changes.

<img alt="Adding a server stub" src="https://assets.postman.com/postman-docs/mock-add-server-response-v9-19.jpg"/>

## Working with server stubs

After adding a server stub, you can take the following actions:

* To edit a server stub, select it and change the status code, body, or headers. When you're finished, select **Save**.
* To rename a server stub, hover over it and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">. Select **Rename** and enter a new name.
* To duplicate a server stub, hover over it and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">. Select **Duplicate** and edit the duplicated server stub as needed. Select **Save** when you're finished.
* To delete a server stub, select it and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">.

## Setting an active server response

Set an active server response to have your mock server simulate different server error scenarios. A mock server can have one active server response at a time. Your mock server will return the active server response for all requests made to the mock server.

1. Select **Mock Servers** in the sidebar and select a mock server.
1. On the **Stubs** tab, under **Server Stubs**, select the server response you want to make active.
1. Turn on the **Set as active** toggle.

A checkmark appears next to the server response to show it's active. All other server responses are set to inactive.

> You can also make a server response active or inactive by hovering over it and selecting the checkmark icon.

<img alt="Setting an active server response" src="https://assets.postman.com/postman-docs/mock-active-server-response-v9-19.jpg"/>

## Testing server responses

You can test a server response by using Postman to send a request to your mock server. Make sure the server response is [set to active](#setting-an-active-server-response) before testing it.

1. Select **Mock Servers** in the sidebar and select a mock server.
1. On the **Stubs** tab, under **Server Stubs**, select a server response.
1. Make the server response is active by turning on the **Set as active** toggle. (If the server response isn't set to active, you'll get a `404 Not Found` response.)
1. Select <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-external-link.jpg#icon" width="18px"> **Test Response**. Postman opens a new request with the URL of the mock server.
1. Select **Send** to send the request. You can view the response and status code in the response pane.

> If your mock server is private, you need to add an `x-api-key` header with a valid [Postman API key](/docs/developer/intro-api/) to the request.

<img alt="Testing a server response" src="https://assets.postman.com/postman-docs/mock-server-response-save-v9-19.jpg"/>
