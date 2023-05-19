---
title: "Managing public elements"
order: 76.1
updated: 2023-05-17
page_id: "manage_public_elements"
warning: false
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Public Workspace Summary Emails"
    url: "https://blog.postman.com/introducing-public-workspace-summary-emails/"
  - type: link
    name: "How to Securely Deploy Postman at Scale, Part 2: Information Management"
    url: "https://blog.postman.com/how-to-securely-deploy-postman-at-scale-part-2-information-management/"
  - type: link
    name: "How to Set Up Your First Public Workspace"
    url: "https://blog.postman.com/how-to-set-up-public-workspaces/"
  - type: section
    name: "Next steps"
  - type: link
    name: "Creating workspaces"
    url: "/docs/collaborating-in-postman/using-workspaces/creating-workspaces/"
search_keyword: "collection links, collection JSON links, manage public elements, public documentation, public workspaces"
---

> **[Manage public elements is available on Postman Enterprise plans.](https://www.postman.com/pricing/)**

The [Manage public elements](https://blog.postman.com/govern-your-public-api-collections-more-effectively/) dashboard gives you a central place to control what collections are shared outside of your team for public consumption. You need to have a [Community Manager](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) role in enterprise organizations to view and manage everything that’s made public by your team, including public collections links, public documentation, and public workspaces created by members of your team, all in one place.

## Contents

* [Managing public elements](#managing-public-elements)
    * [Workspaces](#workspaces)
    * [Public documentation](#public-documentation)
    * [Collection JSON Links](#collection-json-links)
    * [Collection Access Links](#collection-access-links)

### Managing public elements

To manage public elements, you need to have a Community Manager role in a Postman **Enterprise** plan. Use the dashboard to manage what collections your team has exposed for public consumption and for information about specific links. You can also delete links to collections you feel shouldn't be public.

To access the **Manage public elements** dashboard, select **Team** in the header, then select **Manage Public Elements**.

#### Workspaces

In the dashboard's **Workspaces** tab, you have access to all the public workspaces created by your team. You can also view and respond to requests to make workspaces public. Along with workspace name, the request date and the requester details are displayed.

To respond to the request, hover over the relevant line, then select **Respond**. Approve the request to convert the workspace into a [public workspace](/docs/collaborating-in-postman/using-workspaces/public-workspaces/).

<img alt="Convert to public workspaces" src="https://assets.postman.com/postman-docs/request-visibility-public-workspace.jpg"/>

> To learn more about workspaces, see [Creating workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/) and [Managing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/). For more details on how to create a public workspace, visit [Public workspaces](/docs/collaborating-in-postman/using-workspaces/public-workspaces/).

#### Public documentation

The dashboard's **Documentation** tab displays all the collections with published documentation. Use the search box to filter by the publisher. Along with the collection name and environment name, you can view the date the documentation was published on, who published it, and the documentation URL.

You can also view and respond to requests to make documentation public. To approve or deny a publish request, hover over a request and select **Review Request**. Select **Approve** to [publish the documentation](/docs/publishing-your-api/publishing-your-docs/) and make it public, or select **Deny** to keep the documentation private.

<img alt="Responding to publish requests" src="https://assets.postman.com/postman-docs/request-publish-documentation-v10.15.jpg"/>

#### Collection JSON Links

> Sharing collection JSON files using a public link has been deprecated. No new links can be generated and existing links can't be modified or edited. Users can still access any existing collection JSON links.
>
> To share a collection's JSON, you can use the Postman API. To learn more, see [Sharing using the Postman API](/docs/collaborating-in-postman/sharing/#sharing-using-the-postman-api).

The dashboard's **Collection JSON Links** tab displays all the collections with existing JSON links.

As a Community Manager, you can view or delete a collection JSON link. In addition to the collection name, the dashboard displays more information about the date the link was updated on, who updated the link, and the JSON link.

#### Collection Access Links

The dashboard's **Collection Access Links** tab displays the setting to enable or disable the creation of [Collection Access Keys](/docs/developer/postman-api/authentication/#generate-a-collection-access-key) in your team. You can choose whether teams have the ability to share their collections with anyone, even users outside of the team.

The tab also displays all of the team's active Collection Access Keys. To revoke a key, select **Delete**.

<img alt="The Collection Access Links tab" src="https://assets.postman.com/postman-docs/manage-public-elements-collection-access-links-v10.15.jpg"/>

If you disable the **Allow creation of Collection Access Keys** setting, this will prevent users from [creating new Collection Access Keys](/docs/collaborating-in-postman/sharing/#sharing-using-the-postman-api). Postman also displays a confirmation window where you can choose additional actions:
* Select **Keep All Keys** to keep all existing keys, but prevent users from [creating new Collection Access Keys](/docs/collaborating-in-postman/sharing/#sharing-using-the-postman-api).
* Select **Revoke All Keys** to also remove all of your team's existing keys.
