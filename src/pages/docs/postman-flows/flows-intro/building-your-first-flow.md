---
title: "Building your first flow"
updated: 2022-11-17
---

This page walks you through your first flow, calling the Pokemon API and printing out the list to the console. The Pokemon API returns over 1,000 results but this flow will print two hundred at a time to the console until it reaches the end of the list.

## Contents

<!-- vale Postman.Spelling = NO -->

* [Creating a request and a collection](#creating-a-request-and-a-collection)
* [Making your first send request in Postman Flows](#making-your-first-send-request-in-postman-flows)
* [Logging the output to the console](#logging-the-output-to-the-console)
* [Checking for the next page of results](#checking-for-the-next-page-of-results)
* [Using an If block to branch based on has_next being null](#using-an-if-block-to-branch-based-on-has_next-being-null)
* [Calling the request with the next URL](#calling-the-request-with-the-next-url)
* [Watching it run](#watching-it-run)

<!-- vale Postman.Spelling = YES -->

## Creating a request and a collection

Begin by creating a new collection and adding a GET request.

1. In your workspace, select **New** &gt; **Collection**.
1. Name the collection **Pokemon API**.
1. Add a request to your **Pokemon API** collection with the request URL `https://pokeapi.co/api/v2/pokemon?limit=200`.
1. Select **Send**.
1. Select **Save Response** &gt; **Save as example**.

    > Saving the response as an example enables Postman Flows to automatically detect the structure for easier access later.

1. Select the request you created and replace the URL `https://pokeapi.co/api/v2/pokemon?limit=200` with the variable `{{URL}}`.
1. Select **Save**.

## Making your first send request in Postman Flows

1. Select **New** &gt; **Flows**. A **Start** block appears automatically.
1. Right-click in the **New Flow** workspace to open a list of blocks.
1. Select **Send Request** from the list to create a **Send Request** block.
    > You can type the block's name in the **Search** field to find it faster.
1. Connect the **Start** block to the **Send Request** block.
1. In the **Send Request** block, select **Add request**.
1. Select **Pokemon API**.
1. Select the GET request you created earlier.sele
1. Create a **String** block below the **Start** block.
1. In the **String** block, enter the text `https://pokeapi.co/api/v2/pokemon?limit=200`.
1. Connect the **String** block to the port next to `{{URL}}` on the **Send Request** block.

## Logging the output to the console

1. Create a **Select** block to the right of the **Send Request** block.

    > Because you saved an example earlier, the structure of the returned data auto-populates in the block.

1. Connect the **Select** block to the port next to **Success** on the **Send Request** block.
1. Select the **Select** block and select `/body/results`.
1. Create a **Log** block and connect it to the **Select** block.
1. Select **Run**.
1. Select **Console** to view the results.

## Checking for the next page of results

1. Create another **Select** block and connect it to **Success** port on the **Send Request** block.
1. Enter `/body/next` to get the link to the next set of 200 results.
1. Create an **Evaluate** block to the right of the new **Select** block and connect it to right port on the **Select** block.
1. In the **Evaluate** block, select the **key** field (below **Variables**) and enter `has_next`. This assigns the **Evalaute** block to the variable `has_next`.

    > If `has_next` is null, then the flow has reached the last set of 200 results.

<!-- vale Postman.Spelling = NO -->

![Evaluate has_next](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-check-for-next-result.gif)

## Using an If block to branch based on has_next being null

In this example, the **Evaluate** block outputs `true` if `has_next` isn't null, or `false` if `has_next` is null.

1. Create an **If** block and connect its **True/False** port to the **Evaluate** block's **Out** port.

    > The **Evaluate** block sends either `true` or `false`, which determines which branch the **If** block uses.

1. Connect the `body/next` **Select** block's right port to the  **If** block's **Data** port.

    > The **Select** block sends the URL of the next set of Pokémon, used in the next step.

![**If** block](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-if-block.gif)

## Calling the request with the next URL

In this example, `has_next` isn't null, so another set of Pokémon is available. Postman Flows calls the **Send Request** block again with the URL specified in `/body/next`.

<!-- vale Postman.Spelling = YES -->

1. Connect the **If** block's TRUE output to the **Send Request** block's URL port. This passes the new `URL` variable to the **Send Request** block.
1. Connect the **If** block's FALSE output to the **Send Request** block's Send port. This triggers the send event port of the block so it runs again.

![Calling the **Send Request** block again](https://assets.postman.com/postman-labs-docs/building-your-first-flow/first-next-url.gif)

## Watching it run

<!-- vale Postman.Vocab = NO -->

After the above steps are completed, the flow runs and logs all the Pokémon to the console.

<!-- vale Postman.Vocab = YES -->

![Watching it run](https://assets.postman.com/postman-labs-docs/building-your-first-flow/watching-flow-run.gif)

Congratulations, you've created your first flow!
