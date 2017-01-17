<template>
  <div class="tutorial">
    <h1 class="page-title">
      <div class="container">
        <span>Tutorials</span>
        <span class="page-title__sub">{{title}}</span>
      </div>
    </h1>
    <div class="container content">
      <h3>{{subtitle}}</h3>
      <ol class="tutorial__list">
        <li v-for="(item, index) in videos" class="tutorial__item">
          <h4 class="tutorial__title">
            {{item.title}}
          </h4>
          <span class="tutorial__video embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item"  v-bind:src="item.url" frameborder="0"></iframe>
          </span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import tutorialList from '../content'
export default {
  name: 'project',
  data () {
    return {
      tutorials: tutorialList.tutorials,
      title: '',
      subtitle: '',
      videos: []
    }
  },
  created() {
    this.match()
  },
  methods: {
    match: function() {
      var index;
      var a = this.tutorials;
      for (index = 0; index < a.length; ++index) {
          if( this.$route.params.id === a[index].slug ) {
            this.title = a[index].title;
            this.subtitle = a[index].subtitle;
            this.videos = a[index].videos;
          }
      }
    }
  }
}
</script>

