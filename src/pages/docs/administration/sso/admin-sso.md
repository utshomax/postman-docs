---
title: "Configuring SSO for a team"
order: 132
updated: 2020-08-06
page_id: "admin_sso"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to SSO"
    url: "/docs/administration/sso/intro-sso/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman 101 for Admins | Webinar"
    url: "https://youtu.be/d6pw-0Yy5fs"
---

> **[SSO is available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)**

## Contents

* [Configuring single sign-on](#configuring-single-sign-on)
* [Edit SSO settings](#edit-sso-settings)
* [Managing user accounts](#managing-user-accounts)
* [Troubleshooting](#troubleshooting)
* [Next steps](#next-steps)

## Configuring single sign-on

Only a [Team Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can configure single sign-on (SSO) for a Postman team. To configure SSO, add an authentication method, and then configure the Identity Provider (IdP) details.

To add an authentication method, do the following:

1. Go to [Team Settings](https://app.getpostman.com/dashboard/teams/edit), then select **Authentication**.
1. Select **Add Authentication Method**.
1. Select the authentication type.
1. Enter an authentication name that's identifiable to your team.
1. Select **Continue** to [configure the identity provider details](#configuring-the-identity-provider-details).

    <img src="https://assets.postman.com/postman-docs/v10/add-auth-method-v10.jpg" width="600px" alt="Authentication Method"/>

    > Always check with your authentication provider dashboard or your IT support staff for the correct information to complete a modal.

### Configuring the identity provider details

After [adding the authentication method](#configuring-single-sign-on), you can configure the identity provider details. To continue configuring the identity provider details later, select **Configure Later**. When you're ready to continue configuring the identity provider details, see [Edit SSO settings](#edit-sso-settings).

1. In the **Service provider details (Postman)** section, the **Entity ID**, **Login URL**, and **ACS URL** are already populated. Optionally, you can select the **Sign SAML requests** checkbox for Postman to sign authentication requests sent to the identity provider. Select **Download** to download the certificate, and then send the certificate to your identity provider.
1. Fill in the **Identity provider details** section. From your IdP account, enter your **SSO URL**, **Identity provider issuer**, and **X.509 Certificate**. Instead, you can upload a metadata file to configure the identity provider details in one step.

    To enter details in the **Identity provider details** section, you must sign in to your IdP account and get the details. Refer to the corresponding section of the documentation and follow the outlined procedure there:

    * [Setting up SSO with Google Workspace](/docs/administration/sso/google-workspace/)

    * [Setting up SSO with Okta](/docs/administration/sso/okta/)*

    * [Setting up SSO with Duo](/docs/administration/sso/duo/)*

    * [Setting up SSO with OneLogin](/docs/administration/sso/onelogin/)*

    * [Setting up SSO with Ping Identity](/docs/administration/sso/ping-identity/)*

    * [Setting up SSO with Azure AD](/docs/administration/sso/azure-ad/)*

    * [Setting up SSO with Microsoft AD FS](/docs/administration/sso/microsoft-adfs/)*

    &#42; Only available on Enterprise plans.

1. (Optional) Select the [**Automatically add new users**](#automatically-adding-new-users) checkbox if you want new users using this authentication method to be automatically added to your team.

1. Select **Save Authentication**.

   <img alt="" src="https://assets.postman.com/postman-docs/v10/configure-identity-provider-details-v10.jpg"/>

## Edit SSO settings

After configuring an SSO authentication method for your Postman team, you can select the **Status** toggle to turn it on or off. This is a team-level option, so this setting applies to the whole team.

<img alt="" src="https://assets.postman.com/postman-docs/admin-sso-turn-on-auth-method-v9.jpg" width="800px"/>

To update the settings for an authentication method, select **Edit**. Then select **Continue** to update the identity provider details.

To delete an authentication method, select **Edit**, then select **Delete**.

<img alt="" src="https://assets.postman.com/postman-docs/v10/edit-auth-method-v10.jpg" width="600px"/>

## Managing user accounts

This section describes the following topics:

* [Creating end user accounts](#creating-end-user-accounts)

* [Adding existing user accounts](#adding-existing-user-accounts)

* [Automatically adding new users](#automatically-adding-new-users)

* [Managing team logins](#managing-team-logins)

* [Removing team access](#removing-team-access)

### Creating end user accounts

You can create an account for a user in the IdP.

The first time a new user logs in to Postman through the IdP, a Postman account is created under two conditions—the team has seats available and the [**Automatically add new users**](#automatically-adding-new-users) checkbox was selected during [SSO configuration](#configuring-the-identity-provider-details).

The user will be automatically associated to the team with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) and have access to team resources.

### Adding existing user accounts

If a Postman user logs in to Postman through a team's IdP, the user will be automatically added to the team if one of the following is true:

* The team has available seats and the [**Automatically add new users**](#automatically-adding-new-users) checkbox in your configuration is selected.
* An Admin has [invited the user](/docs/administration/managing-your-team/managing-your-team/#inviting-users) to join the team.

### Automatically adding new users

The **Automatically add new users** checkbox in your [SSO configuration](#configuring-the-identity-provider-details) determines whether users with accounts in your SSO system will be allowed to join your team automatically by signing in to Postman with SSO. If this is selected, users with or without existing Postman accounts can join your team by going to the [Enterprise sign in page](https://identity.getpostman.com/enterprise/login) and logging in with SSO.

> **Automatically add new users** will only work if your team has user seats available. Your team size won't be automatically increased if more users sign in with SSO.

### Managing team logins

By default, Postman only supports Service Provider (Postman) initiated logins for Postman Professional or Enterprise teams using SSO. Your team must use the [Enterprise login page](https://identity.getpostman.com/enterprise/login) in order to sign in to Postman. If you require users be able to sign in from your SSO portal, you can generate and copy the Relay state from your [SSO configuration](#configuring-the-identity-provider-details) and save it in your IdP configuration. This ensures an extra level of security when logins are initiated through a source unknown to Postman.

### Removing team access

You must [remove users from your team in Postman](/docs/administration/managing-your-team/managing-your-team/#removing-team-members) to prevent access to shared resources. When you remove a user from your team, you'll still retain access to any data they have shared with the team. You'll also be able to reassign their personal workspaces and the data within them to a remaining team member so that the team doesn't lose access to any unshared work.

## Troubleshooting

If you're unable to log in to Postman using SSO, or you experience other SSO configuration issues, see the following common issues:

Issue | Resolving the issue
--- | ---
Your IdP returns a 404 error after logging in to Postman using SSO. | Make sure the **SSO URL** is correctly copied from your IdP to your [SSO configuration](#configuring-the-identity-provider-details) in Postman.
Postman returns a 500 error after logging in to Postman using SSO. | Make sure the **X.509 Certificate** is correctly copied from your IdP to your [SSO configuration](#configuring-the-identity-provider-details) in Postman.
Postman returns a 404 error after logging in to Postman using SSO. | Make sure the values in the **Service provider details (Postman)** section are correctly copied from your [SSO configuration](#configuring-the-identity-provider-details) in Postman to your IdP.
Postman returns a page explaining the sign-in request expired after logging in to Postman using SSO. | Make sure the **Relay state** is correctly copied from your [SSO configuration](#configuring-the-identity-provider-details) in Postman to your IdP.
An email address isn't associated with your Postman account in your [Postman team member list](/docs/administration/managing-your-team/managing-your-team/). | In your IdP configuration settings, make sure the username format is set to **Email**.

## Next steps

Now that you've set up SSO for your team, you might be interested in learning about how your team will interact with SSO and continuing on with SCIM provisioning.

* To learn more about the user experience, see [Logging in to an SSO team](/docs/administration/sso/user-sso/).
* If your team is on a Postman Enterprise plan, check out [SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/).
