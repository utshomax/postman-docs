---
title: "Function Reference"
updated: 2023-02-14
---

All [Flows Query Language](/docs/postman-flows/flows-query-language/introduction-to-fql/) (FQL) functions are documented below.

## Contents

* [abs](#abs)
* [append](#append)
* [assert](#assert)
* [average](#average)
* [boolean](#boolean)
* [ceil](#ceil)
* [contains](#contains)
* [count](#count)
* [decodeUrl](#decodeUrl)
* [decodeUrlComponent](#decodeUrlComponent)
* [distinct](#distinct)
* [each](#each)
* [encodeUrl](#encodeUrl)
* [encodeUrlComponent](#encodeUrlComponent)
* [eval](#eval)
* [exists](#exists)
* [filter](#filter)
* [floor](#floor)
* [formatBase](#formatBase)
* [formatInteger](#formatInteger)
* [formatNumber](#formatNumber)
* [fromMillis](#fromMillis)
* [join](#join)
* [json](#json)
* [jsonParse](#jsonParse)
* [keys](#keys)
* [length](#length)
* [lookup](#lookup)
* [lowercase](#lowercase)
* [map](#map)
* [max](#max)
* [match](#match)
* [merge](#merge)
* [number](#number)
* [not](#not)
* [pad](#pad)
* [parseInteger](#parseInteger)
* [partition](#partition)
* [power](#power)
* [replace](#replace)
* [reduce](#reduce)
* [reverse](#reverse)
* [round](#round)
* [shuffle](#shuffle)
* [sort](#sort)
* [split](#split)
* [spread](#spread)
* [sqrt](#sqrt)
* [string](#string)
* [substring](#substring)
* [substringAfter](#substringAfter)
* [substringBefore](#substringBefore)
* [sum](#sum)
* [tomillis](#tomillis)
* [trim](#trim)
* [type](#type)
* [uppercase](#uppercase)
* [uuid](#uuid)
* [zip](#zip)

### Date and time

* [year](#year)
* [month](#month)
* [dayOfTheWeek](#dayOfTheWeek)
* [day](#day)
* [hours](#hours)
* [minutes](#minutes)
* [seconds](#seconds)
* [milliSeconds](#milliSeconds)
* [dateEquals](#dateEquals)
* [hasSameDate](#hasSameDate)
* [beforeDate](#beforeDate)
* [afterDate](#afterDate)
* [datePlus](#datePlus)
* [diffDate](#diffDate)

## abs

``` javascript
$abs(n:number) : number
```

### Basic usage

``` javascript
$abs(-1) ->  1
```

## append

``` javascript
$append($arr: array, $val: any) => array //returns a new array with $val appended (added) to $arr
```

### Basic usage

``` javascript
$append([1,2,3], [5,6]) -> [1,2,3,4,5,6]
$append([1,2,3], 5) -> [1,2,3,5]
```

## assert

``` javascript
$assert($cond: bool, $msg: string) => error //throws an error with the message $msg if $cond is false
```

### Basic usage

``` javascript
$assert(user.age <18, “error:  user cannot vote!”)
```

## average

``` javascript
$average($array: array<num>) => number //returns the average value of a numeric array
```

### Basic usage

``` javascript
$average([1,2,3,4,5]) -> 3
```

## boolean

``` javascript
$boolean($arg: any) => bool //casts $arg to its effective boolean value
```

### Basic usage

``` javascript
$boolean(0) ->  false
$boolean(10) ->  true
$boolean('') ->  false
$boolean('abc') ->  true
```

## ceil

``` javascript
$ceil($num: number) => number //returns the smallest integer greater than or equal to $num
```

### Basic usage

``` javascript
$ceil(3.4) -> 4
```

## contains

``` javascript
$contains($str: string, $pattern: string | regex) => bool //returns true if $str contains $pattern
```

### Basic usage

``` javascript
$contains("hello, world", "lo") -> true
$contains("hello world", "ab") -> false
```

## count

``` javascript
$count($array) => number //returns the number of elements in an array
```

### Basic usage

``` javascript
$count([1,2,3,4,5]) -> 5
$count([]) -> 0
```

## decodeUrl

``` javascript
$decodeUrl($val: string) => string //decodes string from a URL($val)
```

### Basic usage

``` javascript
$decodeUrl("https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B") -> "https://mozilla.org/?x=шеллы"
```

## decodeUrlComponent

``` javascript
$decodeUrlComponent($val: string) => string //decodes string from a component for URL($val)
```

### Basic usage

``` javascript
$decodeUrlComponent("%3Fx%3Dtest") -> "?x=test"
```

## distinct

``` javascript
$distinct($arr: array) => array //returns a new array with the distinct elements of $arr with duplicates eliminated
```

### Basic usage

``` javascript
$distinct([“a”, “b”, “b”, “c”]) -> [“a”, “b”, “c”]
```

## each

``` javascript
$each($obj: object, func: ($val, $key) : any) //Applies func to each key,value pair of the $obj
```

### Basic usage

``` javascript
"Address": {
    "Street": "Hursley Park",
    "City": "Winchester",
    "Postcode": "SO21 2JN"
}
$each(Address, fn($v, $k) {$k & ": " & $v}) ->
 [
        "Street: Hursley Park",
        "City: Winchester",
        "Postcode: SO21 2JN"
 ]
```

## encodeUrl

``` javascript
$encodeUrl($val: string) => string //encodes  $val into a URL
```

### Basic usage

``` javascript
$encodeUrl("https://mozilla.org/?x=шеллы") -> "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
```

## encodeUrlComponent

``` javascript
$encodeUrlComponent($val: string) => string //encodes  $val into a component for URL
```

### Basic usage

``` javascript
$encodeUrlComponent("?x=test")  -> "%3Fx%3Dtest"
```

## eval

``` javascript
$eval($val:string) => any //evaluates the expression $val. Advanced feature
```

### Basic usage

``` javascript
$eval('[1,$string(2),3]') -> [1,"2",3]
```

## exists

``` javascript
$exists($val: any) => bool //returns true if $val is not null or undefined
```

### Basic usage

``` javascript
$exists(“hello”) -> true
$exists([1,2,3]) -> true
$exists({“a” : 1, “b”: 2}) -> true
$exists(null) -> false
$exists(blah) -> false
```

## filter

``` javascript
$filter($arr: array, $func: ($e, $index?: number?, $ar: array )=> boolean) => array //Returns an array of elements which  satisfyy the predicate defined in $func
```

### Basic usage

``` javascript
$filter([1,2,3,4,5], fn($e){ $e>3}) -> [4, 5]
```

## floor

``` javascript
$floor($num: number) => number //returns the largest integer less than or equal to $num
```

### Basic usage

``` javascript
$floor(3.4) -> 3
```

## formatBase

``` javascript
$formatBase($num: number, $base?: number) => string //converts $num to a string in the optional $base number system, if $base is not supplied, base 10 is used to create the string
```

### Basic usage

``` javascript
$formatBase(100, 2) -> "1100100"
```

## formatInteger

``` javascript
$formatInteger($num: number, $format: string) => string //formats $num using the $format string. The picture is in fn:format-integer as defined in the XPath F&O 3.1 specification
```

### Basic usage

``` javascript
$formatInteger(2789, 'w') -> "two thousand, seven hundred and eighty-nine"
$formatInteger(1999, 'I') -> "MCMXCIX"
```

## formatNumber

``` javascript
$formatNumber($num: number, $picture?: string) => string //formats $num using the optional $picture string. The $picture uses decimal format section of the XPath F&O 3.1 specification
```

### Basic usage

``` javascript
$formatNumber(12345.6, '#,###.00') -> "12,345.60"
$formatNumber(1234.5678, "00.000e0") -> "12.346e2"
$formatNumber(34.555, "#0.00;(#0.00)") -> "34.56"
$formatNumber(-34.555, "#0.00;(#0.00)") -> "(34.56)"
```

## fromMillis

``` javascript
$fromMillis($val:number, $picture?: string) => string //converts a number of milliseconds since the epoch to a string. $picture is optional, if not provided it will default to ISO format. Picture specs are as per Unicode date format standards
```

### Basic usage

``` javascript
$fromMillis(1521801216617, 'dd/M/yyyy') -> "23/3/2018"
$fromMillis(1522616700000, 'E EEEE') -> "7 Sunday"
```

## join

``` javascript
$join($arr: array<string>, $separator?: string) => string //joins the elements of $arr into a string using the optional $separator string
```

### Basic usage

``` javascript
$join(["hello", "world"]) -> "helloworld"
$join(["hello", "world"], "-") → "hello-world"
$join([1,2,3], "..") -> "1..2..3"
```

## json

``` javascript
$json($val:any) => string //converts an object to a JSON string
```

### Basic usage

``` javascript
json({'a': 1, 'b' : "hello"}) ->  "{"a":1,"b":"hello"}"
```

## jsonParse

``` javascript
$jsonParse($val:string) => object //parses a JSON string into an object
```

### Basic usage

``` javascript
$jsonParse('{"one": 1, "two": [3, "four"]}') -> {"one": 1,"two": [ 3,"four"]}
```

## keys

``` javascript
$keys($obj: object) => array<string> //returns an array of the keys in $obj
```

### Basic usage

``` javascript
"Product": [
    {
        "Product Name": "Bowler Hat",
        "ProductID": 858383,
        "SKU": "0406654608",
        "Description": {
            "Colour": "Purple",
            "Width": 300,
            "Height": 200,
            "Depth": 210,
            "Weight": 0.75
        },
        "Price": 34.45,
        "Quantity": 2
    }
]
$keys(Product) -> ["Product Name","ProductID","SKU","Description","Price","Quantity"]
```

## length

``` javascript
$length($str: string) => number //returns the length of the string, $str
```

### Basic usage

``` javascript
$length(“abc”) -> 3
$length(““) -> 0
```

## lookup

``` javascript
$lookup($obj: object, $key: string) => any //returns the value of $key in $obj
```

### Basic usage

``` javascript
($o := { "name" : "John", "email": "john@gmail.com"}; $lookup($o, "name")) -> "John"
```

## lowercase

``` javascript
$lowercase($str: string) => string //returns the lowercase version of $str
```

### Basic usage

``` javascript
$loweCase("Hello World") -> "hello world"
```

## map

``` javascript
$map($arr: array, $func: ($e, $index?: number?, $ar: array ) : array //Maps each element of an array using the $func and returns a new array with all the mapped  elements
```

### Basic usage

``` javascript
$map([1,2,3,4,5], fn($e){ $e *2}) -> [2,4,6,8,10]
```

## max

``` javascript
$max($array) => number //returns the maximum value from a numeric array
```

### Basic usage

``` javascript
$max([9,2,17,3]) -> 17
```

## match

``` javascript
$match($str: string, $pattern: string | regex) => array<string> //returns an array of strings that match $pattern
```

### Basic usage

``` javascript
$match("ababbabbbcc",/a(b+)/) -> ["ab", "abb", "abbb"]
```

## merge

``` javascript
$merge($arr: array<object>) => object //returns a new object with the properties of each object in $arr (an array of objects) merged into it
```

### Basic usage

``` javascript
$merge([{"a":1},{"b":2}]) -> {"a": 1,"b": 2}
```

## number

``` javascript
$number($x: string | number | bool) => number //converts $x to a number
```

### Basic usage

``` javascript
$number(“-0.05”) -> -0.05
$number(false) -> 0
$number(true) -> 1
```

## not

``` javascript
$not($x: any) => bool //returns true if $x is falsey, false otherwise
```

### Basic usage

``` javascript
$not(true) -> false
$not(false) -> true
$not(null) -> true
$not(0) -> true
$not(100) -> false
$not(““) -> true
$not(“hello”) -> false
```

## pad

``` javascript
$pad($str: string, $length: number, $pad?: string) => string //returns a copy of $str padded to $length with $pad (if provided)
```

### Basic usage

``` javascript
$pad("foo", 5) -> "foo  "
$pad("foo", 5, "-") -> "foo--"
```

## parseInteger

``` javascript
$parseInteger($str: string, $picture: string) => number //parses $str using the $picture string. The picture is in fn:format-integer as defined in the XPath F&O 3.1 specification
```

### Basic usage

``` javascript
$parseInteger("twelve thousand, four hundred and seventy-six", 'w') -> 12476
$parseInteger('12,345,678', '#,##0') -> 12345678
```

## partition

``` javascript
$partition($array:any, $n: numbers) => array //partitions $array into an array of arrays of size $n
```

### Basic usage

``` javascript
$partition([1,2,3,4,5,6,7,8,9,10], 2) -> [[1,2], [3,4], [5,6], [7,8], [9,10]]
$partition([1,2,3,4,5,6,7,8,9,10], 3) -> [[1,2,3], [4,5,6], [7,8,9], [10]]
```

## power

``` javascript
$power($num: number, $exp: number) => number //returns $num raised to the $exp power
```

### Basic usage

``` javascript
$power(2, 3) -> 8
$power(3,4) -> 81
```

## replace

``` javascript
$replace($str: string, $pattern: string | regex, $replacement: string) => string //returns a string with all occurrences of $pattern replaced by $replacement
```

### Basic usage

``` javascript
$replace("Hello World", "World", "Everyone") -> “Hello Everyone”
$replace("the cat sat on the mat", "at", "it") -> “the cit sit on the mit”
```

## reduce

``` javascript
$filter($arr: array, $func: ($e, $index?: number?, $ar: array )=> boolean) => any //Reduces an array using to some value using $func
```

### Basic usage

``` javascript
$reduce([1,2,3,4], fn($prev, $cur) { $prev*$cur}) ) -> 24
```

## reverse

``` javascript
reverse($arr: array) => array //returns a new array with the elements of $arr in reverse order
```

### Basic usage

``` javascript
$reverse([1,2,3,4,5]) -> [5,4,3,2,1]
```

## round

``` javascript
$round($num: number, $precision?: number) => number //rounds $num to the optional $precision number of decimal places. If $precision is negative, then its value specifies which column to round to on the left side of the decimal place
```

### Basic usage

``` javascript
$round(123.456) -> 123
$round(123.456, 2) -> 123.46
$round(123.456, -1) -> 120
$round(123.456, -2) -> 100
$round(125, -1) -> 120
$round(125.456,-1) -> 130
```

## shuffle

``` javascript
shuffle($arr: array) => array //returns a new array with the elements of $arr in random order
```

### Basic usage

``` javascript
$shuffle([1,2,3,4]) -> [3,1,4,2]
```

## sort

``` javascript
$sort($arr: array, $swapFn: ($l, $r)) => boolean  //is a higher order function that sorts the elements of an array using the $swapFn function. The comparator function takes two arguments, if it returns true, the elements will be swapped
```

### Basic usage

``` javascript
$sort([13,2,8,6,15], fn($l, $r) { $l > $r }) -> [2,6,8,13,15]
$sort([13,2,8,6,15], fn($l, $r) { $l < $r }) -> [15,13,8,6,2]
```

## split

``` javascript
$split($str: string, $pattern: string | regex, $flags?: string) => array<string> //splits $str into an array of strings using $pattern
```

### Basic usage

``` javascript
$split("so many words", " ") -> [ "so", "many", "words" ]
$split("so many words", " ", 2) -> [ "so", "many" ]
$split("too much, punctuation. hard; to read", /[ ,.;]+/) -> ["too", "much", "punctuation", "hard", "to", "read"]
```

## spread

``` javascript
$spread($val: any) => array<object> //returns an array of objects with a single key/value pair, where the key is the name of the property and the value is the value of the property
```

### Basic usage

``` javascript
$spread({ "a": 1, "b": 2}) -> [ { "a" : 1}, {"b": 2}]
```

## sqrt

``` javascript
$sqrt($num: number) => number //returns the square root of $num
```

### Basic usage

``` javascript
$sqrt(16) -> 4
```

## string

``` javascript
$string($value: any, $prettify? true | false) => string //returns the string representation of the input value; if $prettify is true, the output string is formatted for readability
```

### Basic usage

``` javascript
$string({"a": 1, "b": 2}) -> “{”a”:1, ”b” : 2}”
$string(5) -> “5”
$string([1,2,3]) -> [“1”, “2”, “3”]
```

## substring

``` javascript
$substring($str: string, $start: number, $length?: number) => string //returns a substring of $string starting at $start and with length $length (if provided)
```

### Basic usage

``` javascript
$substring("hello world", 0, 5) -> “hello”
$substring("hello world", -5, 5) -> “world”
```

## substringAfter

``` javascript
$substringAfter($str: string, $separator: string) => string //returns the substring of $string after the first occurrence of $separator
```

### Basic usage

``` javascript
$substringAfter(“abc@gmail.com”, “@”) -> “gmail.com”
```

## substringBefore

``` javascript
$substringBefore($str: string, $separator: string) => string //returns the substring of $string before the first occurrence of $separator
```

### Basic usage

``` javascript
$substringBefore( “john@gmail.com”, “@”) -> “john”
```

## sum

``` javascript
$sum($array) => number //returns the sum of the values o a numeric array
```

### Basic usage

``` javascript
$sum([1,2,3,4]) -> 10
```

## tomillis

``` javascript
$toMillis($val:string, $picture?: string) => number //converts a string to a number of milliseconds since the epoch. $picture is optional, if not provided it will default to ISO format. Picture specs are as per Unicode date format standards  
```

### Basic usage

``` javascript
$toMillis("1970-01-01T00:00:00.001Z")  -> 1
$toMillis('2018-03-27', 'yyyy-MM-dd') -> 1522108800000
toMillis('21 August 2017', 'dd MMMM yyyy') -> 1503273600000
```

## trim

``` javascript
$trim($str: string) => string //returns a copy of $str with leading and trailing whitespace removed
```

### Basic usage

``` javascript
$trim(" Hello \n World ") -> "Hello World"
```

## type

``` javascript
$type($val: any) => string //returns the type of $val
```

### Basic usage

``` javascript
$type(“hello”) -> ”string”
$type(1) -> “number”
$type({}) -> “object”
$type([]) -> “array”
$type(null) -> “null”
```

## uppercase

``` javascript
$uppercase($str: string) => string //returns the uppercase version of $str
```

### Basic usage

``` javascript
$uppercase(“hello”) -> “HELLO”
```

## uuid

``` javascript
$uuid => string //returns a unique id ( UUID version 4) as a string
```

### Basic usage

``` javascript
$uuid -> "503c5a9f-b8fb-402a-b0d7-fae17490bdf6"
```

## zip

``` javascript
$zip($ar1:Array, $ar2:Array, $ar3;Array, ...) => Array takes 2 or more arrays and convolves (zips) each value from a set of arrays
```

### Basic usage

``` javascript
$zip([1,2,3],[4,5,6]) -> [[1,4],[2,5],[3,6]]
```

## year

``` javascript
$year($timestamp: string |number) => number //extracts the year component from a timestamp and returns it as a number
```

### Basic usage

``` javascript
$year(“2023-02-08T07:56:14.747+00:00”) -> 2023
```

## month

``` javascript
$month($timestamp: string |number) => number //extracts the month component from a timestamp
```

### Basic usage

``` javascript
$month(“2023-02-08”) -> 2
```

## dayOfTheWeek

``` javascript
$dayOfTheWeek($timestamp: string |number) => number //returns the day of the week as a number [1=Monday, ... 6=Saturday, 7= Sunday]
```

### Basic usage

``` javascript
$dayOftheWeek('2023-02-08') -> 3
$dayOftheWeek('2023-02-07') -> 2
```

## day

``` javascript
$day($timestamp: string |number) => number //extracts the day from a timestamp and returns it as a number
```

### Basic usage

``` javascript
$day(“2023-02-08”) -> 8
```

## hours

``` javascript
$hours($timestamp: string |number) => number //extracts the local hour component from a timestamp and returns it as a number
```

### Basic usage

``` javascript
$hours(“2023-02-08T07:56:14.747+00:00”) -> 7
```

## minutes

``` javascript
$minutes($timestamp: string |number) => number //extracts the minutes component from a timestamp and returns it as a number
```

### Basic usage

``` javascript
$minutes(“2023-02-08T07:56:14.747+00:00”) -> 56
```

## seconds

``` javascript
$seconds($timestamp: string |number) => number //extracts the local Seconds  component from a timestamp and returns it as a number
```

### Basic usage

``` javascript
$seconds(“2023-02-08T07:56:14.747+00:00”) -> 14
```

## milliSeconds

``` javascript
$milliSeconds($timestamp: string |number) => number //extracts the Milliseconds from a timestamp and returns it as a number
```

### Basic usage

``` javascript
$milliSeconds(“2023-02-08T07:56:14.747+00:00”) -> 747
```

## dateEquals

``` javascript
$equals($timestamp1: string |number, $timestamp2: string |number) => boolean //returns true if the two timestamps are the same, false otherwise
```

### Basic usage

``` javascript
$dateEquals("2023-02-08", “2023-02-08”) -> true
$dateEquals("2023-02-08", “2023-02-07”) -> false
```

## hasSameDate

``` javascript
$hasSameDate($timestamp1: string |number, $timestamp2: string |number, units?: Array<string>) => boolean //returns true if the components specified in $units of  the two timestamps are the same, false otherwise.  $units is an array with one or more strings from ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds']
```

### Basic usage

``` javascript
$hasSameDate("23-02-08", "2019-02-08", ["month", "day"]) -> true
$hasSameDate('2023-02-01', '2023-02-08', ['month', 'year']) -> true
$hasSameDate("23-02-01", "2023-02-08", ["month", "year"]) -> true
$hasSameDate('2023-02-01T07:15:54.730Z', '2023-02-01T14:00:22.340Z', ['year','month', 'day']) -> true
```

## beforeDate

``` javascript
$beforeDate($timestamp1: string |number, $timestamp2: string |number) => boolean //returns true if $timestamp1 is before $timestamp2, false otherwise
```

### Basic usage

``` javascript
$beforeDate(“2023-02-07”, “2023-02-08”) -> true
$beforeDate(“2023-02-08”, “2023-02-08”) -> false
```

## afterDate

``` javascript
$afterDate($timestamp1: string |number, $timestamp2: string |number) => boolean //returns true if $timestamp1 is after $timestamp2, false otherwise
```

### Basic usage

``` javascript
$afterDate(“2023-02-09”, “2023-02-08”) -> true
$afterDate(“2023-02-08”, “2023-02-08”) -> false
```

## datePlus

``` javascript
$datePlus($timestamp1: string |number, $duration: number, $units, ) => number //adds a duration of type $units which can be one of ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'],  to a $timestamp and returns the new timestamp. If $duration if less than zero, then the it will be subtracted from the $timestamp
```

### Basic usage

``` javascript
$datePlus(“2023-02-07”, 2, “days”) -> 1675900800000
$datePlus(“2023-02-07”, 2, “months”) -> 1680825600000
```

## diffDate

``` javascript
$diffDate($timestamp1: string |number, $timestamp2: string |number, $units : string, ) => number //returns the difference between two timestamps in the units specified which can be one of ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds']
```

### Basic usage

``` javascript
$diffDate("2023-02-08", "2023-01-22", "days") -> 17
$diffDate("2023-02-08", "2023-01-22","hours") -> 408
```
