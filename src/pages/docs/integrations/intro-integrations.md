---
title: "Integrating with Postman"
updated: 2022-04-29
search_keyword: "whitelist, whitelist IP"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "The New Postman API Platform: Introducing Powerful Integrations"
    url: "https://blog.postman.com/the-new-postman-api-platform/"
  - type: link
    name: "Integrations: how Postman plays with some of your favorite tools"
    url: "https://blog.postman.com/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
---

Postman provides an API development toolchain aimed at integrating with your workflow. The Postman team develops an open ecosystem in conjunction with industry partners to build integrations that facilitate your API projects. Integrations allow you to automate sharing data and functionality between Postman and other tools you might use for your API development.

> **The maximum number of integrations you can use is determined by your Postman plan. [Learn more about what's included with each plan](https://www.postman.com/pricing/).**

## Contents

* [Adding integrations](#adding-integrations)
* [Viewing or editing integrations](#viewing-or-editing-integrations)
* [Installed apps](#installed-apps)
* [Static IP support](#static-ip-support)
* [CI integrations](#ci-integrations)

## Adding integrations

To view available integrations, select **Integrations** on the Postman **[Home](http://go.postman.co/)** page, then select **Browse All Integrations**. On the **[Browse Integrations](https://go.postman.co/integrations/browse)** page, search for and select the tool or service you want to integrate with.

![Workspace Integrations](https://assets.postman.com/postman-docs/browse-integrations.jpg)

Each integration's page explains how to use the integration and what it can do. Depending on the tool or service you're integrating with, more than one integration may be available. Select **Add Integration** next to the integration you want to add. Enter your account authorization details and any other required information to complete the setup process.

![Add Integrations](https://assets.postman.com/postman-docs/add-integration-b.jpg)


## Viewing or editing integrations

You can view integrations that have been configured for your team from the **[Browse Integrations](https://go.postman.co/integrations/browse)** page. Search for an select the tool or service you want to view integrations for. Select **View** or **View All** next to an integrations to view any integrations that have already been configured.

> You can also view integrations configured for a collection or monitor. Open the collection or monitor, and then select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right side bar to view any configured integrations.

Select a configured integration to view more details. From here you can take the following actions:

* Refresh Run Log
* Edit Integration
* Delete Integration

![Workspace Integrations](https://assets.postman.com/postman-docs/integrations-from-teammates.jpg)

## Installed apps

Adding an integration requires you to authenticate with the third-party app or service you are connecting to Postman. For supported integrations, you can store the authorization details in an _installed app_. Anyone on your team can then use the installed app to add a new integration, instead of authenticating with their own credentials.

Learn more about [adding and using installed apps in integrations](/docs/integrations/installed-apps/).

## Static IP support

You can use static IP addresses to enable integrations and custom webhooks for Postman Collection backups that need to access hosted (private) networks behind firewalls that require IP addresses from an allowlist.

Contact your IT team to allowlist the following static IP in your firewall to enable collection backup integrations and webhooks:

* US East: `3.212.102.200`

Once you allowlist this IP address, calls for the integrations and webhooks will be able to connect to your network and allow the integrations and webhooks to work as expected.

> DNS records use the public IP address for instances that are behind a firewall or that can't be accessed on the internet.

Postman supports implementing static IP addresses for the following integrations and webhooks:

* [Custom Webhooks](/docs/integrations/webhooks/)
* [GitHub Custom Domain Backup](/docs/integrations/available-integrations/github/#backup-collections-to-github-on-custom-domain)
* [GitLab Custom Domain Backup](/docs/integrations/available-integrations/gitlab/#backup-your-postman-collections-to-gitlab-on-a-custom-domain)

## CI integrations

Postman integrates with some of the most widely-used Continuous Integration and Continuous Delivery (CI/CD) tools. After you set up CI integration for your API, you can view the status of builds or kick off a new build, all from within Postman. You can also run API tests created in Postman as part of your CI pipeline.

To learn more about how CI integrations work, and for detailed configuration steps, see [CI integrations](/docs/integrations/ci-integrations/).
