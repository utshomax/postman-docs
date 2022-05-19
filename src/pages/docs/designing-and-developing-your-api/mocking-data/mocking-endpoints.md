---
title: "Mocking Endpoints"
updated: 2022-04-30
page_id: "mocking_endpoints"
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

A mock server uses endpoint stubs to mock the paths and behavior of your API. Depending on how you created it, your mock server may already include endpoint stubs, and you can add more stubs as needed.

You can define one or more scenarios for each endpoint stub. Scenarios represent different ways of using an endpoint. For each scenario, you can specify the data you want the mock server to return. After you create endpoints and scenarios, you can test your mock server by sending requests to it within Postman.

## Contents

* [Adding an endpoint stub](#adding-an-endpoint-stub)
* [Defining scenarios](#defining-scenarios)
* [Working with endpoint stubs](#working-with-endpoint-stubs)
* [Testing an endpoint](#testing-an-endpoint)
* [Generating random data with dynamic variables](#generating-random-data-with-dynamic-variables)

## Adding an endpoint stub

Add endpoint stubs to your mock server to simulate one or more of your API's endpoints. An endpoint stub includes a method (such as `GET`) and a path (such as `/users`). You can define one or more [scenarios](#defining-scenarios) for each endpoint stub.

> When you add an endpoint stub, Postman adds a corresponding request to the mock server's collection.

1. Select **Mock Servers** in the sidebar and select a mock server.
1. On the **Stubs** tab, select **+** next to **Endpoint Stubs**.
1. Select the new endpoint stub and customize it for the endpoint you want to simulate:

    * Enter a name for the endpoint stub. (If the name isn't highlighted, hover over the name and select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.)
    * Select a method in the dropdown list, or leave `GET` selected.
    * Enter the request URL and path. (By default, Postman adds a `{{url}}` [environment variable](/docs/designing-and-developing-your-api/mocking-data/using-a-mock-server/#storing-the-mock-server-url-in-a-variable) for the request URL.)

1. Enter any **Params** or **Headers** you want the mock server to match when selecting the best response to return. These parameters and headers will be pre-filled for any scenarios you create for this endpoint stub.

    * To change the order of items, drag the handle to the left of a parameter or header.
    * To delete an item, select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> to the right of a parameter or header.

1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save your changes.

<img alt="Adding an endpoint stub" src="https://assets.postman.com/postman-docs/mock-add-endpoint-v9-19.jpg"/>

## Defining scenarios

Scenarios represent different use cases for an endpoint stub. For example, you might define two scenarios for the same endpoint, each with a different set of query parameters and a different response body.

When an endpoint is called, the mock server returns a response based on the scenario that best matches the request. Learn more about [scenario matching](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/).

> When you add a scenario to an endpoint stub, Postman adds a corresponding example in the mock server's collection. The example is saved under the request for that endpoint stub.

1. Select **Mock Servers** in the sidebar and select a mock server.
1. On the **Stubs** tab, select an endpoint stub, and then select **Add Scenario**.
1. Enter a name for the scenario. (If the name isn't highlighted, hover over the name and select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.)
1. Enter any **Params** or **Headers** you want the mock server to match when selecting the best response to return. If you entered parameters or headers for the endpoint stub, these values are pre-filled. You can change them as needed for each scenario.

    * To deactivate a parameter or header, clear its checkbox.
    * To change the order of items, drag the handle to the left of a parameter or header.
    * To delete an item, select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> to the right of a parameter or header.

1. To use body matching for this scenario, enter the request body you want the mock server to match when selecting the best response to return. Learn more about [matching a request body](/docs/designing-and-developing-your-api/mocking-data/using-a-mock-server/#matching-a-request-body-or-header).
1. Customize the response data the mock server will return for this scenario:

    * **Body** - Enter the response body and select a data type.
    * **Headers** - Enter the response headers.
    * **Status code** - Select the response status code.

1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save** to save your changes.

<img alt="Adding a scenario" src="https://assets.postman.com/postman-docs/mock-add-scenario-v9-19.jpg"/>

## Working with endpoint stubs

After adding an endpoint stub, you can take the following actions:

* To edit an endpoint stub, select it and change the method, request URL and path, parameters, or headers. When you're finished, select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save**.
* To rename an endpoint stub, hover over it and select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">. Select **Rename** and enter a new name.
* To delete an endpoint stub, select it and select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px">.

## Testing an endpoint

You can test an endpoint by using Postman to send a request to your mock server. The mock server will return a response based on the scenario you select.

1. Select **Mock Servers** in the sidebar and select a mock server.
1. On the **Stubs** tab, expand an endpoint stub and select a scenario.
1. Select <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-external-link.jpg#icon" width="18px"> **Test Response**. Postman opens a new request with the URL of the mock server and the path defined in the scenario.

    > If the request URL is stored in an environment variable (for example, `{{url}}/users`) make sure the environment associated with the mock server is active in the [environment selector](/docs/sending-requests/managing-environments/#selecting-an-active-environment). Learn more about [storing the mock server URL in a variable](#storing-the-mock-server-url-in-a-variable).

1. Select **Send** to send the request. You can view the response and status code in the response pane.

    > If the mock server is private, you need to add an `x-api-key` header with a valid [Postman API key](/docs/developer/intro-api/) to the request.

<img alt="Making a call to a mock server" src="https://assets.postman.com/postman-docs/mock-view-scenarios-v9-19.jpg"/>

## Generating random data with dynamic variables

When creating a scenario, you define the data to be returned by the mock server. In some cases, you may want the mock server to return a response containing random data.

To have your mock server return random data, use [dynamic variables](/docs/writing-scripts/script-references/variables-list/) in your scenario's response body. Dynamic variables are resolved as part of the mock server response and replaced with random data. Dynamic variables are useful for generating random data when mocking an API, and you can use them for exploratory testing and writing rich, data-driven tests.

For example, your scenario's response body might contain dynamic variables as follows:

```json
{
    "name": "{{$randomFullName}}",
    "userName": "{{$randomUserName}}",
    "location": "{{$randomCity}}",
    "company": "{{$randomCompanyName}}",
    "jobTitle": "{{$randomJobTitle}}",
    "updatedAt": "{{$timestamp}}"
}
```

When you call the mock server endpoint, you'll see the response data change to something like:

```json
{
    "name": "Cielo McClure",
    "userName": "Aurelie.Lockman",
    "location": "Kubhaven",
    "company": "Runolfsdottir, Bernhard and Hodkiewicz",
    "jobTitle": "Direct Branding Liaison",
    "updatedAt": "1565088856"
}
```

> See [Dynamic Variables](/docs/writing-scripts/script-references/variables-list/) for a full list of dynamic variables for generating random data.
