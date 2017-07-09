# Creating a carousel with Bootstrap
## Follow the following steps to integrate a carousel into your site.
<p>
    We will be building a bootstrap carousel. To get an idea of what we mean when we say carousel, <a href="https://codepen.io/ahebler/full/vZVvGy/">preview the demo on codepen</a>.
</p>

1. Open up your template.
Scroll to the bottom of your index.html page. Ensure the following script includes are present. This ensures you have the JavaSrcipt dependancies for the carousel component.
```
<!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>
<!-- Bootstrap Core JavaScript -->
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
```

2. Now that our JS is prepared, let's add the HTML to carousel component. To use any component, you must reference Bootstrap's documentation. Go to http://getbootstrap.com/javascript/#carousel and copy the HTML to your clipboard.

3. Paste the code in the part of your `index.html` template where you want your carousel to show up.

4. You should be able to click the arrows to seek through each slide. The only part you're missing now is your own images.

5. Add the images you brought in to class today to the images folder of your project.

6. Open Photoshop and make all of your images the same dimensions so that your carousel doesn't jump around when you use the images inline (as opposed to as background images). Then save each of your images for web (File > Export > Save for Web).

7. Locate the portion of the HTML in the carousel markup that looks like the following:
```
<div class="item active">
    <img src="..." alt="...">
    <div class="carousel-caption">
        ...
    </div>
</div>
```
This portion is the code for your first slide. Each slide is wrapped in an `item` class. For every div named `item` in `carousel-inner`, a slide will generate.

8. Add your image src, alt attribute, and photo caption to your slides.

9. Repeat step 9 and 10, but this time remove the active class from your html for all subsequent slides. Do this for the rest of your images. You should have **five** slides total.

10. Work on your building out your template for the remainder of the class period.


