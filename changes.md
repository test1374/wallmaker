## index.html
- Changed all script tags to have the [defer attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer), moved all script tags to head.

## sketch.js
- Strict mode enabled
- All `===` replaced with `==`
- `blockSize` initated with value 20, changed to `const`
- `controls` object serves as key bindings
    Placing is now done with left click, removing with right click
- Wall tints defined at the top of the file
- Added `perf`, an object that allows the monitoring of the page's tickrate
- All assets are assigned to properties of an object
- Refined the loading of assets
- Added `brick2` and `brick3` (previosuly unused)
- Anything relating to the menu is now stored inside the `menu` object
- Added code for creating a piece of text telling the user to press `m` to open the menu
- Refactored `keyReleased` to be `keyPressed`, changed to `function keyPressed() {...}`, because `keyPressed = function() {...}` was throwing an error
    - Instead of searching by key, it searches by action. For example, instead of checking if `a` is pressed, it checks if the key bound to `wall_mode` is pressed
- Shortened the for loops in charge of drawing the grid lines
- Any condition resembling `if (x == 0)` or `if (x == false)` was refactored to `if (!x)`
- Anything related to placing things has been moved to a `tool` object
- Removed pointless variables and code at lines 176 to 191
- Line 232 to 236: Refactored code similar to `let x = false; if (y == z) { x == true; }` to `let x = y == z;`, converted to `const`
- Taking advantage of the fact that booleans can be converted to numbers allows the code between 239 and 298 to be shorter than before
- Combined if statements on line 304
- Completely overhauld the way menus are created. The menu is now a collection of dynamically generated HTML elements.

## style.css
- Added various styling statements to cut down on Javascript-driven styling