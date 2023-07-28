---
title: "Passing information between blocks"
updated: 2023-05-24
---

## Contents

* [Using one block's output as another block's input](#using-one-blocks-output-as-another-blocks-input)
* [Blocks inside of other blocks](#blocks-inside-of-other-blocks)

Fundamentally, a flow is about making a request, and then doing something with the result of that request. In order to do this, flows pass information between blocks to perform tasks.

### Using one block's output as another block's input

Once data is selected, it can be used with other blocks. Sending it to an **Output** block is great for seeing that the request worked, but it doesn't actually do anything with the value.

![Using selected data](https://assets.postman.com/postman-labs-docs/concepts/using-selected-data.gif)

Adding another **Send Request** block and then dragging a connection to its `value` variable input lets the request use the value `var1` that was set in the first request.

### Blocks inside of other blocks

You may have noticed in the earlier step that the **Send Request** block has a variable named `value` that's using a **Select** block with no value set. When this happens, it's selecting everything that's being sent to it (which in this case is `var1`).

This flow can be simplified to remove the extra **Select** and **Output** blocks (unless they were needed to check that the flow is running successfully).

![Simplifying the flow](https://assets.postman.com/postman-labs-docs/concepts/simplifying-the-flow.gif)
