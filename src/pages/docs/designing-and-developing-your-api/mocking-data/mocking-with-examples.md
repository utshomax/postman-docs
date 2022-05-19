---
title: "Mocking with examples"
page_id: "mocking_with_examples"
updated: 2022-05-19
search_keyword: "x-mock-response-code"
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
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Mock Servers | The Exploratory"
    url: "https://youtu.be/n_7UUghLpco"
  - type: link
    name: "Dynamic Mock Behavior | Postman Level Up"
    url: "https://youtu.be/av7SZo9sZAE"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Test scripts"
    url: "/docs/writing-scripts/test-scripts/"

warning: false
---

[Mock servers](/docs/designing-and-developing-your-api/mocking-data/mock-servers-overview/) simulate an API by returning predefined data, enabling you to develop or test against an API before it's production-ready (or without using production data). In Postman, mock servers rely on [examples](/docs/sending-requests/examples/) saved in a collection to return mock data. Follow the steps below to get a hands-on demonstration of how mock servers and examples work together, and to learn how you can integrate them into your API workflow.

## Contents

* [Creating a mock server](#creating-a-mock-server)
    * [Step 1: Send a request](#step-1-send-a-request)
    * [Step 2: Save the request to a collection](#step-2-save-the-request-to-a-collection)
    * [Step 3: Save a response as an example](#step-3-save-a-response-as-an-example)
    * [Step 4: Create a mock server for the collection](#step-4-create-a-mock-server-for-the-collection)
    * [Step 5: Send a request to the mock server](#step-5-send-a-request-to-the-mock-server)
    * [Step 6: Add another example](#step-6-add-another-example)
* [Using query parameters](#using-query-parameters)
* [Mocking GraphQL queries](#mocking-graphql-queries)

## Creating a mock server

The steps below walk you through the process of creating a mock server in Postman. First, you'll set up some basics that are required for mock servers to work. Once your mock server is up and running, you'll send requests to it and see how your examples are used to return data.

### Step 1: Send a request

In Postman, open a new request by selecting **+** or by selecting **New > HTTP Request**. Leave `GET` as the method, and for the request URL enter `https://postman-echo.com/get?test=123`. When ready, select **Send**.

This request calls the [Postman Echo](https://docs.postman-echo.com/#078883ea-ac9e-842e-8f41-784b59a33722) service which you can use to test REST or SOAP clients and make sample API calls. The resulting response displays in the response pane below the request.

<img alt="Send a request" src="https://assets.postman.com/postman-docs/mock-examples-step1-v9-1.jpg">

### Step 2: Save the request to a collection

Select **Save** to save the request in a collection. [Collections](/docs/sending-requests/intro-to-collections/) are groups of requests that you can use to organize your work and create API workflows.

<img alt="Save a request" src="https://assets.postman.com/postman-docs/mock-examples-step2a-v9-1.jpg">

Enter a **Request name**. Instead of selecting an existing collection in **Save to**, select **New Collection**. Enter `C1` for the collection name and select **Create**. Then select **Save** to save the request to the new collection.

<img alt="Save a request to a new collection" src="https://assets.postman.com/postman-docs/mock-examples-step2b-v9-1.jpg" width="482px">

### Step 3: Save a response as an example

To save the response you received from the Postman Echo service, select **Save Response > Save as example**. The example is saved underneath the request, inside the `C1` collection.

<img alt="Save an example" src="https://assets.postman.com/postman-docs/mock-examples-step3a-v9-1.jpg">

Select **Collections** in the sidebar, expand the `C1` collection and the request, and then select the example to open it.

<img alt="Open an example" src="https://assets.postman.com/postman-docs/mock-examples-step3b-v9-1.jpg" width="456px">

To rename the example, select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to the name. Rename the example `E1`. Note that the request method, URL, and status code are all saved as part of the example. Postman uses these items to determine which responses are returned by a mock server.

<img alt="Rename an example" src="https://assets.postman.com/postman-docs/mock-examples-step3c-v9-1.jpg">

### Step 4: Create a mock server for the collection

Now that you've added an example to your collection, you're ready to set up a mock server. Select **Collections** in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to the `C1` collection, and then select **Mock collection**.

<img alt="Mock a collection" src="https://assets.postman.com/postman-docs/mock-examples-step4a-v9-1.jpg" width="455px">

The **Create a new mock server** windows opens. The option to **Use a collection** is already selected, along with the `C1` collection you are mocking.

<img alt="Create a mock server" src="https://assets.postman.com/postman-docs/mock-examples-step4b-v9-19.jpg" width="580px">

If you want, you can choose to save the mock server URL as an [environment variable](/docs/sending-requests/managing-environments/). If you do, make sure the environment associated with the mock server is active in the [environment selector](/docs/sending-requests/managing-environments/#selecting-an-active-environment). In this case, you'll work with the mock server URL directly, so you can clear this checkbox.

When you're ready, select **Create Mock Server**. The new mock server opens in a tab with the name highlighted. Change the name of the mock server to `M1`. (If the name isn't highlighted, hover over the name and select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.)

> You can also create a mock server [using the Postman API](/docs/designing-and-developing-your-api/mocking-data/mock-with-api/).

### Step 5: Send a request to the mock server

Now that you've created the mock server `M1`, you can send a request to the mock endpoint.

First, copy the mock server URL. Select **Mock Servers** in the sidebar, select the `M1` mock server, and then select <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> **Copy URL**.

<img alt="Copy mock URL" src="https://assets.postman.com/postman-docs/mock-examples-step5a-v9-19.jpg">

Next, create a new request by selecting **+** or by selecting **New > HTTP Request**. Paste the mock URL into the new request and select **Send**.

<img alt="Mock server error response" src="https://assets.postman.com/postman-docs/mock-examples-step5b-v9-1.jpg">

Sending this request returns an error. The reason is because you didn't add a path to the mock server URL, and there's no matching saved example with an undefined path and the request method `GET`. Responses returned by the mock service are entirely dependent on the URL and method in your saved examples.

You do have a saved example with the path `/get` and the request method `GET`. Add `/get` to the end of the mock server URL and send the request again. This time you receive the expected response from the mock server.

<img alt="Mock server correct response" src="https://assets.postman.com/postman-docs/mock-examples-step5c-v9-1.jpg">

### Step 6: Add another example

To further show how responses from the mock service are entirely dependent on your saved examples, add another example to the `C1` collection. Repeat steps 1 to 3 above to save a request to the collection and then save the response as an example `E2`, this time using the request URL `https://postman-echo.com/test`.

<img alt="Add a second example" src="https://assets.postman.com/postman-docs/mock-examples-step6a-v9-1.jpg">

Sending a `GET` request to `https://postman-echo.com/test` returns a 404 error, which you saved as another example. The collection `C1` now has two requests and two saved examples:

* **Example E1** - `GET` request to path `/get`
* **Example E2** - `GET` request to path `/test`

Now repeat step 5 above, but this time add the path `/test` to the end of the mock server URL when sending the request. This returns the expected 404 response.

<img alt="Send another request to the mock server" src="https://assets.postman.com/postman-docs/mock-examples-step6b-v9-1.jpg">

> **Your examples can vary depending on the URL endpoint, request method, or status code.** If you have more than one example, you can choose to save each example under a unique endpoint URL, like you saw in this demonstration with `/get` and `/test`. If you have saved examples with different response status codes, you can send an authenticated request to the mock server along with the `x-mock-response-code` header specifying which integer response code your returned response needs to match.

## Using query parameters

Postman's mock service uses a [matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/) to select the most appropriate saved example to return in response to a request. As part of this algorithm, the mock server looks at the query parameters when matching requests to saved examples. If you have examples that differ in their query parameters, you can mock different responses for different query parameters on the same request path. In this case, the mock server will return the exact response matching that request path and the corresponding query parameters.

Here's a scenario that illustrates how matching query parameters works:

* The collection **Query Params Demo** has one request **Request1** with two examples, **Example1** and **Example2**.
* In **Example1**, the parameter `id` has a value of `1`:

    <img alt="Query parameters example 1" src="https://assets.postman.com/postman-docs/mock-examples-params1-v9-1.jpg">

* In **Example2**, the parameter `id` has a value of `5`:

    <img alt="Query parameters example 2" src="https://assets.postman.com/postman-docs/mock-examples-params2-v9-1.jpg">

* In this scenario, **Example1** and **Example2** are passing `1` and `5` respectively. When you send a request to the mock server URL and pass these different query parameters, Postman returns the exact response that matches both the path and the passed parameters.

    <img alt="Query parameters mock response" src="https://assets.postman.com/postman-docs/mock-examples-params3-v9-1.jpg">

> If no exact match is found, Postman returns the best response based on its [matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/).

## Mocking GraphQL queries

Postman's mock service enables you to mock GraphQL queries. To mock GraphQL queries, make a request to the mock server using the request path and request body saved in the examples in the mocked collection.

Make sure to set the `Content-type` header to `application/json` in your examples.

<img alt="Query parameters example 1" src="https://assets.postman.com/postman-docs/mock-examples-graphql1-v9-1.jpg">

Also make sure to pass the `x-mock-match-request-body` header with a value of `true` when sending a request to the mock server URL.

<img alt="Query parameters example 1" src="https://assets.postman.com/postman-docs/mock-examples-graphql2-v9-1.jpg">
