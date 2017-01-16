<template>
  <div class="outline">
    <h1 class="page-title">
      <div class="container">
        <span>Course Outline</span>
        <span class="page-title__sub">Spring 2017</span>
      </div>
    </h1>
    <div class="container">
      <!-- <ul class="date-nav">
        <li v-for="(day, index) in outline">
          <a v-bind:href="day.dateNav">{{ day.date | prettyDate }}</a>
        </li>
      </ul> -->
      <ul class="timeline">
        <li v-for="(day, index) in outline" class="timeline__point" v-bind:class="{ current: day.next }">
          <a v-bind:name="day.dateLabel"></a>
          <div class="day">
            <div class="day__block day__block--title">
              <span class="day__date">{{day.date | prettyDate }}</span>
              <span class="day__student tag">{{day.student}}</span>
              <div class="day__item" v-for="(item, index) in day.topics">
                <span class="highlight highlight--num">{{index + 1}}</span>{{item}}
              </div>
            </div>
            <div class="day__block day__block--main" v-for="item in day.readings">
              <div class="day__item">
                <span class="day__label">
                  {{item.title}}
                </span>
                <ul class="day__list" v-for="subitem in item.links">
                  <li><a v-bind:href="subitem.url" target="_blank"><span v-html="subitem.name">{{subitem.name}}</span></a></li>
                </ul>
              </div>
              <div class="day__item" v-if="item.assignmentsIn">
                <span class="day__label day__label--alt">
                  In class assignment:
                </span>
                <ul class="day__list" v-for="subitem in item.assignmentsIn">
                  <li><span v-html="subitem">{{ subitem }}</span></li>
                </ul>
              </div>
              <div class="day__item" v-if="item.assignmentsOut">
                <span class="day__label day__label--alert">
                  To be completed before next class:
                </span>
                <ul class="day__list" v-for="subitem in item.assignmentsOut">
                  <li><span v-html="subitem">{{ subitem }}</span></li>
                </ul>
              </div>
            </div>
            <div class="day__block day__block--full" v-if="day.due">
              <div class="day__due">
                <h3 class="day__alert highlight highlight--alert">Due Today</h3>
                <span class="day__item" v-for="item in day.due">{{item}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Outline',
  data () {
    return {
      msg: 'Outline',
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
      ]
    }
  },
  filters: {
    prettyDate: function(value) {
      if (value) {
      return moment(String(value)).format('MMMM Do')
      }
    },
    encodeHTML: function(html) {
      if(html) {
        var encodedStr = html.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
           return '&#'+i.charCodeAt(0)+';';
        });
        return encodedStr;
      }
    }
  }
}
</script>

