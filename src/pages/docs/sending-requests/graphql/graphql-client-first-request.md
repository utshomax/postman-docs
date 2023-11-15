---
title: "Create a GraphQL request in Postman"
page_id: "graphql-client-first-request"
updated: 2023-11-15
contextual_links:
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
warning: false
---

Create a GraphQL request and execute it using the Postman Echo service. This topic describes how to create a GraphQL request with Postman's GraphQL client. You can also create GraphQL requests [with Postman's HTTP interface](/docs/sending-requests/graphql/graphql-http/).

The GraphQL client is designed specifically for creating GraphQL requests and has extra features to streamline the process. The HTTP interface supports GraphQL but may require extra steps.

## Contents

* [About GraphQL requests](#about-graphql-requests)
* [Create a GraphQL query with Postman](#create-a-graphql-query-with-postman)

## About GraphQL requests

Every GraphQL request requires a URL and a query. The URL is the endpoint where the data is hosted, and the query defines what exactly needs to be retrieved from this data source. A GraphQL request can also have a schema configured to inform you of the data fields available from the server that can be included in the query. The request can also contain additional information such as authentication, headers, and settings based on the requirements specified by the API.

Using a GraphQL request, you can execute three different types of Queries:

* **Queries** - Queries retrieve data from the server by specifying data fields and passing required arguments.

* **Mutation** - Mutation-type queries allow you to manipulate the data available on the server. You can create, update, and delete data records by selecting the fields and passing the values as arguments.

* **Subscription** - For a live data source with frequently-changing data, you can subscribe to the data available on different fields. This enables the server to send the data requested over a persistent connection.

## Create a GraphQL query with Postman

This example creates and executes a GraphQL query using the interactive query builder.

> If you are using the Postman web app, you must use the Postman Desktop Agent. See [About the Postman Agent](/docs/getting-started/basics/about-postman-agent/) for more information.

1. In Postman, select **New > GraphQL** to open a request in a new tab. (In the Postman desktop app, you can also select **⌘+N** or **Ctrl+N**, then select **GraphQL**.)
1. In the URL field, enter `https://graphql.postman-echo.com/graphql`. This will load the schema using introspection.
1. In the query explorer on the left, select the `hello` field and select `person`, `age`, and `name` as arguments.
1. Enter your age and name in the input boxes next to `age` and `name`. You should also see a fully-formed query based on your selections on the right.
1. Select **Query**.

![GraphQL Request](https://assets.postman.com/postman-docs/v10/graphql-schema-explorer-v10-2.gif)
