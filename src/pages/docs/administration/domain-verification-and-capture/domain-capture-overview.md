---
title: "Configure domain verification and account capture in Postman"
updated: 2023-09-18
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Domain Capture: Group Your Organization’s Postman Users into a Single Team"
    url: "https://blog.postman.com/introducing-domain-capture/"
---

> **[Domain verification is available on Postman Enterprise plans. Domain capture is available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**

Domain capture lets you manage all of the Postman user accounts that exist within your organization and consolidate them into one team. By configuring domain capture, you can keep all of the accounts and data associated with your organization secure and manage them from one dashboard.

When you enable domain capture for your organization's team, any accounts associated with the verified internet domain or subdomain will only be able to use Postman within your team. Moving forward, any Postman users who sign up for a new account with the relevant domain will be automatically added to your team.

Domain capture eases the onboarding experience for new teammates by immediately providing them with all of the resources they’ll need to be successful contributors. Maintaining one Postman Enterprise team also simplifies your experience as a Team Admin. Whether you're reviewing [reports](/docs/reports/reports-overview/), tracking [Secret Scanner notifications](/docs/administration/token-scanner/), or implementing an [API governance strategy](/docs/api-governance/api-governance-overview/), you'll only need to use one dashboard to maintain compliance and security across your organization.

## Contents

* [Prerequisites for domain capture](#prerequisites-for-domain-capture)

* [Set up domain capture](#set-up-domain-capture)

## Prerequisites for domain capture

You must be a [Postman Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to enable domain capture for your team. In addition, your team must:

* Be on a [Postman Enterprise Ultimate](https://www.postman.com/pricing) plan.
* Use [Postman version 9 or later](/docs/administration/updating/).
* Have [SSO](/docs/administration/sso/admin-sso/) configured and enabled.
    * Alternative authentication methods (Postman or Google sign in) must be turned off.

It's recommended that you enable [SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/) to ease the process of onboarding new users and [Auto-Flex](/docs/administration/billing/#using-auto-flex) to ensure that your team can automatically accommodate all users that may be added to your Postman team when domain capture is enabled.

## Set up domain capture

To set up domain capture:

1. [Add and verify a domain](/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/)
2. [Enable domain capture](/docs/administration/domain-verification-and-capture/enable-domain-capture/)

For more information on domain verification and account capture, see [Domain capture support and FAQs](/docs/administration/domain-verification-and-capture/domain-capture-support-and-faqs/).
