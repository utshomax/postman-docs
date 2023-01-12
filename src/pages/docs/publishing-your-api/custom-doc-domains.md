---
title: "Using custom domains"
updated: 2023-01-12
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Documentation | The Exploratory"
    url: "https://youtu.be/XNVo9WkCoak"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Imgur"
    url: "https://www.postman.com/case-studies/imgur/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Publishing your docs"
    url: "/docs/publishing-your-api/publishing-your-docs/"
---

> **[Custom documentation domains are available on Postman Basic, Professional, and Enterprise plans.](https://www.postman.com/pricing)**

You cn host your [published API documentation](/docs/publishing-your-api/publishing-your-docs/) on your own custom domain instead of on `getpostman.com`. After you add and verify a custom domain, users can access your API documentation using the custom domain.

## Adding a custom domain

Access [team settings](https://go.postman.co/settings/team/general) by selecting **Team** in the header, then selecting **Team Settings**.

<img alt="Team menu with Team Settings selected" src="https://assets.postman.com/postman-docs/team-settings-menu-selected.jpg" width="350px"/>

Select **Custom domains** from the left-hand menu. You can view custom domains that have been added for your team and the verification status for each domain. Select **View Details** next to a domain get the verification records needed to [verify your domain](#verifying-your-domain).

![Viewing custom domains](https://assets.postman.com/postman-docs/v10/custom-domains-view-v10.jpg)

To add a new domain, select **Add custom domain** and enter the URL of your domain. You can enter your main domain (like `example.com`) or a subdomain (like `docs.example.com`).

![Adding a custom domain](https://assets.postman.com/postman-docs/v10/custom-domains-add-v10.jpg)

Select **Proceed** to verify the custom domain.

## Verifying your domain

After you add a custom domain, Postman displays the DNS records required to verify domain ownership. To verify that you control the domain you're attempting to add, you must add these provided tokens to your domain as TXT and CNAME records. After adding the TXT and CNAME records in your domain registrar, you can complete the verification in Postman team settings.

![Custom domain TXT and CNAM records](https://assets.postman.com/postman-docs/v10/custom-domains-dns-records-v10.jpg)

### Adding DNS records

For DNS records, verify the ownership with a DNS web service provider. In a separate browser tab, go to the DNS provider’s console and add the following two new records.

* A TXT record for `postman-echo.com` verifies the ownership of the domain. The value must be the same as the token shown in the modal. Add the TXT record to the __root domain__. For example if you're adding `example.com` or `api.example.com`, add the TXT record to `example.com`.
* A CNAME record for `docs.postman-echo.com`, as shown in the modal. This value must be `phs.getpostman.com`. Add the CNAME record to the URL that's associated with your public documentation.

### Completing the verification

To verify the domain, check the __I've added the TXT and CNAME records__ checkbox, then select __Verify Domain__. A confirmation message will indicate that the domain has been verified.

![Completing domain verification](https://assets.postman.com/postman-docs/v10/custom-domains-verify-v10.jpg)

> Postman uses LetsEncrypt as an SSL certificate provider to enable hosting public documentation on your domain. LetsEncrypt generates a certificate implicitly if your domain has no CAA records. If your domain has CAA records set, then LetsEncrypt needs an explicit CAA record to issue a certificate for that domain. To enable LetsEncrypt issue this certificate, refer to the [LetsEncrypt Documentation](https://letsencrypt.org/docs/caa/).

If you don't want to verify the domain now, select __Verify Later__.

You can remove the custom domain by selecting __Delete Custom Domain__.

> Your DNS settings may take up to 24 hours to take effect, and you may receive an error message in the interim. To check the status, you can visit [this website](https://www.whatsmydns.net/).

## Troubleshooting DNS issues

If you receive the error message

```
RRSet of type CNAME with DNS name <subdomain.domain.com> is not permitted as it conflicts with other records with the same DNS name in zone <domain.com>
```

when adding your first domain, note that CNAME records cannot co-exist with any other records for a domain. You will need to either edit the existing record type for your subdomain to CNAME or add a new subdomain.

If you receive the same message when adding your second domain, note that since the TXT record verifies the ownership of the domain, the value will be the same as the token already added for the root domain. Add the CNAME record to the URL that's associated with your public documentation, for which the value will be `phs.getpostman.com`.

## Publishing a collection on your custom domain

When your domain is verified, you can use it to [publish your API documentation](/docs/publishing-your-api/publishing-your-docs/). If you have a collection already published, you can edit it to use the new domain.

[![publish collection](https://assets.postman.com/postman-docs/publish-collection-edit-1.jpg)](https://assets.postman.com/postman-docs/publish-collection-edit-1.jpg)
