---
title: "Onboarding checklist"
updated: 2022-02-16
contextual_links:
  - type: section
    name: "Additional resources"
  - type: link
    name: "Security and Compliance: A Shared Responsibility Model"
    url: "https://www.postman.com/trust/shared-responsibility/"
  - type: link
    name: "Managing your team"
    url: "/docs/administration/managing-your-team/managing-your-team/"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Manage Large Teams in Postman with Workspaces, Permissions, and Version Control"
    url: "https://blog.postman.com/postman-team-workspaces-and-permissions/"

---

When you're getting started using Postman within your organization, you can carry out the following preparation steps to set your team up for success.<!-- TBD: Add more of an overview introduction -->

## Contents

* [Setting up Postman](#setting-up-postman)
    * [Contact your IT team](#contact-your-it-team)
    * [Merge teams into a single account](#merge-teams-into-a-single-account)
    * [Configure SSO for your team](#configure-sso-for-your-team)
    * [Automate user provisioning with SCIM](#automate-user-provisioning-with-scim)
    * [Configure domain verification and account capture](#configure-domain-verification-and-account-capture)
* [Configure team settings](#configure-team-settings)
* [Add team members](#add-team-members)
* [Create workspaces](#create-workspaces)
* [Additional setup](#additional-setup)

## Setting up Postman

<!-- TBD: Relocate this information, and add overview of the H3s -->
<!-- You can access Postman [on the web](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app) with the [Postman Agent](/docs/getting-started/basics/about-postman-agent/). Postman is available as a standalone app for Windows, Mac, and Linux. Make sure everyone who would like to use Postman has the latest version by downloading it from [the Postman website](https://www.postman.com/downloads/).

> If you are using the Postman web app, Postman recommends using the Postman Desktop Agent for the best experience. See [About the Postman Agent](/docs/getting-started/basics/about-postman-agent/) for more information.

For the Postman web app, you can use **Auto-select** to turn the Auto-Select agent on or off. Once you enable the option for Auto-select, Postman will automatically select the best agent for your requests. You can also manually select the Postman Agent to use for your requests: **Cloud Agent**, **Desktop Agent**, or **Browser Agent**. See [Selecting a Postman Agent for requests](/docs/getting-started/basics/about-postman-agent/#selecting-a-postman-agent-for-requests) for more information. -->

### Contact your IT team

Contact your IT team to establish the procedure for adding a new piece of software, which varies from organization to organization. The following topics are common:

* Your IT team may need to add an exception to device policy allowing for Postman to be installed on employee workstations. Provide a [Postman download link​](https://www.postman.com/downloads/) to the IT team to help establish this exception.

    > If you're on a [Postman Enterprise plan](https://www.postman.com/pricing), your IT team can choose to deploy the Postman Enterprise app across your organization. For more information, see [Managing Enterprise deployment](/docs/administration/enterprise/managing-enterprise-deployment/).

* If your organization's network connection is behind a proxy, you may need to configure Postman appropriately. Retrieve proxy connection details from your IT team and [​set them up within Postman](/docs/getting-started/installation/proxy/)​.

* If your organization operates behind a firewall, your IT team may need to [configure allowlists for Postman's domains](/docs/getting-started/installation/installation-and-updates/#use-postman-behind-a-firewall). This ensures Postman data is synced with the cloud and all functionality works as expected.

* Depending on your [plan](https://www.postman.com/pricing), you may be able to obtain static IP addresses for Postman Monitors, enabling you to monitor APIs behind a restricted firewall. Your IT team must [allowlist static IPs for monitoring](/docs/monitoring-your-api/using-static-IPs-to-monitor/#allowlisting-static-ip-addresses).

### Merge teams into a single account

<!-- TBD: Add details about this optional feature -->

### Configure SSO for your team

Depending on your [plan](https://www.postman.com/pricing), you may be able to [configure SSO for your team](/docs/administration/sso/admin-sso/). This enables your team to authenticate with Postman using your organization's existing identity provider (IdP). Postman supports several IdPs you can use to configure SSO for your team.

> You might need to contact your IT team for help with configuring SSO.

### Automate user provisioning with SCIM

<!-- TBD: Add details about this feature, mentioning that it's related to SSO -->

### Configure domain verification and account capture

<!-- TBD: Should this section be closer to the Team Merge section? -->

## Configure team settings

[Configure your team settings](/docs/administration/managing-your-team/team-settings/).<!-- TBD: Add more information -->

* [Make your team discoverable](/docs/administration/managing-your-team/team-settings/#making-your-team-discoverable) to enable people in your organization to find and join your team. When team discovery is enabled, Postman displays a list of teams to join when users in your organization access their Postman accounts. Anyone signing in with a company email address is presented with available teams and can make a request to join each one.
* [Configure your team's authentication methods](/docs/administration/managing-your-team/team-settings/#editing-authentication-methods) to ensure people in your team can sign in to your team.
* [Manage your team profile](/docs/administration/managing-your-team/team-settings/#managing-your-team-profile) to share information about your team with other Postman users. This ensures your API's consumers have important details about your team's public resources.

## Add team members

Depending on the size of your team, you can either send invites to your team immediately or [check your setup](#check-your-setup) with a few volunteers before you roll out Postman to your entire organization.

You can add your teammates from your [team dashboard](https://go.postman.co/team) by generating a shareable link or by inviting them through a direct email. See [Managing Your Team](/docs/administration/managing-your-team/managing-your-team/) for more detail.<!-- TBD: Rework this content to include invites and manage team roles -->

## Create workspaces

## Additional setup

<!-- <img src="https://assets.postman.com/postman-docs/invite-users-modal.jpg" alt="Invite users" width="400px"/> -->

<!-- ## Check your setup

Before you start work in full, it’s best to check the functionality of Postman within your organization and ensure everything operates as expected. If you don't have access to Postman and a Postman account, find a team member who does to help you test the configuration. Depending on your organization's IT policy you may need to make requests of your IT team to get up and running as well.

Ensure you are connected to your organization's network and test the following:

* Can you ​[execute a request](/docs/sending-requests/requests/)​ to `example.com` within Postman?
* Can you execute a request to one of your internal/private APIs?
* Save a request inside a [​Collection​](/docs/sending-requests/intro-to-collections/). Visit `​go.postman.co`​, has your collection and request synced with Postman’s cloud?

Repeat these checks on a colleague’s workstation. If everything worked, your workstations and network are ready to support Postman! If you experienced an issue, [​contact Postman support](https://www.postman.com/support/). -->

<!-- ## Questions?

If you have any questions or run into any issues setting up Postman for your team, check the [Postman Community](https://community.postman.com/). Other users might have the same question! You can also find a number of support resources on the [support page](https://www.postman.com/support).

## Next steps

After you follow the steps in this onboarding checklist, there are a few other steps to take to make sure that your team is secure:

* For important security considerations, check out [Security and Compliance: A Shared Responsibility Model](https://www.postman.com/shared-responsibility/).
* If you are subscribed to the Professional or Enterprise plan, make sure to [configure SSO](/docs/administration/sso/admin-sso/).
* To learn about managing roles, inviting to workspaces, and how to adjust your team size, visit [Managing your team](/docs/administration/managing-your-team/managing-your-team/). -->
