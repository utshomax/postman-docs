---
title: "Add contacts to a database with Postman Flows"
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

Developers often integrate multiple APIs to leverage their individual features. For example, you might want to get customer profiles from a payment services provider like [Stripe](http://www.stripe.com) and add those profiles as contacts on a marketing platform like [Brevo](http://www.brevo.com). This tutorial shows you how to do this with Postman Flows.

## Contents

* [Goal](#goal)
* [Prerequisites](#prerequisites)
* [Create the flow](#create-the-flow)

## Goal

Create a flow that gets customer profiles from [Stripe](http://www.stripe.com) and creates contacts in a [Brevo](http://www.brevo.com) database.

## Prerequisites

* A [Stripe](http://www.stripe.com) account and secret key.
* At least 15 Stripe customers.
* A [Brevo](http://www.brevo.com) account and API key.

## Fork the collections and environment

The first step is to [fork](/docs/collaborating-in-postman/using-version-control/forking-entities/) (copy) the collections and the environment the flow will use, then add your API keys to the environment.

1. From the [**Integration Flows** public workspace](https://www.postman.com/postman/workspace/integration-flows), fork the **Brevo API** collection to your workspace.

    <img alt="Fork the collections and environment" src="https://assets.postman.com/postman-docs/v10/flows-tut-system-fork-v10-4.gif" fetchpriority="low" loading="lazy"/>

1. Fork the **Stripe API** collection to your workspace.
1. Fork the **Stripe + Brevo** environment to your workspace.
1. In the **Stripe + Brevo** environment, replace `your key here` with your Stripe secret key and Brevo API key.

## Create the flow and get the customer profiles

1. Create a new flow and add a **Send Request** block.
1. Select **Select a request > Stripe API > Customers > List all customers**.
1. Select **Add environment > Stripe + Brevo**.
1. For the `limit` variable, enter `5` to specify how many contacts to include in each page of results. This tutorial uses 15 contacts, so a limit of 5 will send three pages of results.

    <img alt="Create a new flow" src="https://assets.postman.com/postman-docs/v10/flows-tut-system-first-sr-v10.gif" fetchpriority="low" loading="lazy"/>

## Check for more pages in the reponse

1. Connect the **Send Request** block’s **Success** output to a **Select** block.
1. In the **Select** block, enter `body.has_more`. If the `body.has_more` field’s value is `true`, then there is another page of results to be sent. If it’s `false`, the flow has reached the end of the customer contacts list.
    <!--TODO: Reshoot this gif and enter the value instead of selecting it. -->
    <img alt="Select body.has_more" src="https://assets.postman.com/postman-docs/v10/flows-tut-select-has_more-v10.gif" fetchpriority="low" loading="lazy"/>

1. Also connect the **Send Request** block’s **Success** output to another **Select** block and select `body.data`.

    <img alt="Select body.data" src="https://assets.postman.com/postman-docs/v10/flows-tut-select-data-v10.gif" fetchpriority="low" loading="lazy"/>

## Get a true or false output

1. Connect the `has_more` **Select** block to an **If** block’s **key** input and rename `value1` to `has_more`.
1. Select **Write an FQL condition** and enter `has_more`.
1. Connect the `body.data` **Select** block to the **If** block's **Data** input.

    <img alt="Add an If block" src="https://assets.postman.com/postman-docs/v10/flows-tut-if-has_more-v10.gif" fetchpriority="low" loading="lazy"/>

## Get the current page's ID

1. Connect an **Evaluate** block to the **If** block’s **TRUE** output.
1. Rename `value1` to `contacts`.
1. Select **Start writing an FQL query** and enter ```contacts[$count(`contacts`)-1].id```. This gets the ID of the last object in the response when there is at least one more contact in the original response.
    <!-- TODO: Reshoot this gif in Screen Studio and use zooming -->
    <img alt="Add an Evaluate block" src="https://assets.postman.com/postman-docs/v10/flows-tut-eval-contacts-v10.gif" fetchpriority="low" loading="lazy"/>

## Create pages

1. Connect a **Send Request** block to the **Evaluate** block’s **Result** output.
1. Select **Select a request > Stripe API > Customers > List all customers pagination**. The block automatically selects the **Stripe + Brevo** environment.
1. Enter `5` for the `limit` variable.
1. Connect the **Evaluate** block’s **Result** output to the `starting_after` variable in the **Send Request** block. Then connect the **Send Request** block’s **Success** output to both the `body.has_next` and the `body.data` **Select** blocks’ inputs.
    <!-- TODO: Reshoot this gif in Screen Studio and use zooming -->
    <img alt="Add another Send Request block" src="https://assets.postman.com/postman-docs/v10/flows-tut-send-request-pagination-v10.gif" fetchpriority="low" loading="lazy"/>

## Create a loop and run the flow

1. Connect the **If** block’s **TRUE** and **FALSE** outputs to a **For** block. Then connect the **For** block’s output to a **Send Request** block.

    <img alt="Add a For block" src="https://assets.postman.com/postman-docs/v10/flows-tut-if-for-send-v10.gif" fetchpriority="low" loading="lazy"/>

1. In the **Send Request** block, select **Select a request > Brevo > Contact management > Contacts > POST Create a contact**. Select **Add environment > Stripe + Brevo**.

    <img alt="Select the POST request" src="https://assets.postman.com/postman-docs/v10/flows-tut-post-contact-v10.gif" fetchpriority="low" loading="lazy"/>

1. Connect the **For** block’s **Item** output to the `email` and `first_name` variables’ inputs. Select `name` for the `first_name` variable and `email` for the `email` variable.

    <img alt="Set variables" src="https://assets.postman.com/postman-docs/v10/flows-tut-email-name-v10.gif" fetchpriority="low" loading="lazy"/>

1. Run the flow and confirm the records are added to Brevo.

    <img alt="Run the flow and verify contacts" src="https://assets.postman.com/postman-docs/v10/flows-tut-run-contacts-v10.gif" fetchpriority="low" loading="lazy"/>
