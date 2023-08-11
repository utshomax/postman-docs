---
title: "Debug Flows"
updated: 2023-08-10
---

When building applications with any language (Flows included), sometimes things don't always work as expected. **Debugging** is the process of finding the source of the discrepincy between what the flow is doing, and what is expected. Fortunately, Flows has several built-in tools to help with debugging.

## Contents

* [Success and failure ports in Send Request blocks](#success-and-failure-ports-in-send-request-blocks)
* [The output block](#adding-variables-to-requests)
* [The console](#adding-variables-to-requests)
* [General tips](#adding-variables-to-requests)

### Success and failure ports in Send Request blocks

When a Send Request block runs, the output of the block can be viewed after the request has run in either the success or failure outputs (depending on the outcome). This is useful for checking that the request is successful and returning the information expected.

<img src="https://assets.postman.com/postman-labs-docs/concepts/send-request-ports.gif" alt="Using send request ports" fetchpriority="low" loading="lazy" />

### The output block

The output block doesn't change the information that passes through it, which makes it ideal for monitoring the data flowing between two blocks. Sometimes, Send Request blocks can return large amounts of information and most of it isn't relevant to the issue being debugged. Selecting just the relevant information and displaying it in an output block simplifies the debugging process from needing to scroll to find the information in the outputs of larger responses.

<img src="https://assets.postman.com/postman-labs-docs/concepts/output-debugging.gif" alt="Output debugging" fetchpriority="low" loading="lazy" />

### The console

Every request and response is sent to the console, which keeps a history of events that happened in a flow. If something specific needs to be output to the console, using the **Log block** block will send the information there. This can be especially useful when using loops because an output block would show only the last item passed through it once the flow finished running.

<img src="https://assets.postman.com/postman-labs-docs/concepts/console-logging.gif" alt="Console logging" fetchpriority="low" loading="lazy" />

### General tips

* If a request is failing, make sure the environment is set, check the console to inspect the request, and make sure all of the variables are set
* Put either output blocks or log blocks at every place the information flows when things aren't working as expected
* Test just one possible cause at a time to isolate the issue to a single block
