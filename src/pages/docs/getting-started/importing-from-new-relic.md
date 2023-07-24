---
title: 'Importing from New Relic'
updated: 2023-08-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Import and Export Data in Postman"
    url: "https://youtu.be/KdaiVdNMgL4"
  - type: link
    name: "Collection Format | Postman Level Up"
    url: "https://youtu.be/cRXSblrGrao"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Essentials: Exploring the Collection Format"
    url: "https://blog.postman.com/postman-essentials-exploring-the-collection-format/"
  - type: link
    name: "Differences between Postman Collections and the collection format"
    url: "https://blog.postman.com/differences-between-postman-collections-and-collection-format/"
---

New Relic is an application performance management solution to monitor real-time and trending data for your processes or web apps. You can import data from New Relic into a Postman Collection.

Importing from New Relic requires you to get your API key (User key) from New Relic. After you enter your key, you can select the New Relic services you want to import as collections. The endpoints in each service are imported as requests in a collection.

## Contents

* [Getting your New Relic API key](#getting-your-new-relic-api-key)
* [Importing New Relic data](#importing-new-relic-data)

## Getting your New Relic API key

1. Sign in to [New Relic](https://login.newrelic.com).
1. Select your avatar, then select **API Keys**.
1. Select the three dots next to the **USER** key and then select **Copy**.

<img alt="Get a New Relic Ingest key" src="https://assets.postman.com/postman-docs/new-relic-get-ingest-key-v9-6.jpg" width="1109px">

> There are different types of API keys in New Relic. Make sure to use a **User** key for importing into Postman. For more information on API Keys in New Relic, see the [New Relic API keys documentation](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/).

## Importing New Relic data

1. Select **Import** in the sidebar, then select **Other Sources > New Relic**.
1. Enter the **API Key** (User key) you copied from New Relic, then select **Next**.

    > Postman saves your API key so you don't have to enter it again the next time you import data from New Relic.

1. In the list, select one or more services or applications to import as collections.
1. (Optional) Select **Show Import Settings** to configure how collections are generated from the New Relic data.
1. When you're ready, select **Import**.

Each service you selected is imported as a collection in Postman, and a message displays in the footer. In the message, select the link icon
<img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-external-link.jpg#icon" width="18px"> next to a collection to open the imported collection.
