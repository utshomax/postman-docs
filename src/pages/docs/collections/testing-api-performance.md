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

> **Performance testing is available on [Postman Free, Basic, and Professional plans](https://www.postman.com/pricing/).** If you are on an Enterprise plan, contact the [Postman sales team](https://www.postman.com/company/contact-sales/) for more information.

You can use the _Collection Runner_ to test the performance of your API with the same requests, collections, and environments you use for [functional API tests](/docs/collections/running-collections/intro-to-collection-runs/). Performance testing enables you to simulate real-world traffic, so you can observe how your API behaves under load and determine if the performance meets expectations. It can also help you identify any issues or bottlenecks affecting performance

To configure a performance test, [create a collection](/docs/collections/using-collections/) with the requests you want to send to your API. Postman uses these requests to simulate the activity of your API's users. In the Collection Runner, you can set the duration of the test and the number of _virtual users_. Each virtual user simulates the behavior of a real-world user by running the collection repeatedly, in parallel with other virtual users. You can also choose whether the number of virtual users is fixed for the duration of the test or gradually ramps up during the test.

The performance test runs on your computer and not in the cloud. When you start the test, the Collection Runner displays performance metrics in real time. You can view the average response time, error rate, and throughput for all requests or individual requests. You can also view details about errors that occurred during the test to help identify the source of any performance issues.

## Contents

* [Configuring a performance test](#configuring-a-performance-test)
* [Viewing performance metrics](#viewing-performance-metrics)
    * [Customizing the performance view](#customizing-the-performance-view)
* [Viewing past performance runs](#viewing-past-performance-runs)
* [Viewing error details for performance tests](#viewing-error-details-for-performance-tests)

## Configuring a performance test

> **Use the Postman desktop app to configure and run performance tests.** You can't use the Postman web app for performance testing. During a performance test, all requests are sent from your computer where you are running the Postman desktop app.

Before you configure a performance test, [create a collection](/docs/collections/using-collections/) with the requests you want to use to simulate user activity. For each virtual user, Postman will run the collection in parallel and repeatedly to simulate real-world load on your API.

To configure a performance test in the Postman desktop app, do the following:

1. Select **Collections** in the sidebar and select the collection you want to use for performance testing.
1. On the collection's **Overview** tab, select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Run**.

    <img alt="Select Run from the collection overview" src="https://assets.postman.com/postman-docs/v10/collection-runner-button.jpg" width="350px"/>

    > You can also select <img alt="Runner icon" src="https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon" width="16px"> **Runner** from the Postman footer and drag a collection from **Collections** or **History** in the sidebar.

1. Select the **Performance** tab.
1. Enter the number of **Virtual users**. While the test is running, Postman repeatedly runs the collection for each virtual user. A higher number of virtual users puts increased load on your API.

    > The maximum number of virtual users you can use depends on the CPU and memory available on the computer where you are running the performance test.

1. Enter the **Test duration** in minutes.
1. Select a **Load Profile**.

    * **Fixed** - The number of virtual users you specified is used throughout the test.
    * **Ramp up** - Enter a **Ramp up duration** in minutes. During the ramp-up period, the number of virtual users gradually increases to the number of users you specified.

1. When you're ready to begin the performance test, select **Run**.

<img alt="Configuring a performance test" src="https://assets.postman.com/postman-docs/v10/performance-test-configure-v10-xx.jpg"/>

> Your [Postman plan](https://www.postman.com/pricing/) gives you a limited number of performance runs you can use each month. A message will display in the Collection Runner when you're approaching your usage limit. Learn more about [resource usage](/docs/administration/resource-usage/) in Postman.

<!-- -->

> If you have a problem with the performance testing feature, contact the [Postman support team](https://support.postman.com/hc/en-us). Make sure to attach your [Postman logs](https://support.postman.com/hc/en-us/articles/360025298633-How-to-get-logs-from-the-Postman-Desktop-app) in your support request.

## Viewing performance metrics

During a performance test, all requests are sent from your computer where you are running the Postman desktop app. The **Summary** tab displays performance metrics in real time so you can observe how your API performs under load.

<img alt="Viewing performance metrics" src="https://assets.postman.com/postman-docs/v10/performance-test-graph-v10-13c.jpg"/>

You can view the following information about the performance test:

* Name of the collection being run and the active environment (if any).
* The number of virtual users (VU). Each virtual user simulates the behavior of a real-world user by running the collection repeatedly, in parallel with other virtual users.
* Start time, duration, and load profile (fixed or ramp up).
* **Total requests sent** - The total number of requests sent across all virtual users.
* **Requests/s** - The number of requests sent each second during the performance test, a measure of throughput.
* **Avg. response time** - The response time in milliseconds of all requests averaged together.
* **Error rate** - The percentage of requests that result in an error. Responses other than 2xx responses are considered errors.

From the **Summary** tab, you can take the following actions:

* Select **Stop** to stop the performance test.
* Select **Run Again** to configure and start the performance test again.
* Select **All Runs** to view a list of all past performance runs for the collection.
* Select the name of a request to open the request.

### Customizing the performance view

The **Summary** tab displays a graph with real-time metrics for virtual users, requests per second, average response time, and error rate percentage.

Hover over a point on the graph to view more details.

<img alt="Getting performance details" src="https://assets.postman.com/postman-docs/v10/performance-test-hover-v10-13a.jpg" width="600px"/>

Select a metric in the legend below the graph to show or hide that metric in the graph.

<img alt="Getting performance details" src="https://assets.postman.com/postman-docs/v10/performance-test-show-legend-v10-13a.jpg" width="600px"/>

Use the drop-down menus above the graph to view data for a specific request. You can also select the response time metrics you want to view. The following metrics are available:

* **Avg. response** - The response time in milliseconds of all requests averaged together.
* **Min response** - The lowest observed response time.
* **Max response** - The highest observed response time.
* **99th percentile** - 99% of all response times are equal to or less than this value.
* **95th percentile** - 95% of all response times are equal to or less than this value.
* **90th percentile** - 90% of all response times are equal to or less than this value.

To change the graph back to the default view, select **Reset**.

<img alt="Viewing metrics for a request" src="https://assets.postman.com/postman-docs/v10/performance-test-request-v10-13.jpg" width="500px"/>

To view details for a section of the graph, select a point on the graph. The table below the graph shows throughput, response time, and error metrics for each request during the selected time period. To change the graph back to the default time period, select **Clear Filter**.

<img alt="Viewing a time period" src="https://assets.postman.com/postman-docs/v10/performance-test-zoom-v10-13b.jpg" width="620px"/>

## Viewing error details for performance tests

During a performance test, requests that result in a response other than a 2xx status code are tracked as errors. You can view details about any errors that occur during the test to help understand the cause of the errors.

### Viewing top errors

You can view top errors while the performance test is running or after the test is complete.

On the **Summary** tab, hover over the **Error rate** above the graph to view the top three error types encountered during the test. You can also hover over the error rate for a specific request below the graph to view the the top three errors for that request. This can help you understand which requests are associated with certain types of errors.

### Viewing error trends

You can view error trends after the performance test is complete.  The error trend shows the top five errors that occurred during the test and how the frequency of those errors changed over time.

Select the **Errors** tab above the graph. You can also hover over the **Error rate** and select **View Error Trends**.

You can view the following information about the error trend:

From the **Errors** tab, you can take the following actions:

## Viewing past performance runs

You can view a list of past performance runs for a collection. Open the collection, select the **Runs** tab, and then select the **Performance runs** tab.

You can view metrics for each run, including the number of virtual users (VUs), duration, total number of requests, requests per second, average response time, and error rate. Select the run number to view a graph and full details for the performance run.

![Performance runs tab](https://assets.postman.com/postman-docs/v10/performance-test-past-runs-v10-13c.jpg)
