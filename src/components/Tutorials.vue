<template>
  <div class="tutorial">
    <h1 class="page-title">
      <div class="container">
        <span>Tutorials</span>
        <span class="page-title__sub">Archive</span>
      </div>
    </h1>
    <div class="container content">
      <ul class="project__list project__list--numbered">
        <li v-for="(item, index) in tutorials">
          <a v-bind:href="item.path" class="btn btn-primary">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import tutorialList from '../content'
export default {
  name: 'project',
  data () {
    return {
      tutorials: tutorialList.tutorials
    }
  },
}
</script>

