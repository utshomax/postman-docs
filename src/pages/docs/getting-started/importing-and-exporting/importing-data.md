---
title: 'Importing data into Postman'
updated: 2023-07-19
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
  - type: link
    name: "Importing cURL Commands | Postman Level Up"
    url: "https://youtu.be/kuR3we5EY2s"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Essentials: Exploring the Collection Format"
    url: "https://blog.postman.com/postman-essentials-exploring-the-collection-format/"
  - type: link
    name: "Differences between Postman Collections and the collection format"
    url: "https://blog.postman.com/differences-between-postman-collections-and-collection-format/"
  - type: link
    name: "Bring your APIs into Postman faster than ever"
    url: "https://blog.postman.com/bring-your-apis-into-postman-faster-than-ever/"
---

Postman can import and export Postman data, including collections, environments, data dumps, and globals. Postman can also import non-Postman data in the form of API schemas to help you consolidate your API development workflow.

## Contents

* [Importing data into Postman](#importing-data-into-postman)

    * [Importing Postman data](#importing-postman-data)

    * [Converting Postman collections from v1 to v2](#converting-postman-collections-from-v1-to-v2)

    * [Importing API specifications](#importing-api-specifications)

## Importing data into Postman

You can import collections, API specifications, and data files directly into Postman.

To import your data into Postman, select **Import** in the upper left. The **Import** modal opens.

![Import data into Postman](https://assets.postman.com/postman-docs/v10/import-export-import-ui-v10-3.jpg)

You can import your data from files, folders, links, raw text, or code repositories.

> You can also import items by dragging and dropping files or folders onto the sidebar.

### Importing with cURL commands

You can use cURL commands to import data.

1. Select **Import** in the left navigation menu. The **Import** modal opens.
1. Paste your cURL command into the input field at the top. Postman creates and opens a request automatically.

    > You can also paste cURL commands into a request's URL field.

### Importing Postman data

You can import Postman data you exported earlier, including collections, environments, data dumps, and globals.

1. Select **Import** in the left navigation menu.
1. Do one of the following:
    * Select your file or folder, or drag it into the **Import** modal.
    * Paste your raw text or URL into the input field.
    * Select a button to import from a [GitHub](#importing-from-github-repositories), [Bitbucket](#importing-from-bitbucket-repositories), or [GitLab](#importing-from-gitlab-repositories) code repository.
    * Select **Other Sources** to import an [Azure](#importing-from-azure-devops-repositories) code repository, or to [import an API from Amazon API Gateway or Azure API Management](/docs/designing-and-developing-your-api/importing-an-api/).
    Postman will automatically recognize Postman data, confirming the name, format, and what the file will import as.
   ![Import collection and environment](https://assets.postman.com/postman-docs/v10/import-elements-v10.jpg)
1. If you are importing multiple files, select the files you want to import and select **Import** to bring your data into Postman.

    > If you are importing a single file, Postman automatically imports it when you select it.

### Converting Postman collections from v1 to v2

Postman no longer supports the collection v1 format and will return an error if you import a collection in this format. You can convert your collection's format from v1 to v2 to import it into Postman.

To convert your collection's format from v1 to v2, do the following:

1. In the terminal of your choice, enter the following command to install the Postman Collection Transformer.

   ```bash
   sudo npm install -g postman-collection-transformer
   ```

1. Convert an individual Postman Collection from v1 to v2 by entering this command:

   ```bash
   postman-collection-transformer convert -i <path to the input Postman Collection file> -o <path to the downloaded Postman file> -j 1.0.0 -p 2.0.0 -P
   ```

The resulting collection will download to your target file path in v2 format.

You can retrieve a list of convert options by running the command with the ``-h`` flag:

   ```bash
   postman-collection-transformer convert -h
   ```

See the [Postman Collection Transformer](https://github.com/postmanlabs/postman-collection-transformer) for more information on the collection conversion.

### Importing API specifications

To import your API specifications into Postman, see [Importing an API](/docs/designing-and-developing-your-api/importing-an-api/).
