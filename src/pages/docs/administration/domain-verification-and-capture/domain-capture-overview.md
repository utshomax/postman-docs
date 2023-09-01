---
title: "Domain verification and account capture in Postman"
updated: 2023-03-07
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Domain Capture: Group Your Organization’s Postman Users into a Single Team"
    url: "https://blog.postman.com/introducing-domain-capture/"
---

> **[Domain verification and account capture is available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**

Domain capture allows you to manage all Postman user accounts that exist within your organization and consolidate them into one team. By setting up domain capture, you can ensure that all of the accounts and data associated with your organization are kept secure and can be managed from one dashboard. 

Maintaining one Postman Enterprise team simplifies administration, whether you're reviewing [reports](/docs/reports/reports-overview/), tracking [Secret Scanner notifications](/docs/administration/token-scanner/), implementing your [API governance strategy](/docs/api-governance/api-governance-overview/), or updating your team's [subscription](/docs/administration/billing/). Domain capture also eases the onboarding experience for new teammates by immediately providing them with all of the resources they’ll need to be successful contributors.

When you enable domain capture, Postman will move all of the existing users who are associated with your verified domain or subdomain to your Enterprise team. Moving forward, any Postman users who sign up for a new account with the relevant domain will be automatically added to your team.







<!-- Domain capture allows you to manage all Postman user accounts that exist within your organization and consolidate them into one team. This helps ensure that all of the accounts and data associated with your organization are kept secure and can be managed from one dashboard. Maintaining one Enterprise team lets you simplify management, from reviewing [reports](/docs/reports/reports-overview/) to tracking [Secret Scanner notifications](/docs/administration/token-scanner/) to implementing your [API governance strategy](/docs/api-governance/api-governance-overview/). Domain capture also eases the onboarding experience for new teammates by providing them with all of the resources they’ll need to be successful contributors.
 -->


<!-- To enable domain capture, Team Admins must first add and verify a domain or subdomain. Once the domain is verified, they can create a request to enable domain capture. When the request to enable domain capture is approved, they can contact Postman support to start managing unclaimed accounts. -->






<!-- 
Verify a domain to view all user accounts in Postman that have been created with your organization’s domains and subdomains. Enable domain capture to manage all of these user accounts in Postman. With domain capture, you can merge all of your organization's Postman users into a single Postman team and ensure that any new users who sign up for Postman with your domain are automatically added.

To enable domain capture, [Team Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) must first [add and verify a domain or subdomain](#adding-and-verifying-a-domain). Once the domain is verified, they can create a request to [enable domain capture](#enabling-domain-capture). Once the request to enable domain capture is approved, they can [contact Postman support](#contacting-support-to-manage-accounts) to manage [unclaimed accounts](#viewing-unclaimed-accounts). -->

## Contents

* [Prerequisites for domain verification and capture](#prerequisites-for-domain-verification-and-capture)

* [Adding and verifying a domain](#adding-and-verifying-a-domain)

## Prerequisites for domain verification and capture

You must be a [Postman Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to add and verify a domain and enable domain capture for your team.

The following is required to add and verify a domain and enable domain capture:

* Your team must be on a [Postman Enterprise Ultimate](https://www.postman.com/pricing) plan.
* Your team must be on [Postman version 9 or later](/docs/administration/updating/).

The following is required to enable domain capture:

* [SSO](/docs/administration/sso/admin-sso/) must be configured and enabled.
    * Alternative authentication methods (Postman or Google sign in) must be turned off.

It's recommended that you enable [SSO provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/) to ease the process of onboarding new users and [Auto-Flex](/docs/administration/billing/#using-auto-flex) to ensure that your team can automatically accommodate all users that may be added to your Postman team when domain capture is enabled.

## Adding and verifying a domain

[Team Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can add domains and subdomains to your team by navigating to the [domain dashboard](https://go.postman.co/settings/team/domain-capture). Once you add your verification **TXT Record** to your DNS configuration, Postman's team will verify your domain or subdomain. Your domain must be verified before you can view and manage all user accounts in Postman created with your organization’s domains and subdomains.

