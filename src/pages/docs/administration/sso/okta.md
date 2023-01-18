---
title: 'Okta'
order: 138
updated: 2021-01-20
page_id: 'okta'
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to SSO"
    url: "/docs/administration/sso/intro-sso/"
---

> **[SSO with Okta is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

To configure SSO with Okta, you can use the available Postman app in Okta or create a custom SAML application. You must be an administrator in both Okta and Postman to configure SSO for your team.

## Contents

* [Configuring SSO with Okta](#configuring-sso-with-okta)
    * [Configuring SSO using the Postman app](#configuring-sso-using-the-postman-app)
    * [Configuring SSO using a custom SAML app](#configuring-sso-using-a-custom-saml-app)
* [Next steps](#next-steps)

## Configuring SSO with Okta

Before configuring SSO in Okta, you must [configure SSO in Postman](/docs/administration/sso/admin-sso/). When choosing the **Authentication Type**, select **Okta**. Name your authentication and **Continue**.

<img alt="Configure identity provider details in Postman" src="https://assets.postman.com/postman-docs/configure-identity-provider-details-v9.14.jpg"/>

To continue configuring SSO with Okta, choose one of the following:

* [Configuring SSO using the Postman app](#configuring-sso-using-the-postman-app)
* [Configuring SSO using a custom SAML app](#configuring-sso-using-a-custom-saml-app)

### Configuring SSO using the Postman app

To continue configuring your Postman app, do the following:

1. Open your Okta admin console in a new tab.

1. Go to **Applications**, and then select **Applications**.

1. Select **Browse App Catalog**.

1. Search for "Postman". Select the Postman app from the results, and then select **Add**.

1. In the General Settings screen, enter an application label you'll recognize later, and then select **Done**.

1. Select the **Sign On** tab, and then select **Edit**.

    ![details](https://assets.postman.com/postman-docs/Okta-New-Integ3.png)

1. In Postman, select **Generate relay state** and add the generated value as the **Default Relay State** in Okta.

    <img alt="Generate relay state in Postman" src="https://assets.postman.com/postman-docs/generate-relay-state-v9.14.jpg" width="350px"/>

1. Upload the **Encryption Certificate** downloaded from Postman.

1. Take the **ACS URL** from Postman and add it to your configuration in Okta.

1. Select **Email** as the application username format, and then select **Save**.

    ![details](https://assets.postman.com/postman-docs/Okta-New-Integ4.png)

1. Select **View Setup Instructions** to display the identity provider details.

    ![okta sign on](https://assets.postman.com/postman-docs/okta_sign_on.png)

1. In Postman, enter the **SSO URL**, **Identity provider issuer**, and **X.509 Certificate** individually under **Identity provider details**.

1. Select **Save Authentication** in Postman.

<!-- 1. Select the **Assignments** tab, and then select **Assign > Assign to People**.

    1. Search for team members to assign to teh Postman app in Okta. For each team member you'd like to assign, select **Assign**.

    1. Select **Save and Go Back** to assign more team members, and then select **Done**. -->

### Configuring SSO using a custom SAML app

To continue configuring your custom SAML application, do the following:

1. Open your Okta admin console in a new tab.

1. Go to **Applications**, and then select **Applications**.

1. Select **Create App Integration**.

    [![okta_new app](https://assets.postman.com/postman-docs/Okta-Create-Application.png)](https://assets.postman.com/postman-docs/Okta-Create-Application.png)

1. In the Create a New Application Integration screen, select **SAML 2.0** and then select **Next**.

    [![okta choose saml](https://assets.postman.com/postman-docs/Okta-Choose-SAML.png)](https://assets.postman.com/postman-docs/Okta-Choose-SAML.png)

1. In the **General Settings** tab, enter an app name you'll recognize later, and then select **Next**.

1. In the **Configure SAML** tab, take the **ACS URL**  from Postman and add it as your **Single sign on URL**. Take the **Entity ID**  from Postman and add it as your **Audience URI (SP Entity ID)**. Select **EmailAddress** as the name ID format.

    [![!okta service provider](https://assets.postman.com/postman-docs/okta_service_provider.png)](https://assets.postman.com/postman-docs/okta_service_provider.png)

1. Select **Show Advanced Settings**. Select **Encrypted** as the assertion encryption, **AES128-CBC** as the encryption algorithm, and **RSA-1.5** as the key transport algorithm. Upload the **Encryption Certificate** downloaded from Postman.

    [![okta advanced](https://assets.postman.com/postman-docs/Okta-SAML-Adv-Settings.png)](https://assets.postman.com/postman-docs/Okta-SAML-Adv-Settings.png)

1. In the **Feedback** tab, select **I'm an Okta customer adding an internal app** then select **Finish**.

1. Select the **Sign On** tab, and then select **View Setup Instructions** to display the identity provider details.

    ![okta sign on](https://assets.postman.com/postman-docs/okta_sign_on.png)

1. In Postman, enter the **SSO URL**, **Identity provider issuer**, and **X.509 Certificate** individually under **Identity provider details**.

1. Select **Save Authentication** in Postman.

## Next steps

Now that you have set up SSO with Okta, you can learn about setting up SCIM provisioning:

* To learn more, visit [Configuring SCIM with Okta](/docs/administration/scim-provisioning/configuring-scim-with-okta/). (_[Enterprise teams](https://www.postman.com/pricing/) only._)
