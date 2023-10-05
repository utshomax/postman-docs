---
title: "Use imported data to simulate virtual users"
updated: 2023-09-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Load Testing Your APIs"
    url: "https://youtu.be/a5hWE4hMOoY"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Test your API’s performance by simulating real-world traffic with Postman"
    url: "https://blog.postman.com/postman-api-performance-testing/"
---

When you configure a [performance test](/docs/collections/performance-testing/testing-api-performance/), you specify a number of virtual users. During the test, each virtual user runs the selected requests in the specified order in a repeating loop.

By default, each virtual user runs the same requests using the same values. You can customize the behavior of virtual users by importing a CSV or JSON file. Each virtual user can send requests using different values from the imported data file. This enables you to better simulate real-world traffic when testing the performance of your API.

## Contents

* [Data file format](#data-file-format)
* [Run a performance test with a data file](#run-a-performance-test-with-a-data-file)
* [Debug errors when using data files](#debug-errors-when-using-data-files)

## Data file format

Format the CSV file so that the first row has the variable names you want to use inside the requests. After that, every row will be used as a data row. The line endings of the CSV file must be in Unix format. Each row must have the same number of columns.

<img alt="CSV format" src="https://assets.postman.com/postman-docs/v10/ramen-csv-screenshot.jpg" width="300px"/>

For CSV files, note the following:

* If the numbers in your data file are longer than 15 digits, you'll need to format them as text in your spreadsheet program, so they're not truncated when exporting to CSV format.

* If your CSV file has numbers longer than 15 digits, numbers with preceding zeroes (for example, `000000345`), or phone numbers (for example, `+12125556709`), you'll need to configure the file and specify the column type. Learn how in the next section.

Format JSON files as an array of key-value pairs. Each key is the name of a variable, and the value is the data to use within the request.

<img alt="JSON format" src="https://assets.postman.com/postman-docs/v10/ramen-json-screenshot.jpg" width="300px"/>

## Run a performance test with a data file

Add variables to your requests or scripts.
Select a Data file with custom values to use for each virtual user.
Data file isn't saved for past runs
For errors, you can view what line for data file was used

To run a performance test with a data file, do the following:

1. [Configure a performance test](/docs/collections/performance-testing/testing-api-performance/#configuring-a-performance-test), specifying the number of **Virtual users**, the **Test duration**, and a **Load profile**.

1. Select a **Data file** with custom values to use for each virtual user. After you select your data file, a preview of the data file displays.

    > The data file must be in CSV or JSON format. Learn more about [formatting a data file](#data-file-format).

1. Postman automatically detects the **Data file type**. If needed, you can select a different file type (**text/csv** or **application/json**).
1. Under **VU data mapping**, specify how rows in the data file are mapped to virtual users:

    * **Ordered** -
    * **Randomized** -

1. (Optional) Select a data type for each column. MORE
1. Select **Save** to save the file configuration. If needed, you can select **Configure File** to change any settings. You can also select a new data file or select the remove icon <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> to remove the data file.

    > Note about what happens if you have more or fewer VUs than rows in data file.

1. Select **Run** to run the performance test using the data file.

SCREENSHOT

## Debug errors when using data files
