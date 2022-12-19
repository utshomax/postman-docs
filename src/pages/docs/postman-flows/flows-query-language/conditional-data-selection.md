---
title: "Conditional data selection"
updated: 2022-11-16
---

You can use [Flows Query Language](/docs/postman-flows/flows-query-language/introduction-to-fql/) (FQL) to filter for specific data in your responses. Multiple responses return in an array. Single responses return as a single record. Sample data and FQL examples are below.

## Contents

* [Example JSON](#example-json)
* [Filter query results for objects with specific key-value pairs](#filter-query-results-for-objects-with-specific-key-value-pairs)
* [Navigate your filtered results](#navigate-your-filtered-results)
* [Return a single record](#return-a-single-record)
* [Check if a field has a specific value](#check-if-a-field-has-a-specific-value)

## Example JSON

The examples below use this JSON data:

``` json
    {
        "customer info": {
            "customer field": "Customer data",
            "unformated_customer_field": " customer \n stuff ",
            "total_value": "281.01",
            "associated_usernames": ["user1, myuser, online_user"]
        },
        "payments": [
            {
                "invoice_number": "101301",
                "date": "2022-09-11T16:12:34.494Z",
                "description": "recurring subscription",
                "amount": 110.48
            },
            {
                "invoice_number": "101302",
                "date": "2022-09-29T14:45:13.148Z",
                "description": "one time purchase",
                "amount": 24.49
            },
            {
                "invoice_number": "101303",
                "date": "2022-10-11T16:12:34.683Z",
                "description": "recurring subscription",
                "amount": 110.48
            },
            {
                "invoice_number": "101304",
                "date": "2022-10-12T11:45:22.182Z",
                "description": "recurring subscription deluxe",
                "amount": 35.56
            }
        ]
    }
```

## Filter query results for objects with specific key-value pairs

The example below filters for objects in the `payments` array that have the key-value pair `"description": "recurring subscription"`.

### FQL

``` javascript
payments[description='recurring subscription']
```

### Result

 ``` json
 [
    {
        "invoice_number": "101301",
        "date": "2022-09-11T16:12:34.494Z",
        "description": "recurring subscription",
        "amount": 110.48
    },
    {
        "invoice_number": "101303",
        "date": "2022-10-11T16:12:34.683Z",
        "description": "recurring subscription",
        "amount": 110.48
    }
]
```

## Navigate your filtered results

FQL uses the same syntax to navigate filtered query results as it does to navigate JSON data. The example below gets the values from the `invoice.number` fields in the `payments` array.

### FQL

 ``` javascript
 payments[description='recurring subscription'].invoice_number
 ```

### Result

 ```json
 ["101301","101303"]
 ```

## Return a single record

When a filter has a single result, it returns as a record instead of an array. The filter below returns a single result as a record.

### FQL

 ``` javascript
 payments[description='recurring subscription deluxe'].invoice_number
 ```

### Result

``` json
"101304"
```

## Check if a field has a specific value

FQL can check if your query results have a specific key-value pair and return `true` or `false`. The example below checks the first item in the `payments` array for the key-value pair `"description": "recurring"`.

### FQL

``` javascript
$contains(payments[0].description, 'recurring')
```

### Result

``` json
true
```
