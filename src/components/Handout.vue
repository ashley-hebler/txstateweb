<template>
  <div class="handouts assignments">
    <h1 class="page-title no-print">
      <div class="container">
        <span>Handouts</span>
        <span class="page-title__sub">{{title}}</span>
      </div>
    </h1>
    <div class="breadcrumbs no-print">
      <div class="container">
        <a href="/handouts">Handouts</a> / <a class="current" v-bind:href="url">{{title}}</a>
      </div>
    </div>
    <div id="markdown" class="container markdown">
      <button class="no-print print-btn markdown__btn" v-on:click="printDiv($event)"><svg class="icon"><use xlink:href="#print"></use></svg></button>
      <div v-if="current === 'intro-to-html'">
        <markdown1></markdown1>
      </div>
      <div v-if="current === 'images-and-links'">
        <markdown2></markdown2>
      </div>
      <div v-if="current === 'lists-and-tables'">
        <markdown3></markdown3>
      </div>
      <div v-if="current === 'rwd'">
        <markdown4></markdown4>
      </div>
      <div v-if="current === 'project-3-tips'">
        <markdown5></markdown5>
      </div>
      <div v-if="current === 'carousel'">
        <markdown6></markdown6>
      </div>
      <div v-if="current === 'ftp-tips'">
        <markdown7></markdown7>
      </div>
      <div v-if="current === 'html-css-tips'">
        <markdown8></markdown8>
      </div>
    </div>
  </div>
</template>

<script>

import markdown1 from '../../static/handouts/intro-to-html.md'
import markdown2 from '../../static/handouts/images-and-links.md'
import markdown3 from '../../static/handouts/lists-and-tables.md'
import markdown4 from '../../static/handouts/rwd.md'
import markdown5 from '../../static/handouts/project-3-tips.md'
import markdown6 from '../../static/handouts/carousel.md'
import markdown7 from '../../static/handouts/ftp-tips.md'
import markdown8 from '../../static/handouts/html-css-tips.md'

import handoutList from '../content'

export default {
  name: 'project',
  data () {
    return {
      handouts: handoutList.handouts,
      title: '',
      current: this.$route.params.id,
      subtitle: '',
      objective: '',
      requirements:[],
      imageCheck: '',
      imagePath: '',
    }
  },
  created() {
    this.match()
  },
  components: {
    markdown1,
    markdown2,
    markdown3,
    markdown4,
    markdown5,
    markdown6,
    markdown7,
    markdown8
  },
  methods: {
    printDiv: function(event) {
      if (event) event.preventDefault()
      window.print();
    },
    match: function() {
      var index;
      var a = this.handouts;
      for (index = 0; index < a.length; ++index) {
          if( this.$route.params.id === a[index].slug ) {
            this.title = a[index].name;
            this.url = a[index].url;
            this.subtitle = a[index].subname;
            this.objective = a[index].objective;
            this.requirements = a[index].requirements;
            this.imageCheck = a[index].image;
            this.imagePath = '/static/'+a[index].slug+'.jpg';
          }
      }
    }
  }
}
</script>
<style lang="scss">
  @import '../variables.scss';
  .markdown {
    max-width: 50em;
    &__btn {
      float: right;
      margin-top: 1em;
    }
    pre {
      background-color: $brand-dark;
      padding: 1rem;
      text-align: left;
      color: #f8f6f6;
      font-size: 1.3em;
      border: none;
    }
    table {
      border: 1px solid #eee;
      td {
        padding: 1em;
      }
      thead {
        background-color: #eee;
        th {
          padding: .5em;
        }
      }
    }
    blockquote {
      margin: 0;
      border-left: 5px solid #7a7a7a;
      font-style: italic;
      padding: 1.33em;
      text-align: left;
    }

    ul,
    ol,
    li {
      text-align: left;
    }

    p {
      font-size: 1.3em;
    }
    h2 {
      margin-top: 2em;
      padding-top: 1em;
      border-top: 1px solid #eee;
    }
    h1 {
      margin-top: 2em;
      text-align: center;
    }
    img {
      max-width: 100%;
    }
  }
</style>

