---
title: "Azure DevOps"
updated: 2023-05-19
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Using a remote Git repository"
    url: "/docs/designing-and-developing-your-api/versioning-an-api/using-external-git-repo/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
---

> **[Azure DevOps Server (hosted on-premises) integrations are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

Postman enables you to sync your Postman APIs to Git repositories hosted in Microsoft Azure DevOps with the Postman to Azure DevOps integration.

## API sync with Azure DevOps

With Postman v10, you can connect an Azure DevOps repository to an API in Postman's [API Builder](https://learning.postman.com/docs/designing-and-developing-your-api/the-api-workflow/). Once connected, you can sync your API's definition and associated collections between Postman and Azure DevOps. You can switch branches, pull changes from the repository, and push changes to the repository, all from within Postman. To learn more about syncing your API with Azure DevOps, see [Using a remote Git repository](/docs/designing-and-developing-your-api/versioning-an-api/using-external-git-repo/).

> **To connect your API to Azure DevOps, make sure to enable third-party application access for your organization.** If you don't enable third-party access, Postman won't be able to connect to your repository.
>
> In Azure DevOps, go to your [organization settings](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/change-application-access-policies?view=azure-devops), select **Policies**, and turn on the toggle next to **Third-party application access via OAuth**. (Enabling third-party access isn't required for connecting to an Azure DevOps Server repository hosted on-premises.)
