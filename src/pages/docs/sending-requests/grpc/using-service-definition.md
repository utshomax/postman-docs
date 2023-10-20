---
title: "Manage service definitions for gRPC requests in Postman"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: link
    name: "API development overview"
    url: "https://learning.postman.com/docs/designing-and-developing-your-api/the-api-workflow/"
---

A *service definition* is the standard agreement (schema) the client and server must adhere to while invoking and executing a request. On the client side, a service definition makes the client aware of all the services and methods the server supports, message payload structure, supported fields, and data types. Anything that doesn’t follow the regulations enforced by the service definition would result in an error. During the execution of the request, the service definition is used to serialize the information exchanged between both parties.

gRPC uses [protobuf (protocol buffers)](https://developers.google.com/protocol-buffers/docs/overview) as the Interface Definition Language (IDL) to define the service definition. While creating a gRPC request, you'll need to add the appropriate service definition to the request to choose a method that you want to invoke. You can configure the service definition by selecting the **Service definition** tab in a gRPC request.

<img src="https://assets.postman.com/postman-docs/v10/service-definition-tab-v10-19.jpg" alt="Service definition tab">

While creating a new request, if the service definition isn't configured, Postman prompts you to configure it when you select the **Method selection** dropdown. This interface serves as a quick way to add your service definition and invoke your request. From this menu, you can select a protobuf API available in your workspace or import a new one by dragging a `.proto` file from your local system and dropping it into Postman.

<img src="https://assets.postman.com/postman-docs/v10/method-selection-dropdown-v10-19.jpg" alt="Configure service definition from method selection dropdown">

To load a service definition to the request, you can either use server reflection to load the service definition, or use a protobuf API as the service definition.

## Contents

* [Use server reflection](#use-server-reflection)
* [Use a protobuf API](#use-a-protobuf-api)
    * [Select an existing protobuf API from the workspace](#select-an-existing-protobuf-api-from-the-workspace)
    * [Import a .proto file](#import-a-proto-file)
    * [Create a new protobuf API](#create-a-new-protobuf-api)
* [Next steps](#next-steps)

## Use server reflection

If enabled by the server, server reflection can be the easiest way to add the service definition to the client. It gets the latest information available in the schema from the server without you having to manually load a `.proto` file or create a protobuf schema. Enter the URL and Postman loads the service definition automatically. You can learn more about [invoking different types of methods](/docs/sending-requests/grpc/grpc-request-interface/#invoking-different-types-of-methods).

<img src="https://assets.postman.com/postman-docs/v10/using-server-reflection-v10.jpg" alt="Using service definition">

## Use a protobuf API

If server reflection isn't enabled by the server, you can use a protobuf API as a service definition for the request. For this, you can either [select an existing protobuf API](#select-an-existing-protobuf-api-from-the-workspace) in your workspace or [import a `.proto` file](#import-a-proto-file) as a protobuf API into Postman. You can also [create a new protobuf API](#create-a-new-protobuf-api). Postman supports protobuf APIs in versions 2 and 3 of the [protobuf language](https://protobuf.dev/reference/protobuf/).

### Select an existing protobuf API from the workspace

Go to the **Service definition** tab and select **Select a Protobuf schema or paste a link to one**. This opens the **API selection** dropdown where you can browse through the available APIs and select the one you want to use.

<img src="https://assets.postman.com/postman-docs/v10/using-api-from-workspace-v10-19.jpg" alt="Using a protobuf API from the workspace">

While testing the services, you can also switch to a different version of the selected API by selecting the **Version** selector next to the API name. You can also select **Current definition** as the version, which includes all of the latest changes to the API that aren't published yet.

<img src="https://assets.postman.com/postman-docs/v10/protobuf-version-selector-v10-19.jpg" alt="Changing an API version in the request">

### Import a .proto file

If you don’t have the protobuf API available in your workspace, you can also import a `.proto` file as a protobuf API into Postman and use it as a service definition.

To import a `.proto` file, do the following:

1. Go to the **Service definition** tab and select **Import a .proto file**.

1. Select **Choose a File** to open the file explorer and select a `.proto` file.

    <img src="https://assets.postman.com/postman-docs/v10/import-proto-file-v10-19.jpg" alt="Importing a proto file">

1. (Optional) Postman supports importing multi-file schemas. You can import `.proto` files containing `import` directives referring to other files. Learn how to [add import paths](#add-import-paths).

1. Select **Next**.

1. Enter the name of the new API you'd like to create, and select **Import as API**. This will create a new protobuf API from the `.proto` file and use it in the request as a service definition.

    > You can also import the `.proto` file as an update to an existing API. Instead of creating a new protobuf API, you can select an API from the list of available APIs in the workspace, adding the `.proto` file as a new version. You can also replace it with an existing version by selecting an existing version from the list.

Instead of importing a `.proto` file from your local system, you can also get a `.proto` file from a URL by entering the URL.

<img src="https://assets.postman.com/postman-docs/v10/load-proto-file-from-url-v10-19.jpg" alt="Loading proto file from a URL">

#### Add import paths

gRPC schemas can be divided into multiple `.proto` files. These `.proto` files are referred through *import directives* in a schema. Import directives containing absolute paths (`/Users/johndoe/projects/my-app/protos/enums/NumericEnum.proto`) and relative paths (`../enums/NumericEnum.proto`) are automatically resolved by Postman and don't require any additional configuration. If the import directives don't contain absolute or relative paths, you must add their parent directories.

Consider this example file structure:

<img src="https://assets.postman.com/postman-labs-docs/grpc-docs/using-service-definition/import-path-file-structure.jpg" width="400px" alt="Example file structure">

In this example, `root.proto` contains import directives that refer to other `.proto` files in the `protos` folder. These import directives could look something like this in the schema:

```shell
import "enums/NumericEnum.proto"
import "messages/EmptyMessage.proto"
import "messages/HelloResponse.proto"
import "messages/HelloRequest.proto"

```

You'll need to configure the parent directory of `enums` and `messages` (the `protos` folder) as your import path in Postman. The added import path can look something like this: `/Users/johndoe/projects/my-app/protos/`. You can configure import paths in a request using the **Import paths option** after you select the file to import.

<img src="https://assets.postman.com/postman-docs/v10/adding-import-paths-v10-19-b.jpg" alt="Adding import paths">

### Create a new protobuf API

1. Go to the **Service definition** tab and select **Select a Protobuf schema or paste a link to one**.
1. Enter the name of the new API you'd like to create, and select **+ Create a new API:api-name**. This creates a protobuf 3 API, and the API opens in the Postman API Builder in a new tab.

    <img src="https://assets.postman.com/postman-docs/v10/create-new-protobuf-api-v10-19.jpg" alt="Creating a new API">

You can also create a new protobuf API from the API Builder. Select **APIs** in the sidebar and select **+**. [Add an API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#adding-an-example-api-definition), selecting **Protobuf 2** or **Protobuf 3** as the definition type.

## Next steps

Learn more about [creating and managing protobuf APIs using the API Builder](/docs/designing-and-developing-your-api/the-api-workflow/).
