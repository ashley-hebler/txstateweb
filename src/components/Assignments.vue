<template>
  <div class="assignments">
    <h1 class="page-title">
      <div class="container">
        <span>Assignments</span>
        <span class="page-title__sub">Overview</span>
      </div>
    </h1>
    <div class="container content">
      <h3 class="page-sep">Projects, Exercises, and Quizzes</h3>
      <div class="grid">
        <div v-for="(item, index) in assignments" class="grid__block">
            <span class="project">
              <span class="project__block">
                <span v-if="item.linked">
                  <a v-bind:href="item.url" class="project__title">
                    <span class="project__headline">
                      {{item.name}}
                    </span>
                    <span class="project__subheadline" v-html="item.subname">
                      {{item.subname}}
                    </span>
                  </a>
                </span>
                <span v-else>
                  <span class="project__title">
                    <span class="project__headline">
                      {{item.name}}
                    </span>
                    <span class="project__subheadline" v-html="item.subname">
                      {{item.subname}}
                    </span>
                  </span>
                </span>
                <span class="project__weight">{{item.percent}}%</span>
              </span>
              <span class="project__block">
                <span class="project__desc" v-html="item.desc">{{item.desc}}</span>
              </span>
              <span class="project__block">
                <div class="project__skills">
                  <span v-for="skill in item.skills">
                      <span class="project__skill highlight">{{skill}}</span>
                  </span>
                </div>
                <span v-if="item.rubric">
                  <a download v-bind:href="item.rubric" class="project__cta btn btn-primary">
                    Download Rubric
                  </a>
                </span>
              </span>
            </span>
        </div>
      </div>
      <h3 class="page-sep">Participation</h3>
      <div class="grid">
        <div v-for="(item, index) in participation" class="grid__block">
            <span class="project">
              <span class="project__block">
                  <span class="project__title project__title--alt">
                    <span class="project__headline">
                      {{item.name}}
                    </span>
                  </span>
                <span class="project__weight">{{item.percent}}%</span>
              </span>
              <span class="project__block">
                <span class="project__desc" v-html="item.desc">{{item.desc}}</span>
              </span>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import assignmentList from '../content'
export default {
  name: 'assignments',
  data () {
    return {
      msg: 'Assignments',
      assignments: assignmentList.assignments,
      participation: assignmentList.participation,
    }
  }
}
</script>