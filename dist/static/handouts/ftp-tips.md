# FTP Quick Guide


Five tips for flawless file transfers.

## 1. Keep your naming web-friendly.
### File names on your server should:
- Always use lowercase letters
- Not contain spaces
- Use underscores (`_`) or hyphens (`-`) to separate words

### Bad names
[![N|Solid](http://webdesign.ashleyhebler.com/screenshots/bad-names.png)](http://webdesign.ashleyhebler.com/screenshots/bad-names.png)

### Good names
[![N|Solid](http://webdesign.ashleyhebler.com/screenshots/good-names.png)](http://webdesign.ashleyhebler.com/screenshots/good-names.png)

## 2. Make sure you're saving to `public_html`.
When you open a connection via Fetch, FileZilla, or any other FTP client, you'll most likely be in the **root** of your server's folder directory. You'll want to make sure you're putting all of your public facing files in your `public_html` folder.

[![N|Solid](http://webdesign.ashleyhebler.com/screenshots/public_html.png)](http://webdesign.ashleyhebler.com/screenshots/public_html.png)

## 3. Always use `index.html` for your homepage.
You can get away with not naming your homepage `index.html`, but you'll have to configure a setting on your server to accurately specify the correct file for the homepage. Otherwise, most servers have a hierarchy of which names get priority for the homepage.
For example, [this hosting company](https://support.tigertech.net/index-file-names) looks for your homepage in this order:
```
index.html
index.htm
index.shtml
index.php
index.php5
index.php4
index.php3
index.cgi
default.html
default.htm
home.html
home.htm
```

**To keep it simple, just stick to index.html**

## 4. If you're in a bind, use the file manager on Reclaim.
Having trouble connecting to your server with a deadline approaching? You can login to Reclaim from any computer and go to `cPanel > File Manager` to both download and upload your files. It can be tedious, but helpful if the machine you're working on goes down.

Also, Reclaim has a great support staff who are very quick to respond if you drop them a line.

## 5. Organize different sites on your server with folders.
As we move onto new projects in this class like Project 3, you'll want to create a new folder in your server's file directory to separate your new site from your old site.
### Example:
1. Create a folder in your `public_html` folder called, `new-site`
2. Add an `index.html` file to the contents of the `new-site` folder.
3. Now `http://yoursite.com/new-site` displays the homepage of that folder, which is your newly created `index.html` file.
4. Build out your new site in that folder just as you did for the last project - keeping a close eye on where you're saving. Don't get mixed up by saving to the old location instead.

[![N|Solid](http://webdesign.ashleyhebler.com/screenshots/new-projects.png)](http://webdesign.ashleyhebler.com/screenshots/new-projects.png)






