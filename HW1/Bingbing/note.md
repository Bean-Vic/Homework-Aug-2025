1. What is HTML?
HTML is just the language that gives a web page its structure. It tells the browser what’s what—like <h1> for headings, <p> for paragraphs, <img> for images, <a> for links, and <form> for forms—so the content is organized and easy to use.

2. Minimal HTML5 structure
At minimum, you just need a <!DOCTYPE html>, an <html> root, a <head> for metadata like the <title> and charset, and a <body> for what the user actually sees. That’s already a valid page.

3. Purpose of the <meta> tag
<meta> gives information about the page to browsers and search engines. For example, you use it to set the charset to UTF-8, control the mobile viewport, or add a description for SEO.

4. Difference between <head> and <header>
<head> is invisible stuff—metadata, <style> and <script> files. <header> is visible content, usually at the top of a page or a section—like a logo, site title, and <nav> for navigation.

5. What is the <form> tag for?
<form> wraps inputs so users can enter data and submit it to a server. You set the action and method, and for file uploads you need enctype="multipart/form-data".

6. Explain: `<a … rel="noreferrer nofollow">`
It’s a normal link. `nofollow` tells search engines not to pass ranking value, and `noreferrer` hides the referrer so the destination can’t see which page the user came from.

7. How to serve a page in multiple languages
To make a page work in multiple languages, you just set the lang attribute on the `<html>` tag, so browsers and screen readers know what language it is. Then you serve localized versions of the site, usually on separate URLs like `/en` and `/fr` for French. You also add a simple language switcher so users can pick their language, and use `hreflang` tags so search engines send people to the right version automatically.

8. What are semantic HTML tags and why important?
Semantic HTML tags basically describe what the content means, not just how it looks. So tags like <main>, <article>, <section>, and <nav> tell both browsers and people what role that content plays. That helps screen readers navigate, it helps search engines understand the structure, and it also makes the code easier to maintain. In short: better accessibility, better SEO, and cleaner code.

9. Frontend practices that improve SEO (and why)
From a frontend point of view, I focus on semantic HTML with a clear heading structure, give each page a unique <title> and a good <meta description>, use descriptive alt text for images, and keep the site fast and mobile-friendly. I also load non-critical scripts with defer or async so they don’t block rendering. That way crawlers can easily understand the content, and the UX noticeably improves—which means SEO goes up.