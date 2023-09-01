---
title: 'Importing from Insomnia'
updated: 2023-08-30
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

Insomnia is an open-source desktop application for creating APIs. You can export Insomnia requests and collections as a HAR file, then import the HAR file into Postman. You can also use Insomnia's [Postman Export plugin](https://insomnia.rest/plugins/insomnia-plugin-postman-export) to convert Insomnia assets into a Postman-compatible format.

## Contents

* [Export a HAR file from Insomnia](#export-a-har-file-from-insomnia)
* [Use Insomnia's Postman Export plugin](#use-insomnias-postman-export-plugin)
* [Import the data into Postman](#import-the-data-into-postman)

## Export a HAR file from Insomnia

1. In Insomnia, from the Collection name dropdown menu, select **Export**.
1. Select the collections or requests you want to export.
1. Select **Export**.
1. Select **HAR - HTTP Archive Format** from the dropdown menu.
1. Select **Done**.
1. When Insomnia asks if you want to include private environments, select **Yes** or **No**.
1. Enter a file name, select a save location, and select **Export**.

## Use Insomnia's Postman Export plugin

1. In Insomnia, install the [Postman Export plugin](https://insomnia.rest/plugins/insomnia-plugin-postman-export).
1. From the Collection name dropdown menu, select **Export as Postman Collection**.
1. (Optional) Enter a regular expression to filter requests.
1. Select **OK**.
1. (Optional) Enter the file name of the request ID CSV.
1. Select **OK**.
1. Enter an output path and select **Initiate (Please Wait for "All Done!")**
1. Select **OK**.

## Import the data into Postman

1. In Postman, go to your workspace and select **Import**.
1. Select **files**.
1. Select the file you want to import and select **Open**.
