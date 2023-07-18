---
title: "Picking information you want"
updated: 2023-05-24
---

## Contents

* [Picking information using the Select block](#picking-information-using-the-select-block)
* [Using the results](#using-the-results)

Frequently, when working with APIs, a lot of information will be returned from a request. When actually using the information to perform a task, only some of those values will be used. This is where the **Select** block is used to pick just one value at a time to work with.

## Picking information using the Select block

The select block is used whenever there is more than one value being returned. It is almost always used after a **Send Request** block because it always returned more than one value.

![Select block](https://assets.postman.com/postman-labs-docs/concepts/the-select-block.gif)

When a Select block is connected to a block that has already be run, or to a request that has a [saved example](/docs/sending-requests/examples/), it will bring up a menu that allows you to pick which value you want to use. In this case we selected `foo` which automatically generated the structure to get that value. In this case, the request returned a set of data called the `body` which had another set of data called `args` which held the two values `foo1` and `foo2`. Most requests will have a data set called a body, but the structure after that will be different depending on the information being returned.

## Using the results

Once you have the value you want selected, that information will be the output of the Select block.

We're going to add another block called an **Output** block. This block shows information in various formats (Like images, videos, graphs, and [more](/docs/postman-flows/tutorials/visualizing-data/)) directly on the canvas when you run the flow.

![Viewing the value with Output block](https://assets.postman.com/postman-labs-docs/concepts/viewing-variable-with-output-block.gif)
