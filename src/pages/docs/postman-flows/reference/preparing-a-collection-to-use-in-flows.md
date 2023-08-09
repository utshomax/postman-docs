---
title: "Preparing a collection to use in Flows"
updated: 2023-08-08
---

Collections and their requests are an integral part of Postman Flows. Most flows include API requests to get information for making decisions and interacting with other APIs and apps. When creating a flow, you can:

* Select a request from any collection in your workspace with a [**Send Request**](/docs/postman-flows/reference/blocks-list/) block.
* Use saved examples.
* Select data from responses.
* Add variables.

## Contents

* [Adding saved examples to requests](#adding-saved-examples-to-requests)
* [Adding variables to requests](#adding-variables-to-requests)

### Adding saved examples to requests

Once data is selected, it can be used with other blocks. Sending it to an **Output** block is great for seeing that the request worked, but it doesn't actually do anything with the value.

<img src="https://assets.postman.com/postman-labs-docs/concepts/using-selected-data.gif" alt="Using selected data" fetchpriority="low" loading="lazy" />

Adding another **Send Request** block and then dragging a connection to its `value` variable input will let the request use the value `var1` that was set in the first request.

### Adding variables to requests

You may have noticed in the earlier step that the **Send Request** block has a variable named `value` that is using a **Select** block with no value set. When this happens, it's selecting everything that's being sent to it (which in this case is just `var1`).

This flow can be simplified to remove the extra **Select** and **Output** blocks (unless they were needed to troubleshoot the flow).

<img src="https://assets.postman.com/postman-labs-docs/concepts/simplifying-the-flow.gif" alt="Simplifying the flow" fetchpriority="low" loading="lazy" />
