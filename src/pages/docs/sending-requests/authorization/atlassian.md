---
title: "Authenticate with Atlassian S2S authentication in Postman"
updated: 2023-11-15
---

ASAP (Atlassian S2S Authentication Protocol) is a mechanism that an API server uses to authenticate requests from the client. <!-- TBD -->The access token format must be signed [JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519), and access tokens must be signed with the private key of the client using [JSON Web Signature (JWS)](https://datatracker.ietf.org/doc/html/rfc7515).

<!-- With ASAP (Atlassian S2S Authentication Protocol), the client sends a request to the API, and the API server uses ASAP to authenticate the request. -->

To use ASAP, do the following:

1. In the __Authorization__ tab for a request, select __ASAP (Atlassian)__ from the __Type__ dropdown list.
1. Enter your details in the fields. You can set optional settings, but Postman will try to generate values for them if necessary.

Enter the following ASAP parameters:

* **Algorithm** - Select an asymmetric key algorithm to use for the access token. Supported algorithms include: <!-- header parameter -->

    * **RS** - RSA (RSASSA-PKCS1-v1_5) with SHA
    * **PS** - RSA (RSASSA-PSS) with SHA
    * **ES** - ECDSA with SHA

* **Issuer** - The service that issued the access token and signed it with its private key.

* **Audience** -

* **Key ID** - The identifier for the key.  <!-- header parameter -->

* **Private key** - The private key for signing the token. Select **Select File** to upload a private key in PKCS #8 format, or paste your key in the text area.

* Optional parameters:

    * **Subject** - If the subject is empty, it's assumed that the **Subject** is the same as the **Issuer**.

    * **Additional claims** -

    * **Expiry** - The access token expiration timestamp. The default expiration timestamp is one hour.

For more information about ASAP, see [Atlassian S2S Authentication Protocol Specification](https://s2sauth.bitbucket.io/spec/).
