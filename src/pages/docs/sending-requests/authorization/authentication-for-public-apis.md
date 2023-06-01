---
title: "Authentication for public APIs"
updated: 2023-05-30
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

An increasing number of public APIs offer easier authentication through Postman, including Stripe, Open AI, Notion, and Spotify. When you create a request to a supported API, Postman will automatically recognize if the API requires authentication and give you the option to **Set up new authorization**.

<img alt="Postman API set up new authorization" src="https://assets.postman.com/postman-docs/v10/postman-api-easier-auth-v10-2.jpg"/>

Select **Set up new authorization** to learn what authentication credentials you'll need to make your request and where you can find them. For APIs that support OAuth 2.0, you can select **Authorize** to complete authorization. For APIs requiring credentials like tokens or API keys, you can paste those directly into your request.

<img alt="Postman API authentication info and link" src="https://assets.postman.com/postman-docs/v10/postman-api-easier-auth-enter-key-v10-2.jpg"/>

If you're an API publisher, you can [join the waitlist](https://go.postman.co/settings/team/api-authentication) to provide easier authentication for your public APIs to the Postman community. To do so, open Postman and select **Team** in the upper right, then **Team Settings > Set Up API authorization**. Alternatively, select **API Network** from the Postman header, then select **Public API Network > Set up API authorization**.
