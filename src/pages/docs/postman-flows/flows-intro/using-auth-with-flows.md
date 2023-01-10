---
title: "Using authorization with Postman Flows"
updated: 2022-01-10
---

Some APIs require authorization like a secret key to access their data. The example flow below uses an environment variable to access the OpenAI API with a secret key.

## Contents

* Create a secret key for the API
* Create a collection and a request
* Create an environment and a variable
* Create your flow

## Create a secret key for the API

This example flow uses a secret key to access the OpenAI API. To get your secret key:

1. In your browser, go to https://beta.openai.com/account/api-keys and select **Sign up**.

1. Follow the prompts to create and sign into an OpenAI account.

1. Return to https://beta.openai.com/account/api-keys and create a secret key. Copy and paste your secret key in a secure but accessible location. You'll use it in a later step.

## Create a collection and a request
