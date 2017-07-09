#### Web Design and Publishing
# Intro to HTML

## Section 1 - The Basics
* HTML is the language of the web.
* HTML stands for Hypertext Markup Language.
* HTML consists of "tags" and text, which indicate format, style, and layout.


### Anatomy of a tag
```
<tag>Text</tag>
```
As a basic rule of thumb, most tags have an **opening tag** and **closing tag**.
## Section 2 - Core tags
### Instructions:
As we go through the following tags, sketch out the html tags on a sheet of paper. Yes, we're writing code on paper. Follow along on the white board with your instructor.
| Tag  | Description |
| ------------- | ------------- |
| `<html>`      | Every HTML page begins with this tag. Tells the browser, "FYI, the following content is HTML and interpret it as such."  |
| `<head>`      | Indicates the heading of the document. Contains information like the title of the page, description, and settings. Invisible to end users, but used by search engines and web tools.  |
| `<body>`      | The content of a website that the user sees.  |
## Section 3 - Text formatting tags
The following tags are used for simple text formatting. For more advanced formatting like font-size, text alignment, and text color we will use CSS. Don't worry about that for now - we will get to that later in the course.

### Instructions:
As we go through the following tags, practice typing them in an HTML preview tool.
1. Go to **codepen.io**
2. Click Create > New Pen
3. Collapse the CSS and JS panels. For this we will only need the HTML editor and the Preview panel open.

| Tag  | Description |
| ------------- | ------------- |
| `<strong>`    | Bolds text. Usage: ```The word <strong>bold</strong> will be bold.```  |
| `<em>`        | Italicizes text. Usage: ```The word <em>italics</em> will be in italics.```  |
| `<p>`      | Denotes the beginning of a paragraph. Place a closing `</p>` to denote the end of a paragraph.
| `<h1>` `<h2>` `<h3>`...`<h6>`      | Tags beginning with h and a number 1-6 are used as heading tags. They establish a heirarchy of text with `<h1>` being the most important to `<h6>` being of lowest importance.
## Section 4 - Example of text in HTML
```
<h1>I'm a coder now</h1>
<p>This class is really cool, don't you think? You get to learn a new language. By the end of the semester you will be able to <strong>create</strong> websites and <strong>publish</strong> to the web. The possibilies are endless.</p>

<p>This marks the beginning of a <em>new<em> paragraph. When building websites you need to pay close attention to every character(letter or symbol) in your code. This paragraph contains a mistake. Do you see it?</p>
```
## Section 5 - Creating an HTML document.
When you create a document in Microsoft Word, you open the program, type out the contents, and File > Save As *filename.doc* or *filename.docx*. Creating HTML files follows a similar process.

When web designers and developers write HTML for the web, they typically use *code editors*. The editor we will use in this course is called **Sublime Text**. Sublime is to HTML as Excel is to spreadsheets.
### Instructions:
1. Open Sublime Text. *MAC tip: CMD + Spacebar and type Sublime.*
2. Upon opening Sublime, you're presented with a blank document. We will save this blank document to ensure we save our work.
3. File > Save As and type `index.html` as the filename. 
    *Pro tip: KNOW WHERE YOU ARE SAVING. Save to a place on your computer you can easily locate again.* 
*MAC tip: Click the down arrow next to where you type the file name to view more locations for saving.*
4. Next we are going to type the base of all HTML websites into our code editors. In this course I will call this the **HTML skeleton** 💀
```
<html>
<head>
    <title>My first HTML document.</title>
</head>
<body style="background-color:red">
    <h1>Hello world, my name is Ashley.</h1>
    <p>I am a student at Texas State and I was born in <strong>Galveston, TX.</strong></p>
</body>
</html>
```
5. After typing the above HTML code into your Sublime document, select `File > Save`. *Pro tip: CMD + S will save your document also.* 
6. To preview our document, we will need to view it in a browser. Browsers are setup up to render HTML code.
7. Find the location of your index.html file on your computer. *MAC tip: If your file is located in "Documents", click the Finder icon (Smiling face in lower left) and click "Documents" located in the right sidebar of that window.*
8. Right click `index.html` and select `Open with > Google Chrome.`
9. Now marvel at your newly created web page.
