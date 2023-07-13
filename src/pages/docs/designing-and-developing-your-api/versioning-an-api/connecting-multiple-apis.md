---
title: 'Connecting multiple APIs to a repository'
updated: 2023-06-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Git Workflows in Postman | The Exploratory"
    url: "https://youtu.be/cB7mCuYeuAU"
  - type: link
    name: "Integrating GitLab in Postman's API Builder"
    url: "https://youtu.be/ecAQv9gZEKk"
  - type: link
    name: "API Versioning in Postman using Bitbucket"
    url: "https://youtu.be/SO_88TQ2dkE"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Build better APIs using the new and improved API Builder"
    url: "https://blog.postman.com/build-better-apis-using-the-new-and-improved-api-builder/"
  - type: link
    name: "Announcing Postman’s Redesigned API Builder with Native Git Support"
    url: "https://blog.postman.com/announcing-postmans-redesigned-api-builder-with-native-git-support/"
  - type: link
    name: "Syncing Your Specs with Collections"
    url: "https://blog.postman.com/latest-updates-to-syncing-your-specs-with-collections/"
---

You can connect more than one API in Postman to the same Git repository. For each API you want to connect, repeat the process to set up the Git integration. For complete steps, see [Using a cloud-hosted Git repository](/docs/designing-and-developing-your-api/versioning-an-api/using-cloud-git-repo/) or [Using an on-premises Git repository](/docs/designing-and-developing-your-api/versioning-an-api/using-on-prem-git-repo/).

It's important to make sure your APIs remain separated in the repository to avoid changes from one API getting applied to another API. You can separate your APIs in the repository using either directories or branches.

## Contents

* [Separating APIs with directories](#separating-apis-with-directories)
* [Separating APIs with branches](#separating-apis-with-branches)

## Separating APIs with directories

You can keep your APIs separate by using a different directory for each API in the repository. For example, if you have an `emails` API and an `sms` API, you could have the following directory structure for the `main` branch in your repository:

* `/emails/postman/schemas` - Schemas for the `emails` API
* `/emails/postman/collections` - Collections for the `emails` API
* `/sms/postman/schemas` - Schemas for the `sms` API
* `/sms/postman/collections` - Collections for the `sms` API

Make sure to select the correct directories for your API's schema and collections when connecting the API to the repository.

> The collection directory can't be a parent or the child of the schema directory.

## Separating APIs with branches

You can keep your APIs separate by using a different branch for each API in the repository. For example, if you have a `notifications-v1` API and a `notifications-v2` API, you could have the following branch and directory structure in your repository:

* `notifications-v1` branch
    * `/postman/schemas` - Schemas for the `notifications-v1` API
    * `/postman/collections` - Collections for the `notifications-v1` API
* `notifications-v2` branch
    * `/postman/schemas` - Schemas for the `notifications-v2` API
    * `/postman/collections` - Collections for the `notifications-v2` API

You must use a unique combination of a branch and a directory for each API you connect to the repository. For example, if you connect one API to the `/postman/schemas` directory on the `notifications-v1` branch, you can't connect another API to the same directory on the same branch. You must use a different branch or a different schema directory.

> As you work on your APIs, you can switch branches and push or pull changes for any branch. To keep your APIs separate, always make sure you are on the correct branch before pushing or pulling changes.
