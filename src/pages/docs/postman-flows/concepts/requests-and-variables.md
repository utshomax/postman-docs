---
title: "Requests and variables"
updated: 2023-05-24
---

## Contents

* [Requests](#requests)
* [Variables](#variables)

In order to use any API, a **request** must be made to either send, update, delete or return information. When making a request, the information is often different every time it's run. Because of this, **variables** are used to interact with the requests in places where the data being sent or received changes.

> To learn more about making your first request, check out the tutorial [here](../../../getting-started/sending-the-first-request/)

### Requests

In Postman Flows, the **Send Request** block enables you to select a request from a **collection**.

![Selecting a request](https://assets.postman.com/postman-labs-docs/concepts/selecting-a-request.gif)

This example uses [Postman's echo service API](https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65?ctx=documentation). The request returns two values, `foo1` with a value of `bar1` and `foo2` with a value of `bar2`. You can view these by hovering over the **Success** output.

### Variables

**Variables** are values that can change from one request to another. These can be things like IDs, usernames, and numbers.

Use the same collection you used earlier to select a request that has a variable. The variables part of the **Send Request** block opens automatically and enables you to enter values.

![Filling in a variable](https://assets.postman.com/postman-labs-docs/concepts/request-with-variables-updated.gif)

Just like in the earlier reuqest, the values can be seen from the Success output, but this time, the values returned are whatever the variables `foo1` and `foo2` are set to.
