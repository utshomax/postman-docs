---
title: "Adding authentication"
updated: 2023-08-07
---

## Contents

* [Getting an API key](#getting-an-api-key)
* [Using an API key](#using-an-api-key)

Most APIs have some form of authentication that's required to use them. Authentication adds security to an API so that only the intended users can access and update information. You can read more about the different types of authentication and how to use them [here](/docs/sending-requests/authorization/authorization/).

### Getting an API key

This example uses the stock price flow template. This flow is already built but needs an **API key** to run. API keys are just a series of letters and numbers that uniquely identifies who can use the API.

<img src="https://assets.postman.com/postman-labs-docs/concepts/getting-api-key.gif" alt="Getting an API key" fetchpriority="low" loading="lazy" />

Selecting the link in the flow opens the page to get an API key. Enter any organization name and an email and copy the key generated below.

### Using an API key

In this example, the API key isn't particularly important to keep secure, so it can be pasted directly in the **api key** value in the Send Request block. Generally, it's a good idea to store the key securely as a secret value in a Postman [Environment](/docs/sending-requests/managing-environments/) which can then be selected in the Send Request block.

<img src="https://assets.postman.com/postman-labs-docs/concepts/using-api-key.gif" alt="Using an API key" fetchpriority="low" loading="lazy" />
