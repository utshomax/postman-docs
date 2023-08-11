---
title: "Work with date and time"
updated: 2023-08-10
---

Many APIs have different formats they expect for date and time. Flows has many built in [FQL](../../flows-query-language/introduction-to-fql/) functions to handle any of the formats required.

## Contents

* [How date and time is stored in Flows](#how-date-and-time-is-stored-in-flows)
* [Use FQL for standard formats](#use-fql-for-standard-formats)

### How date and time is stored in Flows

All three of the Flows date and time blocks (Now, Date, Date & Time) store  date and time as as number. This number is a common format which is the number of milliseconds since 00:00:00 UTC on 1st January 1970 (referred to as **Unix time**). This makes date comparison easy, and can be converted into other formats as needed.

<img src="https://assets.postman.com/postman-labs-docs/concepts/flows-time-format.png" alt="Flows time format" fetchpriority="low" loading="lazy" />

### Use FQL for different formats

The ISO 8601 format is commonly used in a lot of APIs. FQL has a now function that prints out the current timestamp in ISO format `2023-08-11T02:03:46.145+00:00`. If an API requires a shortened version of the timestamp, the fromMillis function accepts a format called a picture which can be found [here](../../flows-query-language/data-manipulation/#time-and-date-formatting). For example. getting just the date without the time in ISO format can be achieve using the FQL below:

<img src="https://assets.postman.com/postman-labs-docs/concepts/fql-picture-format.png" alt="FQL picture format" fetchpriority="low" loading="lazy" />
