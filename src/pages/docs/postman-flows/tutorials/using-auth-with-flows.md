---
title: "Using authorization with Postman Flows"
updated: 2023-01-10
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Authorization | Postman Flows"
    url: "https://youtu.be/ZWMB__XuxH4"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Flows: The Next Generation of Software Development"
    url: "https://blog.postman.com/postman-flows-the-next-generation-of-software-development/"
  - type: link
    name: "Postman Flows Is Now More Powerful and User-Friendly"
    url: "https://blog.postman.com/postman-flows-is-now-more-powerful-and-user-friendly/"
---

Most APIs require authorization to access their data. Postman Flows can include credentials in its API requests, explicitly or as variables. This tutorial creates a simple flow that uses a global variable to access the OpenAI API with a secret key.

## Contents

* [Create a secret key for the API](#create-a-secret-key-for-the-api)
* [Create a variable for the secret key](#create-a-variable-for-the-secret-key)
* [Create a collection and a request](#create-a-collection-and-a-request)
* [Create a flow](#create-a-flow)

## Create a secret key for the API

This example flow uses a secret key to access the OpenAI API. To get your secret key:

1. In your browser, go to [https://beta.openai.com/account/api-keys](https://beta.openai.com/account/api-keys) and select **Sign up**.
1. Follow the prompts to create and sign in to an OpenAI account.
1. Return to [https://beta.openai.com/account/api-keys](https://beta.openai.com/account/api-keys) and create a secret key.
1. Copy and paste your secret key in a secure but accessible location. You'll use it in a later step.

## Create a variable for the secret key

By assigning your secret key value to a variable, you can keep your key secure and easily include it in multiple **Send Request** blocks and flows.

1. In  your Postman workspace, select the environment quick look icon <img alt="Environment quick look icon" src="https://assets.postman.com/postman-docs/icon-environment-quick-look.jpg#icon" width="16px"> in the [workbench](/docs/getting-started/navigating-postman/#environment-selector-and-environment-quick-look).
1. Next to **Globals**, select **Edit** (or **Add**).
1. Add a variable named `auth` and paste `Bearer <your secret key>` in the **INITIAL VALUE** field. For example: `Bearer ab-123456789876543212345678987654321`
1. Under **TYPE**, select **secret** from the dropdown list.

    ![Create a variable](https://assets.postman.com/postman-docs/v10/flow-auth-create-variable-v10-1.jpg)

1. Select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save**.
1. Close the **Globals** tab.

## Create a collection and a request

1. [Create a collection](/docs/getting-started/creating-the-first-collection/) named `OpenAI Collection` and add a GET request with this URL: `https://api.openai.com/v1/models`.

    ![Create a collection and request](https://assets.postman.com/postman-docs/v10/flow-auth-collection-v10-2.jpg)

1. Select the **Authorization** tab.
1. Next to **Type**, select **API Key** from the dropdown list.
1. Select the **Key** field and enter `Authorization`.
1. Select the **Value** field and enter `{{auth}}`.
1. Select **Send** then **Save as Example**.

    ![Save an example response](https://assets.postman.com/postman-docs/v10/flow-auth-example-v10-3.jpg)

1. Select the **GET New Request** tab and select **Save**.

## Create a flow

1. [Create a new flow](/docs/postman-flows/flows-intro/building-your-first-flow/) and connect a **Send Request** block to the **Start** block.
1. In the **Send Request** block, select **Add request > OpenAI Collection > New Request**. The `{{auth}}` variable appears at the bottom of the **Send Request** block.

    ![Select data](https://assets.postman.com/postman-docs/v10/flow-auth-send-request-v10-1.jpg)

1. Connect a **Log** block to the **Send Request** block's **Success** port.
1. Select **Run** then select **Console**. The flow gets your secret key from the `{{auth}}` variable and includes it in the API request. The API accepts the secret key and sends the response with a `200` code, visible in the console.

    ![Run the flow](https://assets.postman.com/postman-docs/v10/flow-auth-run-v10-1.jpg)
