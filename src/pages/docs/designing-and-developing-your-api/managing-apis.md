---
title: 'Managing and sharing APIs'
updated: 2023-01-30
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API development overview"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/5lscUV-Exac"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Using API version control"
    url: "/docs/designing-and-developing-your-api/versioning-an-api/"
  - type: link
    name: "Reports overview"
    url: "/docs/reports/reports-overview/"
---

When you [define your APIs](/docs/designing-and-developing-your-api/the-api-workflow/) in Postman using the API Builder, each API is associated with a workspace. You can share access to your APIs, discuss them in comments, and view schema activity.

## Contents

- [Sharing APIs](#sharing-apis)
- [Collaborating on APIs](#collaborating-on-apis)
- [Watching APIs](#watching-apis)
- [Commenting on APIs](#commenting-on-apis)
- [Using the Changelog](#using-the-changelog)

## Sharing APIs

You can share your APIs with collaborators by navigating to the API you want to share in the sidebar. Select it, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Share**.

<img alt="Share API" src="https://assets.postman.com/postman-docs/share-api-9.4.jpg"/>

For more details, see [Sharing Postman elements](/docs/collaborating-in-postman/sharing/#sharing-postman-elements).

## Collaborating on APIs

You can move APIs to shared workspaces to collaborate with your team.

> You must be an Editor on an API or the Workspace Admin to move the API to another workspace. To learn more about roles and permissions, see [Defining roles](/docs/collaborating-in-postman/roles-and-permissions/).

In the sidebar, select the API you want to share, then select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> > **Move**.

Use the search bar to find the workspace you'd like to move the API to, or filter by workspace visibility by selecting the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px">.

You can move APIs to personal, private, team, and public workspaces that you have access to. Shared private, team, and public workspaces enable you to collaborate with others.

> You can't move APIs from team, private, or public workspaces to a personal workspace.

<!-- -->

> Refer to [Roles and permissions](/docs/collaborating-in-postman/roles-and-permissions/) for information on workspace access control within your team.

Select the workspace, then select **Move API**. Any collections in the API will move with the API to the new workspace.

<img alt="Move API" src="https://assets.postman.com/postman-docs/move-api-v9.1.jpg" width="400px"/>

## Watching APIs

The watch option enables you to receive an email or in-app notification when a team member belonging to the same workspace modifies the API. For example, you'll receive a notification when a team member updates the API's definition, adds an element to the API, or adds a comment to the API.

Select __Watch__ to start watching the API.

<img src="https://assets.postman.com/postman-docs/v10/watch-api-v10.jpg" alt="Watch Option" width="249px"/>

For more information about the changes to the API, select the notifications icon <img alt="Notifications icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon" width="18px"> in the Postman header.

You will also receive an email with the information regarding who made the change, what the change was, and when it was made.

> You won't receive notifications for changes that you made.

## Commenting on APIs

You can discuss your APIs with collaborators in Postman, keeping the conversation in context and available to other stakeholders. Anyone with access to the API can comment. You can comment on an API, or you can leave inline comments on an API definition.

To comment on an API:

1. Select an API in the sidebar.
1. Select the comment icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar.
1. If there are existing comments, select **Add Comment** to add a new comment.
1. Enter your comment and select **Add Comment**.

SCREENSHOT OF COMMENT BOX

To leave an inline comment on an API definition:

1. Select an API in the sidebar to expand it.
1. Select **Definition** under the API, then select the definition file you want to comment on.
1. Switch to comment mode by selecting the comment icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the editor pane.
1. Highlight part of the definition, enter your comment, and select **Add Comment**.

<img alt="Commenting on an API" src="https://assets.postman.com/postman-docs/v10/api-builder-add-comment-v10.jpg" />

> To make sure you're viewing the latest comments, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> in the comment box.

### Formatting comments

You can use Markdown in your comments. Check out the [Markdown Cheatsheet on Github](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for tips on formatting.

To mention a collaborator in a comment, type `@` followed by their name, then choose the person from the auto-suggested list. When you mention a member in a comment, Postman sends them a notification.

### Editing, deleting, or linking to a comment

To manage API comments, select an API or a definition file in the sidebar, then select the comment icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar.

Hover over the comment you want to manage and do one of the following:

* Select the anchor icon <img alt="Link icon" src="https://assets.postman.com/postman-docs/icon-workspace-link-v9.jpg#icon" width="18px"> to get a direct link to the comment.
* Select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> to edit the comment.
* Select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> to delete the comment.

[![API comment manage](https://assets.postman.com/postman-docs/v8-managing-comment-actions2.jpg)](https://assets.postman.com/postman-docs/v8-managing-comment-actions2.jpg)

> If you have the Admin role for the workspace, you can delete comments made by any contributor, but you can't edit comments left by others.

### Resolving comments

You can resolve inline comments for an API definition after the comments have been addressed. Open a definition file and switch to comment mode by selecting the comment icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the editor pane. Select **Resolve** to resolve a comment and any associated replies.

SCREENSHOT

> You can't undo resolving a comment, but you can view resolved comments by selecting the filter icon <img alt="Filter icon" src="https://assets.postman.com/postman-docs/icon-filter.jpg#icon" width="16px"> in the comments pane.

## Using the Changelog

You can view a history of changes to your API schemas and all linked collections. To access the Changelog, open an API, then select the changelog icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog.jpg" width="25px" style="vertical-align:middle;margin-bottom:0px"> in the right sidebar.

> If you connect your API to a Git repository, the changelog is replaced by the **Source Control** pane. Learn more about [API version control](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/).

The Changelog shows a list of changes made to the schema and associated elements. Select each entry for more details.

<img src="https://assets.postman.com/postman-docs/v10/api-builder-changelog-v10.jpg" alt="API Builder changelog" width="443px" />
