---
title: "Getting data from an array"
updated: 2023-04-05
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Flows: The Next Generation of Software Development"
    url: "https://blog.postman.com/postman-flows-the-next-generation-of-software-development/"
  - type: link
    name: "Postman Flows Is Now More Powerful and User-Friendly"
    url: "https://blog.postman.com/postman-flows-is-now-more-powerful-and-user-friendly/"
---

You can use [FQL](/docs/postman-flows/flows-query-language/introduction-to-fql/) to [navigate JSON objects and select data from named fields](/docs/postman-flows/tutorials/building-your-first-flow/), but how do you get data from something without a named field, like a top-level array? This tutorial shows how to assign an array to a variable, then use FQL to output a single element from the array.

1. Create a new flow and add the following data to the **Start** block: `[1, 2, 3, 4]`. Then select **JSON** from the **Language** dropdown list.

    ![Create a flow and add data](https://assets.postman.com/postman-docs/v10/fql-array-start-v10-2.gif)

1. Connect an **Output** block and an **Evaluate** block to the **Start** block. Connect an **Output** block to the **Evaluate** block.

    ![Add blocks](https://assets.postman.com/postman-docs/v10/fql-array-add-blocks-v10-1.gif)

1. In the **Evaluate** block, select **Start writing an FQL query...** and enter `value1[0]`.

    ![Enter FQL](https://assets.postman.com/postman-docs/v10/fql-array-enter-fql-v10-2.gif)

1. Select **Run**. The first **Output** block shows the array it received from the **Start** block. The **Evaluate** block assigns the array to a variable named `value1` and uses FQL to select its first element. The **Evaluate** block then sends the selected element to the second **Output** block.

    ![Run the flow](https://assets.postman.com/postman-docs/v10/fql-array-run-v10-1.gif)
