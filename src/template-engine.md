---
title: Template Engine
---

# Template Engine

Ticketeer uses an advanced template engine to allow for greater customization of the messages sent to users.

## Value injection

Use the value Tag

```text
{$varName}
```

To access array elements or objects use "." to access sub-elements:

```text
 {$users.0.name}
```

## Loops

You can insert loops:

```text
{for $curName in $names}
Current Name: {$curName}
{/for}
```

Inside each loop, there are to magic-values `@index0` (index starting with 0) and `@index1` for a
index starting with amp1.

```text
{for $curName in $names}
Line {$@index1}: {$curName}
{/for}
```

Inside loops you can `{break}` or `{continue}` the loop.

## Conditions (if)

You can use if-conditions:

```text
{if $someVarName == "SomeValue"}
Hello World
{/if}
```

Shortcut: Test if a variable is null:

```text
{if $someVarName}
    someVarName is set!
{/if}
{if !$someVarName}
    someVarName is not set!
{/if}
```

Complex logical expressions can be made using && (and), || (or) and brackets.

```text
{if $someVarName && $otherVarName}
    someVarName and otherVarName are set!
{/if}
{if $someVarName || $otherVarName}
    someVarName or otherVarName are set!
{/if}
{if $someVarName || ($otherVarName && $anotherVarName)}
    Condition is true!
{/if}
{if $someVarName && !($otherVarName && $anotherVarName)}
    Condition is true!
{/if}
```

You can use filters on values used in comparisons.

```text
{if $someArray|count > $otherArray|count}
    someArray has more items than otherArray
{/if}
```

### Operators

| Operator | Description           |
| -------- | --------------------- |
| ==       | Equal                 |
| !=       | Not equal             |
| \>       | Greater than          |
| <        | Less than             |
| >=       | Greater than or equal |
| <=       | Less than or equal    |

## Conditions (else)

```text
{if $someVarName == "SomeValue"}
Hello World
{else}
Goodbye World
{/if}
```

Lists of choices:

```text
{if $someVarName == "SomeValue"}
Hello World
{elseif $someVarName == "OtherValue"}
Hello Moon
{else}
Goodbye World
{/if}
```

## Functions

Call the function and output into template

```text
{sayHello msg="Joe"}
```

or inject the Result into the context for further processing:

```text
{sayHello msg="Joe" > $out}
{$out}
```

Processing Exceptions:

Use `!>` to catch exceptions and redirect them to the scope.

`{throw msg="SomeMsg" !> lastErr}`

Or use `!break` or `!continue` to break/continue a loop

## Filters

Call the filter with parameters (parameter-separator `:`):

```text
{$variable|currency:2:,:.}
```

Use this filter inside your template

```text
{$someVariable|currency}
```

## Sections

Sections are like functions but provide the content they enclose:

```text
{section name="someName"}
Some Content
{/section}
```

```text
{section name="someName" > $out}
Some Content
{/section}

{$out}
```

## Escaping

Use `{literal}{/literal}` to escape a block

```text
{literal}
  {$foo} will not be parsed!
{/literal}
```

## Comments

Use `{# #}` to add comments (will be stripped from output)

```text
Template {# Some Comment #}
{# Some
Multiline
Comment #}
```

## Available Functions

### `break`

Break from a loop

:::info

Aliases: `none`

| Argument Name | Argument Type | Default Value | Description |
| ------------- | ------------- | ------------- | ----------- |
| -             | -             | -             | -           |

:::

### `continue`

Continue in a loop

:::info

Aliases: `none`

| Argument Name | Argument Type | Default Value | Description |
| ------------- | ------------- | ------------- | ----------- |
| -             | -             | -             | -           |

:::

### `current_time`

Returns the current time measured in the number of seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)

:::info

Aliases: `time`, `now`

| Argument Name | Argument Type | Default Value | Description |
| ------------- | ------------- | ------------- | ----------- |
| -             | -             | -             | -           |

:::

### `random`

Returns a random number between min and max or a random item from a list

:::info

Aliases: `rand`

| Argument Name | Argument Type | Default Value | Description              |
| ------------- | ------------- | ------------- | ------------------------ |
| `min`         | `number`      | `0`           | Minimum number to return |
| `max`         | `number`      | `100`         | Maximum number to return |
| `list`        | `string`      | -             | Comma separated list     |

:::

### `set`

Set a variable in the context

:::info

Aliases: `none`

| Argument Name | Argument Type | Default Value | Description    |
| ------------- | ------------- | ------------- | -------------- |
| `name`        | `string`      | -             | Variable name  |
| `value`       | `string`      | -             | Variable value |

:::

## Available Filters

::: warning
These filters _only_ accept **non array** variables
:::

### `escape`

Escape various Discord formatting and markdown into a plain text:

:::info

Aliases: `md`, `clean`

| Argument Name | Argument Type | Default Value | Description |
| ------------- | ------------- | ------------- | ----------- |
| -             | -             | -             | -           |

:::

### `timestamp`

Format a timestamp into discord's timestamp format

:::info

Aliases: `time`, `ts`

| Argument Name | Argument Type | Default Value | Description             |
| ------------- | ------------- | ------------- | ----------------------- |
| format        | `format`      | `R`           | Format of the timestamp |

Formats

| Style           | Input | Output (12-hour clock)               | Output (24-hour clock)            |
| --------------- | ----- | ------------------------------------ | --------------------------------- |
| Default         | -     | November 28, 2018 9:01 AM            | 28 November 2018 09:01            |
| Short Time      | `t`   | 9:01 AM                              | 09:01                             |
| Long Time       | `T`   | 9:01:00 AM                           | 09:01:00                          |
| Short Date      | `d`   | 11/28/2018                           | 28/11/2018                        |
| Long Date       | `D`   | November 28, 2018                    | 28 November 2018                  |
| Short Date/Time | `f`   | November 28, 2018 9:01 AM            | 28 November 2018 09:01            |
| Long Date/Time  | `F`   | Wednesday, November 28, 2018 9:01 AM | Wednesday, 28 November 2018 09:01 |
| Relative Time   | `R`   | 3 years ago                          | 3 years ago                       |

:::

### `date`

Format a timestamp into a date string

:::info

| Argument Name | Argument Type | Default Value | Description             |
| ------------- | ------------- | ------------- | ----------------------- |
| format        | `format`      | `Y-m-d H:i:s` | Format of the timestamp |

Formats can be found [here](https://www.php.net/manual/en/datetime.format.php)

:::

### `codeblock`

Wraps a variable in a codeblock

:::info

Aliases: `code`

| Argument Name | Argument Type | Default Value | Description |
| ------------- | ------------- | ------------- | ----------- |
| -             | -             | -             | -           |

:::

### `fallback`

If a variable is empty, fallback to a default value

:::info

Aliases: `else`, `fb`

| Argument Name | Argument Type | Default Value | Description              |
| ------------- | ------------- | ------------- | ------------------------ |
| value         | `string`      | -             | The value to fallback to |

:::

### `truncate`

Limits a string to a certain length

:::info

Aliases: `leng`, `ml`, `maxLength`

| Argument Name | Argument Type | Default Value | Description                            |
| ------------- | ------------- | ------------- | -------------------------------------- |
| length        | `number`      | -             | The length to limit to                 |
| dots          | `string`      | '...'         | Add to the end of the truncated string |

:::

### `padLeft`

Pads a string to the left with a certain character

:::info

Aliases: `pad`, `lp`, `pl`

| Argument Name | Argument Type | Default Value | Description            |
| ------------- | ------------- | ------------- | ---------------------- |
| length        | `number`      | -             | The length to pad to   |
| char          | `string`      | -             | The string to pad with |

:::

### `padRight`

Pads a string to the right with a certain character

:::info

Aliases: `pr`, `rp`

| Argument Name | Argument Type | Default Value | Description            |
| ------------- | ------------- | ------------- | ---------------------- |
| length        | `number`      | -             | The length to pad to   |
| char          | `string`      | -             | The string to pad with |

:::

### `fixedLength`

Fixes a string to a certain length

:::info

Aliases: `fixed`

| Argument Name | Argument Type | Default Value | Description          |
| ------------- | ------------- | ------------- | -------------------- |
| length        | `number`      | -             | The length to fix to |

:::

### `lowercase`

Converts a string to lowercase

:::info

Aliases: `lower`, `lc`

| Argument Name | Argument Type | Default Value | Description |
| ------------- | ------------- | ------------- | ----------- |
| -             | -             | -             | -           |

:::

### `uppercase`

Converts a string to uppercase

:::info

Aliases: `upper`, `uc`

| Argument Name | Argument Type | Default Value | Description |
| ------------- | ------------- | ------------- | ----------- |
| -             | -             | -             | -           |

:::

### `trim`

Trims whitespace from the beginning and end of a string

:::info

Aliases: `none`

| Argument Name | Argument Type | Default Value | Description |
| ------------- | ------------- | ------------- | ----------- |
| -             | -             | -             | -           |

:::

### `split`

Splits a string into an array

:::info

Aliases: `explode`

| Argument Name | Argument Type | Default Value | Description               |
| ------------- | ------------- | ------------- | ------------------------- |
| separator     | `string`      | `,`           | The separator to split on |

:::

## Available Array Filters

::: warning

These filters _only_ accept **array** variables

:::

### `count`

Counts the number of items in an array

:::info

Aliases: `none`

| Argument Name | Argument Type | Default Value | Description |
| ------------- | ------------- | ------------- | ----------- |
| -             | -             | -             | -           |

:::

### `join`

Joins an array into a string

:::info

Aliases: `implode`

| Argument Name | Argument Type | Default Value | Description              |
| ------------- | ------------- | ------------- | ------------------------ |
| separator     | `string`      | `,`           | The separator to join on |

:::

### `has`

Check if an array has a value, returns the number of matched values, input accepts comma separated values

Example:

```
{if $ticket.owner.roles|has:id:############1,############2,############3 > 0}
```

:::info

| Argument Name | Argument Type | Default Value | Description                                           |
| ------------- | ------------- | ------------- | ----------------------------------------------------- |
| keyOrValue    | `string`      | -             | The key of a item in the array or the values to check |
| value         | `string`      | -             | The values to check                                   |

:::

### `has_all`

Check if an array has all values in a list, returns a boolean, input accepts comma separated values

Example:

```
{if $ticket.owner.roles|has_all:id:############1,############2,############3}
```

:::info

| Argument Name | Argument Type | Default Value | Description                                           |
| ------------- | ------------- | ------------- | ----------------------------------------------------- |
| keyOrValue    | `string`      | -             | The key of a item in the array or the values to check |
| value         | `string`      | -             | The values to check                                   |

:::

### `has_some`

Check if an array has at least one value in a list, returns a boolean, input accepts comma separated values

Example:

```
{if $ticket.owner.roles|has_some:id:############1,############2,############3}
```

:::info

Aliases: `includes`

| Argument Name | Argument Type | Default Value | Description                                           |
| ------------- | ------------- | ------------- | ----------------------------------------------------- |
| keyOrValue    | `string`      | -             | The key of a item in the array or the values to check |
| value         | `string`      | -             | The values to check                                   |

:::

## Available Sections

### `strip_empty_lines`

Strips empty lines from a section

:::info

Aliases: `strip`

| Argument Name | Argument Type | Default Value | Description |
| ------------- | ------------- | ------------- | ----------- |
| -             | -             | -             | -           |

:::

### `trim`

Trims whitespace from the beginning and end of a section

:::info

Aliases: `none`

| Argument Name | Argument Type | Default Value | Description |
| ------------- | ------------- | ------------- | ----------- |
| -             | -             | -             | -           |

:::

### `uppercase`

Converts a section to uppercase

:::info

Aliases: `none`

| Argument Name | Argument Type | Default Value | Description |
| ------------- | ------------- | ------------- | ----------- |
| -             | -             | -             | -           |

:::

### `lowercase`

Converts a section to lowercase

:::info

Aliases: `none`

| Argument Name | Argument Type | Default Value | Description |
| ------------- | ------------- | ------------- | ----------- |
| -             | -             | -             | -           |

:::
