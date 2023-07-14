---
title: "Running requests in sequence"
updated: 2022-11-17
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Run Requests in Sequence | Postman Flows"
    url: "https://youtu.be/kvg7Jmgnivo"
  - type: link
    name: "Create Charts, Tables, and Output | Postman Flows"
    url: "https://youtu.be/8zWlY4W7SWE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Flows: The Next Generation of Software Development"
    url: "https://blog.postman.com/postman-flows-the-next-generation-of-software-development/"
  - type: link
    name: "Postman Flows Is Now More Powerful and User-Friendly"
    url: "https://blog.postman.com/postman-flows-is-now-more-powerful-and-user-friendly/"
---

If you have several requests that have no dependency on each other but have to be executed in a particular order, you can use send events to connect your [blocks](/docs/postman-flows/core-concepts/blocks/).

> Check out the example flow: [Chaining requests](https://www.postman.com/postman/workspace/flows-snippets/flow/6267f9315d367a64e7ba06e5)

1. **Add Send Request blocks**

   In a new flow, create three **Send Request** blocks with the **Success** outputs connected to the **Send** inputs.

    ![Add Send Request blocks](https://assets.postman.com/postman-docs/v10/flows-chain-requests-v10.gif)

1. **Select the requests**

   In each block, select the requests.

   ![Select requests](https://assets.postman.com/postman-docs/v10/flows-select-requests-v10.gif)

1. **Start the flow**

   Start the flow and see checkmarks appear on the requests as they execute in order:

   ![Start the flow](https://assets.postman.com/postman-docs/v10/flows-run-requests-v10.gif)

If you want to use data from one request in another request, you can learn how to do so in [Passing data between blocks](/docs/postman-flows/tutorials/passing-data-between-blocks/).
