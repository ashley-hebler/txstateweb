# Images and Links in HTML

## Section 1 - Images
### Adding images to your website

Web browsers can read digital images with .jpg, .gif, .png, and .svg extensions. You can use images from a digital camera, create your own images in a program like Photoshop or Illustrator, scan photos or images or use images from other websites (but not copyrighted images). Images can be still or animated. We will have a future class on creating images.

#### Exercise 1
1. Find your desired image on your computer. Bring the image into the same directory as your index.html file.
2. In your index.html file, insert your **image tag**.
```html
<img src="imagename.jpg">
```
3. Preview your index.html file in your browser and ensure the image renders.
4. For the sake of organization, let's put all of our images in a separate folder. Move the images into a folder named, *images* still within the directory of your project.
5. Now the path of the image has changed and we'll need to update our code accordingly.<br/>
```html
<img src="images/imagename.jpg">
```

#### Image tag attributes
```html
<img src="file-source-of-the-image.jpg" alt="A dog playing fetch" width="300px" height="200px"
>
```
- **src**: This can be a path within your file directory or a URL, which points to a specific image on the web.
- **alt**: Using alt text also known as alt tags is a good practice for making your site accessible to visually impaired users. Google also checks for alt tags when crawling your site. When adding alt text, think of adding a description that would be helpful in the event the image didn't load.
- **width**: Width dimension of your image. This can be in pixels, ems, percentages, or be set to `auto`.
- **height**: Height dimension of your image. This can be in pixels, ems, percentages, or be set to `auto`.

##### Other image properties
You may want to create a nice border around your image or give it some white space so it isn't too close to the text on your page. This is where we would need CSS to add more rules to our image tag. For now, we will look at how to *inline* some style to your image.
```html
<img src="file-source-of-the-image.jpg" alt="This is what a screen reader or search engine spider will see." width="300px" height="200px" style="border: 1px solid black; margin: 10px"
>
```
Don't worry too much about what the colons and semicolons mean, we will discuss these in depth during the CSS lesson.

#### Exercise 2
1. Add an **alt** attribute to your image.
2. Add a **width** and **height** attribute in pixels. Does your image look skewed? Try adding `auto` to either height or width.
3. Add a **style** attribute to your image. Use the same syntax* you saw in the previous example.

**Syntax refers to the rules in which code is structured. We'll use this word often. For example, just like sentences need periods, an attribute needs to be wrapped in quotation marks to have proper syntax.*

##### Images as backgrounds
In some cases, you may want to add a background image to your `<body>` tag instead of a solid color.
You can make your own background images (in Photoshop, etc.) or you can find images to use as backgrounds all over the Web. To save an image from the Web, simply hold down the mouse button (or right click) on the image or background and use the Save command.
In the early days of the Web, designers used colorful backgrounds on their pages. As the novelty has worn off, most designers prefer to black text on white backgrounds (easier to read).
They use images and other elements to add color to the page. We will have many ways to add interest to a page with CSS.

#### Exercise 3
1. Go to https://subtlepatterns.com/. Find a pattern you like and download.
2. Find where the file downloaded on your computer (most likely the "Downloads" folder.)
3. Double click the file to unzip, then find the image in the new unzipped contents of the folder. For instance the weather pattern has a file named, `weather.png`
4. Move this image file into your images folders of your project directory.
5. Locate the opening body tag (`<body>`) and add that image as a background image. This would look like the following code:
```html
<body style="background: url('images/weather.png');">
```

#### More help on images and attributes associated with image tags:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img


## Section 2 - Links
### Adding links to your website


When you wrap the letter "a" in brackets, around any text, image or other element, this tells your browser to render that part of the page as a hyperlink to another page on the web. You can also use an `<a>` tag to link to files, email addresses, or a specific portion of the same page you're currently viewing.

Notice, when we added images, we didn't wrap them around other text; anchor elements, however, will need an opening and closing tag.


#### Exercise 4
##### Creating an external link

1. Type the following code anywhere within the body tags of your index.html file:
```html
<a href="http://www.txstate.edu/">Texas State University</a>
```
2. Next we are going to add an attribute to our link because we want to tell the browser to open the specified link in a new tab. Add the attribute, `target="_blank"` to your anchor element. * Hint: it can go before or after the `href` attribute.

#### Exercise 5
##### Creating links for page navigation

In order to help your visitor find other pages you've created on your site, you'll want to add links to help them navigate there.

1. First, we need to create a new page different from our index page, but in the same directory. Open a new file and add the following code to that new file. *Protip: You could copy and paste the contents of your index.html file to save the trouble of typing the HTML skeleton again.*
```html
<html>
	<head>
		<title>Student Bio Interests Page</title>
	</head>
	<body>
		<h1>Interests</h1>
		<a href="index.html">Back to homepage</a>
	</body>
</html>
```
3. Save the new page as `interests.html` and be sure to save the file in the same directory as your index.html file.
4. Back in your `index.html`, we're now going to create the first link of our navigation. Type the following code below the link you just created:
```html
<a href="interests.html">New Page</a>
```
5. Save index.html and refresh your browser.

#### Exercise 6
##### Using an image as an icon for a link
1. Create a new link in your index.html file. You can link it where ever you'd like. Ex:
```html
<a href="https://www.facebook.com/"></a>
```
2. Notice in our link there is nothing between the opening anchor element and the closing. This is where we can add an image tag. Go to http://iconmonstr.com/ and find an image that coincides with the URL you chose. Use the search feature to find an image.
3. When you find an image you like, go to the image's page and select "PNG". Check the box to agree to the License Agreement and select download.
4. Locate the image and place it in the images folder of your project directory.
5. Add an image tag, just like how you added it in Exercise 1 only this time, it will need to be placed between the opening`<a>` and the closing `</a>`.
6. Your final link should look something like this:
```html
<a href="https://www.facebook.com/"><img src="images/facebook.png" alt="Facebook"></a>
```

When we discussed URLs and domains, we talked about how some links don't begin with `http`. Other links can start with `mailto`. These links are designed to open in the end user's email client. Think about when you sometimes click a contact us link and it tries to open Outlook or the Mail app on a Mac.

#### Exercise 7
##### Creating a mailto: link
1. Type the following code in your index.html file. Use your Texas State email address instead.
```html
<a href= "mailto:myemail@txstate.edu">myemail@txstate.edu</a>
```

Mailto links aren't as popular as they once were, as people now use Web-based email services
like Gmail. Make sure you include the email address as the link text so it can be easily copied
and pasted.

#### More help on anchor elements and attributes associated with them:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a













