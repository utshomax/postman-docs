---
title: "Using webhooks with Postman Flows"
updated: 2023-05-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Using Webhooks to Run on the Cloud | Postman Flows"
    url: "https://youtu.be/MHSqhoxX2ME"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Flows: The Next Generation of Software Development"
    url: "https://blog.postman.com/postman-flows-the-next-generation-of-software-development/"
  - type: link
    name: "Postman Flows Is Now More Powerful and User-Friendly"
    url: "https://blog.postman.com/postman-flows-is-now-more-powerful-and-user-friendly/"
---

## Contents

* [Basic concepts of Postman Flows and webhooks](#basics-concepts-of-flows-and-webhooks)
* [Connect a flow to a Slack app](#connect-a-flow-to-a-slack-app)
* [Building your own Slack app with Flows](#building-your-own-slack-app-with-flows)

## Basic concepts of Postman Flows and webhooks

Webhooks are a way for one system to notify another system that some information has changed. It works very similarly to push notifications on a smartphone. Instead of constantly needing to check the email app to see if there's any new mail, the email app sends a notification to the user that a new email has been received. Many services today that have an API also offer webhooks as a way to communicate between their system and yours.

When a Flow is deployed to the cloud, the Flow can be run each time it receives a webhook from another service. This is useful because the Flow can be run automatically and doesn't need your computer to be on, since these Flows run on Postman's cloud.

### Testing locally

Every Flow starts with the **Start** block. When you want to create a Flow to run on the cloud, you'll want to test it locally. You can enter information into the the **Start** block by selecting the gear icon. This information can either be in text or JSON format. Typically, you'll want to put an example of what an actual webhook will be from the API you're working with. Many APIs include a sample of what their webhook information will look like, but if the API you're working with doesn't you can make one yourself by following the steps in the [Trigger the webhook](#trigger-the-webhook) step.

![Testing Locally](https://assets.postman.com/postman-docs/v10/running-flows-on-the-cloud-test-data-v10.gif)

### Deploy your Flow

Clicking **Deploy** will take your local Flow and upload it to Postman's cloud. Selecting the **Runs** section of the right pane will show the time and date it was last deployed and the Webhook Events sections will list every webhook sent to the deployed Flow.

In the **Runs** section, select **View Deployed** to observe the flow running in the cloud. Select **View Live Logs** in the bottom middle of the page to see the live information flowing into your flow. Selecting **Back to Editor** will take you back to your local flow where you can make changes and then deploy again when you're finished.

> **Important**
>
> Every time you deploy, it saves your collections and environments. If you make any changes to these, you will need to deploy again.

![Deploy to cloud](https://assets.postman.com/postman-docs/v10/deploy-flow-to-cloud-update-v10.gif)

### Trigger the webhook

Generally, when working with webhooks, there will be another service that will send the webhook to the Flow you deployed. The **Webhook URL** shown in the right panel is the URL that you can provide the other system or service with that tells it where to send notifications to. Once that's set up, you can view the live logs and see what the notification from the other service looks like to use as your test data. Flows can also be manually run by making a POST request to the **Webhook URL**.

![Trigger the Endpoint](https://assets.postman.com/postman-docs/v10/trigger-flow-in-cloud-v10.gif)

## Connect a Flow to a Slack app

> **Prerequisite**
> Sign up for a free [Slack](https://slack.com/) account.

Create a new app in Slack [here](https://api.slack.com/apps), give it a name, and then enable a slash command which will let us interact with it. When making the slash command, for the request URL use ```https://770fc74bbe7045dcaa56a7261b08c869.flow.pstmn.io``` which is an already deployed Flow which can be found [here](https://www.postman.com/postman/workspace/utility-flows/flow/642376220544c000387685c5).

![Create Slack app](https://assets.postman.com/postman-labs-docs/cloud-execution/make-slack-app-with-command.gif)

Next, enable Webhooks so we can send messages to the Slack app from Flows (you'll need to reinstall the app after you do this, as shown in the GIF). Pick a channel from Slack that you'll want to interact with it in from the drop-down.

![Enable Slack Webhooks](https://assets.postman.com/postman-labs-docs/cloud-execution/slack-app-enable-webhooks.gif)

Finally, run the command you created in the first step in the slack channel you installed it to and view your recipe!

![Enable Slack Webhooks](https://assets.postman.com/postman-labs-docs/cloud-execution/run-slack-command.gif)

## Building your own Slack app with Flows

> **Prerequisites**
>
> 1. Sign up for a free [Slack](https://slack.com/) account.
> 2. Sign up for a free [polygon.io](https://polygon.io/) account and get your API key.

To make your own Slack app from scratch with Flows, follow the same steps as [Connect a Flow to a Slack app](#connect-a-flow-to-a-slack-app) but this time lets name the app **Stock App**, make the Command **stock-quote** and use the URL of the new Flow you're going to make.

![New Slack command](https://assets.postman.com/postman-docs/v10/new-slack-request-url-v10.gif)

Next, fork (which just means copy in this case) the collection found [here](https://www.postman.com/postman/workspace/slack-integration-flows/collection/23919558-0fc87fc5-de53-4c48-b30f-362a1a7ceba3?action=share&creator=23919558) and the environment found [here](https://www.postman.com/postman/workspace/slack-integration-flows/environment/23919558-144c823d-9dcf-42ff-b85b-66e8e1d41e2a) which contains the saved requests and variables we're going to use in this Flow.

![Fork collection and environment](https://assets.postman.com/postman-labs-docs/cloud-execution/fork-collection-and-environment.gif)

In the environment you just forked, paste your polygon API key where it says **YOUR_API_KEY_HERE**. Now you're ready to start building the Flow.

To start the flow, create two **Evaluate** blocks and paste the following ```$match(slack_text,'(?<=text=)[^&]+')[0]``` and ```$replace($match(slack_text,'(?<=commands%2F)[^&]+')[0],"%2F","/")```. The first function you're pasting gets the text after the **stock-quote** slash command from the webhook Slack sends, and the second one gets the destination in Slack your flow will send the reply to.

![Create Evaluate blocks](https://assets.postman.com/postman-docs/v10/make-evaluate-blocks-v10.gif)

The next step is to take text after the **stock-quote** command that we have in the Evaluate block (which is our the stock ticker) and call the polygon API to get the quote. Create a **Send Request** block, and choose **Get stock quote** from the collection that you just forked. Finally, select the **Slack Stock Bot** environment you also forked, and connect the **Evaluate** block to the ticker variable (This is how information like the ticker is passed from the **Evaluate** block into the **Send Request** block).

![Create Send Request block](https://assets.postman.com/postman-docs/v10/make-send-request-block-v10.gif)

The final step is to send all this information back to the Slack app. First, since slack requires the text sent to them to be in JSON format, create a **Record** block, name the key **text** and add a **Select** block. You can either use the dropdown menu to select, or enter ```body.results.0.c``` which is how polygon stores their stock quotes. Now create a new **Send Request** block, drag the output of the **Record** block to the **message_to_slack** variable which is what we're going to send to the app, and drag a connection from the second **Evaluate** block (that holds the destination in Slack to reply to) to the **slack_hook_url** input of the **Send Request** block.

![Create Send Request block](https://assets.postman.com/postman-docs/v10/sending-to-slack-v10-1.gif)

All that's left is selecting **Deploy** and trying it out in Slack!

![Create Send Request block](https://assets.postman.com/postman-labs-docs/cloud-execution/see-result-in-slack.gif)
