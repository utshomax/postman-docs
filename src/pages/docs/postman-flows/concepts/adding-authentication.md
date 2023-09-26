---
title: "Add authentication"
updated: 2023-08-15
---

Most APIs have some form of authentication that's required to use them. Authentication adds security to an API so that only the intended users can access and update information. You can read more about the different types of authentication and how to use them [here](/docs/sending-requests/authorization/authorization/).

## Contents

* [Getting an API key](#getting-an-api-key)
* [Using an API key](#using-an-api-key)

### Getting an API key

This example uses the stock price Flow template. This Flow is already built but needs an API key to run. API keys are a series of letters and numbers that uniquely identifies who can use the API. This request has a variable `api key` which will pass the value of the variable in the request.

<img src="https://assets.postman.com/postman-labs-docs/concepts/getting-api-key.gif" alt="Getting an API key" fetchpriority="low" loading="lazy" />

Selecting the link in the Flow opens the page to get an API key. Enter any organization name and an email and copy the key generated below.

### Using an API key

For this example, you don't need to secure the API key, so it can be pasted directly in the `api key` value in the **Send Request** block. Generally, it's a good idea to store the key securely as a secret value in a Postman [Environment](/docs/sending-requests/managing-environments/) which you can then select in the **Send Request** block.

<img src="https://assets.postman.com/postman-labs-docs/concepts/using-api-key.gif" alt="Using an API key" fetchpriority="low" loading="lazy" />
