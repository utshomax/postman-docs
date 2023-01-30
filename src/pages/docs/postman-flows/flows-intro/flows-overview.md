---
title: "Postman Flows overview"
updated: 2022-11-17
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Download and Install"
    url: "https://www.postman.com/downloads/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Announcing Postman Flows Early Access"
    url: "https://blog.postman.com/announcing-postman-flows-early-access/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Built Technologies non-technical team members use Postman Flows"
    url: "https://www.postman.com/case-studies/built/"
---

_Postman Flows_ is a visual tool for creating API workflows. You can use flows to chain requests, handle data, and create real-world workflows in your Postman workspace.

The following topics will help you get started or learn about core concepts of Postman Flows.

## Contents

* [Quick start](#quick-start)
* [Core concepts](#core-concepts)
* [Blocks](#blocks)
* [Contribute](#contribute)

## Quick start

* [Step-by-step guide to building your first flow](/docs/postman-flows/flows-intro/building-your-first-flow/)
* [Running requests in sequence](/docs/postman-flows/flows-intro/running-requests-in-sequence/)
* [Chaining requests with data](/docs/postman-flows/flows-intro/chaining-requests-with-data/)

## Core concepts

* [Blocks](/docs/postman-flows/core-concepts/blocks/)
* [Messages](/docs/postman-flows/core-concepts/messages/)
* [Data types](/docs/postman-flows/core-concepts/data-types/)

## Blocks

Blocks are the atomic pieces used to create a flow. Every block has a specific purpose, such as performing tasks, creating data, transforming data, and much more.

### Block fundamentals

Every block has either an input, an output, or both. You can pass a message packet from one block to another. Blocks can perform tasks, have values, or run an operation. For more information on each block, see [Types of Blocks](#types-of-blocks).

> A block isn't a function but a process.

### Block anatomy

![](https://assets.postman.com/postman-labs-docs/block/updated-block-anatomy.png)

1. **Name** - Name of the block.

2. **Request to run** - Which request from your collection is going to be run.

3. **Send event input** - Starts running the block when this port receives an input.

4. **Environment** - Which Postman environment to use.

5. **Body Type** - Schema the request uses.

6. **Variables** - The variables that are either provided in the flow or from the environment.

7. **Success** - When the block returns a successful status code it emits the response data.

8. **Failure** - When the block returns an unsuccessful status code it emits the response data.

### Types of blocks

There are three types of blocks:

* **Task blocks** perform a particular asynchronous task.
* **Data blocks** create data of a specific type.
* **Logic blocks** perform actions on data to transform them. These are synchronous in nature.

## Messages

A _message_ is a single packet of data. A message could be a string or number, or it could be a large complex data structure like a list of users, or an entire movie.

Data structures like lists can also be converted to streams which can be processed by blocks asynchronously.

> When a message flows from one block another, the actual data doesn't move but a pointer to the message is passed along.

## Contribute

Postman would love to hear what you're making with Flows, what issues you face while doing so, and what new features you'd like to see in Postman Flows. Head on over to the [discussions page](https://github.com/postmanlabs/postman-flows/discussions) to start or join a conversation.
