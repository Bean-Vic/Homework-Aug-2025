1. What is CSS?
CSS stands for Cascading Style Sheets, it’s a language used to style HTML documents, change how HTML elements to be displayed and can control the styles of multi web pages at once.

2. How do you link a CSS file to an HTML document?
Use <link> tag in the head section

3. What is block element? How is it different from inline, and inline-block elements?
Block element is element that takes up the full width of its parent container, always starts a new line while inline element only takes up the width as the content itself and doesn’t start on a new line.

4. What is the difference between pseudo-class and pseudo-element?
pseudo-class used to define a special state of an element.
pseudo-element used to style specified parts of an element.

5. What is the difference between the child combinator and the descendant
combinator?
Descendant (space): matches all levels inside.
Child (>): matches only direct children.

6. What are two ways that we can make an element invisible? What is the
difference?
Display none: the element is completely removed from the layout so it doesn’t occupy any space.
Visibility hidden: the element is invisible but still occupied space in the layout.

7. What is the Box Model? Describe each part.
It’s the structure of each element, which includes content, padding, border and margin.
Content is the content of the element;
Padding is the transparent space surrounding content;
Border is the border surrounding padding and content;
Margin is the transparent space outside the border, separating an element from others.

8. What is the usage of !important? What are some use cases?
!important is a rule used to override the particular styles. We might use it to override third-party libraries’ styles when they didn’t provide the attributes to customize some specified styles.

9. What does z-index do?
Z-index controls the stacking order of positioned elements, it determines which element will be on the top of others when elements overlap.

10. Can padding and margin be negative?
Margin could, padding couldn't.

11. How do you center a block element with CSS?
1. fixed width for a block element use margin: 0 auto;
2. flexbox: align-items + justify-content;
3. grid: place-items

12. What are grid items? Can you explain some grid item properties?
Grid is designed for two-dimension layouts, handling both row and columns at same time. It allows for more complex layout structures compare to flexbox.
grid-column and grid-row: to control how many columns/rows an item spans, justify-self and align-self: to align the item within its cell

13. What is a flex container? Can you explain some flex container properties?
Flexbox is designed for one-dimension layouts, handling either row or columns.
flex-direction: change direction as row or column
justify-content: horizontal alignment
align-items: vertical alignment
flex-wrap: whether items wrap to a new line
gap: spacing between items

14. Assume a parent element has width = 200px and one child element. If the child
element’s width is set to ‘auto’, what are the values of its width, left-margin, &
right-margin?
Width = 200px, margin-left = 0, margin-right = 0

15. What is responsive web design? How do we achieve this?
Responsive web design is an approach to web design across different devices, from different sizes desktop monitors to mobile phones. Ensure the website looks and functions well on any screen size or devices.
Ways: We could use relative units(rem, em), media queries to achieve this.
