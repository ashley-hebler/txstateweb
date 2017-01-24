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
	      rubric: '',
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
	      rubric: '',
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
	      rubric: '',
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
	      rubric: '',
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
	      rubric: '',
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
	      rubric: '',
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
		// Day 1 1-19 - no news
		{
		  next: true,
		  date: '2017-01-19',
		  dateLabel: 'day-1',
		  dateNav: '#day-1',
		  student: [],
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
		      	  url: 'https://slides.com/ashleyrosehebler/using-the-web/',
		      	  'name': 'Slide deck for today'
		      	},
		        {
		        url: 'http://visual.ly/evolution-web?view=true',
		        name: 'The Evolution of the Web'
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
		        }
		      ],
		      assignmentsIn: [
		      '<strong>INTRO</strong> to using <a href="http://www.barebones.com/products/textwrangler/">TextWrangler</a>',
		      '<strong>WORK</strong> on handout – <a href="http://webdes.cary-anne.com/wp-content/uploads/2013/08/basichtml.pdf">Introduction to HTML</a>',
		      ],
		      assignmentsOut: [
		        '<strong>WATCH:</strong> <a href="https://www.youtube.com/watch?v=SDucuVi5FrI" target="_blank">The Internet: Behind the Web.</a>',
		        '<strong>CREATE</strong> a post on our <a href="https://web-txstate.slack.com/messages/general/">Slack discussion in the #general channel: </a><em>What was most interesting, what didn’t you know before watching?</em>',
		        '<strong>WATCH:</strong> All the <a href="http://codeactually.com/html.html" target="_blank">HTML Tutorials on CodeActually.com.</a> We’ll review in class.'
		      ]
		    }
		  ],
		  due: '',
		},
		// Day 2 1-26
		{
		  next: false,
		  date: '2017-01-26',
		  dateLabel: 'day-2',
		  dateNav: '#day-2',
		  student: ['Ashley'],
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
					url: '/static/images-and-links.pdf',
					name: 'Images and Links'
					},
					{
					url: '/static/lists-tables-comments.pdf',
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
				],
				assignmentsOut: [
					'<strong>WORK</strong> on personal site <strong>outside</strong> of class. <em>You will need to be ready to upload your site by the end of next class</em>'
				]
		    }
		  ]
		},
		// Day 3 2-2
		{
			next: false,
			date: '2017-02-02',
			dateLabel: 'day-3',
			dateNav: '#day-3',
			student: ['Victoria', 'Tunde'],
			topics: [
				'HTML continued',
			],
			readings: [
			{
		  	  	title: 'Publishing Your Site',
		  	  	links: [
		  			{
		  			url: 'http://www.cindyroyal.com/webdesign/handouts/fetch.pdf',
		  			name: 'Uploading Files handout'
		  			},
		  			{
		  			url: 'http://webdesign.cindyroyal.net/setting-up-hosting-and-transferring-files/',
		  			name: 'Setting Up Hosting and Transferring Files'
		  			},
		  	  	],
				assignmentsIn: [
					'<strong>SETUP</strong> your Reclaim Hosting account with domain',
				],
				assignmentsOut: [
					'<strong>WATCH:</strong> <a href="/tutorials/css">CSS</a> and <a href="/tutorials/photoshop">Photoshop</a> tutorials',
				]
			}
			],
			due: [
				'<a href="/assignments/project-1">Project 1 - Student Bio Website</a>'
			],
		},
		// Day 4 2-9
		{
			next: false,
			date: '2017-02-09',
			dateLabel: 'day-4',
			dateNav: '#day-4',
			student: ['Sidney', 'Vianey'],
			topics: [
				'Cascading Stylesheets (CSS) for formatting a website',
			],
			readings: [
			{
			  	title: 'Today you’ll spice up your sites with some CSS! Handouts and examples are below:',
				links: [
					{
					url: 'http://www.cindyroyal.com/webdesign/css/style.css',
					name: 'Sample stylesheet 1'
					},
					{
					url: 'http://www.cindyroyal.com/webdesign/css/style2.css',
					name: 'Sample stylesheet 2'
					},
					{
					url: 'http://www.cindyroyal.com/webdesign/handouts/style.pdf',
					name: 'Stylesheet Handout'
					},
					{
					url: 'http://www.cindyroyal.com/webdesign/handouts/css.pdf',
					name: 'CSS Properties Handout'
					},
					{
					url: 'http://www.cindyroyal.com/webdesign/handouts/photoshop.pdf',
					name: 'Intro. to Photoshop'
					},
					{
					url: 'https://css-tricks.com/almanac/',
					name: 'CSS Tricks Almanac'
					},
					{
					url: 'http://cssreference.io/',
					name: 'Searchable CSS properties with visuals'
					},
				],
				assignmentsIn: [
					'<strong>CSS Exercise:</strong> Apply CSS for graphics and layout to your HTML site.'
				]
			}
			],
			due: [
				'CSS Exercise - Student Bio Website <em>Redesign</em>',
			],
		},
		// Day 5 2-16
		{
			next: false,
			date: '2017-02-16',
			dateLabel: 'day-5',
			dateNav: '#day-5',
			student: ['Megan','Mariah'],
			topics: [
				'Design Principles'
			],
			readings: [
			{
			  	title: 'Basic Design Principles for Non-Designers',
				links: [
					{
					url: '#tba',
					name: 'Handout - on TRACS in Resources.'
					}
				],
				assignmentsIn: [
					'<strong>WATCH</strong> <a href="https://www.youtube.com/watch?v=VANORrzKX50&index=1&list=PL_IlIlrxhtPMqW4b0-v8OgLvFZQes6SoZ">Download: The True Story of the Internet - Part 1 Browsers</a>',
					'<strong>WATCH</strong> <a href="https://www.youtube.com/watch?v=Jjbh9FFW6VE&list=PL_IlIlrxhtPMqW4b0-v8OgLvFZQes6SoZ&index=2">Download: The True Story of the Internet - Part 2 Internet Search</a>',
					'<strong>CREATE</strong> Slack post in <a target="_blank" href="https://webdesigntxst.slack.com/?redir=%2Fmessages%2Fdownload%2F">#download</a><br/>Discussion topics:<br/><em>What elements were the most interesting?</em><br><em>What did you learn about innovation by watching these videos?</em><br><em>What has happened in the realm of digital media and technology since this video series came out?</em>'
				]
			}
			]
		},
		// Day 6 2-23
		{
			next: false,
			date: '2017-02-23',
			dateLabel: 'day-6',
			dateNav: '#day-6',
			student: ['Robert', 'Exsar'],
			topics: [
				'Responsive Web Design'
			],
			readings: [
			{
			  	title: 'RWD Handouts and Links',
				links: [
					{
					url: '#tba',
					name: 'RWD Deck'
					},
					{
						url: 'http://www.cindyroyal.com/webdesign/handouts/responsive.pdf',
						name: 'Responsive Web Design Handout'
					},
					{
						url: 'https://scotch.io/tutorials/default-sizes-for-twitter-bootstraps-media-queries',
						name: 'Bootstrap breakpoints'
					},
					{
						url: 'https://designmodo.com/responsive-design-vs-mobile-website-vs-app/',
						name: 'Responsive vs. Mobile Site vs. Mobile App'
					}
				],
				assignmentsOut: [
					'<strong>WATCH</strong> <a href="/tutorials/bootstrap">Bootstrap tutorials</a>'
				]
			}
			],
			due: [
				'<a href="/assignments/project-2">Project 2 - Student Bio Website Redesign 2</a>'
			],
		},
		// Day 7 3-2
		{
			next: false,
			date: '2017-03-02',
			dateLabel: 'day-7',
			dateNav: '#day-7',
			student: ['Zoe', 'Alexandria'],
			topics: [
				'Bootstrap'
			],
			readings: [
			{
			  	title: 'Bootstrap Handouts and Links',
				links: [
					{
					url: 'http://www.cindyroyal.com/webdesign/handouts/bootstrap_intro.pdf',
					name: 'Intro to Bootstrap'
					},
					{
						url: 'http://www.cindyroyal.com/webdesign/handouts/bootstrap_templates.pdf',
						name: 'Bootstrap Template'
					},
					{
						url: 'https://scotch.io/tutorials/default-sizes-for-twitter-bootstraps-media-queries',
						name: 'Bootstrap breakpoints'
					},
					{
						url: 'https://designmodo.com/responsive-design-vs-mobile-website-vs-app/',
						name: 'Responsive vs. Mobile Site vs. Mobile App'
					}
				]
			}
			]
		},
		// Day 8 3-9
		{
			next: false,
			date: '2017-03-09',
			dateLabel: 'day-8',
			dateNav: '#day-8',
			student: ['Selina', 'Leanda'],
			topics: [
				'Bootstrap Carousel and other advanced features'
			],
			readings: [
			{
			  	title: 'Today we will continue our discussion on Bootstrap.',
				links: [
					{
					url: 'http://getbootstrap.com/javascript/#carousel',
					name: 'Bootstrap carousel example'
					}
				],
				assignmentsIn: [
					'<strong>WORK</strong> on <a href="/assignments/project-3">Project 3 - Hobby or Organization Site</a>'
				],
				assignmentsOut: [
					'<strong>BRING</strong> 5 photos to include in your bootstrap slideshow next class.'
				]
			}
			]
		},
		// Day 9 3-16 - no news
		{
			next: false,
			date: '2017-03-16',
			dateLabel: 'day-9',
			dateNav: '#day-9',
			readings: [
			{
			  	title: 'No class - Spring Breakin’',
			}
			]
		},
		// Day 10 3-23
		{
			next: false,
			date: '2017-03-23',
			dateLabel: 'day-10',
			dateNav: '#day-10',
			student: ['Colton', 'Gabriela'],
			topics: [
				'Bootstrap and JS Components'
			],
			readings: [
			{
			  	title: 'Bootstrap carousel example and custom JS effects',
				links: [
					{
					url: 'http://getbootstrap.com/javascript/#carousel',
					name: 'Bootstrap carousel example'
					},
					{
					url: 'http://webdesign.cindyroyal.net/files/custom.js',
					name: 'Download and put in your js folder to use for parallax backgrounds and scroll-to-anchor effects',
					}
				],
				assignmentsIn: [
					'<strong>WORK</strong> on <a href="/assignments/project-3">Project 3 - Hobby or Organization Site</a>'
				],
				assignmentsOut: [
					'<strong>BRING</strong> 5 photos to include in your bootstrap slideshow next class.'
				]
			},
			],
			due:[
				'<a href="/assignments/project-3">Project 3 - Hobby or Organization Site</a> '
			]
		},
		// Day 11 3-30
		{
			next: false,
			date: '2017-03-30',
			dateLabel: 'day-11',
			dateNav: '#day-11',
			student: ['Jose', 'Alexander'],
			topics: [
				'Multimedia Journalism'
			],
			readings: [
			{
			  	title: 'Multimedia Journalism Links and Handouts',
				links: [
					{
						url: 'http://www.nytimes.com/projects/2012/snow-fall/#/?part=tunnel-creek',
						name: 'Snow Fall: The Avalanche at Tunnel Creek – NY Times'
					},
					{
						url: 'http://www.nytimes.com/newsgraphics/2013/10/27/south-china-sea/',
						name: 'A Game of Shark and Minnow – NY Times'
					},
					{
						url: 'http://www.nytimes.com/projects/2013/the-jockey/',
						name: 'The Jockey – NY Times'
					},
					{
						url: 'http://www.theguardian.com/world/interactive/2013/may/26/firestorm-bushfire-dunalley-holmes-family',
						name: 'Firestorm – The Guardian'
					},
					{
						url: 'http://inquirer.philly.com/packages/somalia/',
						name: 'Black Hawk Down – Philadelphia Inquirer'
					},
					{
						url: 'http://vimeo.com/23122965',
						name: 'Collings Guitars – Jorge Sanhueza-Lyon'
					},
					{
						url: 'http://kut.org/post/video-13th-annual-lonestar-rod-and-kustom-round',
						name: 'Lonestar Rod and Kustom Round Up – KUT'
					},
					{
						url: 'http://www.nytimes.com/packages/khtml/2007/03/30/education/20070401_GIRLS_FEATURE.html',
						name: 'Amazing Girls – NY Times'
					},
					{
						url: 'http://www.motherjones.com/special-reports/2013/12/newtown-shooting-one-year-later',
						name: 'Newtown: One Year After – Mother Jones'
					},
					{
						url: 'http://apps.npr.org/tshirt/#/title',
						name: 'Planet Money Makes a T-Shirt – NPR'
					},
					{
						url: 'https://www.youtube.com/watch?v=qAEXlLfSuBE',
						name: 'Graffiti Permission Wall – Andrew Goodwin'
					},
					{
						url: 'http://www.mediabistro.com/10000words/10-snowfall-like-projects-that-break-out-of-standard-article-templates_b17340',
						name: '<strong>Examples and Articles:</strong> 10 Projects Like Snow Fall'
					},
					{
						url: 'http://investigativenewsnetwork.org/2013/10/snowfall-for-all-small-newsrooms-can-do-immersive-storytelling-just-like-the-big-guys/',
						name: '<strong>Examples and Articles:</strong> Snow Fall for All: Small Newsrooms Can Do Immersive Storytelling – INN'
					},
					{
						url: 'http://www.interactivenarratives.org/',
						name: '<strong>Examples and Articles:</strong> Interactive Narratives'
					},
					{
						url: 'http://innovativeinteractivity.com/',
						name: '<strong>Examples and Articles:</strong> Innovative Interactivity'
					},
				],
				assignmentsIn: [
					'<strong>WORK</strong> on <a href="http://www.cindyroyal.com/webdesign/handouts/imovie.pdf">iMovie Handout</a>'
				]
			},
			]
		},
		// Day 12 4-6
		{
			next: false,
			date: '2017-04-06',
			dateLabel: 'day-12',
			dateNav: '#day-12',
			student: ['Mark', 'Victoria'],
			topics: [
				'Wordpress'
			],
			readings: [
			{
			  	title: 'The wonderful world of Wordpress',
				links: [
					{
					url: 'http://www.cindyroyal.com/webdesign/handouts/wordpress_new16.pdf',
					name: 'Intro to WordPress – using a Content Management System'
					}
				],
			},
			],
			due:[
				'<a href="/assignments/project-imovie">iMovie Exercise</a> '
			]
		},
		// Day 13 4-13
		{
			next: false,
			date: '2017-04-13',
			dateLabel: 'day-13',
			dateNav: '#day-13',
			student: ['Bryan', 'Nicholas'],
			topics: [
				'Wordpress'
			],
			readings: [
			{
			  	title: 'Wordpress continued - Final Projects Kickoff',
			  	assignmentsIn: [
			  		'<strong>WORK</strong> on <a href="/assignments/project-final">Final Project</a>'
			  	]
			},
			]
		},
		// Day 14 4-20
		{
			next: false,
			date: '2017-04-20',
			dateLabel: 'day-14',
			dateNav: '#day-14',
			student: [],
			topics: [
				'Wordpress'
			],
			readings: [
			{
			  	title: 'Wordpress continued - Fun with Plugins',
				links: [
					{
					url: 'http://cindyroyal.com/webdesign/handouts/wpplugins.pdf',
					name: 'Plugins Handout'
					}
				],
				assignmentsIn: [
					'<strong>WORK</strong> on <a href="/assignments/project-final">Final Project</a>'
				]
			},
			]
		},
		// Day 15 4-27
		{
			next: false,
			date: '2017-04-27',
			dateLabel: 'day-15',
			dateNav: '#day-15',
			student: [],
			topics: [
				'Data Journalism'
			],
			readings: [
			{
			  	title: 'Data Journalism Examples and Links',
				links: [
					{
						url: 'http://projects.propublica.org/docdollars/',
						name: 'Dollars for Docs – Propublica'
					},
					{
						url: 'http://www.nytimes.com/interactive/2013/12/20/sunday-review/dialect-quiz-map.html?_r=0',
						name: 'Ya’ll, Youse and You Guys – NYT'
					},
					{
						url: 'http://www.nytimes.com/interactive/2014/upshot/buy-rent-calculator.html?_r=0',
						name: 'Is It Better to Rent or Buy – NYT'
					},
					{
						url: 'http://www.nytimes.com/interactive/2010/02/26/sports/olympics/20100226-olysymphony.html',
						name: 'Fractions of a Second – NYT'
					},
					{
						url: 'http://project.wnyc.org/dogs-of-nyc/',
						name: 'Dogs of NYC – WNYC'
					},
					{
						url: 'http://www.texastribune.org/public-ed/explore/',
						name: 'Public Schools Explorer – Texas Tribune'
					},
					{
						url: 'http://stamen.com/clients/mtv',
						name: 'Stamen Design – MTV Awards'
					},
					{
						url: 'https://interactive.twitter.com/election2014/',
						name: 'Election 2014 – Twitter'
					},
					{
						url: 'http://www.newyorker.com/news/news-desk/interactive-a-month-of-citi-bike',
						name: 'A Month of CitiBike – The New Yorker'
					},
					{
						url: 'http://datajournalismhandbook.org/',
						name: 'Data Journalism Handbook'
					},
				],
				assignmentsIn: [
					'<strong>WORK</strong> on <a href="/assignments/project-final">Final Project</a>'
				]
			},
			],
			due:[
				'<a href="/assignments/project-final">Final Project DRAFT</a>'
			]
		},
		// Day 16 5-4 - no news
		{
			next: false,
			date: '2017-05-04',
			dateLabel: 'day-16',
			dateNav: '#day-16',
			student: [],
			topics: [
				'Last Day of Class'
			],
			readings: [
			{
			  	title: 'Presentations',
				assignmentsIn: [
					'<strong>PRESENT</strong> your <a href="/assignments/project-final">Final Project</a>'
				]
			},
			],
			due:[
				'<a href="/assignments/project-final">Final Project</a>'
			]
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


