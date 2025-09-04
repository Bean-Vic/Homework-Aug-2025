1. What is CSS?
A stylesheet language used to style HTML documents (colors, fonts, layout, responsiveness, etc.).

2. How do you link a CSS file?
link a CSS file to an HTML page by adding a link tag inside the head section and setting rel to ‘stylesheet’ and href to the path of the CSS file。

3. Block vs inline vs inline-block
- block: Takes the full width, starts on a new line, width/height can be set.  
- inline: Does not break line, only wraps content, cannot set width/height or vertical margins.  
- inline-block: Does not break line but allows setting width/height and vertical margins.

4. Pseudo-class vs pseudo-element  
- Pseudo-class: style a state, e.g., `:hover`, `:focus`, `:nth-child()`.  
- Pseudo-element: style part of an element or inserts content, e.g., `::before`, `::after`, `::first-line`.
- pseudo-class uses single colon, pseudo-element uses double colons

5. Child combinator vs descendant
- Child `>`: Selects direct children (`ul > li`).  
- Descendant (space): Selects all nested descendants (`ul li`).

6. Two ways to hide (difference) 
- `display: none;` → Removes from layout, no space occupied.  
- `visibility: hidden;` → Hidden but still occupies space.  
(`opacity: 0` also hides but keeps interaction space.)

7. Box Model 
The CSS Box Model consists of content → padding → border → margin.
box-sizing controls how width and height are calculated:

content-box (default): size applies only to content, padding and border add extra space.

border-box: size includes content, padding, and border—easier for consistent layouts.

In practice, we usually set everything to border-box for predictable sizing.

8. `!important` usage  
Overrides normal specificity. Used in urgent fixes, user styles, or utility classes. Should be avoided for maintainability.

9. What does `z-index` do?  
Controls stacking order in the same stacking context. Works on positioned elements. New stacking contexts are created by properties like `transform`, `opacity < 1`.
Elements with a higher z-index are displayed above those with a lower value.

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
The child expands to fill the entire width of the parent

15.  What is responsive web design? How to achieve?  
Responsive Web Design means creating websites that adapt to different screen sizes and devices. It’s achieved with the viewport meta tag, flexible layouts (Flex/Grid), media queries, relative units, and responsive images.


