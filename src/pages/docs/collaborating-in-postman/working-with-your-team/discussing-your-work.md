---
title: "Discussing your work"
updated: 2021-07-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Inline Comments | Postman Level Up"
    url: "https://www.youtube.com/watch?v=fkYiyCj43uk&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=6"
---

Use comments to discuss your work with your teammates in Postman. You can add comments to collections, folders, and requests. Reply to a comment to keep the discussion going, or resolve a comment if it's been addressed. If you have questions or feedback, you can notify your teammates by mentioning them in your comments.

> You can also add comments to APIs and API definitions in Postman. Learn more about [commenting on APIs](/docs/designing-and-developing-your-api/managing-apis/#commenting-on-apis).

## Contents

* [Commenting on a collection](#commenting-on-a-collection)
* [Commenting on a request](#commenting-on-a-request)
* [Commenting on a folder](#commenting-on-a-folder)
* [Editing, deleting, or linking to a comment](#editing-deleting-or-linking-to-a-comment)
* [Replying to comments](#replying-to-comments)
* [Resolving comments](#resolving-comments)
* [Mentioning teammates in comments](#mentioning-teammates-in-comments)
* [Using Markdown in comments](#using-markdown-in-comments)

## Commenting on a collection

You can add comments to a collection in Postman. You must have access to a collection to add comments to it.

1. Select **Collections** in the sidebar and select the collection you want to comment on.
1. Select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar.
1. Enter your comment and select **Comment**.

![Commenting on a collection](https://assets.postman.com/postman-docs/v10/commenting-on-a-collection-v10-16.jpg)

## Commenting on a request

You can add comments to requests in Postman. You can add a comment at the [request level](#adding-a-comment-to-a-request). You can also add an [inline comment](#adding-an-inline-comment-to-a-request) to a specific part of the request, such as a request parameter or a test script.

> To add a comment to a request, make sure to save the request first.

### Adding a comment to a request

1. Open the request you want to comment on.
1. Select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar.
1. Enter your comment and select **Comment**.

![Commenting on a request](https://assets.postman.com/postman-docs/v10/commenting-on-a-request-v10-16.jpg)

### Adding an inline comment to a request

Switch to comment mode to add a comment to a specific part of a request. You can add comments to query parameters, path parameters, headers, and request bodies (form-data, x-www-form-urlencoded, and raw). You can also add comments to a pre-request script or a test script.

To add an inline comment to a request, do the following:

1. Open the request you want to comment on.
1. Switch to comment mode by selecting the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the request pane.

    ![Switching to comment mode](https://assets.postman.com/postman-docs/v10/commenting-mode-v10-16.jpg)

1. Select the item or highlight the text where you want to add a comment.
1. Enter your comment and select **Comment**.

    ![Adding an inline comment](https://assets.postman.com/postman-docs/v10/commenting-inline-v10-16.jpg)

## Commenting on a folder

You can add comments to a folder inside a collection.

1. In the sidebar, select the folder you want to comment on.
1. Select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar.
1. Enter your comment and select **Comment**.

![Commenting on a folder](https://assets.postman.com/postman-docs/v10/commenting-on-a-folder-v10-16.jpg)

## Editing, deleting, or linking to a comment

To manage comments, select a collection, folder, or request in the sidebar, then select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar.

Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a  comment and do one of the following:

* Select **Copy link** to get a direct link to the comment.
* Select **Edit** to make changes to the comment.
* Select **Delete** to delete the comment.

<img alt="Managing a comment" src="https://assets.postman.com/postman-docs/v10/api-builder-manage-comment-v10-16.jpg" width="443px" />

> If you have the Admin role for the workspace, you can delete comments made by any contributor, but you can't edit comments made by others.

## Replying to comments

To reply to a comment, select a collection, folder, or request in the sidebar, then select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar. Select **Reply** on the comment you want to reply to. Enter your reply and select **Reply**.

<img alt="Replying to a comment" src="https://assets.postman.com/postman-docs/v10/api-builder-reply-comment-v10-16.jpg" width="443px" />

## Resolving comments

You can resolve a comment after it's been addressed. Select a collection, folder, or request in the sidebar, then select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar. Select the resolve icon <img alt="Resolve comment icon" src="https://assets.postman.com/postman-docs/v10/icon-resolve-comment-v10.jpg#icon" width="18px"> to resolve a comment and any associated replies.

<img alt="Resolving a comment" src="https://assets.postman.com/postman-docs/v10/api-builder-resolve-comment-v10-16.jpg" width="443px" />

> You can't undo resolving a comment, but you can view resolved comments by selecting the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px"> in the comments pane.

## Mentioning teammates in comments

When you leave feedback or a question for a specific teammate, you can let them know by mentioning them in your comment. To mention a teammate in a comment, type `@` followed by their name, then choose the person from the auto-suggested list.

When you mention a user in a comment, Postman sends them a notification. Select the notifications icon <img alt="Notifications icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon" width="18px"> in the Postman header to view in-app notifications.

> If your teammate doesn't have access to the collection they've been mentioned on, they'll need to [request access](/docs/collaborating-in-postman/requesting-access-to-elements/) before they can read the comment.

## Using Markdown in comments

You can use Markdown in your comments. Check out the [Markdown Cheatsheet on GitHub](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for tips on formatting.
