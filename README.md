# Symbar - VSCode Extension

A VSCode extension to put commononly used coding symbols in the Macbook touchbar. May be most useful for programmers without the superior American keyboard layout.

## Features

Touching the symbol shown on the touchbar icon simply inserts that symbol (or group of symbols) at the cursor in the open editor document. At the moment the cursor always rests at the end of the symbols.

![Touchbar Screenshot](images/screenshot.png)

## Requirements

Requires VSCode 1.36 or greater. Oh, and a macbook with a touchbar.

## Extension Settings

This extension currently has the following touchbar symbol toggles:

-   `symbar.braces`: []
-   `symbar.parentheses`: ()
-   `symbar.brackets`: {}
-   `symbar.arrowFunction`: () => {}
-   `symbar.dollar`: \${}
-   `symbar.ternary`: ? :
-   `symbar.backticks`: ``
-   `symbar.tilda`: ~
-   `symbar.backslash`: \

## Known Issues

-   If too many icons are toggled to be shown in the touchbar, all of the icons will disappear (VSCode is investigating this bug). You are probably looking at a maximum of 5 icons until this is fixed.

-   Unfortunately, these symbols also show up in the command pallete. I need ask the VSCode team if it is possible to hide it there.

## Release Notes

### 1.0.0

Initial release
