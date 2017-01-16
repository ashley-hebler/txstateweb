<template>
  <div class="project assignments">
    <h1 class="page-title">
      <div class="container">
        <span>Assignments</span>
        <span class="page-title__sub">{{title}}</span>
      </div>
    </h1>
    <div class="container">
      <h3 v-html="subtitle">{{title}} - {{subtitle}}</h3>
      <h4 class="highlight">Objective</h4>
      <p>{{objective}}</p>
      <h4 class="highlight">Requirements</h4>
      <ol class="project__list project__list--numbered">
        <li v-for="(item, index) in requirements" v-html="item">{{item}}</li>
      </ol>
      <span v-if="imageCheck">
        <h4 class="highlight">Example</h4>
        <img class="img-responsive img-thumbnail" v-bind:src="imagePath" alt="">
      </span>
    </div>
  </div>
</template>

<script>
import assignmentList from '../../assignments'
export default {
  name: 'project',
  data () {
    return {
      projects: assignmentList.assignments,
      title: '',
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
  methods: {
    match: function() {
      var index;
      var a = this.projects;
      for (index = 0; index < a.length; ++index) {
          if( this.$route.params.id === a[index].slug ) {
            this.title = a[index].name;
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

