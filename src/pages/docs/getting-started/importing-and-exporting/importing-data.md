---
title: "Import data into Postman"
updated: 2023-10-17
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

You can import collections, API definitions, and other data files so you can work with them in Postman.

To import your data into Postman, select **Import** in the sidebar. You can import your data from files, folders, cURL commands, raw text, or URLs. You can also import data from other sources such as code repositories, API gateways, and application performance management tools.

![Import data into Postman](https://assets.postman.com/postman-docs/v10/import-export-import-ui-v10-17.jpg)

> You can also import items by dragging and dropping files or folders onto the sidebar.

## Contents

* [Importing Postman data](#importing-postman-data)
    * [Converting Postman collections from v1 to v2](#converting-postman-collections-from-v1-to-v2)
* [Importing with cURL commands](#importing-with-curl-commands)
* [Importing API definitions](#importing-api-definitions)

## Import Postman data

You can import Postman data that you [exported](/docs/getting-started/importing-and-exporting/exporting-data/) earlier, including collections, environments, data dumps, and globals. Postman will automatically recognize Postman data on import.

1. Select **Import** in the sidebar.
1. Do one of the following:
    * Select your file or folder, or drag it into Postman.
    * Paste your raw text or URL into the input field.
    * Select a button to import from [GitHub](/docs/getting-started/importing-and-exporting/importing-from-git/#import-from-a-remote-git-repository), [AWS API Gateway](/docs/designing-and-developing-your-api/importing-an-api/#importing-api-definitions-from-amazon-api-gateway), or [New Relic](/docs/getting-started/importing-and-exporting/importing-from-new-relic/).
    * Select **Other Sources** to import from a [Bitbucket, GitLab, or Azure](/docs/getting-started/importing-and-exporting/importing-from-git/#import-from-a-remote-git-repository) code repository. You can also import an API from [Azure API Management](/docs/designing-and-developing-your-api/importing-an-api/#importing-api-definitions-from-azure-api-management).

   ![Import collection and environment](https://assets.postman.com/postman-docs/v10/import-elements-v10.jpg)

1. Postman will automatically recognize Postman data on import. Confirm the name, format, and type:

    * If you are importing multiple files, select the files you want to import, then select **Import**.

    * If you are importing a single file, Postman automatically imports it when you select it.

1. An **Import Complete** message displays in the footer. In the message, select the link icon <img alt="External link icon" src="https://assets.postman.com/postman-docs/icon-external-link.jpg#icon" width="18px"> next to a collection or environment to open the imported element.

    <img alt="Import complete message" src="https://assets.postman.com/postman-docs/v10/import-complete-message-v10-19.jpg" width="697px" />

### Convert Postman collections from v1 to v2

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

You can retrieve a list of convert options by running the command with the `-h` flag:

   ```bash
   postman-collection-transformer convert -h
   ```

See the [Postman Collection Transformer](https://github.com/postmanlabs/postman-collection-transformer) for more information on the collection conversion.

## Import from cURL commands

You can use cURL commands to import data.

1. Select **Import** in the left navigation menu. The **Import** modal opens.
1. Paste your cURL command into the input field at the top. Postman creates and opens a request automatically.

    > You can also paste cURL commands into a request's URL field. For more information about working with cURL commands in Postman, read [Importing cURL commands](/docs/getting-started/importing-and-exporting/importing-curl-commands/).

## Importing API definitions

To import your API definitions into Postman, see [Importing an API](/docs/designing-and-developing-your-api/importing-an-api/).
