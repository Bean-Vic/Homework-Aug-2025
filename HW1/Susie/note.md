#### 1. What is HTML?
HTML stands for Hypertext Markup Language, used by web browsers to render web pages. It defines the content and structure of webpages, and assisted by CSS and JS usually.

#### 2. What is the minimal structure of an HTML5 document?
```html 
<!DOCTYPE html> — this declares the document is HTML5.

<html lang="en"> — the root element that also specifies the language.

Inside it, we have a <head> section, which holds metadata like <meta charset="UTF-8"> to set character encoding, and <title> which defines the title shown in the browser tab.

Then we have the <body> tag, which contains all the visible content of the page.

Finally, we close the </html> tag.
```

#### 3. What is the purpose of the <meta> tag?
Meta tag defines metadata, which is information about data. It provides essential information for browsers and search engines and other web services, helping with SEO(search engine optimization) by description and keywords, responsive design by viewport, etc.

#### 4. What is the difference between <head> and <header> ?
head: contains metadata about the document(information for the browser, not displayed on the page). It can contain <title>, <meta>, <link>, <style>, <script>. Before <body>.
header: contains introductory content or navigation for a section or page, displayed on the page. It can contain headings, logo, navigation links, or text. Inside <body>

#### 5. What is the <form> tag used for in HTML?
Form is used to collect user input and send it to a server for processing. Like login forms, registration forms, surveys, etc. 
action: URL of the server endpoint
method: HTTP method GET or POST

#### 6. Explain the following code
```html
<a href="http://example.com/sample_page/" rel="noreferrer nofollow">Link
</a>
```
It's a hyperlink labeled as "Link", opens http://example.com/sample_page/, doesn't send referrer information  to that page, and has search engines not to follow the link.

#### 7. How do you serve your page in multiple languages?
Specify the language by using lang attribute on the <html> element, organize sites with different URLs for each language.

#### 8. What are semantic HTML tags and why are they important?
Semantic HTML tags are elements that clearly describe their meaning and purpose both to the browser and to humans. Importance: 1. screen readers and assistive devices understand semantic tags better; 2. search engines use semantic tags better understand the structure and meaning of content, which improve ranking; 3. makes code easier to read, maintain, and collaborate on.

#### 9. What frontend practices can improve a website’s SEO, and why do they matter?
1. Use semantic tags
2. Use <title> and <meta> tags
3. Use proper heading structure
4. Use readable URLs
5. Optimize file size for faster loading
6. Make it mobile-friendly