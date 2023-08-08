---
title: "Preparing a collection to use in Flows"
updated: 2023-05-24
---

## Contents

* [Adding saved examples to requests](#adding-saved-examples-to-requests)
* [Adding variables to requests](#adding-variables-to-requests)

**Collections** and their requests are an integral part of Postman Flows.

### Adding saved examples to requests

Once data is **selected**, it can be used with other blocks. Sending it to an **Output** block is great for seeing that the request worked, but it doesn't actually do anything with the value.

![Using selected data](https://assets.postman.com/postman-labs-docs/concepts/using-selected-data.gif)

Adding another **Send Request** block and then dragging a connection to its `value` variable input enables the request to use the `var1` value that was set in the first request.

### Adding variables to requests

You may have noticed in the previous step that the **Send Request** block has a `value` variable that uses a **Select** block with no set value. When this happens, it's selecting everything that's being sent to it (in this case, the `var1` value).

This flow can be simplified to remove the extra **Select** and **Output** blocks (unless they were required to check that the flow is running correctly).

![Simplifying the flow](https://assets.postman.com/postman-labs-docs/concepts/simplifying-the-flow.gif)
