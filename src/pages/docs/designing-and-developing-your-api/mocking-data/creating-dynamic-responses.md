---
title: "Creating dynamic mock responses"
updated: 2022-11-11
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Setting up mock servers"
    url: "/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Dynamic Mock Behavior | Postman Level Up"
    url: "https://youtu.be/av7SZo9sZAE"
---

Intro

## Contents

* [Using variables with mock servers](#using-variables-with-mock-servers)
* [Generating random data with dynamic variables](#generating-random-data-with-dynamic-variables)
* [Generating contextual mock responses](#generating-contextual-mock-responses)

## Using variables with mock servers

[Variables](/docs/sending-requests/variables/) enable you to store values and use them in your requests and saved examples. If you change the value of a variable, the new value is used wherever the variable occurs..

Postman mock servers support [environment variables](/docs/sending-requests/variables/#defining-environment-variables) and [collection variables](/docs/sending-requests/variables/#defining-collection-variables). (Mock servers don't support using global variables.)

* To use environment variables, select the environment in the [mock server's configuration](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/#editing-the-mock-server-configuration).
* To use collection variables, define them on the **Variables** tab in the [collection you are mocking](/docs/sending-requests/variables/#defining-collection-variables).

When you use an environment or collection variable in a saved example, the mock server resolves the variable and replaces it with the variable's initial value. If an environment variable and a collection variable have the same name, Postman uses the environment variable. Learn more about [variable scopes](/docs/sending-requests/variables/#variable-scopes).

<img alt="Using variables with mock servers" src="https://assets.postman.com/postman-docs/v10/mock-server-using-variables-v10.jpg" width="467px" />

> If you save the URL of a mock server to a [variable](/docs/sending-requests/variables/), you can reference it across requests. For example, if you have a production server and a mock server, you can have an [environment](/docs/sending-requests/managing-environments/) for each server. In each environment, create a variable with the same name for the mock URL. By using the variable in your requests, you can switch between the two environments to call the production server or the mock server.

## Generating random data with dynamic variables

In this demonstration, you defined the data to be returned by the mock server in your examples. However, there may be cases when you want the mock server to return a response containing random data.

To have your mock server return random data, use [dynamic variables](/docs/writing-scripts/script-references/variables-list/) in your example's response body. Dynamic variables are resolved as part of the mock server response and replaced with random data. Dynamic variables are useful for generating random data when mocking an API, and you can use them for exploratory testing and writing rich, data-driven tests.

For instance, your example's response body might contain dynamic variables as follows:

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

When you call the mock server endpoint, the response data will change to something like:

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

## Generating contextual mock responses

Using templates
