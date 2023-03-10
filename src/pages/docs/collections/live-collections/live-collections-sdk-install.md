---
title: "Live collections SDK installation"
updated: 2023-03-15
---

To start using Live collections, create a collection, then install the Postman SDK in your application.

1. Create a new collection. Select **New**, then select **Live Collection**. Or in an existing collection, select the <img alt="Live collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> icon in the right sidebar, then select **Enable Live**.

1. Select your application language: **Node.js** or **Python**.

1. Select a framework. For Node.js, select **Express.js**, **Meteor.js**, or **Next.js**. For Python, select **Django**, **Flask**, or **CherryPy**.

1. Install the Postman SDK in the application’s root directory. You're provided with a installation command that uses `npm` or `pip`. Copy the command and enter it on your server to install the SDK.

    ![Live Collections install SDK](https://assets.postman.com/postman-docs/v10/live-collections-install-sdk.jpg)

1. Configure the Postman SDK by adding a code snippet to your application. For example, for Node.js and Express.js, paste the given code into your app's main `index.js` file:

    ![Live Collections configure SDK](https://assets.postman.com/postman-docs/v10/live-collections-configure-sdk.jpg)

    1. You need to add a [Postman API key](/docs/developer/intro-api/) to the code snippet. You can do this with a variable in your application, or select **Add API Key**.

        ![Live Collections configure SDK](https://assets.postman.com/postman-docs/v10/live-collections-add-api-key.jpg)

    1. Select **Generate Key** to create a new key, or **Use Existing Key** to use one you've previously created.

1. Restart your application if it is already running.

1. Select **Test Connection** to test if Postman can reach your application, or wait for the connection to be established. After Postman is connected to your application, the connection state will change and your app will be connected to Postman.

    <img src="https://assets.postman.com/postman-docs/v10/live-collection-connected.jpg" alt="Live Collections connected" width="350px" />
