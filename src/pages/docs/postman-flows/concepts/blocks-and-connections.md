---
title: "Blocks and connections"
updated: 2023-05-24
---

## Contents

* [Blocks](#blocks)
* [Connections](#connections)

All Flows are made up of **blocks** and **connections**. Blocks can create information, make a decision, or perform an action. Blocks work together using connections, which enable multiple blocks to do a task together.

### Blocks

All blocks have either an input, an output or both. Inputs are on the left side of a block, and outputs are on the right. The [list of all blocks](/docs/postman-flows/reference/blocks-list/) has an explanation and example for every block in Flows.

There are three ways to add a new block:

* Right-clicking anywhere in the flow
* Pressing the **+ Block** button on the toolbar
* Dragging a connection from the output of another block

Any of these actions will open up the block list which you can select from and that block will be added to the flow.

![Add a block](https://assets.postman.com/postman-labs-docs/concepts/adding-a-block.gif)

When you open a new flow, the first block you'll see if the **Start** block.

The Start block has a single output. When you press the **Run** button, this block will send information through a connection to the next block, causing it run.

### Connections

Connections are how blocks interact with each other. Dragging a connection from the output of one block to the input of a another block can either cause the second block to run, or pass information to that block and then run it.

![Add a connection](https://assets.postman.com/postman-labs-docs/concepts/adding-a-connection.gif)
