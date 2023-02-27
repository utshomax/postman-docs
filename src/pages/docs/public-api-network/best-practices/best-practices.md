---
title: "Public API Network best practices"
updated: 2023-02-01
---

## Crafting Your Public Profile

Please refere to the doucmentation for [Public Profiles](https://learning.postman.com/docs/getting-started/postman-profile/)

## Sharing Collections and Documentation

Cross-linking to your API’s documentation and to your Postman collection creates a fluid developer experience. You can link to a collection or workspace using Postman’s [Run in Postman buttons](https://learning.postman.com/docs/publishing-your-api/run-in-postman/introduction-run-button/), and create links to your documentation within Postman’s documentation.

### Linking To A Workspace

Public Workspaces can be linked to by using the team name and workspace name in this format:

```postman.co/[team-name]/workspace/[workspace-name]/overview```

This will usually open up the workspace in the Postman Web App in the browser.

### Linking To A Collection

Create [Run in Postman buttons](https://learning.postman.com/docs/publishing-your-api/run-in-postman/introduction-run-button/) to link to specific Collections within your Public Workspace.

### Adding a Hyperlink in Postman Documentation

Link back to your documentation using hyperlinks in your [documentation](https://learning.postman.com/docs/publishing-your-api/authoring-your-documentation/#adding-links).

## Organizing Public Workspaces

Workspaces are a grouping of schemas, collections, variables, tests, and more that describe and interact with your APIs. Collections are usually where developers are first to be drawn to, to interact with you API.

### Creating Collection Folders

Collections can divide requests into folders by domain, team, service, or use case.

## Writing Detailed Documentation

Write detailed [documentation](https://learning.postman.com/docs/publishing-your-api/authoring-your-documentation/) for each collection and request.
Standardize the language around your workspace and its APIs will create a fluid experience for a developer learning how to interact with your systems.Use meaningful names for requests , collections, and folders

Name requests by the actions developers expect. Reuse variables through out your collection and keep their names clear and concise to the values they hold.

Check how good your documentation is using the (Documentation Linter)[https://www.postman.com/postman/workspace/published-postman-templates/documentation/1559645-4b520b0d-cf53-41be-8d24-0e0136416091

### Describe Variables

Next to every variable you can write documentation around what the expected value of this variable is and/or examples of its values.
]

### Write Descriptions for Folders and Requests

Collections have a space for documentation. Here or in a folder would be a good place to mention how to sign up or get started with your API. Be sure to use keywords in all your documentation for good discoverability on the internet and on the Public API Network.

### Detail Authorization

Create documentation around how to authorize with your API. You can mention this in the documentation overview or in it’s own folder if you have several different API request workflows or a more complicated authorization schema.

## Creating Multiple Environments for Different Use Cases

You can [create environments](https://learning.postman.com/docs/sending-requests/managing-environments/#creating-environments) for different use cases and add them to your Public Workspace. This helps users understand what they need for what they want to use with your APIs.

## Protecting Sensitive Data

When creating and sharing environment variables make sure you leave examples of values in the Initial value which gets synced to the Public Workspace. Current value is where you can add values you are using and they do not sync to the workspace.

## Creating API Cookbooks

Create example workflows under a collection or a collection of folders for example use cases. Or for someone to fork and get started right away.

Examples of Cookbooks you can make are:

* Authentication and Authorization Cookbooks

* Integration Use Cases

* Automated Use Cases
