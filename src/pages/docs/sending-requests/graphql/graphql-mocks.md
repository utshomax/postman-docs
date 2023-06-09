---
title: "Using GraphQL mock servers"
page_id: "graphql-mock"
updated: 2023-06-15
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

In an API-first design lifecycle, you may be designing a new feature that depends on new API endpoints, but another team is responsible for implementing those endpoints, and aren't finished yet. Instead of being blocked by this, you can use a mock server, which will return sample data for requests to the API's endpoints, simulating the behavior of a real API. You can then use the mock server to test your API, before it's even implemented by the other team.

## Using a GraphQL mock server

Before creating a GraphQL mock server, you must have an API definition. This can either be an API in your workspace, a schema file you want to import, or you can create a new API using the Postman API Builder.

To create the GraphQL mock server, do the following:

1. Create a new GraphQL request. See [Making your first request with the GraphQL client](/docs/sending-requests/graphql/graphql-client-first-request/) for more information.
1. Select **Enter request URL**.
1. Select **Select a GraphQL API**.
1. Enter the API or schema to use in one of the following ways:
    * **Select an API** - Select an existing GraphQL API in the current workspace.
    * **Import Schema** - Upload a local GraphQL schema file.
1. After you have selected an API, select **Enter server URL** again, and select **Use Mock URL**.

The mock server will be automatically generated, and ready for use. The request URL will be a server name beginning with a random name and ending in `.srv.pstmn.io`. Select **Query**, and your request will receive responses with random values.
