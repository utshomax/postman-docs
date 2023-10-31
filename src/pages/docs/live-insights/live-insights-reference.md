---
title: "Live Collections Agent reference"
updated: 2023-10-30
early_access: true
plan: alpha
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Postman Live Insights: Faster, Better API Debugging"
    url: "https://blog.postman.com/introducing-postman-live-insights-faster-better-api-debugging/"
  - type: link
    name: "Postman Live Insights: automatically discover, monitor, and add APIs"
    url: "https://www.postman.com/product/live-insights/"
---

## Supported LCA actions

### apidump

Capture and store a sequence of requests and responses to a service by observing network traffic.

#### Examples

* Capture all traffic from your collection and send it to the Live Collections Agent.

    ```bash
    postman-lc-agent apidump --collection collectionID
    ```

* Run `my_tests.sh` as `${USER}` and capture traffic on port 80. Send the captured traffic to the Live Collections Agent. The agent will automatically terminate once the script finishes.

    ```bash
    postman-lc-agent apidump --collection collectionID --filter "port 80" -c ./my_tests.sh -u ${USER}
    ```

#### Required flags

##### --collection collectionID

The `--collection collectionID` flag identifies the collection with which to associate the captured traffic. The traffic is sent to the Live Collections Agent. You can find the collection ID by selecting your collection and then **Info** in the right sidebar.

![Image]()

#### Optional flags

Filter your traffic using optional flags to return the information you’re interested in.

##### --rate limit number

Set the maximum number of HTTP request/response pairs to collect per minute. If the number of samples exceeds this amount, the CLI randomly samples events, and sends only the specified number to the Postman cloud.

##### --path-exclusions regex1,regex2...

Removes HTTP paths matching regular expressions.

* Filter out requests fetching files with `.png` or `.jpg` extensions by specifying `--path-exclusions .*\.png` and `--path-exclusions .*\.jpg`.

    **Example:**

    If the URL is `http://10.0.0.1/junk.jpg`, then `path-exclusions` is matched against `"junk.jpg"`.

##### --host-exclusions regex1,regex2...

Removes HTTP requests whose host URL matches any one of the given regular expressions.

* Exclude the host in the form of a regex that matches the IP address if you’re collecting all the junk traffic to the IP addresses instead of your named services.

    **Example:**

    If the URL is `http://10.0.0.1/junk.jpg`, then `host-exclusions` is matched against `"10.0.0.1"`.

##### --path-allow regex1,regex2...

Only capture HTTP requests whose URL path matches any one of the given regular expressions.

##### --host-allow regex1,regex2…

Only capture HTTP requests whose host URL matches any one of the given regular expressions.

### kube inject

Inject the Live Collections Agent into a Kubernetes deployment or set of deployment and output the result to standard out or a file.

### Examples

* Inject the set of deployment manifests found in `resources.yml` and print the result to standard out. Each injected deployment should send traffic from the collection to the Live Collections Agent.

    ```bash
    postman-lc-agent kube inject --collection collectionID -f resources.yml
    ```

* Inject any deployment manifests found in `resources.yml` similar to the previous execution. Also generate and add any secrets required for the Live Collections Agent to run.

    ```bash
    postman-lc-agent kube inject -s --collection collectionID -f resources.yml
    ```

* Output injected resources and any secret manifests to separate files:

    ```bash
    postman-lc-agent kube inject -s="secret.yml" --collection collectionID -f in.yml -o out.yml
    ```

* Apply generated resources via pipe using `kubectl`:

    ```bash
    postman-lc-agent kube inject -s --collection collectionID -f in.yml | kubectl apply -f -
    ```

### Required flags

#### -f, --file string

Path to the Kubernetes YAML file to be injected. This should contain a valid Deployment manifest.

#### --collection collectionID

Name of the collection to which the traffic will be uploaded.

### Optional flags

* `-o, --output string` — Path to the output file. If not specified, the output will be printed to stdout.
* `-s, --secret string[="true"] `— Whether to generate a Kubernetes secret manifest. If set to "true", the secret will be added to the modified Kubernetes YAML file. Specify a path to write the secret to a separate file; if this is done, an output file must also be specified with `--output`. (Default: `"false"`)

> The input file must be in YAML format and must contain at least one valid deployment manifest.

> If the `--secret` flag is set to a file path, the `--output` flag must also be set.

## Unsupported actions

The following actions are currently unavailable but will be supported in the future.

* Changing ownership
* Editing Collection folder names
* Editing any content of the Collection
* Installing the Agent in any environment other than Kubernetes.

## Known limitations

We appreciate your patience with us as we build out the alpha.

* Live Insights currently works only for REST APIs and not for gRPC or GraphQL.
* Live Insights is currently focused on first-party APIs.
* Postman generates a maximum of 10 folders per live collection, and 300 requests per folder. We’re working on expanding this.
* The Agent updates every 10 minutes, which means new endpoints will not be seen for up to 10 minutes. We’d love your feedback on whether you would like more frequent updates.
* Bug: Changes made to request bodies and examples do not yet show up. We are working on fixing this issue.

                  |

## Sensitive data protection

The LCA client drops all data values from the observed traffic before sending it to Postman. All data format inference happens on the client side, before the data is removed. The Postman cloud does not see the initial values, and uploads of the obfuscated data to Postman are performed over HTTPS using TLS.

### Limitations

* Any literal values that appear in the payload are obfuscated before being sent to Postman, but path parameters are sent in their original form. If the path to your API includes sensitive data (for example, email, first/last names, or phone numbers), it is transmitted to Postman first. Postman applies heuristics on the backend to remove it. If you have APIs that include sensitive data, contact Postman support to adjust the LCA to pre-filter it.
* Postman’s data sanitizing doesn't apply to the keys. For example, the sanitizing works if your JSON document is structured as follows:

    ```json
    {
        "key": "sensitive-data",
        "other-key": "super-secret-value",
    }
    ```

    However, if your data is structured as shown in the next example, Postman preserves the left set of values.

    ```json
    {
        "<social-security-number>": true,
        "more-sensitive-data": "string",
        "super-secret-identifier": 1.0,
    }
    ```

* Sanitization also applies to HTTP header values, not keys. For example, if your header looks like:

    ```json
    Authentication: <secret token>
    ```

    Then, the secret token is never sent to Postman.

    But, if your system encodes sensitive data in the name of the header, like so:

    ```json
    User-<user id>: ...
    ```

    Then the header is sent to Postman and appears in your collection.



