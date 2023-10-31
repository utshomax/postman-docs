---
title: "Live Insights"
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

## About Live Insights Early Access

Our team at Postman is working toward the open launch of Live Insights. Today, the alpha launch focuses on the Live Collections Agent (LCA), which passively watches your API traffic to automatically populate a Postman Collection with API endpoints. Within 15 minutes of installing the Live Collections Agent in staging or production, you’ll start to see endpoints in your collection. The Live Collections Agent will keep these endpoints up to date based on new observed traffic.

API discovery is just the beginning of what we plan to offer. Akita users are familiar with the ability to explore API models based on error, latency, and volume.

We’re hoping you will try out the new features and give us your feedback to help us continue tailoring the product to your needs.

### Feedback

If you’ve agreed to participate in the alpha, we kindly ask you to:

* Install the Live Collections Agent within two weeks of receiving these instructions. We would love installation feedback as you go, in Slack or via email.
* Fill out a survey or do a live user interview within one month of receiving access.
* Optionally, provide feedback on product designs and upcoming features.

We would love to talk to you in Slack to get questions, bug reports, and feature requests as you explore the alpha. If you’d like to provide detailed product feedback, please send it to [Jean Yang](jean.yang@postman.com), Head of Product, Observability.

### Support

If you experience any issues, please reach out on Slack or contact observability-support@postman.com.

## Overview

The goal of the Postman Live Insights is to be the source of truth for your production APIs. With Live Insights, our vision is to be able to guide a developer with little previous experience, in both the system being monitored and our tool, to productively find and fix issues.

> These docs feature onboarding for [Kubernetes](), [Amazon Elastic Container Service (ECS)](), and [Amazon EC2/Linux Server]() users.

## Contents

* [Before you start]()
* [Get started]()
* [Check your LCA connection]()
* [Navigate Live Collections]()
* [Observe Live Insights]()
* [Diagnose and troubleshoot errors]()
* [Sensitive data protection]()
* [Notes for existing Akita users]()
* [Supported LCA actions]()
* [Unsupported actions]()
* [Known limitations]()

## Before you start

* To use the Live Insights alpha, you need to be part of a team. If you don’t already have a team in Postman, see [Collaboration overview](/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/#creating-a-team) for instructions on how to set it up. Postman Free provides team setup with up to three users. If you weren’t already part of a team, create a team and contact [Jean Yang](jean.yang@postman.com) to get access to the alpha.
* To better help our team quickly improve our solution, it would be helpful if you add the [Live Insights Alpha Team](live.insights.alpha@postman.com) as a guest to your team. (There is no need to add our team as a full member.)
* If you feel comfortable, add the [Live Insights Alpha team](live.insights.alpha@postman.com) as a viewer on your live collections. See [Allowing external users to view collections](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections) for more information. This will allow us to directly see your endpoints to improve your experience.
* If you’re working with multiple teams, make sure the Live Insights team is aware and gives you access to the team you want to use.
* Log in with the email address confirmed with you in the alpha invite email. If you are not sure which email to use, contact [Jean Yang](jean.yang@postman.com).
* You can install the Live Collections Agent (LCA) after you create a new live collection. For more information, see [Get started](#get-started).

> Live Insights currently works only for REST APIs and not yet for gRPC or GraphQL. Please get in touch if you are interested in gRPC or GraphQL.

Live Insights is currently focused on first-party APIs.

> Do not install the LCA on an existing curated collection because your existing curated endpoints will be overwritten.

## Get started

Currently, you can install and run the Live Collections Agent (LCA) on [Kubernetes](), [Amazon Elastic Container Service (ECS)](), and [Amazon EC2/Linux Server](). First, create a collection and install the LCA locally. Then, configure LCA for your deployment. Finally, return to Postman to [check your LCA connection](), [navigate your collection](), [review any traffic errors](), and [observe live insights]() about your endpoints.

### Create a collection

1. In Postman, create and name a collection. For more information about how to create and manage collections, see [Collections overview](https://learning.postman.com/docs/collections/collections-overview/).

1. In the collection **Overview**, select **Get Started** to enable a live collection.

    ![Image]()

1. In the **Enabling Live** tab, select **Using the Live Collection Agent.**

### Install LCA locally

In your shell, run:

```bash
bash -c "$(curl -L https://releases.observability.postman.com/scripts/install-postman-lc-agent.sh)"
```

## Kubernetes

Get onboarded quickly with the Kubernetes injector. The injector is a tool that operates on the YAML definition of a Kubernetes deployment in an offline fashion, similar to [Istio’s manual sidecar injection](https://istio.io/latest/docs/setup/additional-setup/sidecar-injection/#manual-sidecar-injection).

Set up the LCA in your Kubernetes environment using the injector, and edit the deployment using additional command flags.

### Configure

1. Navigate to the correct Kubernetes cluster and get the existing deployment configuration.

    ```bash
    kubectl get deployment -n <your_namespace> <your_deployment> -o yaml > <your_deployment_file>.yaml
    ```

1. Get the collection ID and your API key. Then, run the configuration script.

    Select your Postman collection and then **Info** in the right sidebar. Then, copy the collection ID.

    ![Image]()

    You can find the Postman API key in your [API keys](https://postman.postman.co/settings/me/api-keys) page.

    The script consists of your Postman API key, the `postman-lc-agent kube inject` command, and the collection ID.

    In your shell, add your API key and the collection ID to the script, replace the placeholder `<your_deployment_file>` with the path to your deployment's YAML configuration file, then run the script. This alters the deployment to include the LCA.

    ```bash
    POSTMAN_API_Key=<your_api_key> postman-lc-agent kube inject --collection <collectionID> -f <your_deployment_file>.yaml -s | kubectl apply -f -
    ```

    The command creates a secret to hold your Postman key and updates the deployment with the Postman sidecar. The response looks something like this:

    ```shell
    secret/postman-agent-secrets created
    deployment.apps/cloud-api-deployment configured
    ```

1. Check the status of your Kubernetes container pods.

    ```bash
    kubectl get pods -n <your_namespace>
    ```

    The status response looks something like this:

    ```shell
    NAME READY STATUS RESTARTS AGE
    cloud-api-deployment-5db4fBc64-cknhc 2/2 Running 0 4h40m
    cloud-api-deployment-7f97856c7f-p5Lv7 2/2 Running 0 15h
    ```

1. Get the logs from the sidecar.

    ```bash
    kubectl logs -n <your_namespace> <your_pod> postman-lc-agent
    ```

    Let the LCA run for 60 seconds and observe the HTTP and TLS traffic on your ports.

1. Return to Postman and select **View Collection**. Observe subdirectories created for services and health checks.

    > Subdirectories can take a few minutes to populate.

    Observe the Live Collections icon <img alt="Live Collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> denoting a live collection and the counter badge indicating the number of requests.

    ![image]()

You are now ready to [check your LCA connection](), [navigate your collection](), [review any traffic errors](), and [observe live insights]() about your endpoints.

### Uninstall

To uninstall the LCA client on Debian and macOS follow the steps listed below. For all other distributions of Linux and other operating systems, simply remove the `postman-lc-agent` file from your executable file location. To fully uninstall, also remove the sidecar from your Kubernetes deployment.

#### Uninstall LCA client

Follow these steps to uninstall the LCA client from Debian and macOS.

* Debian

    ```bash
    apt remove postman-lc-agent
    ```

* macOS

    ```bash
    brew uninstall postman-lc-agent
    ```

#### Remove the sidecar from your Kubernetes deployment

1. Access the sidecar in your Kubernetes deployment directory.

    ```bash
    kubectl edit -n {your namespace} deployment/{your namespace}
    ```

1. Find the `"spec:" / "containers:"` section.
1. Delete the Live Collections Agent container with `"image: docker.postman.com/postman-lc-agent:latest"`.

## ECS (EC2 and Fargate)

The Live Collections Agent (LCA) supports Amazon Elastic Container Service (ECS) on EC2 and ECS Fargate deployments.

The LCA listens to the traffic arriving at the cluster service you want to monitor and creates a Postman collection for it.

### Installation options

* If you’re using Fargate, you can [install LCA as a sidecar]() only.
* If you’re using ECS on EC2 with awsvpc, you can install it as a [sidecar]() or as a [daemon service]().
* If you’re using ECS on EC2 with bridge networking, you can [install LCA as a daemon service]() only.

### Requirements

Configuring ECS requires:

* Internet access for your service, to be able to communicate with the Live Insights backend services. For more information, see [Ensure internet access]().
* AWS credentials at `~/.aws/credentials` with edit access to ECS cluster, service and task definition. For more information, see [Set up AWS ECS permissions]().
* Cluster ARN. Navigate to the cluster in the AWS console and find the ARN in the cluster overview.
* Service ARN. The ARN of the service on which you want to install the Live Collections Agent.
* Collection ID. You can find the collection ID by selecting your Postman collection and then **Info** in the right sidebar.

    ![image]()

* Postman API key. You can copy it from your [API keys](https://postman.postman.co/settings/me/api-keys) page.

### Install LCA as a sidecar

Following are instructions for installing the LCA as a sidecar. If you are using ECS on EC2 with bridge networking, you will need to attach the LCA to the host network. See [Install LCA as a daemon service]().

1. Check [Requirements]() to see the information you need to have. Then, run the following script, substituting your values.

    ```bash
    POSTMAN_API_KEY=<your_api_key> postman-lc-agent ecs add \
    --collection <collectionID> \
    --cluster <ECS_cluster_ARN> \
    --profile <aws_profile_name> \
    --region <aws_region> \
    --service <ECS_service_ARN> \
    --task <task-name>
    ```

    ![Image]()

    See the help menu for further configuration.

    ```bash
    postman-lc-agent ecs --help
    ```

    > The time it takes for the deployment to complete depends on the number of tasks running in a service. So, while the process might take a while, the CLI will run until it’s finished because the processing is handled by AWS.

1. Return to Postman and observe subdirectories created for services. You may see additional subdirectories created from health checks of your application's endpoints/traffic.

    > Directories can take a few minutes to populate.

    Observe the Live Collections icon <img alt="Live Collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> denoting a live collection and the counter badge indicating the number of requests.

    ![Image]()

You are now ready to [check your LCA connection](), [navigate your collection](), [review any traffic errors](), and [observe live insights]() about your endpoints.

### Install LCA as a daemon service

Following are instructions for attaching the LCA to the host network in ECS. This option is necessary if you use ECS with bridge networking. If you’d like to install the LCA as a sidecar instead, see [Install LCA as a sidecar](https://docs.google.com/document/d/1i-gCshD2m8SycEMzEvzwt6ihlSd32wQjM3YO14fynCE/edit#heading=h.vyqbvhqpcraq).

1. Check [Requirements]() to see the information you need to have. In the **Amazon EC2 console > Resource Groups & Tag Editor**, create a new task definition with **Network mode** set to `host`.

    **Example:** .5 vCPU and .5 MB memory for the agent, and the default task execution role.

    ![Image]()

1. Add a single container in this task definition, running `docker.postman.com/postman-lc-agent`. Delete the port mapping; the agent doesn’t need to expose any services to your network. Add the `POSTMAN_API_KEY` environment variable with your Postman API key set as the value.

    ![Image]()

1. Configure logging (optional), then expand the **Docker configuration** section.

    Replace the entry point with this string, followed by your collection ID: `/postman-lc-agent,apidump,--collection`.

    ![Image]()

    If you use a particular port number per service, you can specify additional arguments to only capture traffic destined for port `NNNN`: `...,--filter,port NNNN`.

    Or you can use the extra argument to filter by the hostname you use to access the service: `...,-host-allow,HOSTNAME`.

    This parameter can take multiple comma-separated regular expressions if the task is more complicated than a single host.

1. Create a service that runs this task. You can run it as a normal service you then scale up or down. Alternatively, you can run it as a _daemon_ on every EC2 instance in the cluster.

    Create the task. Switch the **Compute options** to _Launch Type_ and select _EC2_.

    ![Image]()

1. For **Application type** select _Service_, then select the task definition you created in steps 1-3. For **Service type** select _Daemon_.

    ![Image]()

1. Return to Postman and observe subdirectories created for services. You may see additional subdirectories created from health checks of your application's endpoints/traffic.

    > Directories can take a few minutes to populate.

    Observe the Live Collections icon <img alt="Live Collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> denoting a live collection and the counter badge indicating the number of requests.

    ![Image]()

You are now ready to [check your LCA connection](), [navigate your collection](), [review any traffic errors](), and [observe live insights]() about your endpoints.

### Uninstall

The LCA installation modifies the task definition of your service to include the LCA sidecar. To uninstall LCA, simply revert to the old version of your task definition. To completely uninstall the agent, you can delete the task definition that contains the LCA sidecar.

### Ensure internet access

#### Fargate tasks

To verify that your task has a route to the internet:

* When using a public subnet, you can assign a public IP address to the task ENI.
* When using a private subnet, the subnet can have a NAT gateway attached.

For more information, see [Task networking for tasks hosted on Fargate](https://docs.aws.amazon.com/AmazonECS/latest/userguide/fargate-task-networking.html).

#### EC2 tasks

Tasks must be launched in private subnets with NAT gateway. For more information, see [Task networking for tasks that are hosted on Amazon EC2 instances](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html).

### Set up AWS ECS permissions

Attach the following policy to your AWS profile.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ecs:UpdateService",
                "ecs:RegisterTaskDefinition",
                "ecs:DescribeServices",
                "ecs:TagResource",
                "ecs:DescribeTaskDefinition",
                "ecs:DescribeClusters"
                ],
            "Resource": "*"
        }
    ]
}
```

The Live Collections Agent (LCA) CLI needs access to the following permissions in order to install the LCA in ECS. If the profile you selected lacks any of these permissions, the CLI output will show an error message with which action it was attempting to perform.

The `AmazonECS_FullAccess` policy provided by Amazon is a superset of these actions; you could add that entire policy as an easy way to ensure your permissions are sufficient, if they are not already.

| Action                           | Resource                                                                     | Purpose                                                                                             |
| -------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `ec2:DescribeRegions`            | \*                                                                           | Find the list of AWS regions you have enabled. (If not present, it defaults to a precompiled list.) |
| `ecs:ListClusters`               | \*                                                                           | Find the available ECS clusters.                                                                    |
| `ecs:DescribeClusters`           | \*, or restricted to account like `` `arn:aws:ecs:::cluster/* ``             | Look up the names of the available ECS clusters.                                                    |
| `ecs:ListTaskDefinitionFamilies` | \*                                                                           | Find the available task definitions.                                                                |
| `ecs:DescribeTaskDefinition`     | \*                                                                           | Read the existing task definition in order to copy it.                                              |
| `ecs:RegisterTaskDefinition`     | \*                                                                           | Write a new version of the task definition.                                                         |
| `ecs:ListServices`               | \*                                                                           | Find the available services.                                                                        |
| `ecs:DescribeServices`           | \*, or restricted to your account, or restricted to the cluster you selected | Identify which services are using the task definition you selected.                                 |
| `ecs:UpdateService`              | \*, or restricted to your account, or restricted to the cluster you selected | Update and restart the service using the new task definition.                                       |
| `ecs:TagResource`                | \*, or restricted to your account, or restricted to the cluster you selected | Mark the service as having been updated by the LCA.                                                 |

## Amazon EC2/Linux Server

If you’re running a Linux instance on EC2, the Postman Live Collection Agent (LCA) can run as a `systemd` service on your server.

The Postman collection is populated with endpoints observed from the traffic arriving at your service.

### Requirements

Configuring EC2/Linux Server requires:

* That your server's OS supports `systemd`.
* root user privileges, so you can enable and configure the agent as a `systemd` service.
* Collection ID. You can find the collection ID by selecting your Postman collection and then **Info** in the right sidebar.

![Image]()

* Postman API key. You can copy it from your [API keys](https://postman.postman.co/settings/me/api-keys) page.


### Set up LCA on EC2

1. Check [Requirements]() to see the information you need to have. Then, in your shell, go to your server, log in as a root user, and run the following script, substituting your API key and collection ID values.

    ```bash
    sudo su

    POSTMAN_API_KEY=<postman-api-key> postman-lc-agent setup --collection <postman-collectionID>
    ```

    In the resulting output, the server checks for user permissions and that the systemd is in use, configures systemd files, and enables Postman LCA as a systemd service.

1. Check the status or logs. Run the `journalctl` command:

    ```bash
    journalctl -fu postman-lc-agent
    ```

1. Return to Postman and observe subdirectories created for services. You may see additional subdirectories created from health checks of your application's endpoints/traffic.

> Directories can take a few minutes to populate.

Observe the Live Collections icon <img alt="Live Collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> denoting a live collection and the counter badge indicating the number of requests.

![Image]()

You are now ready to [check your LCA connection](), [navigate your collection](), [review any traffic errors](), and [observe live insights]() about your endpoints.


### Uninstall

To disable the `systemd` service, run:

```bash
sudo systemctl disable --now postman-lc-agent
```

### Limitations

You can install LCA one EC2 instance at a time. If you want to install on more than one machine, please contact support.

# Check your LCA connection

A live collection shows you the properties of your system based on real-time API traffic. For [Live Insights]() to work, the Live Collections Agent (LCA) needs to see your API traffic.

Postman provides a diagnostics dashboard where you can observe traffic error states and messages.

To access the diagnostics dashboard:

1. Select the live collection.
2. In the right-hand sidebar, select the Live Collections icon <img alt="Live Collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px">.
3. Select **View Diagnostics**.

![Image]()

The LCA diagnostics dashboard opens, listing your LCA runs from the most recently started run.

![Image]()

Postman displays these error states:

* Empty capture
* No telemetry
* Insufficient permissions, try using “sudo” to run as a root

# Navigate Live Collections

The Live Collections Agent (LCA) watches your API traffic to automatically populate your Postman Collection as a _live collection_.

The LCA organizes your API into subdirectories based on hostname or service name. Within each hostname directory, you see endpoints the LCA has seen from that host/service.

Select each request to see the query parameters, path variables, headers and their data formats, and the body of the request/response.

> Live Collections cannot currently be edited and will get fully automatically updated every 10 minutes.

Just like with the ordinary collections in Postman, a live collection enabled through the LCA has these elements:

* Query parameters — Sent with your requests using the URL field and the **Params** tab.
* Path variables — Form part of the request URL, and are referenced using placeholders preceded by `:` as in this example: `/customer/:id`.
* Headers — Provide more metadata about the operation you are performing.
* Body — Enables you to specify the data you need to send with a request.
* Response — Gives you several tools to help you understand the response quickly. You can view the body in one of four views: Pretty, Raw, Preview, and Visualize.

For more information, see [Building requests](/docs/sending-requests/requests/) and [Receiving responses](/docs/sending-requests/responses/).

## Observe Live Insights

Creating a live collection activates an **Insights** tab where you can observe endpoint error trends, enabling you to catch errors before your users do.

> This feature is experimental and will continue to evolve. Send your feedback and ideas about the types of metrics you would like to see to [Jean Yang](jean.yang@postman.com).

![Image]()

Live Insights returns a list of categories for endpoints with most errors, endpoints with the highest error rate, and endpoints with new errors over the last 7 days:

* Endpoints with most errors in the past week, based on the HTTP status code of the response.
* Endpoints with the highest proportion of requests that resulted in an error in the past week, based on the HTTP status code of the response.
* Endpoints with new errors in the past day for endpoints that were previously error free for 6 days, based on the HTTP status code of the response.

The **Errors** tab displays per-endpoint error states in a chronological order as well as a graphical representation of the seven-day trend.

> This feature is experimental and will continue to evolve. Send your feedback and ideas about the types of metrics you would like to see to [Jean Yang](jean.yang@postman.com).

![Image]()

## Diagnose and troubleshoot errors

As you work with the Live Collections Agent (LCA), you may encounter errors and receive error messages. Our diagnostics are still in alpha, so if anything is confusing please don’t hesitate to get in touch and ask us questions.

The LCA displays errors and provides diagnostics so that you can act on them:

* Observe information received from the LCA on usage and error states, including interfaces, ports, and traffic (HTTP vs. encrypted traffic, busiest endpoints).
* Review status messages and act on them.

To access the error message, select the Live Collections icon <img alt="Live Collections icon" src="https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon" width="16px"> next to the collection.

![Image]()

The following is the complete list of error messages.

| State                           | Description                                                                           | Message                                                                                                                                                                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _API key lacks permission_      | The API key used to instrument this collection doesn't have permissions to modify it. | The API key used to instrument this collection doesn't have permissions to modify it. Verify that the user is an editor on this collection or use a different API key.                                                               |
| _SDK is offline_                | Your team's usage limit has exceeded.                                                 | Your team has reached its monthly traces usage limit. To request a limit increase, please reach out to support\@postman.com.                                                                                                         |
| _API key is invalid or revoked_ | The API key used to instrument this collection is invalid or has been revoked.        | Verify the API key's validity or use a different API key.                                                                                                                                                                            |
| _PCAP permission failure_       | Client lacks permissions                                                              | The Agent could not capture traffic because it lacks permissions to do so. In a container environment, ensure that the container that has the Agent can run in privileged mode and has the `CAP_NET_RAW` capability.                 |
| _Invalid filters_               | Filter parsing error                                                                  | The Agent failed to parse the filters you specified on the command line. The `--filter` argument takes `tcpdump`-style arguments, while the host and path filters take Go regular expressions. Check the Agent logs for more details |
| _Traffic capture failure_       | Error in capturing traffic                                                            | Something went wrong while capturing traffic. Please try again.                                                                                                                                                                      |
| _Something went wrong_          | Something went wrong                                                                  | Something went wrong while starting the Agent. Please try again.                                                                                                                                                                     |

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

## Notes for existing Akita users

* Instead of `akita`, use `postman-lc-agent`.
* Instead of a project ID, use a collection ID.
* Instead of an Akita API key, use a Postman API key.

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
