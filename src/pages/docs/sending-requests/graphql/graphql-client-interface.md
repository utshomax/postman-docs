---
title: "Using the GraphQL client interface"
page_id: "graphql-client-interface"
updated: 2023-02-24
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Installing and updating"
    url: "/docs/getting-started/installation-and-updates/"
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "GraphQL in Postman Demo"
    url: "https://youtu.be/7pUbezVADQs"
  - type: link
    name: "GraphQL introspection | Postman Level Up"
    url: "https://youtu.be/k-j3FwTjJkE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Don’t Panic: A Developer’s Guide to Building Secure GraphQL APIs"
    url: "https://blog.postman.com/how-to-build-secure-graphql-apis/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Public GraphQL APIs"
    url: "https://www.postman.com/cs-demo/workspace/9e8c8a19-bb76-46af-9e8d-5747bf8fcce5"
  - type: link
    name: "GraphQL Examples"
    url:  "https://www.postman.com/devrel/workspace/f12c0652-9c9d-4813-968b-c8ed0b3f0022"
  - type: link
    name: "Working with GraphQL collection"
    url: "https://www.postman.com/postman/workspace/postman-team-collections/collection/1559645-c0dd3eb3-5258-4ddd-a6e4-2780c5212e33?ctx=documentation"
  - type: section
    name: "Next steps"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"

warning: false

---

GraphQL requests in Postman include a variety of tools, views, and controls to help you debug and document your GraphQL API effectively and efficiently. This document highlights the parts of the request interface and explains how to use them.

<img src="https://assets.postman.com/postman-labs-docs/graphql-docs/request-full-view.jpg" alt="Different sections of a GraphQL request">

## Contents

* [Creating a new request](#creating-a-new-request)
* [Loading a GraphQL schema](#loading-a-graphql-schema)
* [Understanding parts of the request interface](#understanding-parts-of-the-request-interface)
* [Understanding the response](#understanding-the-response)
* [Creating and executing multiple queries](#creating-and-executing-multiple-queries)
* [Using the right sidebar](#using-the-right-sidebar)
* [Next steps](#next-steps)

## Creating a new request

Create a new GraphQL request by selecting the **New** button in the sidebar, which brings up the **Create new** dialog. Select **GraphQL request** from the list to open a blank gRPC request in a new tab.

<img src="https://assets.postman.com/postman-labs-docs/graphql-docs/creating-request.gif" alt="Creating a new GraphQL request">

## Loading a GraphQL schema

You can use a GraphQL schema in your request to browse the available data fields. This makes creating queries easier. Postman enables you to load a GraphQL schema using GraphQL introspection. This is the easiest way to fetch the schema directly from the server. When you enter the URL, Postman loads the schema automatically.

<img src="https://assets.postman.com/postman-labs-docs/graphql-docs/loading-schema.gif" alt="Adding schema to the request">

You can also choose to load a GraphQL API from Postman or import a schema from your local system to use in the request.

## Understanding parts of the request interface

The request interface enables you to add configurations to connect to the server and execute the query. You can define the URL, load the schema, build your query, and select **Query** to execute it. Based on the API requirements, you may also need to pass authorization details, additional metadata, and settings along with the query.

<img src="https://assets.postman.com/postman-labs-docs/graphql-docs/request-sections.jpg" alt="Different sections of the request interface">

* **URL** - Defines the endpoint where the service is hosted. While creating a new request, you can also browse through URLs you've used by selecting the **URL** field. This helps you create the request faster if you’re going to execute different queries with the same point.
* **Query explorer** - Once the schema is loaded, the available data fields, arguments to be passed, and their respective descriptions appear in this section. The schema query also doubles as an interactive visual query builder enabling you to select individual fields and arguments to build your query.
* **Query builder** - Explore and build your queries, mutations, fragments, and subscriptions here.
* **Response** - Displays the response from the highlighted query/mutation/subscription.
* **Variables** - GraphQL enables you to pass variables as arguments for values defined dynamically in the client. You can use those variables in the query and define their values separately using the **Variables** section.
* **Authorization** - Enter authorization credentials here. You can choose from a list of auth types including API Key, Basic auth, and Bearer token. Learn more about [authorizing requests](https://learning.postman.com/docs/sending-requests/authorization/).
* **Headers** - Pass additional headers with the request in the form of key-value pairs. The client uses these headers to provide more information about the call to the server.
* **Schema** - The **Schema** tab lets you configure a GraphQL schema to make the client aware of the data fields available from the server. A GraphQL schema can be loaded directly using the URL through introspection. You can also use a GraphQL API from the same workspace or import a GraphQL schema from your local system.
* **Scripts** - Postman has a powerful scripting environment that enables you to add JavaScript code (scripts) in your GraphQL requests. You can use scripts to write API tests, debug your requests by logging to [Postman Console](https://learning.postman.com/docs/sending-requests/troubleshooting-api-requests/), or dynamically read or update the values of [variables](https://learning.postman.com/docs/sending-requests/variables/).
* **Query button** - Once you have defined the URL and built the query, you can select **Query** to execute it. Once the query is executed, the server sends back a response with the requested data.
* **Save button** - Saves the request into a collection so that you can reuse it later or document and share it with others.

## Understanding the response

When you execute a query, the response from the server appears in the response area.

<img src="https://assets.postman.com/postman-labs-docs/graphql-docs/response.jpg" alt="Different sections of the response interface">

The response section has the following items for a single response:

* **Response body** - This section shows the data returned by the server for the fields mentioned in the query.
* **Wrap lines button** - Selecting this button adjusts the width of the response body according to the width of the response area, making it easier to read wider responses without scrolling horizontally.
* **Search** - Look for specific elements within the response using the **Search** button.
* **Headers** - Headers returned by the server typically consist of additional information about the execution.
* **Test results** - The results for assertions you write in the scripts section appear here. Based on the test script, the results can be one of three types: Passed, Failed, or Skipped.

### Multiple responses

While executing a subscription-type query that returns multiple responses over a persistent connection, the response area shows these responses as a stream.

<img src="https://assets.postman.com/postman-labs-docs/graphql-docs/response-stream.jpg" alt="Different sections of the response stream">

* **Response stream** - The response stream has the request and the responses arranged in reverse chronological order (latest appears on the top).
* **Expand/collapse response** - You can take an in-depth look at the response content by expanding it within the response stream.
* **Search for response** - You can use the high-level search input to search for particular responses.
* **Filter** - Adjust the view based on message type using the message filter. You can choose from **All Messages**, **Responses**, or **Other**.
* **Clear Messages** - Hides all the messages exchanged from the view, cleaning up the response area so that you can focus on the new messages. You can restore the messages using the **Restore** button after clearing them.

## Creating and executing multiple queries

The GraphQL request interface enables you to create multiple queries in the query builder and execute them one at a time. You can select a query from the query editor and select **Query** to execute only the selected query.

<img src="https://assets.postman.com/postman-labs-docs/graphql-docs/sending-multiquery.gif" alt="Sending multiple queries using the query editor">

You can also use the **Send** button dropdown to browse and select queries.

<img src="https://assets.postman.com/postman-labs-docs/graphql-docs/multiquery-switcher.jpg" alt="Sending multiple queries using the Query button">

## Using the right sidebar

The right sidebar gives you access to tools and information like documentation, commenting, and request details. Open a GraphQL request and select an option in the right sidebar:

* **Documentation** - View the request's description. You can add descriptions by selecting the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to the description, then writing your content using [Postman's built-in editing tools](https://learning.postman.com/docs/publishing-your-api/authoring-your-documentation/).
* **Comments** - Select the comments icon to collaborate with your teammates as you work on an API. You can use `@` to tag others to ask a question, give feedback, and discuss your API.
* **Info** - Select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> to view details about a request, like the request ID and creation date.

## Next steps

After learning about the basic interface elements, try [making your first GraphQL query](/postman-api-client/graphql-client/first-graphql-request/).
