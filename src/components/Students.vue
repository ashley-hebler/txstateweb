<template>
  <div class="students">
    <h1 class="page-title">
      <div class="container">
        <span>Student Projects</span>
        <span class="page-title__sub">Archive</span>
      </div>
    </h1>
    <div class="container content">
      <h2>Fall 2017</h2>
      <ul class="project__list">
        <li v-for="(item, index) in students">
          <span v-if="'Fall 2017' === item.class">
            <a target="_blank" v-bind:href="item.url" class="btn btn-primary">{{item.name}}</a>
          </span>
        </li>
      </ul>
      <h2>Spring 2017</h2>
      <ul class="project__list">
        <li v-for="(item, index) in students">
          <span v-if="'Spring 2017' === item.class">
            <a target="_blank" v-bind:href="item.url" class="btn btn-primary">{{item.name}}</a>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import studentList from '../content'
export default {
  name: 'project',
  data () {
    return {
      students: studentList.students,
    }
  },
  created() {
    console.log(this.students);
  }
}
</script>

