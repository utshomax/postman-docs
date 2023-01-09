---
title: "Passing data between blocks"
updated: 2022-01-10
warning: false
---

Data moves through Postman Flows by passing from one block to another. This document describes how Postman Flows gets and handles data.

## Contents

* [Getting data](#getting-data)
* [Passing an entire response between blocks](#passing-an-entire-response-between-blocks)
* [Passing specfic response data between blocks](#passing-specific-response-data-between-blocks)

## Getting data

Postman Flows gets data with [API requests](/docs/getting-started/sending-the-first-request/) from existing collections in your workspace. Postman Flows also accepts data pasted into the **Start** block.

### Getting data with an API request

In this example, a flow's **Send Request** block gets data with a collection's GET request. The **Send Request** block then passes all the data to a **Log** block.

1. [Create a collection](/docs/getting-started/creating-the-first-collection/) named Random User Collection and add a GET request with this URL: `https://randomuser.me/api/`.

1. Select **Send**.

    ![Create a request](https://assets.postman.com/postman-docs/v10/flow-get-request-v10.jpg)

1. Select **Save**.

1. [Create a new flow](/docs/postman-flows/flows-intro/building-your-first-flow/) and connect a **Send Request** block to the **Start** block.

    ![Create a flow and add a Send Request block](https://assets.postman.com/postman-docs/v10/flow-data-send-request-v10.jpg)

1. In the **Send Request** block, select **Add request > Random User Collection > New Request**. Each time your new flow executes, the flow will get data using the GET request from the Random User Collection request you created earlier.

    ![Select data](https://assets.postman.com/postman-docs/v10/flow-select-data-v10.jpg)

1. Connect a **Log** block to the **Send Request** block's **Success** port.

    ![Add a Log block](https://assets.postman.com/postman-docs/v10/flow-add-log-block-2-v10.jpg)

1. Select **Console** then select **Run**. The **Log** block sends the entire response to the console, including request headers, response headers, and the response body.

### Getting data from the Start block

In this example, the flow takes all the data that is pasted into the **Start** block and passes it to a **Select** block. You can tell the **Select** block to get a value from a key-value pair in the response. The **Select** block then passes the specified data to the **Log** block.

1. [Create a new flow](/docs/postman-flows/flows-intro/building-your-first-flow/) and select the gear icon <img alt="Gear icon" src="https://assets.postman.com/postman-docs/icon-gear-solid-v9.jpg#icon" width="16px"> in the **Start** block.

    ![Select the gear icon](https://assets.postman.com/postman-docs/v10/flow-start-configure-v10.jpg)

1. Select **Enter incoming data** and paste in the sample data below. Your new flow will use this data every time it executes.

   ``` json
   {
      "results": [
         {
               "gender": "female",
               "name": {
                  "title": "Miss",
                  "first": "Astrid",
                  "last": "Klingenberg"
               },
               "location": {
                  "street": {
                     "number": 2547,
                     "name": "Lyseskrenten"
                  },
                  "city": "Tvedestrand",
                  "state": "Oppland",
                  "country": "Norway",
                  "postcode": "6523",
                  "coordinates": {
                     "latitude": "44.5909",
                     "longitude": "130.7502"
                  },
                  "timezone": {
                     "offset": "+9:00",
                     "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                  }
               },
               "email": "astrid.klingenberg@example.com",
               "login": {
                  "uuid": "263e48e9-1d6d-4d18-9458-27b1b7bad1b9",
                  "username": "lazycat514",
                  "password": "francois",
                  "salt": "YAY2fGhq",
                  "md5": "0ed2300b7aad0843267d658db0f22f2a",
                  "sha1": "57ef1b1c5cac06feb6712ac863b7c9d6292e400e",
                  "sha256": "5312eee0d8693e522aa62814fb49fb3239bad5326ca0f37011a97704978a4add"
               },
               "dob": {
                  "date": "1984-03-11T08:50:14.752Z",
                  "age": 38
               },
               "registered": {
                  "date": "2003-09-27T19:45:20.432Z",
                  "age": 19
               },
               "phone": "57680755",
               "cell": "96350131",
               "id": {
                  "name": "FN",
                  "value": "11038429851"
               },
               "picture": {
                  "large": "https://randomuser.me/api/portraits/women/68.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/women/68.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/women/68.jpg"
               },
               "nat": "NO"
         }
      ],
      "info": {
         "seed": "4be1e2e93f6d34ba",
         "results": 1,
         "page": 1,
         "version": "1.4"
      }
   }
   ```

## Passing an entire response between blocks

When your flow gets data from either an API request or the **Start** block, you can pass that data to other blocks so they can process it. The example below gets response data using an API request in a **Send Request** block, then passes the entire response to a **Log** block.

1. [Create a collection](/docs/getting-started/creating-the-first-collection/) named Random User Collection and add a GET request with this URL: `https://randomuser.me/api/`.

1. Select **Send** then **Save Response > Save as example**.

    ![Save an example response](https://assets.postman.com/postman-docs/v10/flow-get-random-user-2-v10.jpg)

1. Select the **GET New Request** tab and select **Save**.

    ![Save the GET request](https://assets.postman.com/postman-docs/v10/flow-save-request-v10.jpg)

1. [Create a new flow](/docs/postman-flows/flows-intro/building-your-first-flow/) and connect a **Send Request** block to the **Start** block.

    ![Create a flow and add a Send Request block](https://assets.postman.com/postman-docs/v10/flow-data-send-request-v10.jpg)

1. In the **Send Request** block, select **Add request > Random User Collection > New Request**.

    ![Select data](https://assets.postman.com/postman-docs/v10/flow-select-data-v10.jpg)

1. Connect a **Log** block to the **Send Request** block's **Success** port.

    ![Connect a Log block](https://assets.postman.com/postman-docs/v10/flow-add-log-block-v10.jpg)

1. Select **Run** then select **Console**. The flow gets response data from the API request in the **Send Request** block and passes the entire response to the **Log** block, which displays the data in the console.

    ![Run the flow](https://assets.postman.com/postman-docs/v10/flow-run-flow-v10.jpg)

## Passing specific response data between blocks

You can use a **Select** block to extract values from responses. The example below gets the value of the `country` field from sample response data in the **Start** block.

1. [Create a new flow](/docs/postman-flows/flows-intro/building-your-first-flow/) and select the gear icon <img alt="Gear icon" src="https://assets.postman.com/postman-docs/icon-gear-solid-v9.jpg#icon" width="16px"> in the **Start** block.

    ![Select the gear icon](https://assets.postman.com/postman-docs/v10/flow-start-configure-v10.jpg)

1. Select **Enter incoming data** and paste in the sample data below. Your new flow will use this data every time it executes.

   ``` json
   {
      "results": [
         {
               "gender": "female",
               "name": {
                  "title": "Miss",
                  "first": "Astrid",
                  "last": "Klingenberg"
               },
               "location": {
                  "street": {
                     "number": 2547,
                     "name": "Lyseskrenten"
                  },
                  "city": "Tvedestrand",
                  "state": "Oppland",
                  "country": "Norway",
                  "postcode": "6523",
                  "coordinates": {
                     "latitude": "44.5909",
                     "longitude": "130.7502"
                  },
                  "timezone": {
                     "offset": "+9:00",
                     "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                  }
               },
               "email": "astrid.klingenberg@example.com",
               "login": {
                  "uuid": "263e48e9-1d6d-4d18-9458-27b1b7bad1b9",
                  "username": "lazycat514",
                  "password": "francois",
                  "salt": "YAY2fGhq",
                  "md5": "0ed2300b7aad0843267d658db0f22f2a",
                  "sha1": "57ef1b1c5cac06feb6712ac863b7c9d6292e400e",
                  "sha256": "5312eee0d8693e522aa62814fb49fb3239bad5326ca0f37011a97704978a4add"
               },
               "dob": {
                  "date": "1984-03-11T08:50:14.752Z",
                  "age": 38
               },
               "registered": {
                  "date": "2003-09-27T19:45:20.432Z",
                  "age": 19
               },
               "phone": "57680755",
               "cell": "96350131",
               "id": {
                  "name": "FN",
                  "value": "11038429851"
               },
               "picture": {
                  "large": "https://randomuser.me/api/portraits/women/68.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/women/68.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/women/68.jpg"
               },
               "nat": "NO"
         }
      ],
      "info": {
         "seed": "4be1e2e93f6d34ba",
         "results": 1,
         "page": 1,
         "version": "1.4"
      }
   }
   ```

1. Select **JSON** from the **Language** dropdown list.

1. Connect a **Select** block to the **Start** block.

1. In the **Select** block, select **Enter path...**.

    ![Select Enter path...](https://assets.postman.com/postman-docs/v10/flow-enter-path-v10.jpg)

1. Select **results** then scroll down to the **country** field and select it.

1. Connect a **Log** block to the **Select** block.

    ![Add a Log block](https://assets.postman.com/postman-docs/v10/flow-add-log-block-1-v10.jpg)

1. Select **Console**.

1. Select **Run**. `"Norway"` appears in the console.

    ![Select Ran and open the console](https://assets.postman.com/postman-docs/v10/flow-console-country-v10.jpg)
