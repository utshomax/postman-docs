---
title: "Creating a dashboard with Postman Flows"
updated: 2023-07-24
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

Many people find dashboards useful for visualizing and simplifying large amounts of data. For example, you might create an internet of things dashboard that displays information about your home's thermostat, door locks, security cameras, and environmental sensors. Or you might want a dashboard that compares a stock's price to a market index to evaluate the stock's performance. The dashboard could visualize data with a True/False display and a line chart. This tutorial shows you how to create this stock performance dashboard, using test data from a Postman mock server.

## Contents

* [Objective](#objective)
* [Creating the flow](#creating-the-flow)

## Objective

Create a flow that quantifies a stock's performance by comparing it to a market index.

## Prerequisites

* A [Polygon](https://polygon.io/) account
* A Polygon API key

## Creating the flow

Begin by forking (copying) the [stocks collection](https://www.postman.com/postman/workspace/utility-flows/collection/23919558-b45b34a3-8289-42f2-98e5-df043c863ea1?action=share&creator=21580188) and the [stocks-tutorial environment](https://www.postman.com/postman/workspace/utility-flows/environment/21580188-07226525-53d7-40ca-b9d3-6cac35c39306) from the [Utility Flows](https://www.postman.com/postman/workspace/utility-flows/overview) workspace to your workspace. In your fork of the stocks-tutorial environment, replace `<your-api-key>` with your Polygon API key and select **Save**.

<img alt="Fork the collection and environment" src="https://assets.postman.com/postman-docs/v10/flows-tut-dash-start-v10-2.gif"/>

Create a new flow and connect three **Send Request** blocks to the **Start** block.

<img alt="Add three Send Request blocks" src="https://assets.postman.com/postman-docs/v10/flows-tut-db-3sends-v10-2.gif"/>

In the first two **Send Request** blocks, select **Select a request > stocks > GET get the close price**. In the third **Send Request** block, select **Select a request > stocks > get stock SMA**. These requests are in the `stocks` collection you forked earlier. Select the `stocks-tutorial` environment in the first **Send Request** block; Flows will automatically select the same environment for the next two **Send Request** blocks since they are in the same collection.

<img alt="Add requests" src="https://assets.postman.com/postman-docs/v10/flows-tut-db-add-requests-v10.gif"/>

Add a **String** block to assign the `VOO` market index to the `ticker` variable in the first request. The flow will compare your stock's performance to this index to check if your stock is outperforming the market. Add another **String** block to assign `AAPL` to the `ticker` variables in the second and third **Send Request** blocks. You can replace `AAPL` with any stock symbol you want.

<img alt="Add String blocks" src="https://assets.postman.com/postman-docs/v10/flows-tut-db-string-blocks-v10.gif"/>

Connect an **Evaluate** block to the first **Send Request** block. Change `value` to `benchmark`. Select **Enter path...** and select `body`. Select **Start writing an FQL query...** and enter `((benchmark.close - benchmark.open) / benchmark.open) * 100`. This will get a percentage of the difference between the VOO index's open and close price.

<img alt="Add an Evaluate block" src="https://assets.postman.com/postman-docs/v10/flows-tut-eval-benchmark-v10.gif"/>

Connect another **Evaluate** block to the previous **Evaluate** block. In the new block, select **Start writing an FQL query..."** and enter `value2 > value1`. You'll add `value2` in a later step.

<img alt="Add another Evaluate block" src="https://assets.postman.com/postman-docs/v10/flows-tut-db-eval-value1-v10.gif"/>

Connect an **Output** block to the `value2 > value1` **Evaluate** block and select **Boolean** from the dropdown list.

<img alt="Add a boolean output" src="https://assets.postman.com/postman-docs/v10/flows-tut-db-boolean-v10.gif"/>

Go back to the second **Send Request** block and connect an **Evaluate** block to it. In this new **Evaluate** block, change `value1` to `yours` and select `body`. Select **Start writing an FQL query...** and enter `((yours.close - yours.open) / yours.open) * 100` to get a percentage of the difference between this stock's open and close price. Connect this block's **Result** output to the `key` input on the `value2 > value1` block. Flows automatically renames the variable `value2`.

<img alt="Compare open and close values" src="https://assets.postman.com/postman-docs/v10/flows-tut-db-eval-value2-v10.gif"/>

Connect the `yours` **Evaluate** block to a new **Output** block and select **Gauge** from the dropdown list. Set the **Gauge** output block's minimum value to `-5` and its maximum value to `5`. Connect the **String** block with your stock symbol to an **Output** block and rename the **Output** block `Your ticker`.

<img alt="Add gauge and text outputs" src="https://assets.postman.com/postman-docs/v10/flows-tut-db-your-stock-ticker-v10.gif"/>

Go back the third **Send Request** block and connect a **Select** block to it. In the **Select** block, select `body.results.values`. Connect an **Evaluate** block to the **Select** block and rename `value` to `list`. Select **Start writing an FQL query...** and enter `$reverse(list)`. This arranges the dates in the results in chronological order.

<img alt="Arrange the dates" src="https://assets.postman.com/postman-docs/v10/flows-tut-db-eval-list-v10.gif"/>

Connect a **For** block to the `list` Evaluate block, then connect an **Evaluate** block to the **For** block. In the **Evaluate** block, change `value1` to `item`. Select **Start writing an FQL query...** and enter `$month(item.timestamp) & '-' & $day(item.timestamp)`. This converts timestamps in the results to a readable date format. Connect a **Collect** block to the **Evaluate** block's **Result** output.

<img alt="Create a For loop" src="https://assets.postman.com/postman-docs/v10/flows-tut-db-for-eval-collect-v10.gif"/>

Connect another **Evaluate** block to the `list` **Evaluate** block and rename `value1` to `list`. In the FQL window, enter `list.value`.

<img alt="Evaluate block - list.value" src="https://assets.postman.com/postman-docs/v10/flows-tut-db-eval-list-value-v10.gif"/>

Create a **List** block and add two **Select** blocks to it. Connect the `list.value` **Evaluate** block to the **List** block's `0` input. Connect the **Collect** block's **List** output to the **List** block's `1` input.

<img alt="Add a List block" src="https://assets.postman.com/postman-docs/v10/flows-tut-db-list-block-v10.gif"/>

Connect the **List** block's output to an **Output** block. Rename the block `Simple moving average` and select **Line Chart** from the dropdown list.

<img alt="Add a line chart" src="https://assets.postman.com/postman-docs/v10/flows-tut-db-line-chart-v10.gif"/>

Run the flow and check your **Output** blocks to see your stock ticker, if your stock is outperforming or underperforming the market, how much it's outperforming or underperforming, and a chart showing the stock's simple moving average.

<img alt="Run the flow" src="https://assets.postman.com/postman-docs/v10/flows-tut-db-run-v10.gif"/>
