import Vue from 'vue'

var assignmentPath = '/assignments/';
var tutorialPath = '/tutorials/';
var rubricPath = '/static/rubrics/rubric-';
var rubricExt = '.xlsx';
function genRubric(num) {
  return rubricPath+num+rubricExt;
}
export default {
	assignments:[
	  // Project 1
	    {
	      name: 'Project 1',
	      slug: 'project-1',
	      image: true,
	      subname: 'Student Bio Website',
	      linked: true,
	      url: assignmentPath+'project-1',
	      percent: '10',
	      objective: 'Use the basics of HTML to make a personal Web site.',
	      desc: 'Set up a site with at least four pages with bio info, links and one image on each page. One page will be an Assignments or Portfolio page (or similar) that will hold links to other projects.',
	      rubric: genRubric('1'),
	      skills: ['intermediate HTML'],
	      requirements:[
	      		'You must code this assignment entirely in html.',
	      		'Use Text Wrangler (or other html editor) &nbsp;to insert the proper html tags. Use appropriate headings to structure each of your pages.',
	      		'Site must have a total of at least four pages. Pages can represent &nbsp;separate areas of your personal site, like home, interests,&nbsp;contact.',
	      		'One page will be an assignment page that will link to all other&nbsp;projects.',
	      		'Have appropriate content on each page (exception is the Assignments Page, you will add to that as you create new projects). Each page should have at least a couple of paragraphs of content.',
	      		'Decide on an appropriate navigation strategy.&nbsp;Just use text links in a list.',
	      		'Include one photo. Don’t worry about modifying the image in Photoshop yet. We will do that for Project 2, and you can include more photos at that time.',
	      		'Include at least one table on the site.',
	      		'Include at least three external links to sites of interest.',
	      		'Make sure you include your email address somewhere on the site (do not have to use a mailto link, but can if you wish – just make sure the text on the page is your actual email address)',
	      		'Add a date to the bottom of the home page. Update this every&nbsp;time you make a change.',
	      		'Make sure you save the pages with .html extension.',
	      		'Upload all associated files using Fetch to your Web site.',
	      ]
	    },
	  // CSS Exercise
	    {
	      name: 'CSS Exercise',
	      slug: 'css-exercise',
	      image: false,
	      subname: 'Student Bio Website <em>Redesign</em>',
	      linked: false,
	      url: assignmentPath+'css-exercise',
	      percent: '5',
	      desc: ' Apply CSS to Project 1 to create design and layout of the page',
	      rubric: genRubric('1'),
	      skills: ['CSS']
	    },
	  // Project 2
	    {
	      name: 'Project 2',
	      slug: 'project-2',
	      image: false,
	      subname: 'Student Bio Website <em>Redesign 2</em>',
	      linked: true,
	      image: false,
	      url: assignmentPath+'project-2',
	      percent: '10',
	      objective:'Use HTML/CSS and Photoshop to redesign the personal site you made with html. You will apply Responsive Design techniques.',
	      desc: ' Use HTML/CSS, Photoshop and Responsive Design, to completely redesign the personal site you made with html.',
	      rubric: genRubric('2'),
	      skills: ['HTML', 'CSS', 'photoshop', 'responsive design'],
	      requirements:[
	      		'You will use the html and css with html&nbsp;editor (Text Wrangler or other), and the graphics program,&nbsp;Photoshop, for this project.',
	      		'For this and all subsequent projects, you must attach a stylesheet to each&nbsp;page.',
	      		'Use divs for formatting each page.',
	      		'Use responsive design techniques for fluid width, fluid images, media queries and viewport meta tag.',
	      		'Site must have a total of at least five pages. Pages can represent&nbsp;separate areas of the site, like home, about, contact, links,&nbsp;etc. You must add one additional page to the site that you did&nbsp;not already have, something to do with a specific hobby or interest.',
	      		'Decide on an appropriate navigation strategy. Use use text&nbsp;links in a list with a hover.',
	      		'Include at least one or more appropriate photos or graphics.<br>Photos must be optimized with Photoshop.',
	      		'Design your own graphics, including a site logo, in Photoshop.',
	      		'Include at least three external links to relevant sites.',
	      		'Make sure you include your email address&nbsp;somewhere in site.',
	      		'Add a date to the bottom of the home page. Update this every&nbsp;time you make a change.',
	      		'Make sure you save the page with a .html extension.',
	      		'Upload all associated files to the main directory of your&nbsp;Web site (this will overwrite the files from the first project)',
	      ]
	    },
	  // Toubleshooting Quiz
	    {
	      name: 'Troubleshooting Quiz',
	      slug: 'troubleshooting-quiz',
	      image: false,
	      subname: '',
	      linked: false,
	      url: assignmentPath+'css-exercise',
	      percent: '5',
	      desc: 'Fix problems on an existing page to demonstrate code knowledge.',
	      rubric: genRubric('1'),
	      skills: ['troubleshooting HTML', 'CSS', 'responsive design']
	    },
	  // Project 3
	    {
	      name: 'Project 3',
	      slug: 'project-3',
	      image: false,
	      subname: 'Hobby or organization site</em>',
	      linked: true,
	      url: assignmentPath+'project-3',
	      percent: '10',
	      objective: 'Use Bootstrap to make a site for a hobby or organization.',
	      desc: 'Set up a Web site for a hobby or organization that you are affiliated (4 pages total). Must be a new site, not a redesign of an existing site. Use responsive design css.',
	      rubric: genRubric('3'),
	      skills: ['Bootstrap', 'Photoshop', 'responsive design'],
	      requirements: [
	      	'You will use the the Web development framework Bootstrap to create your site. You will also use&nbsp;Photoshop in designing this project.',
	      	'Use a stylesheet. Bootstrap will provide a stylesheet, but you will make your changes in a custom stylesheet, so as to not modify the original Bootstrap css. You can use my bootstrap template to get started or start from scratch with the basic Bootstrap layout. See the zip file on the course outline.',
	      	'All content must be in a div or appropriate HTML5 element. See the Bootstrap Grid system to understand how to accomplish your desired layout.',
	      	'Site must have a total of at least four pages. Pages can represent separate areas of the site, like home, about, contact, links, etc. You can also use the “one-page” method where all your sections are parts of one page with navigation via anchors.',
	      	'Decide on an appropriate navigation strategy. Use bootstraps &lt;nav&gt; to design your navigation.',
	      	'Include at least one or more appropriate photos or graphics. You should&nbsp;include a site logo or something unique on the introductory page.',
	      	'Make a Carousel for a photo slideshow. Refer to Carousel Tutorial for instructions.',
	      	'Include at least three external links to relevant sites.',
	      	'Make sure you include your email address and date at an appropriate location on the&nbsp;site.',
	      	'Make sure you save all pages with a .html extension.',
	      	'Upload all associated files and folders to your&nbsp;Web site. Make a new folder and subdomain for this project.',
	      	'Make sure you have a link from your Assignment page to the home page of the new folder.',
	      ]
	    },
	  // iMovie Exercise
	    {
	      name: 'iMovie Exercise',
	      slug: 'project-imovie',
	      image: false,
	      subname: '',
	      linked: true,
	      url: assignmentPath+'project-imovie',
	      percent: '10',
	      objective: 'Use iMovie to create a short video including your own clips.',
	      desc: 'Apply basic video editing concepts like cropping, splitting clips, adding audio, transitions, so you can use them in your final project.',
	      rubric: genRubric('3'),
	      skills: ['iMovie', 'basic video editing'],
	      requirements: [
	      	'Use the features of iMovie discussed in class and on the tutorial to create a short movie',
	      	'Bring clips to class. Shoot interviews and b-roll. Any topic is fine for this exercise.',
	      	'Open a new Project in iMovie. Import the clips to a new event.',
	      	'In iMovie, use the handout and tutorial to include the following',
	      	'At least 3 clips edited properly',
	      	'B-roll (cutaway)&nbsp;while the audio from another clip continues',
	      	'At least one transition',
	      	'At least one title.',
	      	'Any other features you’d like to include',
	      	'Video should be no longer than 90 seconds in total',
	      	'When you are finished with the video, choose Share and save to a file.',
	      	'Upload to YouTube. You can use an existing Google account to start a YouTube account, or make a new one.',
	      	'Find the embed code for your video.',
	      	'Embed this video on your Assignment Page and re-fetch it to your public_html folder.',
	      	'Test everything!',
	      ]
	    },
	  // Final Project
	    {
	      name: 'Final Project',
	      slug: 'project-final',
	      image: false,
	      subname: 'Final Project & Draft',
	      linked: true,
	      url: assignmentPath+'project-final',
	      percent: '25',
	      objective: 'Use all the skills gained during the course to complete an extensive, multimedia reporting project. You will use WordPress as a CMS, iMovie to edit video and YouTube to host it, WP Plugins to add desired functionality and any other tools we covered.',
	      desc: 'Use WordPress to design your Final Project – a multimedia reporting site.',
	      rubric: genRubric('3'),
	      skills: [ 'use all or any of the html/css', 'design', 'multimedia', 'framework skills that best fit nature of reporting project','Content Management Systems'],
	      requirements: [
	      	'<span class="highlight highlight--alt"> <svg class="icon"><use xlink:href="#alert"></use></svg>A draft of the interface (the basic WordPress site design) of the final project will be due <strong>two weeks</strong> before the end of the semester.</span>',
	      	'Select a topic that lends toward an extensive use of your skills. This should be a journalistic reporting project. Arrange appropriate interviews, photos, or recording as necessary. Contact appropriate sources.',
	      	'Create a complete Web site using WordPress as CMS. Find a good Bootstrap-driven theme to start and then customize.',
	      	'Install the site under a subdomain. See instructions in handout.',
	      	'Your site must include at least one video (or more) and one photo slideshow (find a theme that has a slideshow or use a plugin). Extra consideration will be made if you include a data element (Google Maps, Google Charts, Wordle, Chartle, etc.)',
	      	'Include at least 3 plugins/widgets – Photo content slider, Twitter widget, social sharing, etc.',
	      	'Carefully plan sections and organize your time to allow for creating appropriate graphics, obtain photos and other information.',
	      	'The site should include at least 4 different sections, represented by separate pages.',
	      	'The emphasis on this project is new information and reporting. It should not be a hobby, portfolio, personal or promotional site. Graphics and photography should also be your original work.',
	      	'Make sure your contact info and date is available on the site. Pay careful attention to any other detail that we have discussed over the semester (good to review past project critiques).',
	      	'Make sure project is linked to your assignment page.',
	      ]
	    },
	],
	participation:[
	  // News Report
	    {
	      name: 'Short News Participation',
	      subname: 'Scheduled in outline',
	      linked: false,
	      url: '',
	      percent: '5',
	      desc: 'You’ll be assigned a day to post a news item, and the class will comment',
	    },
	  // Slack and other
	    {
	      name: 'Slack Posts and Other Assignments',
	      subname: 'Participation',
	      linked: false,
	      url: '',
	      percent: '10',
	      desc: 'We’ll have slack discussions throughout the semester and you’ll be expected to participate and graded accordingly.',
	    },
	  // Attendance and class participation
	    {
	      name: 'Attendance and Class Participation',
	      subname: 'Ongoing throughout semester',
	      linked: false,
	      url: '',
	      percent: '10',
	      desc: 'Attendance is required in this course. See <a href="/syllabus"><em>Late Assignments and Attendance</em></a> in the syllabus for details.',
	    },
	],
	outline:[
	  // Day 1
	    {
	      next: true,
	      date: '2017-01-19',
	      dateLabel: 'day-1',
	      dateNav: '#day-1',
	      student: 'Ashley',
	      topics: [
	        'Review Syllabus, Schedule, Introductions',
	        'History of Internet & Web',
	        'Searching the Web, How Web Works'
	      ],
	      readings: [
	        {
	          title: 'Links for today’s discussion',
	          links: [
	            {
	            url: 'http://visual.ly/evolution-web?view=true',
	            name: 'The Evolution of the Web'
	            },
	            {
	            url: 'http://www.matisse.net/files/glossary.html',
	            name: 'Glossary of Internet Terms'
	            },
	            {
	            url: 'http://mashable.com/2012/08/22/the-internet-a-decade-later/',
	            name: 'The Internet: A Decade Later'
	            },
	            {
	            url: 'http://www.forbes.com/sites/jaysondemers/2016/04/18/7-predictions-for-how-the-internet-will-change-over-the-next-15-years/#5581e2a478dc',
	            name: '7 Predictions for How the Internet Will Change Over the Next 15 Years - Forbes 2016'
	            },
	            {
	            url: 'http://www.kpcb.com/internet-trends',
	            name: 'KPCB Internet Trends - 2016'
	            },
	            {
	            url: 'https://vimeo.com/113124865',
	            name: 'History of the Internet'
	            },
	            {
	            url: 'https://infopeople.org/content/best-search-tools-chart',
	            name: 'InfoPeople Search Tools Chart'
	            },
	            {
	            url: 'http://www.learnthenet.com/animated-internet/how-search-engines-work/',
	            name: 'How Search Engines Work'
	            },
	            {
	            url: 'http://www.learnthenet.com/animated-internet/how-the-web-works/index.php',
	            name: 'How The Web Works'
	            },
	            {
	              url: 'https://slides.com/ashleyrosehebler/using-the-web/',
	              'name': 'Slide deck for today'
	            }
	          ],
	          assignmentsOut: [
	            '<strong>WATCH:</strong> <a href="https://www.youtube.com/watch?v=SDucuVi5FrI" target="_blank">The Internet: Behind the Web.</a>',
	            '<strong>CREATE</strong> a post on our Slack discussion: <em>What was most interesting, what didn’t you know before watching?</em>',
	            '<strong>WATCH:</strong> All the <a href="http://codeactually.com/html.html" target="_blank">HTML Tutorials on CodeActually.com.</a> We’ll review in class.'
	          ]
	        }
	      ],
	      due: '',
	    },
	  // Day 2
	    {
	      next: false,
	      date: '2017-01-26',
	      dateLabel: 'day-2',
	      dateNav: '#day-2',
	      student: 'TBA',
	      topics: [
	        'Basic Web Design',
	      ],
	      readings: [
	        {
	          title: 'Handouts and links for today',
	          links: [
	            {
	            url: 'http://cindyroyal.com/webdesign/handouts/basichtml.pdf',
	            name: 'Intro. HTML handout'
	            },
	            {
	            url: 'http://cindyroyal.com/webdesign/handouts/htmlll.pdf',
	            name: 'Text Formatting, Images and Links'
	            },
	            {
	            url: 'http://www.cindyroyal.com/webdesign/handouts/lists_tables.pdf',
	            name: 'Lists and Tables handout'
	            },
	            {
	            url: 'https://reclaimhosting.com/',
	            name: 'Web Hosting – Reclaim Hosting.  We’ll discuss in class.'
	            },
	          ],
	          assignmentsIn: [
	            '<strong>WORK</strong> on personal site – Project 1',
	            '<strong>READ:</strong> <a href="http://towknight.org/research/superpowers/" target="_blank">Superpowers The digital skills media leaders say newsrooms need going forward.</a>',
	            '<strong>CREATE</strong> Slack post in <a target="_blank" href="https://webdesigntxst.slack.com/?redir=%2Fmessages%2Fsuperpowers%2F">#superpowers</a><br/>Discussion topics:<br/><em>What do you think are the most important skills for communicators? What do you think about the results of this report in regard to your own career?</em> '
	          ]
	        }
	      ]
	    },
	  // Day 3
	    {
	      next: false,
	      date: '2017-02-02',
	      dateLabel: 'day-3',
	      dateNav: '#day-3',
	      student: 'TBA',
	      topics: [
	        'Basic Web Design',
	      ],
	      readings: [
	        {
	          title: 'Handouts and links for today',
	          links: [
	            {
	            url: 'http://cindyroyal.com/webdesign/handouts/basichtml.pdf',
	            name: 'Intro. HTML handout'
	            },
	            {
	            url: 'http://cindyroyal.com/webdesign/handouts/htmlll.pdf',
	            name: 'Text Formatting, Images and Links'
	            },
	            {
	            url: 'http://www.cindyroyal.com/webdesign/handouts/lists_tables.pdf',
	            name: 'Lists and Tables handout'
	            },
	            {
	            url: 'https://reclaimhosting.com/',
	            name: 'Web Hosting – Reclaim Hosting.  We’ll discuss in class.'
	            },
	          ],
	          assignmentsIn: [
	            '<strong>WORK</strong> on personal site – Project 1',
	            '<strong>READ:</strong> <a href="http://towknight.org/research/superpowers/" target="_blank">Superpowers The digital skills media leaders say newsrooms need going forward.</a>',
	            '<strong>CREATE</strong> Slack post in <a target="_blank" href="https://webdesigntxst.slack.com/?redir=%2Fmessages%2Fsuperpowers%2F">#superpowers</a><br/>Discussion topics:<br/><em>What do you think are the most important skills for communicators? What do you think about the results of this report in regard to your own career?</em> '
	          ]
	        }
	      ],
	      due: [
	        'Test Due',
	        'Test due 2'
	      ],
	    }
	],
	tutorials:[
		// Getting started
			{
				title: 'Getting Started',
				subtitle: '',
				path: tutorialPath+'getting-started',
				slug:'getting-started',
				videos:[
					{
						title: 'This tutorial will get you started with setting up your production environment to do basic html.',
						url: 'https://www.youtube.com/embed/kI6Kx2QozD8'
					}
				]
			},
		// HTML
			{
				title: 'HTML Tutorials',
				subtitle: 'This series of tutorials goes over basic html properties and attributes.',
				path: tutorialPath+'html',
				slug:'html',
				videos:[
					{
						title: 'Basic HTML',
						url: 'https://www.youtube.com/embed/UdqY4pzCYws'
					},
					{
						title: 'Text Formatting, Images and Links',
						url: 'https://www.youtube.com/embed/u2xrSjbEsII'
					},
					{
						title: 'Lists and Tables',
						url: 'https://www.youtube.com/embed/uSv8WOLDXPY'
					},
					{
						title: 'Navigation and Pages',
						url: 'https://www.youtube.com/embed/09J78U59AC4'
					}
				]
			},
		// File Transfer – FTP
			{
				title: 'File Transfer – FTP',
				subtitle: 'This tutorial will explain options for publishing (FTP) your completed files to the Web.',
				path: tutorialPath+'ftp',
				slug:'ftp',
				videos:[
					{
						title: 'Publishing Files to the Web Using FTP',
						url: 'https://www.youtube.com/embed/0AJ1kdE_jJI'
					}
				]
			},
		// HTML Troubleshooting
			{
				title: 'HTML Troubleshooting',
				subtitle: 'This tutorial will give you tips for solving basic problems with your website.',
				path: tutorialPath+'html-troubleshooting',
				slug:'html-troubleshooting',
				videos:[
					{
						title: 'HTML Troubleshooting',
						url: 'https://www.youtube.com/embed/imqv-W0REH0'
					}
				]
			},
		// CSS
			{
				title: 'CSS',
				subtitle: '',
				path: tutorialPath+'css',
				slug:'css',
				videos:[
					{
						title: 'Applying CSS',
						url: 'https://www.youtube.com/embed/DjcgiCV-Ep0'
					}
				]
			},
		// Photoshop
			{
				title: 'Photoshop',
				subtitle: 'This tutorial goes over the basics of Photoshop for editing photos and creating graphics.',
				path: tutorialPath+'photoshop',
				slug:'photoshop',
				videos:[
					{
						title: 'Working with Photoshop',
						url: 'https://www.youtube.com/embed/wZz8L2wrU_Y'
					}
				]
			},
		// Responsive Design
			{
				title: 'Responsive Web Design',
				subtitle: '',
				path: tutorialPath+'rwd',
				slug:'rwd',
				videos:[
					{
						title: 'Responsive web design',
						url: '//www.slideshare.net/slideshow/embed_code/key/zPKF5zVCakUriP'
					}
				]
			},
		// Bootstrap
			{
				title: 'Bootstrap',
				subtitle: 'Build your site with Bootstrap',
				path: tutorialPath+'bootstrap',
				slug:'bootstrap',
				videos:[
					{
						title: 'Getting Started with Bootstrap',
						url: 'https://www.youtube.com/embed/NIdCaBJ3g90'
					},
					{
						title: 'Using a Bootstrap Template',
						url: 'https://www.youtube.com/embed/uDGln5DdR7o'
					},
					{
						title: 'Setting Up a Photo Carousel on Bootstrap',
						url: 'https://www.youtube.com/embed/05P9V5M2hrI'
					},
					{
						title: 'Adding effects: responsive images, parallax background scrolling and scroll-to-anchor effects.',
						url: 'https://www.youtube.com/embed/RGJ9Nkmcnu0'
					}
				]
			},
		// CSS
			{
				title: 'iMovie',
				subtitle: '',
				path: tutorialPath+'imovie',
				slug:'imovie',
				videos:[
					{
						title: 'iMovie Tutorial – video editing',
						url: 'https://www.youtube.com/embed/u-zwaRjhG7c'
					}
				]
			},
		// Wordpress/Bootstrap
			{
				title: 'WordPress/Bootstrap',
				subtitle: '',
				path: tutorialPath+'wp-bootstrap',
				slug:'wp-bootstrap',
				videos:[
					{
						title: 'WordPress Plugins – Easy Bootstrap Shortcode & Easy Smooth Scroll Links',
						url: 'https://www.youtube.com/embed/uiehET69ZkE'
					}
				]
			},
	],
	students:[
		{
			name: 'Student Name',
			url:'/',
		}
	]
}


// SVG include
  ;(function(window, document) {
      'use strict';

      var file = '/static/svg.svg',
          revision = 3;

      if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect)
          return true;

      var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
          request,
          data,
          insertIT = function() {
              document.body.insertAdjacentHTML('afterbegin', data);
          },
          insert = function() {
              if (document.body) insertIT();
              else document.addEventListener('DOMContentLoaded', insertIT);
          };

      if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
          // data = localStorage.getItem('inlineSVGdata');
          if (data) {
              insert();
              return true;
          }
      }

      try {
          request = new XMLHttpRequest();
          request.open('GET', file, true);
          request.onload = function() {
              if (request.status >= 200 && request.status < 400) {
                  data = request.responseText;
                  insert();
                  if (isLocalStorage) {
                      localStorage.setItem('inlineSVGdata', data);
                      localStorage.setItem('inlineSVGrev', revision);
                  }
              }
          }
          request.send();
      } catch (e) {}
  }(window, document));


