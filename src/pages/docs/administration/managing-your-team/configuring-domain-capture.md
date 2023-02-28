---
title: "Configuring domain capture"
order: 143
page_id: "configuring_domain_capture"
warning: false
updated: 2023-02-28
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Domain Capture: Group Your Organization’s Postman Users into a Single Team"
    url: "https://blog.postman.com/introducing-domain-capture/"

---

> **[Domain capture is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

Domain capture allows you to view and manage all user accounts in Postman that have been created with your organization’s domains and subdomains. With this feature, you can consolidate all of your organization's Postman users into a single Postman team and ensure that any new users who sign up for Postman with your domain are automatically added.

## Contents

* [Prerequisites for domain capture](#prerequisites-for-domain-capture)

* [Adding and verifying a domain](#adding-and-verifying-a-domain)

* [Viewing unclaimed accounts](#viewing-unclaimed-accounts)

* [Enabling domain capture](#enabling-domain-capture)

* [User experience](#user-experience)

* [Domain capture FAQs](#domain-capture-faqs)

## Prerequisites for domain capture

You must be a [Postman Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to enable domain capture for your team. In addition, domain capture requires the following:

* Your team must be on the [Postman Enterprise](https://www.postman.com/pricing) plan.
* Your team must be on [Postman version 9 or later](/docs/administration/updating/).
* [SSO](/docs/administration/sso/admin-sso/) must be configured and enabled.
    * Alternative authentication methods (Postman or Google sign in) must be deactivated.

It's recommended that you enable [SSO provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/) to ease the process of onboarding new users and [Auto-Flex](/docs/administration/billing/#using-auto-flex) to ensure that your team can automatically accommodate all users that may be added to your Postman team when domain capture is enabled.

## Adding and verifying a domain

[Team Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can add domains and subdomains to your team by navigating to the [domain dashboard](https://go.postman.co/settings/team/domain-capture). Once you add your verification **TXT Record** to your DNS configuration, you can request Postman's team to verify your domain or subdomain. Your domain must be verified before you can view and manage all user accounts in Postman created with your organization’s domains and subdomains.

1. Open Postman and select **Team > Team Settings** in the Postman header. Select **Authentication** in the left sidebar.
1. Confirm that your team has only the SSO authentication method enabled. Then, select the **Domains** tab.

    > Your team must have only SAML-based SSO authentication methods enabled to set up domain capture. Alternative authentication methods such as Postman or Google sign in must be deactivated.

1. Select **Add Domain**.

    ![Select Add Domain](https://assets.postman.com/postman-docs/v10/select-add-domain-v10.jpg)

1. Enter the domain or subdomain you'd like to add, and then select **Generate Verification Record**.

    <img alt="Generate verification record" src="https://assets.postman.com/postman-docs/v10/enter-domain-name-v10.jpg" width="450px"/>

1. Select <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> **Copy** to copy the **TXT Record**, and then add it to your domain's DNS configuration.

    > Instead, you can select **Verify Later** if you're not ready to add the **TXT Record** to your domain's DNS configuration. To verify your domain later, see [Verifying a domain later](#verifying-a-domain-later).

1. Select the **I have added the TXT record to the DNS tool.** checkbox, and then select **Verify Domain**. Postman's team will check your requested domain and update its status to `VERIFIED` in your domain dashboard. Team Admins will receive an email notification when the domain is verified.

    <img alt="Add domain TXT record" src="https://assets.postman.com/postman-docs/v10/add-domain-verification-record-v10.jpg" width="450px"/>

    > You can reach out to [Postman support](https://www.postman.com/support/) to check the status of your domain verification request.

1. Once your domain is verified, you can [create a request to enable domain capture](#enabling-domain-capture).

### Verifying a domain later

To verify a domain you've already added, do the following:

1. Open Postman and select **Team > Team Settings** in the Postman header. Select **Authentication** in the left sidebar.
1. Select **Verify** next to the domain you want to verify.

    ![Verify domain later](https://assets.postman.com/postman-docs/v10/verify-domain-later-v10.jpg)

1. Select <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> **Copy** to copy the **TXT Record**, and then add it to your domain's DNS configuration.
1. Select the **I have added the TXT record to the DNS tool.** checkbox, and then select **Verify Domain**. Postman's team will check your requested domain and update its status to `VERIFIED` in your domain dashboard. Team Admins will receive an email notification when the domain is verified.

    <img alt="Verify unverified domain" src="https://assets.postman.com/postman-docs/v10/verify-unverified-domain-later-v10.jpg" width="450px"/>

    > You can reach out to [Postman support](https://www.postman.com/support/) to check the status of your domain verification request.

1. Once your domain is verified, you can [create a request to enable domain capture](#enabling-domain-capture).

## Viewing unclaimed accounts

Unclaimed accounts are accounts associated with a verified domain that aren't part of your team. [Team Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can view unclaimed accounts by navigating to the [domain dashboard](https://go.postman.co/settings/team/domain-capture).

1. Open Postman and select **Team > Team Settings** in the Postman header. Select **Authentication** in the left sidebar.
1. Select **Manage** next to the domain you want to view unclaimed accounts for, and then select **View Accounts**.

    > Optionally, you can select the number of unclaimed accounts next to the domain in the domain dashboard.

1. View the list of accounts not part of your team.
1. Optionally, you can select **Export CSV** to export the list as a CSV file. You will receive an email containing the download link.

## Enabling domain capture

After the domain or subdomain is [added and verified](#adding-and-verifying-a-domain), [Team Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can manage the domains and subdomains that have been added to a team by navigating to the [domain dashboard](https://go.postman.co/settings/team/domain-capture). To enable domain capture, a Team Admin must create a request with Postman support to claim accounts not part of your team. Once the request is approved, Team Admins can work with Postman support to manage these accounts.

1. Open Postman and select **Team > Team Settings** in the Postman header. Select **Authentication** in the left sidebar.
1. Select **Manage** next to the domain you want to claim accounts for.
1. Select **Request To Claim**. Postman support will then contact Team Admins to explain the effects of enabling domain capture.

With domain capture enabled, any new users who sign up for Postman with your domain are automatically added to your team and can be managed in your [team dashboard](https://go.postman.co/settings/team/members). You won't be able to selectively pick users you'd like to add to your team. Once enabled, the number of unclaimed accounts will reduce as these users sign in and join your team.

> You must reach out to [Postman support](https://www.postman.com/support/) to disable domain capture.

## User experience

When domain capture is enabled, Postman users with accounts associated with the domain or subdomain will only be able to access Postman after joining your team. This applies to existing users who are part of other teams, existing individual users, and new users who sign up for Postman.

The next time existing users sign in to Postman, they will get a notification that your team manages their account.

<img alt="Domain capture join team notification" src="https://assets.postman.com/postman-docs/domain-capture-join-team-9.4.jpg" width="350px"/>

Existing users who were on other Postman teams will lose access to all data from their previous teams, including personal workspaces. No data will be transferred from their previous teams to their new team. Users won't be able to remain on or join extra Postman teams with their captured accounts.

> If users experience any issues when moving to your Postman team, reach out to [Postman support](https://www.postman.com/support/).

## Domain capture FAQs

### What happens to captured users and their data (collections, environments) when domain capture is enabled?

The experience for captured users depends on their prior team status:

* If a captured user is already on your organization's team, nothing changes for them.
* If a captured user isn't a part of any team:
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to join your organization's team using SSO.
    * When the user authenticates into your organization's team using SSO, their existing data will be transferred to the team.
* If a captured user is a part of an existing free or paid team:
    * They're removed from their existing team.
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to join your organization's team using SSO.
    * Users can authenticate into your organization's team using SSO.
    * They will lose access to all data from their previous teams, including personal workspaces. No data will be transferred from their previous teams to their new team.
* If a captured user is the last admin of an existing free team:
    * They're removed from the team and the remaining users are assigned the [Admin role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles). The data that solely belongs to them and hasn't been shared will be moved with them.
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to join your organization's team using SSO.
    * Users can authenticate into your organization's team using SSO.
    * They will lose access to all data from their previous teams, including personal workspaces. No data will be transferred from their previous teams to their new team.
* If a captured user is the last admin of an existing paid team:
    * Postman support will contact your Team Admins to discuss how to approach this prior to verifying the domain you've added to your team.
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to leave their existing team.
    * They will need to contact [Postman support](https://www.postman.com/support/) to assign the Admin role to another team member and remove them from the team. The data that solely belongs to them and hasn't been shared will be moved with them.
    * Users can authenticate into your organization's team using SSO.
    * They will lose access to all data from their previous teams, including personal workspaces. No data will be transferred from their previous teams to their new team.

### Can a Team Admin view the list of user accounts that will be captured before enabling domain capture?

Yes, a Team Admin can view the list of the unclaimed Postman accounts that will be captured prior to confirming they'd like to enable domain capture. To learn more, see [Viewing unclaimed accounts](#viewing-unclaimed-accounts).

### Does adding a domain automatically add all the team members with the organization’s domain to the organization’s team?

No, after a Team Admin adds a domain, they must create a request for Postman's team to verify the domain or subdomain. Once both criteria are met, a Team Admin can create a request to claim accounts not part of the team. Postman support will then contact Team Admins to explain the effects of enabling domain capture. Any Team Admin will then be able to enable domain capture for your Postman team. To learn more, see [Enabling domain capture](#enabling-domain-capture).
