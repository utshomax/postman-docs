---
title: "Sending information from one system to another with Postman Flows"
updated: 2023-07-19
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

Developers often integrate two or more APIs to leverage their individual features. For example, you might want to get customer profiles from a payment services provider like [Stripe](http://www.stripe.com) and add those profiles as contacts on a marketing platform like [Brevo](http://www.brevo.com). This tutorial shows you how to do this with Postman Flows.

## Contents

* [Goal](#goal)
* [Prerequisites](#prerequisites)
* [Creating the flow](#creating-the-flow)

## Goal

Create a flow that gets a list of customer profiles from [Stripe](http://www.stripe.com) and adds them as contacts to a database in [Brevo](http://www.brevo.com).

## Prerequisites

* A [Stripe](http://www.stripe.com) account and API key
* At least 15 customers in Stripe
* A [Brevo](http://www.brevo.com) account and API key

## Creating the flow

The first step is to [fork](/docs/collaborating-in-postman/using-version-control/forking-entities/) (copy) the collections and the environment the flow will use, then add your API keys to the environment. You could create these requests, collections, and environment, but using existing ones saves time. From the [**Integration Flows** public workspace](https://www.postman.com/postman/workspace/integration-flows), fork the **Brevo API** collection, the **Stripe API** collection, and the **Stripe + Brevo** environment to your workspace.

> Creating requests is beyond the scope of this tutorial, but you can learn more about creating requests [here](/docs/getting-started/sending-the-first-request/).

The collections contain the requests that will get all the customer profiles from the Stripe API in a single response, divide the response into pages, and post the profiles to the Brevo API as contacts. The collections and the environment also contain variables used by the requests.

<img alt="Fork the collections and environment" src="https://assets.postman.com/postman-docs/v10/flows-tut-system-fork-v10.gif"/>

Create a new flow and add a **Send Request** block, then add a GET request by selecting **Select a request > Stripe API > Customers > GET List all customers**. Select **Add environment > Stripe + Brevo**. The **Send Request** block shows three variables, provided by the GET request. The `baseUrl` and `stripe_secret_key` variables are populated automatically from values stored in the request’s collection and environment. You can hover over them to see their values and scope. For the `limit` variable, enter `5` to specify how many contacts to include in each page of results. This tutorial uses 15 contacts, so a limit of 5 will send three pages of results.

<img alt="Create a new flow" src="https://assets.postman.com/postman-docs/v10/flows-tut-system-first-sr-v10.gif"/>

Connect the **Send Request** block’s **Success** output to a **Select** block to check the response’s `has_more` field, which is `true` or `false`. If this field’s value is `true`, then there is another page of results to be sent. If it’s `false`, the flow has reached the end of the customer contacts list.

<img alt="Select body.has_more" src="https://assets.postman.com/postman-docs/v10/flows-tut-select-has_more-v10.gif"/>

Connect the **Send Request** block’s **Success** output to another **Select** block to get the response’s `data` object.

<img alt="Select body.data" src="https://assets.postman.com/postman-docs/v10/flows-tut-select-data-v10.gif"/>

Connect the `has_more` **Select** block to an **If** block’s **key** input and rename `value1` to `has_more`. Select **Write an FQL condition** and enter `has_more`. Connect the `body.data` **Select** block to the **If** block's **Data** input.

<img alt="Add an If block" src="https://assets.postman.com/postman-docs/v10/flows-tut-if-has_more-v10.gif"/>

Connect an **Evaluate** block to the **If** block’s **TRUE** output. Rename `value1` to `contacts`. Select **Start writing an FQL query** and enter ```contacts[$count(`contacts`)-1].id```. This gets the ID of the last object when there is at least one more contact in the original response.

<img alt="Add an Evaluate block" src="https://assets.postman.com/postman-docs/v10/flows-tut-eval-contacts-v10.gif"/>

Connect a **Send Request** block to the **Evaluate** block’s **Result** output and select **Select a request > Stripe API > Customers > List all customers pagination**. The block automatically selects the **Stripe + Brevo** environment. Enter `5` for the `limit` variable.

Connect the **Evaluate** block’s **Result** output to the `starting_after` variable in the **Send Request** block. Then connect the **Send Request** block’s **Success** output to both the `body.has_next` and the `body.data` **Select** blocks’ inputs.

<img alt="Add another Send Request block" src="https://assets.postman.com/postman-docs/v10/flows-tut-send-request-pagination-v10.gif"/>

Connect the **If** block’s **TRUE** and **FALSE** outputs to a **For** block. Then connect the **For** block’s output to a **Send Request** block.

<img alt="Add a For block" src="https://assets.postman.com/postman-docs/v10/flows-tut-if-for-send-v10.gif"/>

In the **Send Request** block, select **Select a request > Brevo > Contact management > Contacts > POST Create a contact**. Select **Add environment > Stripe + Brevo**.

<img alt="Select the POST request" src="https://assets.postman.com/postman-docs/v10/flows-tut-post-contact-v10.gif"/>

Connect the **For** block’s **Item** output to the `email` and `first_name` variables’ inputs. Select `name` for the `first_name` variable and `email` for the `email` variable.

<img alt="Set variables" src="https://assets.postman.com/postman-docs/v10/flows-tut-email-name-v10.gif"/>

Run the flow and confirm the records are added to Brevo.

<img alt="Run the flow and verify contacts" src="https://assets.postman.com/postman-docs/v10/flows-tut-run-contacts-v10.gif"/>
