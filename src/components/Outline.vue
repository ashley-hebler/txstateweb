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
              <span class="day__student">
                <span class="tag" v-for="(item, index) in day.student">{{item}}</span>
              </span>
              <div class="day__item" v-for="(item, index) in day.topics">
                <span class="highlight highlight--mute">{{item}}</span>
              </div>
              <div class="day__item" v-if="day.due">
                <div class="day__due">
                  <h3 class="day__alert highlight highlight--alert">Due Today</h3>
                  <span class="day__item" v-for="item in day.due" v-html="item">{{item}}</span>
                </div>
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
                  In class assignment
                </span>
                <ul class="day__list" v-for="subitem in item.assignmentsIn">
                  <li><span v-html="subitem">{{ subitem }}</span></li>
                </ul>
              </div>
              <div class="day__item" v-if="item.assignmentsOut">
                <span class="day__label day__label--alert">
                  Out of class assignment
                </span>
                <ul class="day__list" v-for="subitem in item.assignmentsOut">
                  <li><span v-html="subitem">{{ subitem }}</span></li>
                </ul>
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
import outlineList from '../content'
export default {
  name: 'Outline',
  data () {
    return {
      msg: 'Outline',
      outline: outlineList.outline,
      random:[
        'Mark Alvarez',
        'Exsar Arguello',
        'Megan Blackwell',
        'Victoria Chacon',
        'Nicholas Corlis',
        'Alexander Delgado Reed',
        'Sidney Dorsey',
        'Colton Farber',
        'Leanda Harley',
        'Bryan Juarez',
        'Tunde Kukoyi',
        'Mariah Mandel',
        'Vianey Munoz',
        'Selina Quick',
        'Jose Salazar',
        'Victoria Skuce',
        'Gabriela Theard',
        'Alexandria Walkuski',
        'Robert Wood',
        'Zoe Zrubek',
      ],
      pick: '',
    }
  },
  created() {

    this.randomizer()
  },
  filters: {
    prettyDate: function(value) {
      if (value) {
      return moment(String(value)).format('MMMM Do')
      }
    }
  },
  methods: {
    randomizer: function(){
        var random_no = 0;
        random_no = Math.floor(Math.random() * this.random.length);
        this.pick = this.random[random_no];
    },
  }
}
</script>

