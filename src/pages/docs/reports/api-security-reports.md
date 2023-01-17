---
title: "API Security reports"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Introducing New Postman Reports for Enterprises"
    url: "https://blog.postman.com/introducing-new-postman-reports-for-enterprises/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Validating APIs against schema"
    url: "/docs/designing-and-developing-your-api/validating-elements-against-schema/"
---

The **API Security** report dashboard provides metrics relevant to the [API Security](/docs/api-governance/api-testing/api-testing-warnings/) posture of your Postman APIs. This section has two reports:

* [Public APIs](#public-apis)
* [Private Network APIs](#private-network-apis)

You can use these reports to answer questions about the security posture of APIs owned by your team that are part of the [Public API Network](/docs/getting-started/exploring-public-api-network/) and your team's [Private API Network](/docs/collaborating-in-postman/adding-private-network/).

## Public APIs

The **Public APIs** report provides the following information for APIs in your team's [public workspaces](/docs/collaborating-in-postman/using-workspaces/public-workspaces/) over the past 30 days:

* **Conformance** - The number of APIs in your team's public workspaces that don't have any API Security rule violations.
* **Non-conformance** - The average number of API Security rule violations per API in your team's public workspaces.
* **API conformance over time** - Per day over the last 30 days, the number of APIs without API Security rule violations and the number of APIs with API Security rule violations.
* **Current API landscape** - The number of APIs in your team's public workspaces, broken down by the number of API Security rule violations in each.
* **Top 3 rules violated** - The three API Security rules that are most frequently violated in APIs in your team's public workspaces.

## Private Network APIs

The **Private Network APIs** report provides the following information for APIs in your team's [Private API Network](/docs/collaborating-in-postman/adding-private-network/) over the past 30 days:

* **Conformance** - The number of APIs in your team's Private API Network that don't have any API Security rule violations.
* **Non-conformance** - The average number of API Security rule violations per API in your team's Private API Network.
* **API conformance over time** - Per day over the last 30 days, the number of APIs without API Security rule violations and the number of APIs with API Security rule violations.
* **Current API landscape** - The number of APIs in your team's Private API Network, broken down by the number of API Security rule violations in each.
* **Top 3 rules violated** - The three API Security rules that are most frequently violated in APIs in your team's Private API Network.
