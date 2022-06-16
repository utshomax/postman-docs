---
title: "API security reports"
updated: 2022-05-19
warning: false
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

> [**Reports are available on all Postman Enterprise plans.**](https://www.postman.com/pricing)

The **API Security** report dashboard provides metrics including an overview of your total collections scanned, collections with exposed tokens, total exposed tokens, and separate visualizations of exposed tokens by type and over time. This report consolidates the findings of the Postman token scanner from public documentation. Learn more about the Postman [Token Scanner](/docs/api-security/token-scanner/). This section has five reports:

* [API security](#api-security)
* [Security warnings in public APIs](#security-warnings-in-public-apis)
* [Security warnings in team APIs](#security-warnings-in-team-apis)
* [Security warnings in Private Network APIs](#security-warnings-in-private-network-apis)
* [Exposed tokens in public documentation](#exposed-tokens-in-public-documentation)

## API security

The **API security** report provides the following information for the past 30 days:

* **API schemas scanned last month** - The number of public, team, and private API schemas scanned.
* **Security warnings in Public APIs** - The number of security warnings for your publicly available APIs, broken down by warning severity.
* **Security warnings in Team APIs** - The number of security warnings for your team APIs, broken down by warning severity.
* **Security warnings in Private Network APIs** - The number of security warnings for your Private Network APIs, broken down by warning severity.

## Security warnings in public APIs

The **Security warnings in public APIs** report provides the following information for the past 30 days:

* **Total active warnings** - The number of active warnings for your publicly available APIs, broken down by warning severity.
* **APIs with security warnings** - The number of your publicly available APIs that have security warnings, versus the number of your publicly available APIs that don't have security warnings.
* **Active warnings over time** - For each of the last 30 days, the number of active security warnings for your publicly available APIs.
* **Active warnings by type** - The number of active security warnings for your publicly available APIs, broken down by warning type.
* **Active warnings over time by type** - For each of the last 30 days, the number of active security warnings for your publicly available APIs, broken down by warning type.

## Security warnings in team APIs

The **Security warnings in team APIs** report provides the following information for the past 30 days:

* **Total active warnings** - The number of active warnings for your team APIs, broken down by warning severity.
* **API schemas with security warnings** - The number of your team APIs that have security warnings, versus the number of your team APIs that don't have security warnings.
* **Active warnings over time** - For each of the last 30 days, the number of active security warnings for your team APIs.
* **Active warnings by type** - The number of active security warnings for your team APIs, broken down by warning type.
* **Active warnings over time by type** - For each of the last 30 days, the number of active security warnings for your team APIs, broken down by warning type.

## Security warnings in Private Network APIs

The **Security warnings in Private Network APIs** report provides the following information for the past 30 days:

* **Total active warnings** - The number of active warnings for your Private Network APIs, broken down by warning severity.
* **API schemas with security warnings** - The number of your Private Network APIs that have security warnings, versus the number of your Private Network APIs that don't have security warnings.
* **Active warnings over time** - For each of the last 30 days, the number of active security warnings for your Private Network APIs.
* **Active warnings by type** - The number of active security warnings for your Private Network APIs, broken down by warning type.
* **Active warnings over time by type** - For each of the last 30 days, the number of active security warnings for your Private Network APIs, broken down by warning type.

## Exposed tokens in public documentation

The **Exposed tokens in public documentation** report provides the following information for the past 30 days:

* **Published documentation scanned** - The number of published documentation sets that were reviewed by the Token Scanner.
* **Published documentation with exposed tokens** - The number of published documentation sets that have an exposed token.
* **Total exposed tokens** - The number of tokens that are exposed across all published documentation sets.
* **Exposed tokens by type** - The number of exposed tokens by type.
* **Exposed tokens over time** - The number of tokens that were exposed each day.
