---
title: "Requests and variables"
updated: 2023-05-24
---

## Contents

* [Requests](#requests)
* [Variables](#variables)

In order to use any API, a **request** must be made to either send, update, delete, or return information. When making a request, the information is often different every time it's run. Because of this, **variables** are used to interact with the requests in places where the data being sent or received changes.

> To learn more about making your first request, check out the tutorial [here](../../../getting-started/sending-the-first-request/)

### Requests

In Postman Flows, the **Send Request** block enables you to select a request from a **collection**.

![Selecting a request](https://assets.postman.com/postman-labs-docs/concepts/updated-selecting-a-request.gif)

If there are no collections in the workspace, then six easy-to-use requests will appear in the spotlight to choose from to get started.

This example uses [Postman's echo service API](https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65?ctx=documentation).

### Variables

**Variables** are values that can change from one request to another. These can be things like IDs, usernames, and numbers.

The variables part of the **Send Request** block opens automatically and enables you to enter values.

![Filling in a variable](https://assets.postman.com/postman-labs-docs/concepts/updated-adding-a-variable.gif)

In this reuqest, the two variables are named `value1` and `value2` and were setup in the request (more information on setting up variables in requests [here](../../../sending-requests/variables/)). Once the request is run, the values can be seen from the **success** output, the values returned are whatever the variables `value1` and `value2` are set to (in this value `hello` and `there`).
