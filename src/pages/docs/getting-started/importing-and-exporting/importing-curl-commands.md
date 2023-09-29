---
title: 'Importing cURL commands'
updated: 2023-09-29
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Import and Export Data in Postman"
    url: "https://youtu.be/KdaiVdNMgL4"
  - type: link
    name: "Collection Format | Postman Level Up"
    url: "https://youtu.be/cRXSblrGrao"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Essentials: Exploring the Collection Format"
    url: "https://blog.postman.com/postman-essentials-exploring-the-collection-format/"
  - type: link
    name: "Differences between Postman Collections and the collection format"
    url: "https://blog.postman.com/differences-between-postman-collections-and-collection-format/"
---

cURL is an efficient command line tool for making HTTP requests. When testing a web application or API, cURL enables you to interact directly from the command line, using a well-established syntax that's common in the community. If you have several cURL commands stashed in different places, you can import them into Postman.

## Contents

* [Import a cURL command into Postman](#import-a-curl-command-into-postman)
* [Convert a Postman request to a cURL command](#convert-a-postman-request-to-curl)

## Import a cURL command into Postman

1. Select **Import** in the left navigation menu. The **Import** modal opens.
1. Paste your cURL command into the input field at the top. Postman creates and opens a request automatically.

    > You can also paste cURL commands into a request's URL field.

## Convert a Postman request to cURL

To convert a Postman request to a cURL command, do the following:

1. Open the request you want to use for a code snippet, then select the code icon <img alt="Code icon" src="https://assets.postman.com/postman-docs/icon-code-snippet.jpg#icon" width="16px"> in the right sidebar.

    <img src="https://assets.postman.com/postman-docs/v10/generate-code-right-sidebar-v10.jpg" width="300px" alt="Open code snippets"/>

1. Select **cURL** from the dropdown list.
1. Select the copy icon <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> to copy the code snippet to your clipboard.

    ![Copy code snippet to clipboard](https://assets.postman.com/postman-docs/v10/code-snippet-copy-icon-v10.jpg)

    > If you’re a CLI based developer, and you prefer working inside the command line with cURL making basic requests, the [VS code extension](/docs/getting-started/basics/about-vs-code-extension/) is for you.
