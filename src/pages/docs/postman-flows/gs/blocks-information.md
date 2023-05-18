---
title: "About blocks"
updated: 2023-05-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Create Charts, Tables, and Output | Postman Flows"
    url: "https://youtu.be/8zWlY4W7SWE"
  - type: link
    name: "The Infinite Canvas: Building Applications with Postman Flows"
    url: "https://www.youtube.com/live/liy0WVwC86s?feature=share"
  - type: link
    name: "AI Powered Sentiment Analysis with Postman Flows and ChatGPT"
    url: "https://www.youtube.com/live/0kAQb3Q4WCQ?feature=share"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Flows: The Next Generation of Software Development"
    url: "https://blog.postman.com/postman-flows-the-next-generation-of-software-development/"
  - type: link
    name: "Postman Flows Is Now More Powerful and User-Friendly"
    url: "https://blog.postman.com/postman-flows-is-now-more-powerful-and-user-friendly/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Built Technologies non-technical team members use Postman Flows"
    url: "https://www.postman.com/case-studies/built/"
---

_Blocks_ are used to create Flows, and information is passed between them.

## Contents

* [Blocks](#blocks)
* [Passing information](#passing-information)
* [Working with blocks](#working-with-blocks)

## Blocks

Blocks are the basic units used to create a flow. Every block has a specific purpose, such as performing actions, creating information, or making a decision.

### Block fundamentals

Every block has either an input, an output, or both. You can pass information from one block to another. For more information on each block, see [Types of blocks](#types-of-blocks).

### Block anatomy

Below is the anatomy of the [Send Request Block](/docs/postman-flows/reference/blocks-list/#send-request).

![Block anatomy](https://assets.postman.com/postman-labs-docs/block/updated-block-anatomy.png)

1. **Name** - Name of the block.

2. **Request to run** - Which request from your collection is going to be run.

3. **Send event input** - Starts running the block when this input receives information.

4. **Environment** - Which Postman environment to use.

5. **Body Type** - Structure of the information the request uses.

6. **Variables** - The variables that are either provided in the flow or from the environment.

7. **Success** - When the API being run is successful this output is triggered.

8. **Failure** - When the API being run is unsuccessful this output is triggered.

### Types of blocks

There are three types of blocks:

* **Action blocks** perform an action like getting information from an API.
* **Information blocks** create values of a specific type; like text or numbers.
* **Decision blocks** changes data in some way and then determines how to proceed in the Flow.

## Passing information

In Flows, information passes from one block to the next. This information could be a text, a number, or it could be larger complex information like a list of users, or an entire movie.

## Working with blocks

You can resize, rename, and group blocks together in Postman Flows.

To resize a block, select and drag the resizing handle in the block's lower-right corner.

<img alt="Resize a block" src="https://assets.postman.com/postman-docs/v10/flows-resize-block-v10.jpg" width="300px">

To rename a block, hover over the title and select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">, then enter the block's new name.

<img alt="Rename a block" src="https://assets.postman.com/postman-docs/v10/flows-rename-block-v10.jpg" width="300px">

To group blocks together, press and hold **⌘** or **Ctrl**, select the names of the blocks you want to group, then select the group selection icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/v10/flows-group-icon-v10.jpg#icon" width="16px">.

![Group blocks](https://assets.postman.com/postman-docs/v10/flows-group-blocks-v10-1.gif)

To ungroup blocks, hover over the group and select the ungroup icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/v10/flows-ungroup-icon-v10.jpg#icon" width="16px">.

![Ungroup blocks](https://assets.postman.com/postman-docs/v10/flows-ungroup-blocks-v10-1.gif)
