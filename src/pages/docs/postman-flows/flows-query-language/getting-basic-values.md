---
title: "Getting basic values"
updated: 2022-11-17
---

FQL uses location path syntax to extract values from JSON structures. The following examples demonstrate several examples of getting basic values from JSON data.

## Contents

* [Example JSON](#example-json)
* [Get a top-level field](#get-a-top-level-field)
* [Get a nested field](#get-a-nested-field)
* [Get an entire object](#get-an-entire-object)
* [Select a specific index in an array](#select-a-specific-index-in-an-array)
* [Select an entire array](#select-an-entire-array)
* [Return one field of every object in an array](#return-one-field-of-every-object-in-an-array)
* [Return fields that contain special characters in the key name](#return-fields-that-contain-special-characters-in-the-key-name)

## Example JSON

The following examples use the following JSON data returned by an endpoint:

``` json
{
    "name": "John Smith",
    "address": {
        "street": "123 Park Avenue",
        "city": "Atlanta",
        "state": "GA",
        "zip": "12345"
    },
    "phones": [
        {
            "type": "Home",
            "number": "123-456-7890"
        },
        {
            "type": "Cell",
            "number": "098-765-4321"
        }
    ],
    "display name": "myuser123"
}
```

> To use this sample data in your flow, select the gear icon <img alt="Gear icon" src="https://assets.postman.com/postman-docs/icon-gear-solid-v9.jpg#icon" width="16px"> in the **Start** block and paste the data into the **Config** field.

## Get a top-level field

To access a top-level field with FQL, enter the field's name.

### FQL

``` javascript
name
```

<br/>

### Result

``` json
"John Smith"
```

## Get a nested field

To access fields below the top level, use field names separated by dot '.' delimiters.

### FQL

``` javascript
address.city
```

<br/>

### Result

``` json
"Atlanta"
```

## Get an entire object

Enter the name of an object in the JSON file to retrieve all the data within that object.

### FQL

``` javascript
address
```

<br/>

### Result

``` json
{
    "street": "123 Park Avenue",
    "city": "Atlanta",
    "state": "GA",
    "zip": "12345"
}
```

## Select a specific index in an array

### FQL

``` javascript
phones[0].number
```

<br/>

### Result

``` json
"123-456-7890"
```

## Select an entire array

### FQL

``` javascript
phones
```

<br/>

### Result

``` json
[
    {
        "type": "Home",
        "number": "123-456-7890"
    },
    {
        "type": "Cell",
        "number": "098-765-4321"
    }
]
```

## Return one field of every object in an array

### FQL

``` javascript
phones.number
```

<br/>

### Result

``` json
["123-456-7890","098-765-4321"]
```

## Return fields that contain special characters in the key name

### FQL

``` javascript
`display name`
```

<br/>

### Result

``` json
"myuser123"
```
