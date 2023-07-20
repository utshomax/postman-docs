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

## Objective

Create a flow that gets a list of customers from stripe.com and adds them to a database in brevo.com.
Introduction

## Prerequisites

* A Stripes account and api key
* At least 15 customers in Stripe
* A Breva account and api key

## Overview

Developers often integrate two or more APIs to leverage their individual features. For example, you might want to get customer profiles from a payment services provider like stripe.com and add those profiles as contacts on a marketing platform like breva.com. This tutorial shows you how to easily do this with Postman Flows.

The first step is to fork (copy) the collections and the environment the flow will use, then add your api keys to the environment. You could create these requests, collections, and environment yourself, but using existing ones will save time.

> Creating requests is beyond the scope of this tutorial, but you can learn more about that here.

The collections hold the requests that will get customer profiles from the stripe.com API, divide the response into pages, and post the profiles to the brevo.com API as contacts.

<img>

To begin building the flow, create a new flow and add a Send Request block. Add a GET request by selecting Select a request > Stripe API > Customers > GET List all customers. Select Add environment > Stripe + Sendinblue. The Send Request block shows three variables, provided by the GET request. The baseUrl and stripe_secret_key variables are populated automatically from values stored in the request’s collection and environment. You can hover over them to see their values and scope. For the limit variable, enter 5 to specify how many contacts to include in each page of results. This tutorial uses 15 contacts, so a limit of 5 will send three pages of results.

<img>

Connect the Send Request block’s Success output to a Select block to check the response’s has_more field (boolean). If this field’s value is true, there is another page of results to be sent. If it’s false, the flow has reached the end of the list of customer contacts.

<img>

Also connect the SR block’s Success output to another Select block to get the response’s data object.

<img>

Connect the has_more Select block to an If block’s key input and rename value1 to has_more. Select Write an FQL condition and enter has_more.

<img>

Connect an Evaluate block to the If block’s TRUE output. Rename value1 to contacts. Select Start writing an FQL query and enter contacts[$count(`contacts`)-1].id. This gets the ID of the last object when there is at least one more page of customer contact info.

<img>

Connect a Send Request block to the Evaluate block’s result output and select Select a request > Stripe API > Customers > List all customers pagination. The block automatically selects the Stripe + Sendinblue environment. Enter 5 for the limit variable. Connect the Evaluate block’s Result output to the starting_after variable in the Send Request block. Then connect the Send Request block’s Success output to both the body.has_next and the body.data Select blocks’ inputs.

<img>

Connect the body.data Select block to the If block’s Data input.

<img>

Connect the If block’s True and False outputs to a For block’s List input.

<img>

Connect the For block’s Item output to a Send Request block.

<img>

In the Send Request block, select Select a request > Sendinblue > Contact management > Contacts > POST Create a contact. Select Add environment > Stripe + Sendinblue.

<img>

Connect the For block’s Item output to the email and first_name variables’ inputs. Select name for the first_name variable and email for the email variable.

<img>

Run the flow and confirm the records are added to Brevo (SendInBlue)
