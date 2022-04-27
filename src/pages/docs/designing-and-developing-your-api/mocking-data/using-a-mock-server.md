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

## Adding an endpoint stub

Add endpoint stubs to your mock server to simulate one or more of your API's endpoints. An endpoint stub includes an method (such as `GET`) and a path (such as `/users`). You can define one or more scenarios for each endpoint stub.

1. Select **Mock Servers** in the sidebar and select a mock server.
1. On the **Stubs** tab, select **+** next to **Endpoint Stubs**.
1. Select the new endpoint stub and customize it for the endpoint you want to simulate:

    * Enter a name for the endpoint stub.
    * Select a method in the dropdown list, or leave `GET` selected.
    * Enter the path for the endpoint stub. (You can't edit the mock server URL.)
    * Select the checkbox to enable body matching. Learn more about how body matching works.

1. Enter any **Params** or **Headers** you want the mock server to match when selecting the best response to return. These parameters and headers will be pre-filled for any scenarios you create for this endpoint stub.

    * To deactivate a parameter or header, clear its checkbox.
    * To edit or delete the params or headers, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.
    * To edit multiple parameters or headers at once, select **Bulk edit**.

1. Select **Save** to save your changes.

### Defining scenarios

Scenarios represent different use cases for an endpoint stub. For example, you might define two scenarios for the same endpoint, each with a different set of query parameters and a different response body.

When an endpoint is called, the mock server returns a response based on the scenario that best matches the request. You can also set a default response for an endpoint.

1. Select **Mock Servers** in the sidebar, and then select a mock server.
1. On the **Stubs** tab, under an endpoint stub, select the empty scenario labeled _Define Scenario_.
1. Enter a name for the scenario.
1. Enter any **Params** or **Headers** you want the mock server to match when selecting the best response to return. If you entered parameters or headers for the endpoint stub, these values are pre-filled. You can modify them as needed for each scenario.
1. If you enabled body matching for the endpoint stub, enter the request body you want the mock server to match when selecting the best response to return. Learn more about how body matching works.
1. Customize the response data the mock server will return for this scenario:

    * **Body** - Enter the response body and select a data type.
    * **Headers** - Enter the response headers.
    * **Status code** - Select the response status code.

1. Select **Save** to save your changes.

### Working with endpoint stubs

After adding an endpoint stub, you can take the following actions:

* To modify an endpoint stub, select it and change the method, path, status code, body matching, parameters, or headers. When you're finished, select **Save**.
* To rename an endpoint stub, hover over it and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">. Select **Rename** and enter a new name.
* To duplicate an endpoint stub, hover over it and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">. Select **Duplicate**. Modify the duplicated endpoint stub as needed and select **Save** when you're finished.
* To delete an endpoint stub, select it and then select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">.

## Setting a default response

If you define more than one scenario for the same endpoint stub, you can set one scenario as the default. When you make a call to the endpoint, the mock server will return a response based on the default scenario.

1. Select **Mock Servers** in the sidebar, and then select a mock server.
1. On the **Stubs** tab, under **Endpoint Stubs**, select the scenario you want to set as the default.
1. Turn on the **Set as default** toggle.

A checkmark appears next to the scenario to indicate it's the default for that endpoint stub.

> You can also set a scenario as the default by hovering over it and selecting the checkmark icon.

## Testing an endpoint

You can test an endpoint by using Postman to send a request to your mock server. The mock server will return a response based on the scenario you select.

1. Select **Mock Servers** in the sidebar, and then select a mock server.
1. On the **Stubs** tab, under an endpoint stub, select a scenario.
1. Select **Test Endpoint**. Postman opens a new request with the URL of the mock server and the path defined in the scenario.
1. Select **Send** to send the request. You can view the response and status code in the response pane.

> If your mock server is private, you need to add an `x-api-key` header with a valid [Postman API key](/docs/developer/intro-api/) to the request.
