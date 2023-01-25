---
title: "Using response data in a request"
updated: 2023-01-25
---

This tutorial shows how to take data from a GET response and use it in a GET request.

The Random User API returns a different set of user data for each GET request, unless you include a seed as a parameter. This tutorial takes the seed from a GET response and includes the seed as a parameter in another GET request. Both GET requests will return the same user’s data.

## Contents

* [Create a collection and a request](#create-a-collection-and-a-request)
* [Create a flow](#create-a-flow)

## Create a collection and a request

1. Create a collection named `Random User Collection` and add a GET request named `First Request`.
1. Enter this URL in the request: `https://randomuser.me/api/`.

    ![Create a collection and request](https://assets.postman.com/postman-docs/v10/flow-send-info-first-request-v10.jpg)

1. Select **Send** then **Save Response > Save as example**.

    ![Save the response](https://assets.postman.com/postman-docs/v10/flow-send-info-save-example-v10.jpg)

1. Select the **GET First Request** tab and select **Save**.
1. Add another GET request named `Seeded Request`.
1. Enter the same URL as the first request: `https://randomuser.me/api/`.
1. Select **Key** and enter seed.
1. Select **Value** and enter the variable `{{seedVar}}`.

    ![Add the seed variable](https://assets.postman.com/postman-docs/v10/flow-send-info-seedVar-v10.jpg)

    > The variable is unresolved in the request now, but it will receive a value in Postman Flows.

1. Select **Save**.

## Create a flow

1. Create a new flow and connect a **Send Request** block to the **Start** block.
1. In the **Send Request** block, select **Add request > Random User Collection > First Request**.

    ![Create a Send Request block](https://assets.postman.com/postman-docs/v10/flow-send-info-first-send-block-v10.jpg)

1. Connect a **Select** block to the **Send Request** block's **Success** port.
1. In the **Select** block select **Enter path…** then **/body/info/seed**.

    ![Create a Select block](https://assets.postman.com/postman-docs/v10/flow-send-info-select-block-v10.jpg)

1. Create another **Send Request** block but don’t connect it yet.

    ![Create a Send Request block](https://assets.postman.com/postman-docs/v10/flow-send-info-second-send-block-v10.jpg)

1. In the new **Send Request** block, select **Add request > Random User Collection > Seeded Request**. The `{{seedVar}}` variable appears at the bottom of the block.
1. Connect the **Select** block to the port next to `{{seedVar}}`.
1. Connect a **Log** block to the second **Send Request** block’s **Success** port.

    ![Create a Log block](https://assets.postman.com/postman-docs/v10/flow-send-info-final-flow-v10.jpg)

1. Select **Run** then select **Console**. Look at the two GET requests in the console and notice the second request includes a seed query. If you look at the response bodies for both GET requests, you’ll see they describe the same random user.

    ![Open the console](https://assets.postman.com/postman-docs/v10/flow-send-info-console-v10.jpg)

The first **Send Request** block gets a single random user’s data and sends the response data to a **Select** block. The **Select** block selects the value of the **seed** field from the response data and passes that value to the next **Send Request** block. That **Send Request** block uses the first request's seed as a parameter, returning the same random user as the first **Send Request** block.
