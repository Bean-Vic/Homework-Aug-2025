1. What is CSS?
A stylesheet language used to style HTML documents (colors, fonts, layout, responsiveness, etc.).

2. How do you link a CSS file?
In the `<head>`: `<link rel="stylesheet" href="styles.css">`.

3. Block vs inline vs inline-block
- block: Takes the full width, starts on a new line, width/height can be set.  
- inline: Does not break line, only wraps content, cannot set width/height or vertical margins.  
- inline-block: Does not break line but allows setting width/height and vertical margins.

4. Pseudo-class vs pseudo-element  
- Pseudo-class: Selects a state, e.g., `:hover`, `:focus`, `:nth-child()`.  
- Pseudo-element: Selects part of an element or inserts content, e.g., `::before`, `::after`, `::first-line`.

5. Child combinator vs descendant
- Child `>`: Selects direct children (`ul > li`).  
- Descendant (space): Selects all nested descendants (`ul li`).

6. Two ways to hide (difference) 
- `display: none;` → Removes from layout, no space occupied.  
- `visibility: hidden;` → Hidden but still occupies space.  
(`opacity: 0` also hides but keeps interaction space.)

7. Box Model 
`margin → border → padding → content`.  
Controlled by `box-sizing: content-box | border-box`.

8. `!important` usage  
Overrides normal specificity. Used in urgent fixes, user styles, or utility classes. Should be avoided for maintainability.

9. What does `z-index` do?  
Controls stacking order in the same stacking context. Works on positioned elements. New stacking contexts are created by properties like `transform`, `opacity < 1`.

10.  Can padding & margin be negative?  
- `padding`: Cannot be negative.  
- `margin`: Can be negative, may cause overlap.

11.  How to center a block element? 
- With fixed width: `margin: 0 auto;`  
- Or with flex: `display: flex; justify-content: center;`.

12.  What are grid items? Properties?  
Direct children of a grid container. Properties:  
`grid-column`, `grid-row`, `grid-area`, `justify-self`, `align-self`, `place-self`, `order`, `z-index`.

13.  What is a flex container? Properties?  
Element with `display: flex;`.  
Container properties: `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`, `gap`.  
Item properties: `flex`, `align-self`, `order`.

14.  Parent width = 200px; child width = auto  
Child width = 200px, margins default to `0`.  
If margins are `auto`, they distribute equally → child centered.

15.  What is responsive web design? How to achieve?  
Design that adapts to different screen sizes/devices. Achieved by:  
`<meta name="viewport" content="width=device-width, initial-scale=1">`, Flex/Grid layouts, media queries, relative units (`%`, `rem`, `vw`), responsive images (`max-width: 100%`).


<img width="863" height="535" alt="image" src="https://github.com/user-attachments/assets/e706cb5d-523e-4560-8a75-5c65497df6b3" />


