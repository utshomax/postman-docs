---
title: "Microsoft AD FS"
order: 134
updated: 2020-07-07
page_id: "microsoft_adfs"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Intro to SSO"
    url: "/docs/administration/sso/intro-sso/"
---

> **[SSO with Microsoft AD FS is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

You can configure SSO with [Microsoft Active Directory Federation Services](https://docs.microsoft.com/en-gb/windows-server/identity/active-directory-federation-services) (AD FS).

## Contents

* [Prerequisites](#prerequisites)
* [Configuring SSO with Microsoft AD FS](#configuring-sso-with-microsoft-ad-fs)
    * [Step 2: Add a Relying Party Trust](#step-2-add-a-relying-party-trust)
    * [Step 3: Create claim rules](#step-3-create-claim-rules)
    * [Step 4: Adjust the trust settings](#step-4-adjust-the-trust-settings)
    * [Step 5: Submit Identity Provider details](#step-5-submit-identity-provider-details)
    * [Step 6: Enable the RelayState parameter on your AD FS servers](#step-6-enable-the-relaystate-parameter-on-your-ad-fs-servers)

## Prerequisites

Before you configure SSO with Microsoft AD FS, you must create the following:

* An Active Directory instance where all users have an email address attribute.
* A SSL certificate from the Microsoft AD FS server.
* A server that runs Microsoft Server 2012 or 2008.

After you meet these minimum requirements, install Microsoft AD FS on your server. To configure and install Microsoft AD FS, see [Deploy and configure AD FS](https://docs.microsoft.com/en-us/previous-versions/dynamicscrm-2016/deployment-administrators-guide/gg188612(v=crm.8)) in the Microsoft Knowledge Base.

## Configuring SSO with Microsoft AD FS

Before configuring an application in Microsoft AD FS, you must [configure SSO in Postman](/docs/administration/sso/admin-sso/). When choosing the **Authentication Type**, select **AD FS**. Name your authentication and **Continue**.

<img alt="Configure identity provider details in Postman" src="https://assets.postman.com/postman-docs/configure-identity-provider-details-v9.14.jpg"/>

To continue configuring your application, complete the following tasks in order:

* [Step 2: Add a Relying Party Trust](#step-2-add-a-relying-party-trust)
* [Step 3: Create claim rules](#step-3-create-claim-rules)
* [Step 4: Adjust the trust settings](#step-4-adjust-the-trust-settings)
* [Step 5: Submit Identity Provider details](#step-5-submit-identity-provider-details)
* [Step 6: Enable the RelayState parameter on your AD FS servers](#step-6-enable-the-relaystate-parameter-on-your-ad-fs-servers)

### Step 2: Add a Relying Party Trust

Relying Party Trust (RPT) defines the connection between AD FS and Postman.

1. Open AD FS Management on your computer.
1. Select the **Relying Party Trusts** folder.
1. On the Actions sidebar, select **Add Relying Party Trust** to start the configuration wizard for a new trust.
1. In the Welcome screen, select **Claims aware** and then select **Start**.

    [![relying party trust](https://assets.postman.com/postman-docs/ENT-Relying-Party-Trust.png)](https://assets.postman.com/postman-docs/ENT-Relying-Party-Trust.png)

1. In the Select Data Source screen, select **Enter data about the party manually** and then select **Next**.

    [![select data source](https://assets.postman.com/postman-docs/ENT-Enter-Data-About-Party-Manually.jpeg)](https://assets.postman.com/postman-docs/ENT-Enter-Data-About-Party-Manually.jpeg)

1. In the Specify Display Name screen, enter a display name you'll recognize later and then select **Next**. You can optionally add notes.

    [![display name](https://assets.postman.com/postman-docs/ENT-display-name.jpeg)](https://assets.postman.com/postman-docs/ENT-display-name.jpeg)

1. In the Configure Certificate screen, upload the **Encryption Certificate** downloaded from Postman or use the default certificate settings, and then select **Next**.

    [![encryption cert](https://assets.postman.com/postman-docs/ENT-configure-cert.jpeg)](https://assets.postman.com/postman-docs/ENT-configure-cert.jpeg)

1. In the Configure URL screen, select **Enable support for the SAML 2.0 WebSSO protocol**.
1. Take the **ACS URL** from Postman and add it as your **Relying party SAML 2.0 SSO service URL**, and then select **Next**.

    [![acs url](https://assets.postman.com/postman-docs/ENT-ACS-URL.jpeg)](https://assets.postman.com/postman-docs/ENT-ACS-URL.jpeg)

1. In the Configure Identifiers screen, take the **Entity ID** from Postman and add it as your **Relying party trust identifier**, and then select **Next**.

    <!-- TODO: this image needs to be updated: The Relying party trust identifier field input should be blurred -->
    [![replying party trust identifier](https://assets.postman.com/postman-docs/ENT-Relying-party-trust-identifier.jpeg)](https://assets.postman.com/postman-docs/ENT-Relying-party-trust-identifier.jpeg)

1. In the Choose Access Control Policy screen, select **Permit everyone** and then select **Next**.

    [![permit everyone](https://assets.postman.com/postman-docs/ENT-Permit-everyone.jpeg)](https://assets.postman.com/postman-docs/ENT-Permit-everyone.jpeg)

1. In the next two screens, review your settings and then select **Next**.
1. In the Finish screen, select **Close** to exit and open the Claim Rules editor.

### Step 3: Create claim rules

After you create the relying party trust, you can create two claim rules. The first rule uses the [Send LDAP Attributes as Claims](https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/operations/create-a-rule-to-send-ldap-attributes-as-claims) rule template, and the second rule uses the [Transform an Incoming Claim](https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/operations/create-a-rule-to-transform-an-incoming-claim) rule template.

1. Open AD FS Management on your computer.
1. Select the **Relying Party Trusts** folder.
1. On the Actions sidebar, select **Edit Claim Issuance Policy** to start the configuration wizard for a new rule.
1. Select **Add Rule** to create a new rule.

    [![claim rules](https://assets.postman.com/postman-docs/ENT-claim-rules.jpeg)](https://assets.postman.com/postman-docs/ENT-claim-rules.jpeg)

1. In the Select Rule Template screen, select **Send LDAP Attributes as Claims** as the claim rule template, and then select **Next**.

    [![add rule](https://assets.postman.com/postman-docs/ENT-Add-Rule.jpeg)](https://assets.postman.com/postman-docs/ENT-Add-Rule.jpeg)

1. In the Configure Rule screen, enter a claim rule name you'll recognize later.
1. Select **Active Directory** as the attribute store.
1. In the **LDAP Attribute** column, select **E-Mail Addresses**. In the **Outgoing Claim Type** column, select **E-Mail Address**.

    [![active directory](https://assets.postman.com/postman-docs/ENT-Active-Directory.jpeg)](https://assets.postman.com/postman-docs/ENT-Active-Directory.jpeg)

1. Select **Finish**.
1. Select **Add Rule** to create another new rule.
1. In the Select Rule Template screen, select **Transform an Incoming Claim** as the claim rule template, and then select **Next**.

    [![incoming claim](https://assets.postman.com/postman-docs/ENT-Transform-Incoming-Claim.jpeg)](https://assets.postman.com/postman-docs/ENT-Transform-Incoming-Claim.jpeg)

1. In the Configure Rule screen, enter a claim rule name you'll recognize later.
1. Select **E-mail Address** as the incoming claim type. Select **Name ID** as the outgoing claim type. Select **Email** as the outgoing name ID format.
1. Select **Pass through all claim values**.

    [![pass through claim values](https://assets.postman.com/postman-docs/ENT-Pass-through-all-claim-values.jpeg)](https://assets.postman.com/postman-docs/ENT-Pass-through-all-claim-values.jpeg)

1. Select **Finish**.
1. Select **OK** to save the new rules.

[![edit claim issuance](https://assets.postman.com/postman-docs/ENT-Edit-Claim-Issuance-Policy.jpeg)](https://assets.postman.com/postman-docs/ENT-Edit-Claim-Issuance-Policy.jpeg)

### Step 4: Adjust the trust settings

1. Open AD FS Management on your computer.
1. Select the **Relying Party Trusts** folder.
1. Select the [RPT you created](#step-2-add-a-relying-party-trust).
1. In the Actions sidebar, select **Properties**.
1. Select the Advanced tab. Select **SHA-1** as the secure hash algorithm, and then select **OK**.

[![adjusting trust](https://assets.postman.com/postman-docs/ENT-Adjusting-trust-settings.jpeg)](https://assets.postman.com/postman-docs/ENT-Adjusting-trust-settings.jpeg)

### Step 5: Submit Identity Provider details

After the setup, submit your Identity Provider's details to Postman.

1. Download the Federation Metadata XML file. You can often find this file at: `https://<Federation Service name>/FederationMetadata/2007-06/FederationMetadata.xml`.
1. In Postman, upload the Federation Metadata XML file under **Identity provider metadata** file. Or, you can enter the **SSO URL**, **Identity provider issuer**, and **X.509 Certificate** individually under **Identity provider details**.

### Step 6: Enable the RelayState parameter on your AD FS servers

Finally, enable the RelayState parameter on your Microsoft AD FS servers.

1. Open the config file.

    * For AD FS 2.0, open the following file in a text editor:

        ```shell
        %systemroot%\inetpub\adfs\ls\web.config
        ```

    * For AD FS 3.0, open the following file in a text editor:

        ```shell
        %systemroot%\ADFS\Microsoft.IdentityServer.Servicehost.exe.config
        ```

1. In the `<microsoft.identityServer.web>` section, add a line for __useRelyStateForIdpInitiatedSignOn__ as follows, and save the change:

    ```shell
    <microsoft.identityServer.web>
        ...
        <useRelayStateForIdpInitiatedSignOn enabled="true" />
    </microsoft.identityServer.web>
    ```

1. For AD FS 2.0, run `IISReset` to restart IIS.
1. For both platforms, restart the Active Directory Federation Services (`adfssrv`) service.

    > If you're using AD FS 3.0 you only need to restart the Active Directory Federation Services (`adfssrv`) service on your AD FS 3.0 servers, not the WAP servers.

1. Ensure that `<useRelayStateForIdpInitiatedSignOn enabled="true" />` has been added at `microsoft.identityServer.web`, then generate a URL encoded string from the relay state and the Entity ID as follows. There are two pieces of information you need to generate the RelayState URL:

    * The relying party's identifier, which you can find in the AD FS Management Console. View the Identifiers tab on the relying party's property page.
    * The actual RelayState value that you need to send to the relying Party. The example below uses the relying party identifier of `https://identity-example.getpostman.com` and the relay state of `35ef7ab89gh99hh00`.
    * Starting values:

        * **RPID** - `https://identity-example.getpostman.com`
        * **Relay State** - `35ef7ab89gh99hh00`

    > You should use a trusted URL encoder to generate the encode values.

1. URL encode each value.

    * **RPID** - `https%3A%2F%2Fidentity-example.getpostman.com`
    * **Relay State** - `35ef7ab89gh99hh00`

1. Merge the URL encoded values with the string below, and URL encode the whole string.

    * **String** - `RPID=<URL encoded RPID>&RelayState=<URL encoded RelayState>`
    * **String with values** - `RPID=https%3A%2F%2Fidentity-example.getpostman.com&RelayState=35ef7ab89gh99hh00`
    * **URL encoded string** - `RPID%3Dhttps%253A%252F%252Fidentity-example.getpostman.com%26RelayState%3D+35ef7ab89gh99hh00`

1. Take the final string and append it to the IDP initiated sign-on URL.

    * An example IDP initiated sign-on URL would have the following structure: `https://adfs.contoso.com/adfs/ls/idpinitiatedsignon.aspx`
    * **Final URL** - `https://adfs.contoso.com/adfs/ls/idpinitiatedsignon.aspx?RelayState=RPID%3Dhttps%253A%252F%252Fidentity-example.getpostman.com%26RelayState%3D+35ef7ab89gh99hh00`

The first time you sign in from Azure AD, go to the final URL in the browser. This sets the relay state and enables users to sign in with SSO in the future.
