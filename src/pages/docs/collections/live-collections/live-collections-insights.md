---
title: "Live Collections insights"
updated: 2023-03-15
---

After a service has been instrumented and the traffic data is available to Postman, we will wait 1 day to collect the performance stats before showing it to the user.

The newly created collections will have a dashboard with an aggregate view of the performance of all the endpoints in the collection
The following performance metrics will be available at an aggregate level in the collection

* Throughput
* Requests per minute
* Availability Metrics
* Error rate
* Performance Metrics
* Average Latency
* Apdex score

Drilling down into an endpoint will provide the top 5 status codes along with an example for that status code.

You can go to an individual endpoint and drill down into the same performance metrics at an endpoint level.

The security dashboard will provide a security score and total number of warnings seen across all endpoints in that collection.

For every endpoint, you can also see the severity of the warnings along with the total number of calls with the security vulnerabilities.

Drilling down into an endpoint will provide the top 5 security vulnerabilities along with the ability to look up an example for that security vulnerability.

[link to settings](./)
