---
title: "Using Spectral in Postman"
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Security and Governance Part 2: Customizing Governance with Spectral Rulesets"
    url: "https://youtu.be/TDOuZcKQId4"
---

Spectral is a linting engine that helps you define custom rules and enforce them on JSON and YAML files. Postman supports Spectral v6 rules for the configurable [API governance](/docs/api-governance/configurable-rules/configuring-api-governance-rules/#adding-custom-rules) and [API security](/docs/api-governance/configurable-rules/configuring-api-security-rules/#adding-custom-rules) rules for your team. Postman also supports CommonJS syntax for custom functions configurable in custom governance rules.

## Contents

* [How Spectral works](#how-spectral-works)
    * [Rulesets in Spectral documents](#rulesets-in-spectral-documents)
* [Spectral support in Postman](#spectral-support-in-postman)
* [Spectral rule properties](#spectral-rule-properties)
* [JSON Path and JSON Path Plus](#json-path-and-json-path-plus)
    * [Building and testing JSON Path Plus expressions](#building-and-testing-json-path-plus-expressions)
    * [JSON Path Plus examples](#json-path-plus-examples)
* [Example: Checking for the presence of a property](#example-checking-for-the-presence-of-a-property)
* [Spectral custom functions](#spectral-custom-functions)
    * [Spectral function parameters](#spectral-function-parameters)
    * [Spectral function return statement properties](#spectral-function-return-statement-properties)
    * [Spectral function object properties](#spectral-function-object-properties)
    * [Example: Checking that a value isn't in a list](#example-checking-that-a-value-isnt-in-a-list)
    * [Example: Rule that uses a custom function](#example-rule-that-uses-a-custom-function)

## How Spectral works

Spectral checks that the APIs defined in OpenAPI documents conform to API design guidelines using a specific set of rules. For example, with Spectral you can check that all properties of all data models are in camel case, or that all operations have a summary.

A Spectral rule targets a given location using a [JSON Path Plus expression](#json-path-and-json-path-plus), then tests the values it finds with a `function`. It returns an error if the values don't conform to the rule.

<!-- vale Postman.Spelling = NO -->

This example shows how to check that the name of an API doesn't contain the word "API," regardless of case (for instance, "api" or "Api").

<!-- vale Postman.Spelling = YES -->

```json
rules:
  api-name-doesnt-contain-api:
    given: $.info.title
    then:
      function: pattern
      functionOptions:
          notMatch: /\b(api)\b/i
```

<!-- vale Postman.Spelling = NO -->

First, the rule targets the `title` property of the `info` object located at the root (`$`) of the document with the [JSON Path Plus expression](#json-path-and-json-path-plus) `$.info.title`. In `then`, the `function` named `pattern` checks whether the value of the `title` property doesn't match (`functionOptions.notMatch`) the regular expression looking for the word "api" in any case (`/\b(api)\b/i`).

<!-- vale Postman.Spelling = YES -->

### Rulesets in Spectral documents

A Spectral document (often called a ruleset) has a `rules` property that can have one or more rules.

```json
rules:
api-name-doesnt-contain-api:
# ...
api-name-length:
# ...
```

Spectral identifies each rule with a key, which can be any JSON-compatible string.

## Spectral support in Postman

Postman supports many of Spectral's features, though not all.

Whether it's created within Postman or imported from another source, a Spectral document needs to contain the properties shown in this example:

```json
rules:
  api-name-doesnt-contain-api:
    description: The API name must not contain the word API
    message: The info.title value "{{value}}" contains the forbidden word API
    severity: error
    formats:
      - oas2
      - oas3
    given:
      - $.info
    then:
      - field: title
        function: pattern
        functionOptions:
          notMatch: /\b(api)\b/i
```

To be valid in Postman, your Spectral document can't contain any properties beyond those listed here. For the full list of rules and their descriptions, see [Spectral rule properties](#spectral-rule-properties).

You will find each rule defined in `rules` in the **Custom Rules** section in the configurable [API governance](/docs/api-governance/configurable-rules/configuring-api-governance-rules/) or [API security](/docs/api-governance/configurable-rules/configuring-api-security-rules/) pages.

> Remember to turn on your custom rules after you create or import them.

## Spectral rule properties

|<div style="width:110px">Property</div> | Description
--- | ---
`description` | An optional description of the rule. If you provide one, it will be shown in the configurable rules page for either API Governance or API Security.
`message` | If the rule is triggered, the list of rule violations will contain the `message`, used in Postman as the name of the rule. This message aims to help users solve the problem. Keep it as short and meaningful as possible. It can contain optional placeholders: <br><ul><li>`{{error}}` - The error message returned by `function`.</li><li>`{{description}}` - The description of the rule.</li><li>`{{path}}` - The path of the error (the last element is the `property` below).</li><li>`{{property}}` - The name of the property causing the error. This is useful when `given` returns many different property names or when `then` is a list that uses multiple `fields`).</li><li>`{{value}}` - The value causing the error.</li></ul><br> If `message` isn't provided, the `description` is used instead. And if `description` isn't available, the rule's key (in `rules`) is used.
`severity` | The severity of the problem detected by the rule. The possible values are `error`, `warn` (default), `info`, and `hint`. These values can be used as follows: <br><ul><li>`error` - An obvious error that must be fixed. </li><li>`warn` - A possible error. If it's an error, it must be fixed. Some deviation on specific rules may be tolerated, like a `POST` without a body.</li><li>`info` - Something that could possibly be improved. An optional pattern defined in the guidelines could be applied.</li><li>`hint` - Something to be discussed during an API design review.</li></ul>
`formats` | The list of document formats to which the rule will be applied. The accepted values are: <br><ul><li>`oas2` - Targets OpenAPI (Swagger) documents</li><li>`oas3` - Targets OpenAPI 3.x documents (3.0 and 3.1)</li><li>`oas3_0` - Targets OpenAPI 3.0 documents</li><li>`oas3_1` - Targets OpenAPI 3.1 documents</li></ul><br> By default, a rule will target all versions 2 and 3.x (the default value is `[oas2,oas3]`).
`given` | **Required**. This can be a list with at least one element or a single element. Each value is a [JSON Path Plus expression](#json-path-and-json-path-plus) that may return zero, one, or more elements.<br>If `given` paths don't find any value, the `then` controls won't execute.
`then` | **Required**. This can be a list with at least one element or a single element. If the given [JSON Path Plus expressions](#json-path-and-json-path-plus) return values, the functions will be applied to all of them.
`then.field` | This optional name can be used if the value returned by the `given` paths is an object to target a specific field inside it. This value must be a name and can't hold a [JSON Path Plus expression](#json-path-and-json-path-plus). <br>The keyword `@key` can be used to check all keys of an object returned by the `given` paths.
`then.function` | **Required**. The name of the function to use. You can use all Spectral core functions in Postman. [Custom functions](#spectral-custom-functions) are supported in custom API Governance rules. For more information, see the [Spectral documentation](https://github.com/stoplightio/spectral/blob/develop/docs/reference/functions.md).
`then.functionOptions` | **May be required depending on the function**. The options of the function. You can use all Spectral core functions in Postman. [Custom functions](#spectral-custom-functions) are supported in custom API Governance rules. For more information, see the [Spectral documentation](https://github.com/stoplightio/spectral/blob/develop/docs/reference/functions.md).

<!-- vale Microsoft.Headings = NO -->

## JSON Path and JSON Path Plus

<!-- vale Microsoft.Headings = YES -->

A JSON Path (or JSON Path Plus) expression aims to represent the path to some elements in a JSON or YAML document. For example, `$.info.title` represents the `title` property of the `info` object located at the document's root (`$`).

Initially, JSON Path was created to be [XPath for JSON](https://goessner.net/articles/JsonPath/) and aimed to represent the path to some element in an XML document. [JSON Path Plus](https://jsonpath-plus.github.io/JSONPath/docs/ts/) is an extension of JSON Path. It adds more operators and makes some behaviors of the original specification explicit.

<!-- vale Microsoft.Headings = NO -->

### Building and testing JSON Path Plus expressions

<!-- vale Microsoft.Headings = YES -->

You can use the official JSON Path Plus [documentation](https://jsonpath-plus.github.io/JSONPath/docs/ts/) to build and test your rules' given paths. [Syntax Through Examples](https://jsonpath-plus.github.io/JSONPath/docs/ts/#syntax-through-examples) and the [JSON Path Plus demo](https://jsonpath-plus.github.io/JSONPath/demo/) are both useful.

<!-- vale Microsoft.Headings = NO -->

### JSON Path Plus examples

<!-- vale Microsoft.Headings = YES -->

These examples show the typical JSON Path Plus features you'll need to create rules in Postman:

* `$.info.title` - The `title` property inside the `info` object, which is located at the document's root (`$`).
* `$.paths.*.*.responses` - All responses of all operations of all `paths`. `*` gets all elements inside an object or an array.
* `$.paths.*[post,patch,put]` - All `POST`, `PATCH`, and `PUT` operations across all `paths`. `[ ]` can be used to filter elements.
* `$..properties` - All `properties` of all schema objects wherever they're located (for example, in parameters, responses, or reusable components). `..` gets all elements in the path tree.

## Example: Checking for the presence of a property

The following rule is supposed to check that there's a description of the API. The way it's written, though, it will never return a rule violation when the `description` isn't present in the `info` object.

```json
# this approach won't work!

rules:
  info-description:
    given: $.info.description
    then:
      function: truthy
```

If the `given` path doesn't find any value, the `then` checks won't be executed. This means you can't use the path `$.info.description` to check that the API description is defined in the OpenAPI document. This verification must be done using the path `$.info`, which will return the `info` object and the `field`  value set with the name of the field you're looking for (in this example, `description`).

```json
# this approach will work

rules:
  info-description:
    given: $.info
    then:
      field: description
      function: truthy
```

## Spectral custom functions

You can [add custom governance functions](/docs/api-governance/configurable-rules/configuring-custom-governance-functions/) to use in your custom governance rules. You can use these guidelines to write custom functions in JavaScript and add them to your custom governance rules. Postman supports CommonJS syntax for custom functions.

To write a custom function, your function must have the [`input` parameter](#spectral-function-parameters), the [`message` property](#spectral-function-return-statement-properties) in your return statement, and the [`module.exports` object property](#spectral-function-object-properties) exporting your function. To use a custom function in a rule, your rule must have the `then.function` property importing your function.

### Spectral function parameters

Use the following parameters in your custom functions depending on your use case.

|<div style="width:150px">Parameter</div> | Description
--- | ---
`input` | **Required**. This can be any data type, such as a string or array. This is the value that the `given` [JSON Path Plus expression](#json-path-and-json-path-plus) returns. The rule tests the value of `input` using the function.
`options` | The optional values of `then.functionOptions`. Add this parameter to your function if your function expects options.
`context` | This optional parameter is used in advanced use cases where you need to investigate several elements. You can use the parameter to access properties about the function. These properties are as follows: <br><ul><li>`path` - The `given` [JSON Path Plus expression](#json-path-and-json-path-plus) pointing to `input`. </li><li>`document` - The document you're attempting to lint.</li><li>`rule` - The rule that's using the function.</li><li>`documentInventory` - Provides access to resolved and unresolved documents, the $ref resolution graph, and other advanced properties.</li></ul>

```js
function myCustomFunction(input, options, context) { ... }
```

### Spectral function return statement properties

Use the following properties to write the return statement in your custom functions depending on your use case.

|<div style="width:150px">Property</div> | Description
--- | ---
`message` | **Required**. The message describing the rule violation.
`path` | An optional [JSON Path Plus expression](#json-path-and-json-path-plus) that you can append to the default value of `context.path`, which points to the value of `input`. The `path` property is often used to investigate sub-elements of the value of `input` or other locations in the document. If you use the `path` property, you must also use the [`context` parameter](#spectral-function-parameters) in your function. <br> Use the following syntax to add the `path` property to your function and append a custom path: `path: [...context.path, "a", "custom", "path"]`.

```js
return [
  // Rule violation with the default input path
  {
    message: `Value must be different from "${values.join(',')}".`,
  },
  // Rule violation with a custom path leveraging the default input path
  {
    message: `Value must be different from "${values.join(',')}".`,
    path: [...context.path, "a", "custom", "path"]
  },
];
```

### Spectral function object properties

Add the following object property to your function's file.

|<div style="width:150px">Object property</div> | Description
--- | ---
`module.exports` | **Required**. The object property that exports the function, allowing the rule to import it using `then.function`. The value of `module.exports` and the function's name must be the same.

```js
function myCustomFunction(input, options, context) { ... }

module.exports = myCustomFunction;
```

### Example: Checking that a value isn't in a list

The following function named `notInEnumeration` is in a file named `not_in_enumeration`. The filename is defined using the **Name** field when you [create a custom function](/docs/api-governance/configurable-rules/configuring-custom-governance-functions/#adding-a-custom-function).

The function checks the value of the option `values`, which is defined in the [Spectral document](#example-rule-that-uses-a-custom-function) (or ruleset) using `then.functionOptions`. The value of `values` is a list of numeric strings. If the `input` path returns a value already in the list, the rule violation is triggered.

After the function, `module.exports` references the function's name. This exports the function so the rule can import it using `then.function`.

```js
// filename: not_in_enumeration
function notInEnumeration(input, options, context) {
  const { values } = options;
  if (values.includes(input)) {
    return [
      {
        message: `Value must be different from "${values.join(',')}".`,
      },
    ];
  }
}

module.exports = notInEnumeration;
```

### Example: Rule that uses a custom function

The following Spectral document has a rule named `http-status-obsolete` that uses a function named `notInEnumeration`. The function is in a file named `not_in_enumeration`, which is defined using the **Name** field when you [create a custom function](/docs/api-governance/configurable-rules/configuring-custom-governance-functions/#adding-a-custom-function).

The [function](#example-checking-that-a-value-isnt-in-a-list) is imported into the rule using `then.function`. The value of `then.function` is the filename `not_in_enumeration`.

The function accepts options using `then.functionOptions` as a property named `values` that's a list of numeric strings. The value of `then.functionOptions.values` is passed to the function `notInEnumeration`. The function then checks whether a rule violation occurred at the `given` path.

```yaml
rules:
  http-status-obsolete:
    formats: [oas2, oas3]
    severity: warn
    message: "{{property}} is an obsoleted or unused HTTP status code"
    given: $.paths.*.*.responses
    then:
      field: "@key"
      function: not_in_enumeration
      functionOptions:
        values: ["306","418","510"]
```
