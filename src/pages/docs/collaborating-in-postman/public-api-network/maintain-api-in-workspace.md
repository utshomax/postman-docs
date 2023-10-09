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

If your API definitions and collections are stored in a remote repository, such as GitHub, you can use [Git-based version control](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/) to connect your API in Postman to the remote repository.
<!-- You can use [Git-based version control](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/) to connect your API to a remote repository. This enables you to sync your API definition and associated collections with a public workspace that's available on the Public API Network. -->

When you're ready to share your API definitions and collections with your API's consumers, you can pull changes from the remote repository to bring changes into Postman. Learn more about the [API version control workflow](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/#api-version-control-workflow).

## Postman's version control

If your collections are stored in a non-public workspace in Postman, such as a [team workspace](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/), you can use [Postman's version control](/docs/collaborating-in-postman/using-version-control/version-control-overview/) to [fork the collection](/docs/collaborating-in-postman/using-version-control/forking-entities/#creating-a-fork) in a public workspace.
<!-- You can use [Postman's version control](/docs/collaborating-in-postman/using-version-control/version-control-overview/) to design and develop APIs in a non-public workspace, such as a [team workspace](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/). Then you can [fork the collection](/docs/collaborating-in-postman/using-version-control/forking-entities/#creating-a-fork) in a public workspace that's available on the Public API Network. -->

When you're ready to share your collections with your API's consumers, you can [pull changes from the parent collection](/docs/collaborating-in-postman/using-version-control/forking-entities/#pulling-updates-from-a-parent-element) (in your non-public workspace) to the forked collection (in your public workspace).

## The Postman API

If your collections are stored in a non-public workspace, such as a [team workspace](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/), you can use the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) to create a custom, automated workflow that publishes collections from a non-public workspace to a public workspace. You can learn how to [make a request to the Postman API](/docs/developer/postman-api/make-postman-api-call/).

When you're ready to share your collections with your API's consumers, you can use code to create a `GET` request that gets the collection you want to publish, then you can create a `PUT` request that publishes the collection. Depending on where the collection is stored in your workspace, use the `/apis/api-id/collections/collection-id` or `/collections/collection-id` endpoint.

You can also create and send the requests in a [collection](/docs/collections/using-collections/) or [Flow](/docs/postman-flows/gs/flows-overview/).

To share a collection to a public workspace using the Postman API, do the following:

1. Create a `GET` request to a collection in a non-public workspace you want to publish. Use the following URL in your request:

    ```curl
    https://api.getpostman.com/collections/source-collection-id
    ```

1. Create a `PUT` request to a collection in a public workspace you want to publish to. Use the following URL in your request:

    ```curl
    https://api.getpostman.com/collections/destination-collection-id
    ```
