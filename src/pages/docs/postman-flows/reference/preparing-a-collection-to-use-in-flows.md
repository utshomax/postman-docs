---
title: "Preparing a collection to use in Flows"
updated: 2023-05-24
---

## Contents

* [Adding saved examples to requests](#using-block-output-as-another-blocks-input)
* [Adding variables to requests](#blocks-inside-of-other-blocks)

**Collections** and their requests, are an integral part of Flows. 

### Adding saved examples to requests
Once data is **Selected**, it can be used with other blocks. Sending it to the Output block is great for seeing that the request worked, but it doesn't actually do anything with the value.

![Using selected data](https://assets.postman.com/postman-labs-docs/concepts/using-selected-data.gif)

Adding another Send Request block and then dragging a connection to it's `value` variable input will let the request use the value `var1` that was set in the first request.

### Adding variables to requests

You may have noticed in the earlier step that the Send Request block has a variable named `value` that is using a **Select** block with no value set. When this happens, it's selecting everything that's being sent to it (which in this case is just `var1`).

This flow can be simplified to remove the extra Select and Output blocks (unless they were needed to check that the flow is running correctly).

![Simplifying the flow](https://assets.postman.com/postman-labs-docs/concepts/simplifying-the-flow.gif)
