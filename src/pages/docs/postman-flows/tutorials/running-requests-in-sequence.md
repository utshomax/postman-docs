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

1. **Add a Send Request block**

   Select **+ Block** on the toolbar and select the **Send Request** block from the list to add it to your canvas, then select the request. Repeat this until all the requests are added to the canvas.

    ![Adding sequential requests](https://assets.postman.com/postman-docs/v10/updated-running-add-requests-v10-1.gif)

1. **Connect the send events**

   Select the dot (success output) of the source block and connect it to the send input of the target block in the order you want the requests to execute.

   ![Connect send events](https://assets.postman.com/postman-docs/v10/updated-running-connect-send-events-v10.gif)

   <!-- vale Postman.ComplexWords = NO -->
   > **Important**
   >
   > 1. When a send event connection is made, the input becomes deactivated to show that it will get enabled after the previous blocks get enabled.
   > 2. The send event connection depicts the order in which the blocks will be executed.
   > 3. When using send event, no data is passed from one block to another.
    <!-- vale Postman.ComplexWords = YES -->

1. **Start the flow**

   Start the flow and see the requests run in the order they're configured:

   ![Start the flow](https://assets.postman.com/postman-docs/v10/updated-running-run-with-send-events-v10.gif)

If you want to use data from one request in another request, you can learn how to do so in [Passing data between blocks](/docs/postman-flows/tutorials/passing-data-between-blocks/).
