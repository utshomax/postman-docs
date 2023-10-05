---
title: "Maintain APIs in your public workspace"
updated: 2023-09-30
---

Postman recommends following one of these workflows to publish APIs to your public workspaces on the [the Public API Network](/docs/collaborating-in-postman/public-api-network/public-api-network-overview/).

## Contents

* [Git-based version control](#git-based-version-control)
* [Postman's version control](#postmans-version-control)
* [The Postman API](#the-postman-api)

## Git-based version control

You can use [Git-based version control](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/) to connect your API to a remote repository. This enables you to sync your API definition and associated collections with a public workspace that's available on the Public API Network.

When you're ready to share your API with your API's consumers, you can pull from the remote repository to bring changes into Postman. Learn more about the [API version control workflow](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/#api-version-control-workflow).

## Postman's version control

You can use [Postman's version control](/docs/collaborating-in-postman/using-version-control/version-control-overview/) to design and develop APIs in a non-public workspace, such as a [team workspace](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/). Then you can [fork the collection](/docs/collaborating-in-postman/using-version-control/forking-entities/#creating-a-fork) in a public workspace that's available on the Public API Network.

When you're ready to share your collection with your API's consumers, you can [pull changes from the parent collection](/docs/collaborating-in-postman/using-version-control/forking-entities/#pulling-updates-from-a-parent-element) (in your non-public workspace) to the forked collection (in your public workspace).

## The Postman API

You can use the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) to create a custom, automated workflow that publishes collections from a non-public workspace to a public workspace that's available on the Public API Network.

You can use this workflow to design and develop APIs in a workspace not available to the public. When you're ready to share your collection with your API's consumers, you can use the Postman API to automate this process.

To share your collection to a public workspace using the Postman API, do the following:

1. Create a `GET` request to a collection in a non-public workspace you want to publish:

    ```curl
    https://api.getpostman.com/collections/source-collection-id
    ```

1. Create a `PUT` request to a collection in a public workspace you want to publish to:

    ```curl
    https://api.getpostman.com/collections/destination-collection-id
    ```
