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

Inside each loop, there are to magic-values ```@index0``` (index starting with 0) and ```@index1``` for a
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

| Operator       | Description                                |
|----------------|--------------------------------------------|
| ==             | Equal                                      |
| !=             | Not equal                                  |
| \>             | Greater than                               |
| <              | Less than                                  |
| >=             | Greater than or equal                      |
| <=             | Less than or equal                         |

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

### Available Functions

| Function Name           | Function Alias    | Description                                | Arguments       |
|----------------|-------------------|--------------------------------------------|-----------------|
|`break`|-|-|-|
|`continue`|-|-|-|
|`current_time`|`time` `now`|-|-|
|`random`|`rand`|-|-|
|`set`|-|-|-|

## Filters

Call the filter with parameters (parameter-separator `:`):

```text
{$variable|currency:2:,:.}
```

Use this filter inside your template

```text
{$someVariable|currency}
```

### Available Filters

> Note: These function only accept non array variables

| Filter Name           | Filter Alias       | Description                                | Arguments       |
|----------------|--------------------|--------------------------------------------|-----------------|
|`clean`|-|-|-|
|`escape`|`md`|-|-|
|`timestamp`|`time` `ts`|-|-|
|`codeblock`|`codeblock`|-|-|
|`fallback`|`else` `fb`|-|-|
|`singleLine`|-|-|-|
|`maxLength`|`leng` `ml`|-|-|
|`padLeft`|`pad` `lp` `pl`|-|-|
|`padRight`|`pr` `rp`|-|-|
|`fixedLength`|`fixed`|-|-|
|`lowercase`|`lower` `lc`|-|-|
|`uppercase`|`upper` `uc`|-|-|
|`trim`|-|-|-|
|`split`|`explode`|-|-|

### Available Array Filters

> Note: These function only accept array variables

| Array Filter Name           | Array Filter Alias       | Description                                | Arguments       |
|----------------|--------------------------|--------------------------------------------|-----------------|
|`count`|-|-|-|
|`join`|`implode`|-|-|


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

### Available Sections

| Section Name           | Section Alias       | Description                                | Arguments       |
|----------------|---------------------|--------------------------------------------|-----------------|
|`strip_empty_lines`|`strip`|-|-|
|`trim`|-|-|-|
|`uppercase`|-|-|-|
|`lowercase`|-|-|-|

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
