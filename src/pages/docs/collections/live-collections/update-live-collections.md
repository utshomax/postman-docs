---
title: "Updating Live Collections"
updated: 2023-03-15
---

Whenever Live Collections detect a new event from the API traffic, it will trigger an update workflow. Updates can span across entities in existing requests or also result in new requests being added to the collection. The params and the header will be updated for the request as entities that are disabled. The Postman Live Collection can be updated either automatically or manually.

## Contents

* [Automatic updates to a Live Collection](#automatic-updates-to-a-live-collection)
* [Manual updates to a Live Collection](#manual-updates-to-a-live-collection)
* [Viewing changes in a Live Collection](#viewing-changes-in-a-live-collection)

## Automatic updates to a Live Collection

When the first request is detected by the Live Collection, you'll see a notification next to the collection. By default, the request will automatically be added to the collection. You can also choose to either automatically update the collection or to manually review updates before making them.

<img alt="Live Collections update request" src="https://assets.postman.com/postman-docs/v10/live-collections-update-request-first-time-popup.jpg" />

Setting automatic updates will result in requests getting automatically created or updated anytime they are observed in the API traffic.

Every time a new update comes in, you will be notified by the live collections icon <img alt="Live collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> next to the collection name turning orange.

## Manual updates to a Live Collection

You can also choose to review changes and apply them manually, instead of using automatic updates.

To manually update a Live Collection, do the following:

1. Select manual updates from the first request popup shown above, or in [Live Collections settings](/docs/collections/live-collections/live-collections-settings).

1. When the live collections icon <img alt="Live collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> next to the collection name is orange, select it, then select **Review changes**.

    <img alt="Live Collections update request" src="https://assets.postman.com/postman-docs/v10/live-collections-review-changes-popup.jpg" />

1. Review the incoming changes. These can be an addition of a new request or changes to an existing request. Postman also creates new examples based on the response received from the API traffic.

    <img alt="Live Collections review changes" src="https://assets.postman.com/postman-docs/v10/live-collections-review-changes.jpg" />

1. Select **Update Collection** to accept the changes and update the collection, or select **Reject all** to ignore them.

## Viewing changes in a Live Collection

To see changes made to a Live Collection, use the collection changelog. The changelog for the collection shows the updates that have been made to a Live Collection.

To see the changelog, open the collection and select the changelog icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon" width="18px"> in the right sidebar.

<img alt="Changelog view" src="https://assets.postman.com/postman-docs/v10/changelog-view.jpg" width="250px"/>

For more information, see [Viewing the collection changelog](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#viewing-the-collection-changelog).
