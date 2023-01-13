---
title: "Google Workspace"
order: 137
updated: 2020-05-22
page_id: "google_workspace"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to SSO"
    url: "/docs/administration/sso/intro-sso/"
---

> **[SSO with Google Workspace is available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)**

To configure SSO with Google Workspace, you can configure a SAML application. You must be an administrator in both your Google Workspace organization and Postman to configure SSO for your team.

## Configuring SSO with Google Workspace

Before configuring the SAML application in Google Workspace, you must [configure SSO in Postman](/docs/administration/sso/admin-sso/). When choosing the **Authentication Type**, select **GSuite**. Name your authentication and **Continue**.

<img alt="Configure identity provider details in Postman" src="https://assets.postman.com/postman-docs/configure-identity-provider-details-v9.14.jpg"/>

To continue configuring your SAML application, do the following:

1. Open your Google admin panel in a new tab.
1. Select **Apps**.
   ![gsuite admin](https://assets.postman.com/postman-docs/gsuite_admin.png)

1. Select **SAML apps**.
   ![gsuite saml apps](https://assets.postman.com/postman-docs/gsuite_saml_apps.png)

1. Create a new SAML app.
   ![gsuite create new](https://assets.postman.com/postman-docs/gsuite_create_new.png)

1. Select **SETUP MY OWN CUSTOM APP**.
   ![gsuite setup](https://assets.postman.com/postman-docs/gsuite_setup.png)

1. In Postman, enter the **SSO URL**, **Identity provider issuer**, and **X.509 Certificate** individually under **Identity provider details**, and then select **Next**.

   ![gsuite google IdP](https://assets.postman.com/postman-docs/gsuite_google_IdP.png)

1. Select **Save Authentication** in Postman.

1. In Google Workspace, enter an application name you'll recognize later, and then select **Next**.

    > Other fields can either be left blank or set to the default value.

   ![gsuite basic info](https://assets.postman.com/postman-docs/gsuite_basic_info.png)

1. Take the **ACS URL** and **Entity ID** from Postman and add them to your SAML configuration in Google Workspace.

1. In Postman, select **Generate relay state** and add the generated value as your **Start URL**.

    <img alt="Generate relay state in Postman" src="https://assets.postman.com/postman-docs/generate-relay-state-v9.14.jpg" width="350px"/>

1. Select **EMAIL** as the Name ID format, and then select **Next**.

    ![gsuite service provider](https://assets.postman.com/postman-docs/gsuite_service_provider.png)
