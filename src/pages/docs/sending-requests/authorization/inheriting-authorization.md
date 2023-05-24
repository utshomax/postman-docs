---
title: "Inheriting authorization"
updated: 2022-12-12
search_keyword: "WWW-Authenticate, x-www-form-urlencoded"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to Postman | Authorize a Request"
    url: "https://youtu.be/7t9AB9Opprs"
  - type: link
    name: "How to Use JWT Authorization"
    url: "https://youtu.be/dLxCpd3IGys"
  - type: link
    name: "Set Up Authorization for Your Public Apis"
    url: "https://youtu.be/u-FyOBgIB0c"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Announcing easier API authentication in Postman"
    url: "https://blog.postman.com/easier-api-authentication-in-postman/"
  - type: link
    name: "OAuth 2.0 just got easier: introducing token refresh and ID token support"
    url: "https://blog.postman.com/oauth-2-0-token-refresh-and-id-token-support/"
  - type: link
    name: "New custom parameters for OAuth 2.0 token generation in Postman"
    url: "https://blog.postman.com/custom-parameters-oauth-2-token-generation-postman/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Intuit uses Postman's authentication protocols"
    url: "https://www.postman.com/case-studies/intuit/"
---

If you group your requests in [collections](/docs/sending-requests/intro-to-collections/) and folders, you can specify auth details to reuse throughout a group.

By default, requests inside the collection or folder will inherit auth from the parent, which means that they'll use the same auth that you've specified at the folder or collection level. To change this for an individual request, make a different selection in the request __Authorization__ tab.
