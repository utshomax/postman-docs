---
title: "Testing API performance"
updated: 2023-04-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
---

You can use the _Collection Runner_ to simulate real-world traffic and test the performance of your API. Performance testing enables to you to observe how your API behaves under load and determine if performance meets expectations. It can also help you identify any issues or bottlenecks affecting performance.

To configure a performance test, [create a collection](/docs/collections/using-collections/) with the requests you want to send to your API. Postman uses these requests to simulate the activity of your API's users. In the Collection Runner, you can set the number of virtual users to simulate and the duration of the test. You can also choose whether the number of virtual users is fixed for the duration of the test or gradually ramps up during the test.

When you start the test, the Collection Runner displays performance metrics in real time. You can view the average response time, error rate, and throughput. You can also view metrics for individual requests to help identify the source of any performance issues.

> **Use the Postman desktop app to configure and run performance tests.** You can't use the Postman web app for performance testing. During a performance test, all requests are sent from the local system where you are running the Postman desktop app.

## Contents

* [Configuring a performance test](#configuring-a-performance-test)
* [Viewing performance metrics](#viewing-performance-metrics)
    * [Customizing the performance view](#customizing-the-performance-view)
    * [Viewing past performance runs](#viewing-past-performance-runs)

## Configuring a performance test

> You must sign in to a [Postman account](/docs/getting-started/postman-account/#signing-up-for-a-postman-account) to configure and run a performance test.

Before you configure a performance test, [create a collection](/docs/collections/using-collections/) with the requests you want to use to simulate user activity. For each virtual user, Postman will run the collection in parallel and repeatedly to simulate real-world load on your API.

To configure a performance test in the Postman desktop app, do the following:

1. Select **Collections** in the sidebar and select the collection you want to use for performance testing.
1. On the overview tab, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.

    <img alt="Select Run from the collection overview" src="https://assets.postman.com/postman-docs/v10/collection-runner-button.jpg" width="350px"/>

    > You can also select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Runner** from the Postman footer and drag a collection from **Collections** or **History** in the sidebar.

1. Select the **Performance** tab.
1. Enter the number of **Virtual users**. While the test is running, Postman repeatedly runs the collection for each virtual user. A higher number of virtual users puts increased load on your API.

    > The maximum number of virtual users you can use depends on the CPU and memory available on the local system where you are running the performance test.

1. Enter the **Test duration** in minutes.
1. Select a **Load Profile**.

    * **Fixed** - The number of virtual users you specified is used throughout the test.
    * **Ramp up** - Enter a **Ramp up duration** in minutes. During the ramp-up period, the number of virtual users gradually increases to the number of users you specified.

1. When you're ready to begin the performance test, select **Run**.

<img alt="Configuring a performance test" src="https://assets.postman.com/postman-docs/v10/performance-test-configure-v10-xx.jpg"/>

## Viewing performance metrics

During a performance test, all requests are sent from the local system where you are running the Postman desktop app. The performance test runner displays performance metrics in real time so you can observe how your API performs under load.

<img alt="Viewing performance metrics" src="https://assets.postman.com/postman-docs/v10/performance-test-graph-v10-xx.jpg"/>

You can view the following information about the performance test:

* Name of the collection being run
* Number of virtual users
* Start and end time of the test
* Response time (average, 95th percentile, minimum, and maximum)
* Error rate percentage
* Requests per second (throughput)

From the performance test runner, you can take the following actions:

* Select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh** to view the latest metrics.
* Select **Run again** to start the performance test again using the same configuration.
* Select the name of a request to open the request and view its **Tests** tab.

### Customizing the performance view

The performance test graph displays real-time metrics for average response time, virtual users, error rate, and request throughput. Hover over a point on the graph to view more details.

<img alt="Getting performance details" src="https://assets.postman.com/postman-docs/v10/performance-test-hover-v10-xx.jpg" width="502px"/>

To customize the graph view, use the drop-down menus above the graph. You can view data for a specific request or select the response time metrics you want to view. To change the graph back to the default view, select **Reset**.

<img alt="Viewing metrics for a request" src="https://assets.postman.com/postman-docs/v10/performance-test-request-v10-xx.jpg" width="502px"/>

To view details for a section of the graph, select a handle on the bottom of the graph. The table below the graph shows response time metrics for each request during the selected time period. To change the graph back to the default time period, select **Reset**.

<img alt="Viewing a time period" src="https://assets.postman.com/postman-docs/v10/performance-test-zoom-v10-xx.jpg" width="502px"/>

### Viewing past performance runs

You can view a list of past performance runs for a collection. Open the collection, select the **Runs** tab, and then select the **Performance runs** tab.

You can view metrics for each run, including the number of virtual users, duration, average response time, error rate, total number of requests, and requests per second. Select the name of a run to view a graph and full details for the performance run.

![Performance runs tab](https://assets.postman.com/postman-docs/v10/performance-test-past-runs-v10-xx.jpg)
