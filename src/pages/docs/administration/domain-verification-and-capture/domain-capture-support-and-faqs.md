---
title: "Domain capture support and FAQs"
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

> **[Domain verification and capture are available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**

Verify a domain to view all user accounts in Postman that have been created with your organization’s domains and subdomains. Enable domain capture to manage all of these user accounts in Postman. With domain capture, you can merge all of your organization's Postman users into a single Postman team and ensure that any new users who sign up for Postman with your domain are automatically added.

To enable domain capture, [Team Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) must first [add and verify a domain or subdomain](#adding-and-verifying-a-domain). Once the domain is verified, they can create a request to [enable domain capture](#enabling-domain-capture). Once the request to enable domain capture is approved, they can [contact Postman support](#contacting-support-to-manage-accounts) to manage [unclaimed accounts](#viewing-unclaimed-accounts).

## Contents

* [Domain capture FAQs](#domain-capture-faqs)

* [Domain capture support](#domain-capture-support)

## Domain capture FAQs

### What happens to captured users and their data (collections, environments) when domain capture is enabled?

The experience for captured users depends on their prior team status:

* If a captured user is already on your organization's team, nothing changes for them.
* If a captured user isn't part of any team:
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to join your organization's team using SSO.
    * When the user authenticates into your organization's team using SSO, their existing data will be transferred to the team.
* If a captured user is part of an existing free or paid team:
    * They're removed from their existing team.
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to join your organization's team using SSO.
    * Users can authenticate into your organization's team using SSO.
    * They will lose access to all data from their earlier teams, including personal workspaces. No data will be transferred from their earlier teams to their new team.
        > To transfer an existing user's collections and environments from their earlier teams to their new team, [contact Postman support](#contacting-support-to-manage-accounts).
* If a captured user is the last Admin of an existing free team:
    * They're removed from the team and the remaining users are assigned the [Admin role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles).
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to join your organization's team using SSO.
    * Users can authenticate into your organization's team using SSO.
    * They will lose access to all data from their earlier teams, including personal workspaces. No data will be transferred from their earlier teams to their new team.
        > To transfer an existing user's collections and environments from their earlier teams to their new team, [contact Postman support](#contacting-support-to-manage-accounts).
* If a captured user is the last Admin of an existing paid team:
    * Postman support will contact your Team Admins to discuss how to approach this prior to verifying the domain you've added to your team.
    * All existing user sessions are revoked.
    * The next time the user logs in, they will be prompted to leave their existing team.
    * They will need to contact [Postman support](https://www.postman.com/support/) to assign the Admin role to another team member and remove them from the team.
    * Users can authenticate into your organization's team using SSO.
    * They will lose access to all data from their earlier teams, including personal workspaces. No data will be transferred from their earlier teams to their new team.
        > To transfer an existing user's collections and environments from their earlier teams to their new team, [contact Postman support](#contacting-support-to-manage-accounts).

### Can a Team Admin view the list of user accounts that will be captured before enabling domain capture?

Yes, a Team Admin can view the list of the unclaimed Postman accounts that will be captured prior to confirming they'd like to enable domain capture. To learn more, see [Viewing unclaimed accounts](#viewing-unclaimed-accounts).

### Does adding a domain automatically add all the team members with the organization’s domain to the organization’s team?

No, after a Team Admin adds a domain, they must create a request for Postman's team to verify the domain or subdomain. Once both criteria are met, a Team Admin can create a request to enable domain capture. Postman support will then contact Team Admins to explain the effects of enabling domain capture. To learn more, see [Enabling domain capture](#enabling-domain-capture).

### How do I delete a domain?

Team Admins can delete domains and subdomains from your team by navigating to the [domain dashboard](https://go.postman.co/settings/team/domain-capture).

1. Open Postman and select **Team > Team Settings** in the Postman header. Select **Authentication** in the left sidebar.
1. Select **Manage** next to the domain you want to delete.
1. Select **Delete Domain**.

## Domain capture support

If you have additional questions or are unable to verify your domain or enable domain capture, please contact your Customer Success Manager or [Postman support](https://www.postman.com/support/) for assistance.
