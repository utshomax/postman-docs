---
title: "Use Newman built-in reporters"
updated: 2023-09-29
---

Newman has built-in reporters you can use to generate collection run reports. You can generate reports in CLI, JSON, JUNIT, Progress, and Emoji train formats.

## Contents

* [Use built-in reporters](#use-built-in-reporters)
* [Configure built-in reporters](#configure-built-in-reporters)

## Use built-in reporters

To generate reports of the current collection run, you can configure reporters using the `-r` or `--reporters` options. Then specify the reporters you'd like to generate reports for: `cli`, `json`, `junit`, `progress`, and `emojitrain`. You can specify one or more reporters. If you specify more than one reporter, separate reporter names as a comma-separated list, for example, `-r cli,json`.

```bash
$ newman run PostmanCollection.json -r cli,json,progress
```

> If the built-in reporters don't align with your use case, you can [build a custom reporter](/docs/collections/using-newman-cli/newman-custom-reporters/).

The CLI reporter (`cli`) is turned on by default when using Newman as a CLI. If you turn on one or more reporters, for example `-r json,progress`, the CLI reporter will be turned off. To turn on the CLI reporter, you must specify the CLI reporter, for example, `-r cli,json,progress`.

### About built-in reporters

Each reporter generates a report about your collection run in a different format.

* **CLI** - Prints the report to the terminal.
* **JSON** - Creates a JSON file in the location you ran the collection form.
* **JUNIT** -
* **Progress**
* **Emoji train** - Prints emojis to the terminal that represent the report's details.

## Configure built-in reporters

If you specify more than one reporter, you can specify an option for one reporter using the `--reporter-[reporter-name]-[reporter-option]` option. The following example silences the CLI reporter only:

```bash
$ newman run PostmanCollection.json -r cli,json,progress --reporter-cli-silent
```

If you specify more than one reporter and all reporters should accept the same option, you can specify an option for all reporters using the `--reporter-[reporter-option]` option. The following example silences the CLI, JSON, and Progress reporters:

```bash
$ newman run PostmanCollection.json -r cli,json,progress --reporter-silent
```

### CLI reporter

The CLI reporter is a built-in reporter that is turned on by default when using Newman as a CLI. You can configure the CLI reporter using several different options. The following example prints the time that eac request was made:

```bash
$ newman run PostmanCollection.json -r cli,json --reporter-cli-show-timestamps
```

You can use the following options to configure the details the CLI reporter provides:

| Option | Details |
|:--|:--|
| `--reporter-cli-silent` | The CLI reporter is turned off, and you don't see an output in the terminal. |
| `--reporter-cli-show-timestamps` | Print the local time that each request was made. |
