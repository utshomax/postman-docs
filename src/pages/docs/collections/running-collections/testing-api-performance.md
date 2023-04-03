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

You can use the _Collection Runner_ to simulate real world traffic and test the performance of your API. Performance testing enables to you to observe how your API behaves under load and determine if performance meets expectations. It can also help you to identify any issues or bottlenecks affecting performance.

To configure a performance test, [create a collection](/docs/collections/using-collections/) with the requests you want to send to your API. These requests are used to simulate the activity of your API's users. In the Collection Runner, you can set the number of virtual users and the duration of the test. You can also choose whether the number of virtual users is fixed for the duration of the test or gradually ramps up during the test.

When you start the test, the Collection Runner displays performance metrics in real time. You can view the average response time, error rate, and throughput. You can also view metrics for individual requests to help identify the source of any performance issues.

## Contents

* [Configuring a performance test](#configuring-a-performance-test)
* [Viewing performance metrics](#viewing-performance-metrics)

## Configuring a performance test

For each virtual user, Postman runs the collection in parallel and repeatedly.

## Viewing performance metrics