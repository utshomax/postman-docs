---
title: "Using Flows webhooks"
updated: 2022-11-30
---

To create a flow that executes on the Postman servers, create a **Start** block.

![Start Block](https://assets.postman.com/postman-labs-docs/cloud-execution/running-flows-on-the-cloud-start.gif)

## Contents

* [Testing flows locally](#testing-flows-locally)
* [Deploy your flow](#deploy-your-flow)
* [Trigger the webhook](#trigger-the-webhook)

## Testing flows locally

Before starting, enter your test data and run it to see the output on your local console. Test data can be added by clicking the gear icon on the **Start** block. The test data can either be in text or JSON format.

![Testing Locally](https://assets.postman.com/postman-labs-docs/cloud-execution/running-flows-on-the-cloud-test-data.gif)

## Deploy your flow

Select **Deploy** and your flow will now be running in the cloud. Selecting the **Runs** section of the right pane will display the deployed flow was last updated. The webhook URL can be seen here as well as in the top left corner of the flow.

> **Important**
>
> Every time you release, it saves a snapshot of your collections and environments. If you make any changes to these, you will need to release again.

![Release to cloud](https://assets.postman.com/postman-labs-docs/cloud-execution/running-flows-in-the-cloud-create-deploy.gif)

## Trigger the webhook

In the **Runs** section, select **View** to observe the flow running in the cloud. The logs will be visible in your client. Make a POST request to trigger the webhook endpoint and observe your flow executing in the cloud.

![Trigger the Endpoint](https://assets.postman.com/postman-labs-docs/cloud-execution/running-in-cloud.gif)
