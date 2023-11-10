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

You can access Postman [on the web](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app) with the [Postman Agent](/docs/getting-started/basics/about-postman-agent/). Postman is available as a standalone app for Windows, Mac, and Linux. Make sure everyone who would like to use Postman has the latest version by downloading it from [the Postman website](https://www.postman.com/downloads/).

> If you're using the Postman web app, Postman recommends using the Postman Desktop Agent for the best experience. See [About the Postman Agent](/docs/getting-started/basics/about-postman-agent/) for more information.

## Contents

<!-- * [Set up Postman](#set-up-postman)
    * [Contact your IT team](#contact-your-it-team)
    * [Merge teams into a single account](#merge-teams-into-a-single-account)
* [Secure your Postman team](#secure-your-postman-team)
* [Configure team settings](#configure-team-settings)
* [Manage team members](#manage-team-members)
* [Create workspaces](#create-workspaces)
* [Manage the Enterprise app](#manage-the-enterprise-app)
* [Additional setup](#additional-setup)
* [Questions](#questions) -->

* [Set up Postman](#set-up-postman)
    * [Manage Team Admins and support users](#manage-team-admins-and-support-users)
    * [Contact your IT team](#contact-your-it-team)
    * [Secure your Postman team](#secure-your-postman-team)
    * [Merge teams into a single account](#merge-teams-into-a-single-account)
    * [Manage the Enterprise app](#manage-the-enterprise-app)
* [Set up your team](#set-up-your-team)
    * [Configure team settings](#configure-team-settings)
    * [Manage team members](#manage-team-members)
    * [Create workspaces and collections](#create-workspaces-and-collections)
    * [Configure integrations](#configure-integrations)
* [Questions](#questions)

## Set up Postman

To begin setting up Postman, contact your IT team for help with adding Postman to your organization, and accessing Postman according to your organization's policies. If people in your organization already use Postman in different teams, you can merge teams into a single, company-authorized account.<!-- Add more details about subsections -->

### Manage Team Admins and support users

Identify users in your organization to be [Team Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles), giving them permission to manage team members and team settings. [Create a Postman account](/docs/getting-started/installation/postman-account/#signing-up-for-a-postman-account) for these users, and [assign them the Team Admin role](/docs/administration/managing-your-team/managing-your-team/#managing-team-members).

Team Admins can [assign the Super Admin role](/docs/administration/managing-your-team/managing-your-team/#managing-super-admins) to team members and [groups](/docs/collaborating-in-postman/user-groups/), giving them permission to manage everything with a team. It's recommended that you create a user account that isn't tied to an individual team member, and assign the Super Admin role to that user account.

Team Admins can [assign the Admin and Billing roles](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to team members and groups. Team members who have only Admin or Billing roles (or both) become support users and don’t consume paid seats. Each team can have two support users.

### Contact your IT team

Contact your IT team to establish the procedure for adding a new piece of software, which varies from organization to organization. The following topics are common:

* Your IT team may need to add an exception to device policy allowing for Postman to be installed on employee workstations. Provide a [Postman download link​](https://www.postman.com/downloads/) to the IT team to help establish this exception.

    > If you're on a [Postman Enterprise plan](https://www.postman.com/pricing), your IT team can choose to deploy the Postman Enterprise app across your organization. For more information, see [Manage the Enterprise app](#manage-the-enterprise-app).

* If your organization's network connection is behind a proxy, you may need to configure Postman appropriately. Retrieve proxy connection details from your IT team and [​set them up within Postman](/docs/getting-started/installation/proxy/)​.

* If your organization operates behind a firewall, your IT team may need to [configure allowlists for Postman's domains](/docs/getting-started/installation/installation-and-updates/#use-postman-behind-a-firewall). This ensures Postman data is synced with the cloud and all functionality works as expected.

* Depending on your [plan](https://www.postman.com/pricing), you may be able to obtain static IP addresses for Postman Monitors, enabling you to monitor APIs behind a restricted firewall. Your IT team must [allowlist static IPs for monitoring](/docs/monitoring-your-api/using-static-IPs-to-monitor/#allowlisting-static-ip-addresses).

### Secure your Postman team

Depending on your [plan](https://www.postman.com/pricing), you may be able to secure your Postman team's users with single SSO, SCIM, and domain verification and account capture. You must first configure SSO before you can configure SCIM provisioning and configure domain verification and account capture. For more security considerations, see [Security and compliance: a shared responsibility model](https://www.postman.com/shared-responsibility/).

> You might need to contact your IT team for help with configuring SSO, SCIM, and domain verification and account capture.

[Configure sign-on (SSO) for your team](/docs/administration/sso/admin-sso/) to configure an authentication methods for your team with an identity provider (IdP). Postman supports several IdPs you can use to configure SSO for your team. After you configure SSO for your team, it's recommended that you internally document how to [sign in to Postman with SSO](/docs/administration/sso/user-sso/), such as your Postman team's domain and steps for signing in with SSO details.

[Configure SCIM (System for Cross-domain Identity Management) for your team](/docs/administration/sso/admin-sso/) to automate user provisioning and de-provisioning for your Postman team using your IdP, such as Okta or OneLogin.

[Configure domain verification and account capture](/docs/administration/domain-verification-and-capture/domain-capture-overview/) to capture and merge all of the Postman user accounts that exist within your organization into one team. Before you configure account capture, it's recommended that you notify users that their accounts will be merged, and [enable Auto-flex](/docs/billing/billing/#using-auto-flex) to ensure your team can automatically accommodate all users added to your team.

### Merge teams into a single account

You can merge one or more Postman teams into a single, company-authorized Postman account. This enables users in your organization to collaborate in the same Postman team. To merge Postman teams, you must [migrate team data into the company-authorized account](/docs/administration/team-merge/).

### Manage the Enterprise app

Depending on your [plan](https://www.postman.com/pricing), you may be able to manage Postman app versioning for your team, or download and install Postman's Enterprise app. Team Admins can [set a team-wide version of Postman](/docs/administration/enterprise/managing-enterprise-deployment/#managing-postman-app-versioning) with help from Postman support, or [download and install the Postman Enterprise app](/docs/administration/enterprise/managing-enterprise-deployment/#deploying-the-postman-enterprise-app) to their organization. Postman's Enterprise app is a variant of Postman’s Desktop app that offers greater control to administrators looking to deploy Postman at an enterprise level.

> You might need to contact your IT team for help with configuring the Enterprise app in your organization. This might include adding the Postman Enterprise app installer to your organization's internal app store for employees to install.

After you configure the Postman Enterprise app in your organization, it's recommended that you internally document how employees can install the app on their workstations.

## Set up your team

<!-- TBD: add an intro, including details about subsections -->

### Configure team settings

[Configure your team settings](/docs/administration/managing-your-team/team-settings/) to ensure people in your organization can find, join, and securely access your team. You can also keep your team profile updated for your API's consumers.

[Make your team discoverable](/docs/administration/managing-your-team/team-settings/#making-your-team-discoverable) to enable people in your organization to find and join your team. When team discovery is enabled, Postman displays a list of teams to join when users in your organization access their Postman accounts. Anyone signing in with a company email address is presented with available teams and can make a request to join each one.

[Manage your team profile](/docs/administration/managing-your-team/team-settings/#managing-your-team-profile) to share information about your team with other Postman users. This ensures your API's consumers have important details about your team's public resources.

### Manage team members

[Manage team members](/docs/administration/managing-your-team/managing-your-team/#managing-team-members) by adding, removing, and assigning roles to users. You can also organize team members into groups, and assign roles to groups instead of individual users, enabling you to efficiently onboard new team members.

[Invite users to your team](/docs/administration/managing-your-team/managing-your-team/#inviting-users) by generating a shareable link or by inviting them through a direct email.

[Manage team-level roles](/docs/administration/managing-your-team/managing-your-team/#managing-team-roles) assigned to individual team members, enabling them to perform different actions within your team. You can also [organize team members into groups](/docs/collaborating-in-postman/user-groups/), and assign team-level roles to groups. Learn more about [team-level roles](/docs/collaborating-in-postman/roles-and-permissions/#team-roles).

### Create workspaces and collections

[Organize your projects in workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/), including collections, APIs, and more. You can also use workspaces to collaborate with teammates, and [share APIs with your API's consumers](/docs/collaborating-in-postman/public-api-network/public-api-network-overview/). Once your workspace is set up, you can [add team members and groups to workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#sharing-workspaces).

You can assign [workspace roles]((/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles)) to team members and groups at the [workspace level](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#managing-workspace-roles). You can also assign [element-based roles](/docs/collaborating-in-postman/roles-and-permissions/#element-based-roles) at the [element level](/docs/collaborating-in-postman/requesting-access-to-elements/#managing-element-based-roles), such as collections and APIs.

<!-- TBD: add info about creating collections, and use collection templates -->

Depending on your [plan](https://www.postman.com/pricing), you may be able to [manage who can create team workspaces](/docs/administration/managing-your-team/managing-your-team/#manage-your-teams-workspaces) in your team.

### Configure integrations

Postman has multiple integrations for popular third-party solutions. You can [add integrations to your team](/docs/integrations/intro-integrations/) to automatically share data between Postman and other tools, sync your collections and API definitions, and more.

## Questions

If you have any questions or run into any issues setting up Postman for your team, check out the [Postman Community](https://community.postman.com/). You can find a number of support resources on the [support page](https://www.postman.com/support). You can also contact [Postman support](https://www.postman.com/support/) with any questions.
