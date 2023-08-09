---
title: "Blocks and connections"
updated: 2023-08-02
---

## Contents

* [Blocks](#blocks)
* [Connections](#connections)

All flows are made up of **blocks** and **connections**. Blocks can create information, make a decision, or perform an action. Blocks work together using connections, which enable multiple blocks to do a task together.

### Blocks

All blocks have either an input, an output, or both. Inputs are on the left side of a block, and outputs are on the right. The [list of all blocks](/docs/postman-flows/reference/blocks-list/) has an explanation and example for every block in Postman Flows.

There are three ways to add a new block:

* Right-clicking anywhere in the flow
* Pressing the **+ Block** button on the toolbar
* Dragging a connection from the output of another block

Any of these actions will open up the block list which you can select from and that block will be added to the flow.

<img src="https://assets.postman.com/postman-labs-docs/concepts/updated-adding-a-block.gif" alt="Add a block" fetchpriority="low" loading="lazy" />

When you open a new flow, the first block you'll see is the **Start** block.

The **Start** block has a single output. When you select the **Run** button, this block sends information through a connection to the next block, causing it to run.

When you create a new flow, before you add any blocks, the start block has colored suggestions for things you can do:

* Send a request: creates a send request block
* Add blocks: opens the block menu
* Explorer templates: opens up a menu of pre-built flows to load and discover

These are suggestions to help you get started building a flow.

### Connections

Connections are how blocks interact with each other. Dragging a connection from the output of one block to the input of a another block can either cause the second block to run, or pass information to that block and then run it.

<img src="https://assets.postman.com/postman-labs-docs/concepts/updated-adding-a-connection.gif" alt="Add a connection" fetchpriority="low" loading="lazy" />
