---
title: "Update a database with Postman Flows"
updated: 2023-08-01
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Flows: The Next Generation of Software Development"
    url: "https://blog.postman.com/postman-flows-the-next-generation-of-software-development/"
  - type: link
    name: "Postman Flows Is Now More Powerful and User-Friendly"
    url: "https://blog.postman.com/postman-flows-is-now-more-powerful-and-user-friendly/"
---

Many companies use databases on platforms like [Airtable](https://airtable.com/) to manage customer data, and a separate application to collect email addresses. Integrating these two sources of information with Postman Flows can streamline processes and improve data accuracy. This tutorial creates a flow that takes a user-provided email address, searches for a matching record in an Airtable database, and checks a checkbox field within that record.

## Contents

* [Goal](#goal)
* [Prerequisites](#prerequisites)
* [Creating the flow](#creating-the-flow)

## Goal

Create a flow that receives a user-provided email address, then finds and updates that email's record in a database.

## Prerequisites

* An Airtable personal access token.
* A table in Airtable with at least one record.
    * Name the fields `Email`, `Name`, and `Checked In?`.
    * In the **Email** field, enter `test@email.com`.
    * For the **Email** and **Name** fields, select the **Single line text** field type.
    * For the **Checked In?** fields, select the **Checkbox** field type.

## Creating the flow
<!-- TODO: Recreate this collection and environment in a public flows workspace, then replace the beta links below with public links. -->
1. Fork the [Airtable](https://postman.postman-beta.co/workspace/testing-features~e08a6ce3-3b63-4a67-9e38-3f910d42a4ca/collection/917058-ebc81195-63a9-4906-b1ef-5bcf8a6eeee1?action=share&creator=901427) collection and [Event Registration](https://postman.postman-beta.co/workspace/testing-features~e08a6ce3-3b63-4a67-9e38-3f910d42a4ca/environment/917058-66036e4e-8d69-41aa-8c8c-a6fb37648f6a?action=share&creator=901427) environment.
    * In your fork of the **Event Registration** environment:
        * Replace `your token here` with your Airtable personal access token and set the **Type** to **secret**.
        * Replace `table id here` with your table’s [id](https://support.airtable.com/docs/finding-airtable-record-ids).
        * Replace `base id here` with your table’s base id.
        * Replace `record id here` with the test@email.com record’s id.
        * Select **Save**.

1. Select **Flows** in the sidebar.
    * Create a new flow, then select **Form**.
    * Select **Add a title** and enter `Demo Event Registration`.
    * Rename the **Untitled Question** to **Name**. Select **Short answer** and **Required**.

    <img src="https://assets.postman.com/postman-docs/v10/flows-tut-update-create-form-v10.gif" alt="Rename the question" fetchpriority="low" loading="lazy" >

    * Add a new question and name it `Email`. Select **Short answer** and **Required**.
    * Select **Publish**.
    * Close the **Form Editor**.

1. Connect a **Send Request** block to the **Start** block and select **Airtable > Guest List**.
    * Select the **Event Registration** environment.
    * Connect the **Start** block to the `email` variable and select `email`.

    ![Connect a Send Request block](https://assets.postman.com/postman-docs/v10/flows-tut-update-1st-send-request-v10.jpg)

1. Connect a **Select** block to the **Send Request** block’s **Success** output and enter `body.records`.
    * Connect an **If** block to the **Select** block.
    * Also connect the **Select** block to the **If** block’s `variable` input.
    * Rename `value1` to `arr`.
    * In the FQL window, enter `$count(arr) = 1`.

    ![Add an If block](https://assets.postman.com/postman-docs/v10/flows-tut-update-add-if-block-v10.jpg)

1. Connect the **If** block’s **TRUE** output to a **Send Request** block.
    * Select **Airtable > Update Record**. Flows automatically selects the Event Registration environment.
    * Add a **Select** block to the `record-id` variable and enter `0.id`.

    <img src="https://assets.postman.com/postman-docs/v10/flows-tut-update-record-id-v10.gif" alt="Enter 0.id" fetchpriority="low" loading="lazy" >

1. Add a **Select** block to the **Start** block and select `name`.
    * Connect a **Create Variable** block and replace `Variable 1` with `Name`.

    ![Create the Name variable](https://assets.postman.com/postman-docs/v10/flows-tut-update-create-variable-v10.jpg)

    * Connect the **If** block’s **TRUE** output to a **Template** block.
    * In the text window, enter `Welcome {{name}}!!!`.
    * Add a **Get Variable** block and select **Name**.
    * Change `value2` to `name`.

    <img src="https://assets.postman.com/postman-docs/v10/flows-tut-update-get-variable-v10.gif" alt="Get the Name variable" fetchpriority="low" loading="lazy" >

1. Connect an **Output** block to the **Template** block’s **Data** output.
    * Select **Run**. The form opens.
    * Enter `Test Person` in the **Name** field.
    * Enter `test@email.com` in the **Email** field.
    * Select **Submit**.

The **Output** block shows `Welcome Test Person!!!` and the checkbox in the **Checked In?** Airtable record is checked.
