---
title: "Data manipulation"
updated: 2023-01-12
---

You can use the [Flows Query Language](/docs/postman-flows/flows-query-language/introduction-to-fql/) (FQL) to perform math functions, manipulate strings and arrays, and interact with the data in your responses in several ways. Sample data and FQL examples are below.

## Contents

* [Example JSON](#example-json)

### Working with strings

* [Insert strings then group and sum results by description](#insert-strings-then-group-and-sum-results-by-description)
* [Return the length of a string](#return-the-length-of-a-string)
* [Return part of a string](#return-part-of-a-string)
* [Convert a string into a number](#convert-a-string-into-a-number)
* [Get the string before the first occurrence of a pattern](#get-the-string-before-the-first-occurrence-of-a-pattern)
* [Get the string after the first occurrence of a pattern](#get-the-string-after-the-first-occurrence-of-a-pattern)
* [Transform a string to all uppercase](#transform-a-string-to-all-uppercase)
* [Transform a string to all lowercase](#transform-a-string-to-all-lowercase)
* [Trim a string](#trim-a-string)
* [Pad a string](#pad-a-string)
* [Split a string into an array of components](#split-a-string-into-an-array-of-components)
* [Join an array of strings into a single string](#join-an-array-of-strings-into-a-single-string)
* [Replace one string with another string](#replace-one-string-with-another-string)
* [Base64 encode a string](#base64-encode-a-string)
* [Base64 decode a string](#base64-decode-a-string)
* [Convert a string into JSON](#convert-a-string-into-json)

### Working with numbers

* [Sum numerical values](#sum-numerical-values)
* [Get the absolute difference between two numbers](#get-the-absolute-difference-between-two-numbers)
* [Round up a number](#round-up-a-number)
* [Round down a number](#round-down-a-number)
* [Raise a number to a power](#raise-a-number-to-a-power)
* [Get the square root of a number](#get-the-square-root-of-a-number)
* [Convert a number to hex or binary](#convert-a-number-to-hex-or-binary)
* [Format a number with decimals and dollar sign](#format-a-number-with-decimals-and-dollar-sign)
* [Convert a number into words](#convert-a-number-into-words)
* [Convert words into a number](#convert-words-into-a-number)
* [Generate a new random invoice number](#generate-a-new-random-invoice-number)
* [Convert a number into a string](#convert-a-number-into-a-string)

### Working with URLs

* [Encode a URL component](#encode-a-url-component)
* [Decode a URL component](#decode-a-url-component)
* [Encode an entire URL](#encode-an-entire-url)
* [Decode an entire URL](#decode-an-entire-url)

### Working with date and time

* [Get the current time in ISO 8601 format](#get-the-current-time-in-iso-8601-format)
* [Get the current time in Unix milliseconds since the epoch](#get-the-current-time-in-unix-milliseconds-since-the-epoch)
* [Convert from a specific date format into Unix epoch time](#convert-from-a-specific-date-format-into-unix-epoch-time)
* [Convert from Unix epoch time into a specific date format](#convert-from-unix-epoch-time-into-a-specific-date-format)
* [Time and Date formatting](#time-and-date-formatting)

### Working with logic and arrays

* [Append to an array](#append-to-an-array)
* [If-then-else](#if-then-else)

## Example JSON

The examples below use the following JSON data:

``` json
    {
        "customer_info": {
            "customer field": "Customer data",
            "unformatted_customer_field": " customer \n stuff ",
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

## Insert strings then group and sum results by description

The example below gets every `description` value in the `payments` array and appends the string `annual cost`. It then gets the `amount` value below each `description` field, multiplies it by 12, and appends it to its corresponding result. The results are grouped by `description` field.

### FQL

``` javascript
payments.{description & ' annual cost' : amount*12}
```

### Result

``` json
[
    {"recurring subscription annual cost": 1325.76},
    {"one time purchase annual cost": 293.88},
    {"recurring subscription annual cost": 1325.76},
    {"recurring subscription deluxe annual cost": 426.72}
]
```

## Return the length of a string

The `$length()` function returns the length of the specified string. The example below returns the length of the string in the first `description` key-value pair in the `payments` array.

### FQL

``` javascript
$length(payments[0].description)
```

### Result

``` json
22
```

## Return part of a string

The `$substring()` function returns part of a specified string. In the example below, The `3` is optional and specifies the offset, and the `6` is the number of characters you are selecting. Negative numbers can also be used for the offset.

### FQL

``` javascript
$substring(payments[0].description, 3, 6)
```

### Result

``` json
"urring"
```

## Get the string before the first occurrence of a pattern

In the example below, the `$substringBefore()` function returns the substring before the specified occurrence of `subscription` . If it doesn't find `subscription`, it returns the entire string.

### FQL

``` javascript
$substringBefore(payments[0].description, 'subscription')
```

### Result

``` json
"recurring "
```

## Get the string after the first occurrence of a pattern

The `$substringAfter()` function finds a pattern and returns the string immediately following the pattern. The example below returns the string that follows `recurring` in the `description` key-value pair in the first object of the `payments` array.

### FQL

``` javascript
$substringAfter(payments[0].description, 'recurring')
```

### Result

``` json
" subscription"
```

## Transform a string to all uppercase

The `$uppercase()` function makes all the characters in a string uppercase.

### FQL

``` javascript
$uppercase(payments[0].description)
```

### Result

``` json
"RECURRING SUBSCRIPTION"
```

## Transform a string to all lowercase

The `$lowercase()` function makes all the characters in a string lowercase.

### FQL

``` javascript
$lowercase(customer_info.'customer field')
```

### Result

``` json
"customer data"
```

## Trim a string

The `$trim()` function removes excess leading and trailing spaces, converts newline, carriage return, line feed, and tab characters into a single space character, and reduces consecutive spaces into a single space character.

### FQL

``` javascript
$trim(customer_info.unformatted_customer_field)
```

### Result

``` json
"customer stuff"
```

## Pad a string

The `pad()` function adds spaces or characters to a string. If the second parameter is a positive number it pads the string with the third parameter. If the second parameter is negative it pads the front of the string with the character(s) optionally specified. (Third parameter characters will default to space if left blank.)

### FQL

``` javascript
$pad(customer_info.'customer field', 15, '#')
```

### Result

``` json
"Customer data##"
```

## Split a string into an array of components

The `$split()` function returns the string split on the separator specified in the second parameter and optionally limited by the third parameter. You can also use a regex instead of a string.

### FQL

``` javascript
$split(payments[1].description, " ", 2)
```

### Result

``` json
["one","time"]
```

## Join an array of strings into a single string

The `$join()` function creates a single string from an array of strings. The example below gets the array from the `associated_usernames` key and returns the array's values as a single string.

### FQL

``` javascript
$join(customer_info.associated_usernames)
```

### Result

``` json
"user1, myuser, online_user"
```

## Replace one string with another string

In the example below, the `$replace()` function finds the instances of `recurring` in the first parameter string and replaces them with `renewing`, limited to the first instance found (optionally specified with the `1`). You could also use a regex instead of `recurring`.

### FQL

``` javascript
$replace(payments[0].description,"recurring", "renewing", 1)
```

### Result

``` json
"renewing subscription"
```

## Base64 encode a string

The `$base64encode()` function converts a string to base64 encoding. The example below converts the string `'some data here'` into `"c29tZSBkYXRhIGhlcmU="`.

### FQL

``` javascript
$base64encode('some data here')
```

### Result

``` json
"c29tZSBkYXRhIGhlcmU="
```

## Base64 decode a string

The `$base64decode` function converts a base64-encoded string into a human-readable string. The example below converts `"c29tZSBkYXRhIGhlcmU="` into `"some data here"`.

### FQL

``` javascript
$base64decode("c29tZSBkYXRhIGhlcmU=")
```

### Result

``` json
"some data here"
```

## Convert a string into JSON

The `$jsonParse()` function enables the string to be formatted into JSON so it can be queried with FQL. The example below assumes you have the string `{"Feedback Type":"Bug Report"}` stored as a variable named `input`.

### FQL

``` javascript
$jsonParse(input)
```

### Result

``` json
{"Feedback Type":"Bug Report"}
```

## Convert a string into a number

You can convert a string into a number with the `$number()` function. The example below converts the string `"281.01"` in the `customer_info` object into the number `281.01`.

### FQL

``` javascript
$number(customer_info.total_value)
```

### Result

``` json
281.01
```

## Sum numerical values

The `$sum()` function gets values from every instance of a key-value pair in an object or array, adds the values together, and returns the result. The example below gets every `amount` field's value in the `payments` array and returns their sum.

### FQL

``` javascript
$sum(payments.amount)
```

### Result

``` json
"$281.01"
```

## Get the absolute difference between two numbers

The `$abs()` function returns the absolute difference between two numbers. Absolute difference is the distance between two values on a number line. Absolute difference is always positive.

### FQL

``` javascript
$abs(4.56 - 6.78)
```

### Result

``` json
2.22
```

## Round up a number

The `$ceil()` function rounds a number up to the next whole number.

### FQL

``` javascript
$ceil(3.45)
```

### Result

``` json
4
```

## Round down a number

The `floor()` function rounds a number down to the previous whole number.

### FQL

``` javascript
$floor(3.99)
```

### Result

``` json
3
```

## Raise a number to a power

The `$power()` function raises the first number to the power of the second number. The example below raises 2 (the base) to the power of 3 (the exponent).

### FQL

``` javascript
$power(2,3)
```

### Result

``` json
8
```

## Get the square root of a number

The `$sqrt()` function returns the square root of a number.

### FQL

``` javascript
$sqrt(9)
```

### Result

``` json
3
```

## Convert a number to hex or binary

The `formatBase()` function converts a number to hex or binary. The example below converts `3000` to hex. Using base 2 instead of 16 would convert `3000` to binary.

### FQL

``` javascript
$formatBase(3000, 16)
```

### Result

``` json
"bb8"
```

## Format a number with decimals and dollar sign

The `$formatNumber()` function formats the given number with a dollar sign and two decimal places.

### FQL

``` javascript
$formatNumber(4593, '$#,###.00')
```

### Result

``` json
"$4,593.00"
```

## Convert a number into words

The `$formatInteger` function converts numbers into their written-out forms or roman numerals. The example below converts the number `493840` into the string "four hundred and ninety-three thousand, eight hundred and forty". Using `I` instead of `w` in the example below would return roman numerals instead of words.

### FQL

``` javascript
$formatInteger(493840, 'w')
```

### Result

``` json
"four hundred and ninety-three thousand, eight hundred and forty"
```

## Convert words into a number

The `$parseInteger` function converts written-out numbers or roman numerals into numeric values. The example below converts the string "four hundred and ninety-three thousand, eight hundred and forty" into the number `493840`. Using `I` instead of `w` in the example below would convert roman numerals instead of words.

### FQL

``` javascript
$parseInteger("four hundred and ninety-three thousand, eight hundred and forty", 'w')
```

### Result

``` json
493840
```

## Generate a new random invoice number

The `$round($random()) function generates a random whole number. The example below generates a random whole number between 1 and 1000 and returns the number appended to the string "Invoice number ".

### FQL

``` javascript
'Invoice number ' & $round($random()*1000)
```

### Result

``` json
"Invoice number 891"
```

## Convert a number into a string

You can convert a number into a string with the `$string()` function. The example below gets the number value from the `amount` key in the first object in the `payments` array and converts it into the string `"110.48"`.

### FQL

``` javascript
$string(payments[0].amount)
```

### Result

``` json
"110.48"
```

## Encode a URL component

The `$encodeUrlComponent()` function replaces certain characters in a URL component with their UTF-8 encoded versions. The example below replaces `?` with `%3F`, and `=` with `%3D`.

### FQL

``` javascript
$encodeUrlComponent("?city=melbourne")
```

### Result

``` json
"%3Fcity%3Dmelbourne
```

## Decode a URL component

The `$decodeUrlComponent()` function replaces UTF-8 encoded characters in a URL component with their original versions. The example below replaces `%3F` with `?`, and `$3D` with `=`.

### FQL

``` javascript
$decodeUrlComponent("%3Fcity%3Dmelbourne")
```

### Result

``` json
"?city=melbourne"
```

## Encode an entire URL

The `$encodeUrl()` function replaces certain characters in a URL with UTF-8 encoded characters. The example below replaces `こんにちは` with `%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF`

### FQL

``` javascript
$encodeUrl('https://faketranslatewebsite.com/?phrase=こんにちは')
```

### Result

``` json
"https://faketranslatewebsite.com/?phrase=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF"
```

## Decode an entire URL

The `$decodeUrl()` function replaces UTF-8 encoded characters in a URL with their original versions. The example below replaces `%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF` with `こんにちは`.

### FQL

``` javascript
$decodeUrl("https://faketranslatewebsite.com/?phrase=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF")
```

### Result

``` json
"https://faketranslatewebsite.com/?phrase=こんにちは"
```

## Get the current time in ISO 8601 format

The `$now()` function returns the current time in ISO 8601 format.

### FQL

``` javascript
$now()
```

### Result

``` json
"2022-11-04T22:36:57.094Z"
```

## Get the current time in Unix milliseconds since the epoch

The `millis()` function returns the current time in Unix milliseconds since the epoch.

### FQL

``` javascript
$millis()
```

### Result

``` json
1667601477254
```

## Convert from a specific date format into Unix epoch time

The `$toMillis` function converts a given date format into Unix epoch time. See the formatting section below for details on date formatting.

### FQL

``` javascript
$toMillis('10/12/2018 11:39 PM', '[M]/[D]/[Y] [h]:[m] [P]')
```

### Result

``` json
1539387540000
```

## Convert from Unix epoch time into a specific date format

The `$fromMillis()` function converts Unix epoch time into a different date format. See the formatting section below for details on date formatting.

### FQL

``` javascript
$fromMillis(1539387540000, '[Y]-[M]-[D] [H]:[m]:[s] [z]')
```

### Result

``` json
"2018-10-12 23:39:00 GMT+00:00"
```

## Time and date formatting

| Character  | Meaning |
| ------------- | ------------- |
| Y	| year |
| M	| month as a numerical value |
| D	| day in month |
| d	| day in year |
| F	| day of week |
| W	| week in year |
| w	| week in month	|
| H	| hour (24 hours) |
| h	| hour (12 hours) |
| P	| am/pm marker |
| m	| minute |
| s	| second |
| f	| fractional seconds |
| Z	| timezone |
| z	| timezone but modified where to include a prefix as a time offset using GMT |
| C	| calendar: the name or abbreviation of a calendar name |
| E	| era: the name of a baseline for the numbering of years, for example the reign of a monarch |

## Append to an array

The `$append()` function can combine two arrays, an array and a single value, or two strings into an array.

### FQL

``` javascript
$append([1,2,3], [4,5,6])
```

### Result

``` json
[1,2,3,4,5,6]
```

## If-then-else

The `$boolean` value is a true/false test. The second value is the output for true and the final value is the output for false. The example below tests if the `total_value` field's value is greater than 250. Since the value is greater than 250, the function returns "high-value customer".

### FQL

``` javascript
$boolean(`customer info`.total_value > 250) ? 'high-value customer' : 'not a high-value customer'
```

### Result

``` json
"high-value customer"
```
