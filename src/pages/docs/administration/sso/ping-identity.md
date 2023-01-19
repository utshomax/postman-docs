---
title: "Ping Identity"
updated: 2023-01-19
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to SSO"
    url: "/docs/administration/sso/intro-sso/"
---

> **[SSO with Ping Identity is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

To configure SSO with Ping Identity, you can use a SAML application. You must be an administrator in both Ping Identity and Postman to configure SSO for your team.

## Configuring SSO with Ping Identity

Before configuring the SAML application in Ping Identity, you must [configure SSO in Postman](/docs/administration/sso/admin-sso/). When choosing the **Authentication Type**, select **Ping Identity**. Name your authentication and **Continue**.

<img alt="Configure identity provider details in Postman" src="https://assets.postman.com/postman-docs/v10/configure-identity-provider-v10.jpg"/>

To continue configuring your SAML application, do the following:

1. Open your Ping Identity admin console in a new tab.
1. Select the **Applications** tab, and then select the **My Applications** tab.

    ![ping_app](https://assets.postman.com/postman-docs/ping_app)

1. Select **Add Applications**, and then select **New SAML Application**.

    ![ping_new_SAML](https://assets.postman.com/postman-docs/ping_new_SAML)

1. In the Application Details step, enter an application name you'll recognize later. Enter all additional required fields, and then select **Continue to Next Step**.
1. In the Application Configuration step, download the **SAML metadata** file. Select **SAML v 2.0** as the protocol version. Take the **ACS URL** and **Entity ID** from Postman and add them to your SAML configuration in Ping Identity, and then select **Continue to Next Step**.

    ![ping service provider](https://assets.postman.com/postman-docs/ping_service_provider)

1. In the SSO Attribute Mapping step, select **Add new attribute**. Enter `email` as the application attribute, and enter `Email` as the identity bridge attribute or literal value, and then select **Save &amp; Publish**.

    ![ping email](https://assets.postman.com/postman-docs/ping_email)

1. In the **My Applications** tab, enable the SAML application you created.

    ![Enable the SAML application](https://assets.postman.com/postman-docs/ping_active)

1. In Postman, upload the SAML metadata file under **Identity provider metadata** file. Or, you can enter the **SSO URL**, **Identity provider issuer**, and **X.509 Certificate** individually under **Identity provider details**.

1. Select **Save Authentication** in Postman.
