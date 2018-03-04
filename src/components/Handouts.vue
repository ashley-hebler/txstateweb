<template>
  <div class="tutorial">
    <h1 class="page-title">
      <div class="container">
        <span>Handouts</span>
        <span class="page-title__sub">Archive</span>
      </div>
    </h1>
    <div class="container content">
      <ul class="project__list project__list--numbered">
        <li v-for="(item, index) in handouts">
          <a v-bind:href="item.url" class="btn btn-primary">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import handoutsList from '../content'
export default {
  name: 'project',
  data () {
    return {
      handouts: handoutsList.handouts
    }
  },
}
</script>

