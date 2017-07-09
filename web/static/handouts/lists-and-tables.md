# Lists, Tables, and Comments

## Section 1 - Lists
Lists are used in menus, navigation, and anywhere on your website where you're grouping together items of a similar topics or classifications.

They can be styled with numbers, bullets, or even custom images with some CSS magic, but we'll get to that later. There are two types of lists: **ordered** and **unordered**

### Ordered Lists
An ordered list is a list formatted with a specific order - typically numerical. It begins with an opening `<ol>` and ends with a closing `</ol>`. Every item within the list is wrapped in an opening `<li>` and closing `</li>`.

#### Exercise 1
##### Create an ordered list
1. Type the following code into your code editor:
```html
<ol>
 <li>Dogs</li>
 <li>Cats</li>
 <li>Bears</li>
</ol>
```

Will appear like this in browser:

1. Dogs
2. Cats
3. Bears

#### Ordered lists attributes
```html
<ol style="list-style-type:lower-roman" start="3">
 <li>Dogs</li>
 <li>Cats</li>
 <li>Bears</li>
</ol>
```
- **list-style-type**: This is a CSS property, so we have to use it with a `style` attribute. This specifies the appearance of the items in the list. We set the style on the parent `<ol>` so it affects every item in the list. Other values that offer ordering for `list-style-type` include the following:
	+ decimal-leading-zero
	+ lower-roman
	+ upper-roman
	+ lower-greek
	+ lower-alpha
	+ lower-latin
	+ upper-alpha
	+ upper-latin
- **start**: The start attribute designates the starting point of the first item in the list. If your list is alphabetical and you want to start with "C", you would still use an integer value i.e. "3".

#### Exercise 2
##### Change the default appearance to your ordered list
1. Add `style="list-style-type:lower-roman"` to the opening `<ol>` in your list.
2. Try a swapping `lower-roman` out with another value from the list-style-type options listed above.
3. Add a `start` attribute and give it a value of "3".

### Unordered Lists
As the name implies an unordered list, operates exactly like an ordered list only the formatting doesn't imply an order. Instead of `<ol>`, we'll use `<ul>`. The block of code below will render the text below it:
```html
<ul>
 <li>Dogs</li>
 <li>Cats</li>
 <li>Bears</li>
</ul>
```

- Dogs
- Cats
- Bears

#### Unordered lists attributes
```html
<ul style="list-style-type:square">
 <li>Dogs</li>
 <li>Cats</li>
 <li>Bears</li>
</ul>
```
- **list-style-type**: This is a CSS property, so we have to use it with a `style` attribute. This specifies the appearance of the items in the list. We set the style on the parent `<ul>` so it affects every item in the list. Other values which don't specify order for `list-style-type` include the following:
	+ disc
	+ circle
	+ square

## Section 2 - Tables

Tables are used for tabular data. In the early days of the web, designers would create entire websites using table alignments. These days we use tables to display data only.

Tables consist of three main elements.
- **`<table>`**: Parent wrapper and begins the layout of the table
- **`<tr>`**: Table row defines a row of cells
- **`<td>`**: Table cell holds a data value

The block of code below will render the table below it:
```html
<table>
	<tr>
		<td><strong>My favorite TV Shows</strong></td>
		<td><strong>My favorite Musicians</strong></td>
	</tr>
	<tr>
		<td>Bob's Burgers</td>
	 	<td>Young The Giant</td>
	</tr>
	<tr>
		<td>The Office</td>
		<td>Best Coast</td>
	<tr>
		<td>Broad City</td>
		<td>Shovels and Rope</td>
	</tr>
</table>
```
<table>
	<tr>
		<td><b>My favorite TV Shows</b></td>
		<td><b>My favorite Musicians</b></td>
	</tr>
	<tr>
		<td>Bob's Burgers</td>
		<td>Young The Giant</td>
	</tr>
	<tr>
		<td>The Office</td>
		<td>Best Coast</td>
	<tr>
		<td>Broad City</td>
		<td>Shovels and Rope</td>
	</tr>
</table>

#### Table attributes
```html
<table style="border: 1px solid gray;border-collapse: collapse;">
	<tr>
		<td style="border: 1px solid gray;padding:20px"><strong>My favorite TV Shows</strong></td>
		<td style="border: 1px solid gray;padding:20px"><strong>My favorite Musicians</strong></td>
	</tr>
	<tr>
		<td>Bob's Burgers</td>
		<td>Young The Giant</td>
	</tr>
</table>
```
Tables can have a variety of attributes, but these are some of the more common  properties associated with tables. These are all CSS properties so we will use them in a `style=""` attribute like we have in previous exercises.
- **`border`**: The first value in border is the width, the second is style of the line, and the last is the color.
- **`border-collapse`**: Border collapse determines the spacing in your table borders. Usually the `border-collapse: collapse` setting is ideal. For more on border collapse checkout out [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse).
- **`padding`**: Padding is your friend in web design. Padding adds white-space to an element and can help your table from looking cluttered.

#### Exercise 3
##### Styling a table
1. Copy the above table with the new style attributes into your index.html file and preview it in your browser.
2. Change border-collapse to `border-collapse: separate;` and notice the difference in border style.

## Section 3 - Comments

Sometimes you'll want to make notes in your code to keep track of where a tag begins and ends or what content follows an opening tag. Comments are used to organize your code and make it more readable for other developers to look at your code and understand what it's doing. These notes are invisible in the browser and unless your users inspect your code, they will never see comments.

**Comments begin with `<!--` and end with `-->`.** In this example the words, "and end with" would be wrapped in a comment.

This is how a comment would look in your code:
```
<!-- Begin unordered list -->
	<ul>
		<li>Apples</li>
		<li>Oranges</li>
		<li>Grapes</li>
	</ul>
<!-- End unordered list -->
```

#### Exercise 4
##### Adding comments
1. Refer to all of your HTML you've just added to your `index.html` file. For each exercise we've completed today, label the name, number, or some identifier, which will help you find it again. Add these labels in the comment syntax used above.




