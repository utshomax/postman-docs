---
title: "About the GraphQL client"
page_id: "about-the-graphql-client"
updated: 2023-05-15
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

APIs made with GraphQL enable clients to ask the server for exactly the data they need. This is enabled by a powerful query interface and a runtime to execute those queries making it easier for developers to quickly explore and experiment with the client’s functionalities. Contrary to REST, which makes your chunks of data available on multiple endpoints, GraphQL makes working with data simpler and faster with a single endpoint.

GraphQL is schema-driven, which means more transparency in terms of API functionality and lower dependency between teams building the client and the server. A client can introspect the schema from the server to get an idea about the available data fields, and then send queries specifying fields to retrieve or manipulate the stored data. The server does exactly what was asked from it and returns only the data requested in the query. Combining these features, GraphQL provides users with a flexible, fast, and predictable API experience, making it one of the most popular API technologies.

## Working with GraphQL APIs using the Postman GraphQL client

Postman has a GraphQL client interface to debug and document your API using GraphQL requests. Requests in Postman enable you to make API calls and view the responses from the server. Using a GraphQL request, you can load a GraphQL schema to browse the documentation of what’s available from the server, create your queries, execute them, and view the responses from the server. Additionally, the request interface has a visual query builder to help you create the queries faster. Once the schema is loaded, you can select the fields you want to query, and Postman builds your query automatically based on your selection. You can save your GraphQL requests into a collection to reuse later, document them and share them with your teammates, or publish them to the community on Postman's public API network.

## Next steps

To learn more about using the GraphQL client:

* [Using the GraphQL Request interface](/docs/sending-requests/graphql/graphql-client-interface/)
* [Making your first GraphQL query](/docs/sending-requests/graphql/graphql-client-first-request/)
