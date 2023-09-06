---
title: "Verify your organization’s domain in Postman“
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

To set up domain capture, you'll first need to add and verify your organization's domain or subdomain. You must be a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to add and verify a domain in Postman.

## Contents

* [Add and verify a domain](#add-and-verify-a-domain)

    * [Verify a domain later](#verify-a-domain-later)

    * [View verification details](#view-verification-details)

    * [View unclaimed accounts](#view-unclaimed-accounts)

* [Enable domain capture](#enable-domain-capture)

## Add and verify a domain

You can add domains and subdomains to your team by navigating to the [domain dashboard](https://go.postman.co/settings/team/domain-capture). Once you add your verification **TXT Record** to your DNS configuration, Postman's team will verify your domain or subdomain. Your domain must be verified before you can view and manage all user accounts in Postman created with your organization’s domains and subdomains.

1. Open Postman and select **Team > Team Settings** in the Postman header. Select **Authentication** in the left sidebar.
1. Confirm that your team has only the SSO authentication method enabled. Then, select the **Domains** tab.

    > Your team must have only SAML-based SSO authentication methods enabled to set up domain capture. Alternative authentication methods such as Postman or Google sign in must be turned off.

1. Select **Add Domain**.

    ![Select Add Domain](https://assets.postman.com/postman-docs/v10/select-add-domain-v10.jpg)

1. Enter the domain or subdomain you'd like to add, and then select **Generate Verification Record**.

    <img alt="Generate verification record" src="https://assets.postman.com/postman-docs/v10/enter-domain-name-v10.jpg" width="450px"/>

1. Select <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> **Copy** to copy the **TXT Record**, and then add it to your domain's DNS configuration.

    > Instead, you can select **Verify Later** if you're not ready to add the **TXT Record** to your domain's DNS configuration. To verify your domain later, see [Verifying a domain later](#verifying-a-domain-later).

1. Select the **I have added the TXT record to the DNS tool** checkbox, and then select **Verify Domain**. Note that it may take up to 24 hours for the TXT changes to take effect to enable successful verification of the domain. Team Admins will receive an email notification when the domain is verified.

    <img alt="Add domain TXT record" src="https://assets.postman.com/postman-docs/v10/add-domain-verification-record-v10.jpg" width="450px"/>

    > You can reach out to [Postman support](https://www.postman.com/support/) to check the status of your domain verification request.

1. Once your domain is verified, you can [create a request to enable domain capture](#enabling-domain-capture).

> If you're unable to verify your domain in Postman, please contact your Customer Success Manager or [Postman support](https://www.postman.com/support/) for assistance.

### Verify a domain later

Optionally, you can verify a domain later if you didn't verify the domain when you added it.

To verify a domain you've already added, do the following:

1. Open Postman and select **Team > Team Settings** in the Postman header. Select **Authentication** in the left sidebar.
1. Select **Verify** next to the domain with the `UNVERIFIED` status you want to verify.

    > You can also select **Manage** next to the domain with the `UNVERIFIED` status you want to verify, and then select **View Verification Details**.

    ![Verify domain later](https://assets.postman.com/postman-docs/v10/verify-domain-later-v10.jpg)

1. Select <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> **Copy** to copy the **TXT Record**, and then add it to your domain's DNS configuration.
1. Select the **I have added the TXT record to the DNS tool** checkbox, and then select **Verify Domain**. Postman's team will check your requested domain and update its status to `VERIFIED` in your domain dashboard. Team Admins will receive an email notification when the domain is verified.

    <img alt="Verify unverified domain" src="https://assets.postman.com/postman-docs/v10/verify-unverified-domain-later-v10.jpg" width="450px"/>

    > You can reach out to [Postman support](https://www.postman.com/support/) to check the status of your domain verification request.

1. Once your domain is verified, you can [create a request to enable domain capture](#enabling-domain-capture).

### View verification details

As a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you can view verification details for verified and unverified domains by navigating to the [domain dashboard](https://go.postman.co/settings/team/domain-capture). The verification details display the verification **TXT Record**.

1. Open Postman and select **Team > Team Settings** in the Postman header. Select **Authentication** in the left sidebar.
1. Select **Manage** next to the domain you want to view verification details for.
1. Select **View Verification Details**.

### View unclaimed accounts

Unclaimed accounts are accounts associated with a verified domain that aren't part of your team. As a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), you can view unclaimed accounts by navigating to the [domain dashboard](https://go.postman.co/settings/team/domain-capture).

1. Open Postman and select **Team > Team Settings** in the Postman header. Select **Authentication** in the left sidebar.
1. Select **Manage** next to the domain with the `VERIFIED` status you want to view unclaimed accounts for, and then select **View Accounts**.

    > Optionally, you can select the number of unclaimed accounts next to the domain in the domain dashboard.

1. View the list of accounts not part of your team.

    <img alt="View unclaimed accounts" src="https://assets.postman.com/postman-docs/v10/view-unclaimed-accounts-v10.jpg" width="450px"/>

1. Optionally, you can select **Export CSV** to export the list as a CSV file. You will receive an email containing the download link.

## Enable domain capture

Now that you've added and verified a domain, you can [enable domain capture](/docs/administration/domain-verification-and-capture/enable-domain-capture/).
