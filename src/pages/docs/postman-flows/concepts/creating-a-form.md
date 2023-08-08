---
title: "Creating a form in Postman Flows"
updated: 2023-08-02
---

Forms in Postman Flows enable you to seamlessly gather user input and integrate it into your API-driven applications. With Forms, you can create interactive and customizable experiences by collecting data from users through a variety of question types. For example, if you have a flow that gets the weather in a particular city, you could create a form where the user types in the name of the city. The flow runs after the user enters the information and selects **Submit**. Users' input can then be utilized to trigger API requests, perform data manipulation, or generate dynamic outputs. Understanding the key concepts of Forms will help you make the most of this powerful feature in your application development process.

![Forms in Postman Flows](https://assets.postman.com/postman-docs/v10/flows-forms-hero-v10.jpg)

## Contents

* [Form components](#form-components)
* [Form workflow](#form-workflow)

## Form components

The **Form Editor** is where you create and design your forms. It provides an intuitive interface for adding and configuring questions and managing user input.

In Forms, **questions** represent the input fields that users will interact with. Each question can have various question types, such as short answer, paragraph, checkboxes, multiple choice, or dropdown.

* Question Types
    * **Short answer** - Creates a single-line text box for users to provide concise responses.
    * **Paragraph** - Creates a multiple-line text box for users to enter longer text or descriptions.
    * **Checkboxes** - Creates a list of options with checkboxes for users to select multiple choices.
    * **Multiple choice** - Creates a list of options with radio buttons for users to select a single choice.
    * **Dropdown** - Creates a dropdown list with options that users can select from.
    * **Required** - Enables you to make certain questions mandatory, ensuring that users must provide responses before submitting the form.

## Form workflow

To create a form, select a flow, then select **Form** from the bottom of the **Flows** sidebar.

![Create a form](https://assets.postman.com/postman-docs/v10/flows-create-form-v10.jpg)

You can **name your form, add a description, and add questions** by selecting **the more actions icon > Form Editor** and using the available question types. Customize each question to gather specific data from users.

You can **rename, duplicate, or delete questions** as needed. You also have the flexibility to reorder questions to enhance the user experience.

Once your form is ready, you can **preview the form** for testing.

When published, the form generates a **shareable link** that you can copy and distribute, allowing users to access and interact with the form.

You can view the published version of the form by selecting **View published version**, which shows the form as it appears to users.

If needed, you can select **Unpublish** to revoke public access and make further modifications before republishing.
