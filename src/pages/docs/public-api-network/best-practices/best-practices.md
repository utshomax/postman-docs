---
title: "Public API Network best practices"
updated: 2023-02-01
---

## Crafting your public Postman profile

Please refere to the doucmentation for [Public Profiles](https://learning.postman.com/docs/getting-started/postman-profile/)

## Organizing public workspaces

Workspaces are a grouping of schemas, collections, variables, tests, and more that describe and interact with your APIs. Collections are usually where developers are first to be drawn to, to interact with you API.

### Creating collection folders

Collections can divide requests into folders by domain, team, service, or use case.

## Writing detailed documentation

Write detailed [documentation](/docs/publishing-your-api/authoring-your-documentation/) for each collection and request to help developers quickly learn how to consume your APIs. The following best practices will help you write clear and concise documentation:

* Standardize the language in your workspace and its APIs.

* Use meaningful names for requests, collections, and folders. Use names that developers would expect.

* Reuse variables throughout your collection. Use variable names that are meaningful and set a clear expectation for their related values.

To learn more about writing detailed documentation, see [The Good Documentation Checklist](https://www.postman.com/postman/workspace/published-postman-templates/documentation/1559645-4b520b0d-cf53-41be-8d24-0e0136416091).

### Define and describe variables

For your [variables](/docs/sending-requests/variables/), you can write documentation describing the expected value and provide example values. Variables can be defined independently or stored within environments, and then applied across collections, enabling you to use variables for authentication, pagination, and other aspects of working with APIs. Variables can also define a state across multiple APIs and collections.

### Write descriptions for folders and requests

At either the collection or folder level, Postman recommends writing detailed [descriptions](/docs/publishing-your-api/authoring-your-documentation/#adding-descriptions-to-your-documentation) that explain how to sign up for and get started with your API. You can use keywords in your descriptions to increase your API's discovery in organic search results and Postman search results.

To learn more about collections and folders, see [Using collections](/docs/collections/using-collections/).

## Add examples to requests

Save examples of your API's [requests, responses, and messages](/docs/sending-requests/examples/) to [use examples in your documentation](/docs/sending-requests/examples/#using-examples-in-documentation). This enables developers to test your API using example data.

### Detail authorization

Create documentation around how to authorize with your API. You can mention this in the documentation overview or in it’s own folder if you have several different API request workflows or a more complicated authorization schema.

## Creating multiple environments for different use cases

You can [create environments](https://learning.postman.com/docs/sending-requests/managing-environments/#creating-environments) for different use cases and add them to your Public Workspace. This helps users understand what they need for what they want to use with your APIs.

## Protecting sensitive data

When [creating and sharing environment variables](/docs/sending-requests/managing-environments/#adding-environment-variables), specify example values as the Initial value for the variable. Don't add sensitive data as the Initial value because it is shared with users who can access the environment. The Current value is used in your local instance of Postman, and is never synced to your account or shared with your team unless you choose to persist it.

## Creating API cookbooks

Create example workflows under a collection or a collection of folders for example use cases. Or for someone to fork and get started right away.

Examples of Cookbooks you can make are:

* Authentication and Authorization Cookbooks

* Integration Use Cases

* Automated Use Cases
