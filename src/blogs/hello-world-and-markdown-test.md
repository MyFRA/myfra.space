---
title: 'Hello World and Markdown Test'
date: 2022-01-22
---

![Random image](https://picsum.photos/640/150)

Hello world.

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

## Components

### Paragraphs

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec dolor at neque tincidunt mattis. Mauris ex libero, elementum a tempor vitae, ornare ac elit. N
ullam nulla tortor, iaculis sit amet sagittis in, cursus sit amet nunc.

Aenean ornare neque sed facilisis lobortis. Sed posuere mattis condimentum. Vestibulum condimentum velit metus, sed pulvinar neque dictum quis. Class aptent taciti
sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Donec convallis volutpat ipsum, eu placerat magna vestibulum sed. M
aecenas gravida nibh quam, id ornare orci auctor eget. Etiam posuere ante ac nisl porta convallis. Proin viverra, metus sed auctor vestibulum, tellus ipsum gravida
velit, vel consectetur augue ligula nec sapien. Morbi tristique dignissim tempus.

### Emphasis

#### Bold

**Lorem ipsum dolor sit amet, consectetur adipiscing elit.** Aliquam nec dolor at neque tincidunt mattis. Mauris ex libero, elementum a tempor vitae, ornareac elit. Nullam nulla tortor, iaculis sit amet sagittis in, cursus sit amet nunc.

#### Italic

_Lorem ipsum dolor sit amet, consectetur adipiscing elit._ Aliquam nec dolor at neque tincidunt mattis. Mauris ex libero, elementum a tempor vitae, ornare ac elit. Nullam nulla tortor, iaculis sit amet sagittis in, cursus sit amet nunc.

### List

#### Ordered

1. Lorem ipsum dolor sit amet.
1. Lorem ipsum dolor sit amet.
1. Lorem ipsum dolor sit amet.
1. Lorem ipsum dolor sit amet.
1. Lorem ipsum dolor sit amet.

#### Unordered

-   Lorem ipsum dolor sit amet.
-   Lorem ipsum dolor sit amet.
-   Lorem ipsum dolor sit amet.
-   Lorem ipsum dolor sit amet.
-   Lorem ipsum dolor sit amet.

#### Nested

-   Lorem ipsum dolor sit amet.
    1. Lorem ipsum dolor sit amet.
    1. Lorem ipsum dolor sit amet.
-   Lorem ipsum dolor sit amet.
-   Lorem ipsum dolor sit amet.

### Links

[Lorem ipsum dolor sit amet, consectetur adipiscing elit](/). Aliquam nec dolor at neque tincidunt mattis. Mauris ex libero, elementum a tempor vitae, ornare ac elit. Nullam nulla tortor, iaculis sit amet sagittis in, cursus sit amet nunc.

### Image

![Random image](https://picsum.photos/640/360)

### Blockquote

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec dolor at neque tincidunt mattis. Mauris ex libero, elementum a tempor vitae, ornare ac elit. Nullam nulla tortor, iaculis sit amet sagittis in, cursus sit amet nunc.
>
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec dolor at neque tincidunt mattis. Mauris ex libero, elementum a tempor vitae, ornare ac elit. Nullam nulla tortor, iaculis sit amet sagittis in, cursus sit amet nunc.
>
> > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec dolor at neque tincidunt mattis. Mauris ex libero, elementum a tempor vitae, ornare ac elit. Nullam nulla tortor, iaculis sit amet sagittis in, cursus sit amet nunc.
>
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec dolor at neque tincidunt mattis. Mauris ex libero, elementum a tempor vitae, ornare ac elit. Nullam nulla tortor, iaculis sit amet sagittis in, cursus sit amet nunc.
>
> -   Lorem ipsum dolor sit amet.
>     1. Lorem ipsum dolor sit amet.
>     1. Lorem ipsum dolor sit amet.
> -   Lorem ipsum dolor sit amet.
> -   Lorem ipsum dolor sit amet.

#### Default

Wrap text inside backtick like `` `function(num: number){ return (num & 0x1) === 0 }` `` will render `function(num: number){ return (num & 0x1) === 0 }`.

#### Highlighting

Set language using `` `...{:lang}` `` at the end will highlight the output, something like this `function(num: number){ return (num & 0x1) === 0 }{:ts}`.

#### Default

No language after ` ``` `.

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum ipsum nibh, ac bibendum turpis consectetur eu. Ut cursus dapibus ante, eget dignissim libero tristique vel. Suspendisse potenti. Phasellus a dui eget nulla varius dapibus. Mauris et convallis quam. Sed convallis sodales est. Cras et accumsan justo. Morbi venenatis accumsan sem, ac imperdiet felis vestibulum non. Maecenas volutpat sapien metus.
```

#### Highlighting

Set language after ` ``` `, like ` ```python `.

```python
def magnitude(a: Vec2D) -> float:
  """
    Get vector magnitude.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum ipsum nibh, ac bibendum turpis consectetur eu. Ut cursus dapibus ante, eget dignissim libero tristique vel. Suspendisse potenti. Phasellus a dui eget nulla varius dapibus. Mauris et convallis quam. Sed convallis sodales est. Cras et accumsan justo. Morbi venenatis accumsan sem, ac imperdiet felis vestibulum non. Maecenas volutpat sapien metus.
  """
  return math.sqrt(pow(a.x, 2) + pow(a.y, 2)) # inline comment
```

#### Title and Line Numbers

`title="something"` to add title and `showLineNumbers` to add line numbers, set number start with `showLineNumbers{n}`.

```rust title="even.rs" showLineNumbers
fn even(num: i32) -> bool {
  return (num & 0x1) == 0;
}
```

### Word and Line Highlighting

`/word/` to highlight words and `{n,n-n}` to highlight lines.

```java showLineNumbers /fizz/ /buzz/ {4,13}
class FizzBuzz {
  public static void main(String[] args) {
    for (int i = 1; i <= 100; i++) {
      String r = "";
      Boolean fizz = i % 3 == 0;
      Boolean buzz = i % 5 == 0;
      if(fizz){
        r += "fizz";
      }
      if(buzz){
        r += "buzz";
      }
      System.out.println((r == "") ? i : r);
    }
  }
}
```
