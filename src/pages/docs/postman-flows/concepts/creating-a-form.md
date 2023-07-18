---
title: "Navigating a Flow"
updated: 2023-07-13
---

## Contents

* [Requests](#requests)
* [Variables](#variables)

In order to use any API, a **request** must be made to either send, update, delete or return information. When making a request, the informating will often not be the same every time it's run. Because of this, **variables** are used to interact with the requests in places where the data being sent or received changes.

> To learn more about making your first request, check out the tutorial [here](../../../getting-started/sending-the-first-request/)

### Requests

In Flows, the **Send Request** block allows a request to be selected from a **Collection**. 

![Selecting a request](https://assets.postman.com/postman-labs-docs/concepts/selecting-a-request.gif)

For this example, we're using [Postman's echo service API](https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65?ctx=documentation). The request being run returns two values, `foo1` with a value of `bar1` and `foo2` with a value of `bar2`. These can be viewed by hovering over the **Success** output.

### Variables

**Varaibles** are a value that can change from one request to another. These can be things like IDs, usernames, numbers, etc.

Using the same Collection as above, selecting a request that contains a variable will automatically open the variables part of the Send Request block and allow values to be entered.

![Filling in a variable](https://assets.postman.com/postman-labs-docs/concepts/request-with-variables-updated.gif)

Just like in the earlier reuqest, the values can be seen from the Success output, but this time, the values returned are whatever the variables `foo1` and `foo2` are set to.