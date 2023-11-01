---
title: "Diagnose and troubleshoot errors"
updated: 2023-10-30
early_access: true
plan: alpha
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Postman Live Insights: Faster, Better API Debugging"
    url: "https://blog.postman.com/introducing-postman-live-insights-faster-better-api-debugging/"
  - type: link
    name: "Postman Live Insights: automatically discover, monitor, and add APIs"
    url: "https://www.postman.com/product/live-insights/"
---

As you work with the Live Collections Agent (LCA), you may encounter errors and receive error messages. The LCA diagnostics are still in alpha, so if anything is confusing please don’t hesitate to get in touch and ask the Live Insights team any questions.

The LCA displays errors and provides diagnostics so that you can act on them:

* Observe information received from the LCA on usage and error states, including interfaces, ports, and traffic (for example, HTTP vs. encrypted traffic, the busiest endpoints, and so on).
* Review status messages and act on them.

To access the error message, select the Live Collections icon <img alt="Live Collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> next to the collection.

![Access live collection errors](https://assets.postman.com/postman-docs/v10/live-insights-error-access-v10-19.jpg)

The following is the complete list of error messages.

| State                           | Description                                                                           | Message                                                                                                                                                                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _API key lacks permission_      | The API key used to instrument this collection doesn't have permissions to modify it. | The API key used to instrument this collection doesn't have permissions to modify it. Verify that the user is an editor on this collection or use a different API key.                                                               |
| _SDK is offline_                | Your team's usage limit has exceeded.                                                 | Your team has reached its monthly traces usage limit. To request a limit increase, please reach out to support\@postman.com.                                                                                                         |
| _API key is invalid or revoked_ | The API key used to instrument this collection is invalid or has been revoked.        | Verify the API key's validity or use a different API key.                                                                                                                                                                            |
| _PCAP permission failure_       | Client lacks permissions                                                              | The Agent could not capture traffic because it lacks permissions to do so. In a container environment, ensure that the container that has the Agent can run in privileged mode and has the `CAP_NET_RAW` capability.                 |
| _Invalid filters_               | Filter parsing error                                                                  | The Agent failed to parse the filters you specified on the command line. The `--filter` argument takes `tcpdump`-style arguments, while the host and path filters take Go regular expressions. Check the Agent logs for more details |
| _Traffic capture failure_       | Error in capturing traffic                                                            | Something went wrong while capturing traffic. Please try again.                                                                                                                                                                      |
| _Something went wrong_          | Something went wrong                                                                  | Something went wrong while starting the Agent. Please try again.                                                                                                                                                                     |

## Next steps

* [About Live Insights Early Access](/docs/live-insights/live-insights-early-access/)
* [Live Insights overview](/docs/live-insights/live-insights-overview/)
* [Get started with Live Insights](/docs/live-insights/live-insights-gs/)
* [Live Collections Agent reference](/docs/live-insights/live-insights-reference/)
