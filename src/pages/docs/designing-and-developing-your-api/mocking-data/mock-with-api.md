---
title: "Mocking with the Postman API"
order: 86
updated: 2022-02-16
page_id: "mock_with_api"
search_keyword: "x-mock-response-code, x-mock-response-name, x-mock-response-id, x-mock-match-request-body, x-mock-match-request-headers"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: link
    name: "Intro to the Postman API"
    url: "/docs/developer/intro-api/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to the Postman API | Postman Level Up"
    url: "https://youtu.be/iEtsp6o4AJg"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Gear4Music"
    url: "https://www.postman.com/case-studies/gear4music/"
  - type: link
    name: "Giant Machines"
    url: "https://www.postman.com/case-studies/giant-machines/"

warning: false
---

Setting up a [mock server](/docs/designing-and-developing-your-api/mocking-data/mock-servers-overview/) enables you to simulate the behavior of a real API for development or testing purposes. In Postman, you [mock a collection](/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/) by adding examples and creating a mock server. You can also automate the process of setting up a mock server using the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a). Follow the steps below to get a hands-on demonstration of how to mock a collection with the Postman API.

## Contents

* [Step 1: Set up a collection for mocking](#step-1-set-up-a-collection-for-mocking)
* [Step 2: Retrieve the collection ID](#step-2-retrieve-the-collection-id)
* [Step 3: Create a mock server with the Postman API](#step-3-create-a-mock-server-with-the-postman-api)
* [Step 4: Get the mock server URL](#step-4-get-the-mock-server-url)
* [Step 5: Send a request to the mock server](#step-5-send-a-request-to-the-mock-server)

## Step 1: Set up a collection for mocking

In Postman, [create a new collection](/docs/sending-requests/intro-to-collections/#creating-collections) called `testAPI`. Optionally, you can also [create a new environment](/docs/sending-requests/managing-environments/#creating-environments) called `testAPIEnv`. For this demonstration, you will set up a mock server that enables you to simulate each endpoint in the `testAPI` collection and view their responses.

[Add a new request](/docs/sending-requests/requests/#creating-requests) to the `testAPI` collection. In the example below, the collection has one request called `Request 1` that sends a `GET` request to `https://postman-echo.com/get?test=123`. Feel free to add more requests if you like.

Open the first request in the collection and select **Send** to send the request. Then, in the response pane, select **Save Response > Save as example**. Repeat this process for each request in the collection. Your mock server will use these [saved examples](/docs/sending-requests/examples/) to return mock data.

<img alt="Response saved as an example" src="https://assets.postman.com/postman-docs/mock-api-saved-example-v9-14.jpg" width="893px">

> You can [edit an example](/docs/sending-requests/examples/#editing-an-example) to include the specific response body, header, or status code that you want the mocked endpoint to return. A request can have more than one example, in which case the mock server will follow a [matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/) to decide which example to return.

## Step 2: Retrieve the collection ID

To mock a collection using the Postman API, you first need to know the collection ID. You can retrieve the ID of the `testAPI` collection using the [GET All Collections](https://documenter.getpostman.com/view/12959542/UV5XjJV8#fa95fa93-5aa8-4146-94a6-bfebc1a578b4) endpoint of the Postman API. If you created an environment, you also need to retrieve its ID using the [GET All Environments](https://documenter.getpostman.com/view/12959542/UV5XjJV8#b7ace502-4a5a-4f1c-8164-158811bbf236) endpoint.

### Get the collection ID

Create a new request in Postman, leave `GET` selected for the method, and enter the following URL: `https://api.getpostman.com/collections`

If you send the request, you'll receive an authentication error. To [authenticate with the Postman API](https://learning.postman.com/docs/developer/intro-api/#authentication), add an `x-api-key` header to your request and sets its value to your Postman API key. (You can [generate a new Postman API key](https://learning.postman.com/docs/developer/intro-api/#generating-a-postman-api-key) if you don't already have one.)

Select **Send** to send the `GET All Collections` request. The response pane displays a list of all your collections. Search for the `testAPI` collection and locate the `uid` value. You will use this collection ID in the next step.

<img alt="Getting the collection ID" src="https://assets.postman.com/postman-docs/mock-api-collection-id-v9-14.jpg" width="893px">

> You can also find the collection ID in Postman. First, select **Collections** in the sidebar and select the `testAPI` collection. Then select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right context bar to see the collection ID.

### Get the environment ID

Create a new request in Postman, leave `GET` selected for the method, and enter the following URL: `https://api.getpostman.com/environments`

Make sure to add an `x-api-key` header with your Postman API Key, and then select **Send**. The response pane displays a list of all your environments. Search for the `testAPIenv` environment and locate the `uid` value.

<img alt="Getting the environment ID" src="https://assets.postman.com/postman-docs/mock-api-environment-id-v9-14.jpg" width="893px">

> You can also find the environment ID in Postman. First, select **Environments** in the sidebar and select the `testAPIenv` environment. Then select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right context bar to see the environment ID.

## Step 3: Create a mock server with the Postman API

Now that you have the collection ID (and optionally the environment ID), you can use the [POST Create Mock](https://documenter.getpostman.com/view/12959542/UV5XjJV8?_ga=2.100201950.1771040895.1644854022-1154140310.1627600155#296628ed-d49b-4206-b4a7-d622e693945c) endpoint to create a mock server.

First, create a new request in Postman, select `POST` for the method, and enter the following URL: `https://api.getpostman.com/mocks`

Next, add the following **raw** JSON code to the **Body** tab of the request, substituting your collection ID and environment ID:

```JSON
{
  "mock": {
    "name": "testAPImock",
    "collection": "<your-collection-id>",
    "environment": "<your-environment-id>"
  }
}
```

> By default, mock servers are publicly accessible. If you don't want the mock server to be public, add the line `"private": true` to the request body.

As always, make sure to add an `x-api-key` header with your Postman API Key. When ready, select **Send** to send the request to the Postman API and create the mock server.

<img alt="Creating a mock server" src="https://assets.postman.com/postman-docs/mock-api-create-mock-v9-14.jpg" width="893px">

## Step 4: Get the mock server URL

To send a request to your mock server, you need to know the mock server URL. You can retrieve the mock server URL using the [GET All Mocks](https://documenter.getpostman.com/view/12959542/UV5XjJV8?_ga=2.100201950.1771040895.1644854022-1154140310.1627600155#52a729a4-4a36-46e5-bfdf-fda0af228d2f) endpoint. Create a new request in Postman, leave `GET` selected for the method, and enter the following URL: `https://api.getpostman.com/mocks`

Add an `x-api-key` header with your Postman API Key, and then select **Send**. The response pane displays a list of all your mock servers. Search for the `testAPImock` mock server and locate the `mockUrl` value. You'll use this URL to send a request to the mock server.

<img alt="Getting the mock server URL" src="https://assets.postman.com/postman-docs/mock-api-mock-url-v9-14.jpg" width="893px">

> You can also find the mock server URL in Postman. Select **Mock Servers** in the sidebar, select the `testAPI` mock server, and then select **Copy URL**.

## Step 5: Send a request to the mock server

You are now ready to simulate requests using your collection. To send a request to the mock server, use the mock server URL and append the request path: `{{mockURL}}/path`

Try this yourself by simulating `Request 1` in the `testAPI` collection. Create a new request in Postman, leaving `GET` selected for the method. For the request URL, enter your mock server URL and append the path from the request:

`https://<your-mock-server-url>/get?test=123`

There's no need to add an `x-api-key` header, as the mock server is public, so just select **Send** to send the request. The response pane shows the response from the mock server.

<img alt="Sending a request to the mock server" src="https://assets.postman.com/postman-docs/mock-api-mock-response-v9-14.jpg" width="893px">

Notice that the response is identical to the example you saved for `Request 1`. That's because the mock server uses the example to create a response. If you added more requests and examples to the collection, send them to the mock server using the mock server URL and the request path.
