---
title: 'Importing and exporting overview'
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

Postman can import and export Postman data, including collections, environments, globals, and data dumps. Postman can also import non-Postman data in the form of API definitions to help you consolidate your API development workflow.

* You can [import data into Postman](/docs/getting-started/importing-and-exporting/importing-data/) by dragging and dropping files, or by pasting a CURL command, raw text, or a URL. Postman automatically recognizes Postman data such as collections, environments, and data dumps. You can also import API definitions into Postman.

* You can [import data from a Git repository](/docs/getting-started/importing-and-exporting/importing-from-git/) so you can work with it in Postman. You can import collections, environments, and API definitions from local or remote GitHub, GitLab, Bitbucket, and Azure DevOps repositories.

* If you use New Relic to monitor your applications, you can [import data from New Relic](/docs/getting-started/importing-and-exporting/importing-from-new-relic/) into a Postman Collection. The endpoints in each New Relic service are imported as requests in a collection.

* You can [export collections and environments](/docs/getting-started/importing-and-exporting/exporting-data/) from Postman as JSON files. You can also [export a data dump](/docs/getting-started/importing-and-exporting/exporting-data/#exporting-data-dumps) with all of your Postman collections, environments, globals, and header presets. After exporting, you can import the files into any Postman instance or use them with [Newman](http://localhost:8000/docs/collections/using-newman-cli/command-line-integration-with-newman/).
