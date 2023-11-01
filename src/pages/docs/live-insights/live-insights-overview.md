---
title: "Live Insights overview"
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

The goal of the Postman Live Insights is to be the source of truth for your production APIs. With Live Insights, our vision is to be able to guide a developer with little previous experience, in both the system being monitored and our tool, to productively find and fix issues.

> These docs feature onboarding for Kubernetes, Amazon Elastic Container Service (ECS), and Amazon EC2/Linux Server users. See [Get started with Live Insights](/docs/live-insights/live-insights-gs/) for more information.

## Before you start

* To use the Live Insights alpha, you need to be part of a team. If you don’t already have a team in Postman, see [Collaboration overview](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/#creating-a-team) for instructions on how to set it up. Postman Free provides team setup with up to three users. If you weren’t already part of a team, create a team and contact [Live Insights Alpha team](live.insights.alpha@postman.com) to get access to the alpha.
* To better help our team quickly improve our solution, it would be helpful if you add the [Live Insights Alpha Team](live.insights.alpha@postman.com) as a guest to your team. (There is no need to add our team as a full member.)
* If you feel comfortable, add the [Live Insights Alpha team](live.insights.alpha@postman.com) as a viewer on your live collections. See [Allowing external users to view collections](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections) for more information. This will allow us to directly see your endpoints to improve your experience.
* If you’re working with multiple teams, make sure the Live Insights team is aware and gives you access to the team you want to use.
* Log in with the email address confirmed with you in the alpha invite email. If you are not sure which email to use, contact [Live Insights Alpha team](live.insights.alpha@postman.com).
* You can install the Live Collections Agent (LCA) after you create a new live collection. For more information, see [Get started](#get-started).

> **NOTES:**
>   * Live Insights currently works only for REST APIs and not yet for gRPC or GraphQL. Please get in touch if you are interested in gRPC or GraphQL.
>   * Live Insights is currently focused on first-party APIs.
>   * Do not install the LCA on an existing curated collection because your existing curated endpoints will be overwritten.

## Next steps

* [Get started with Live Insights](/docs/live-insights/live-insights-gs/)
* [Diagnose and troubleshoot errors](/docs/live-insights/live-insights-troubleshoot/)
* [Live Collections Agent reference](/docs/live-insights/live-insights-reference/)
