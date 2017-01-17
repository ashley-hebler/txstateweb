import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Outline from '../components/Outline'
import Assignments from '../components/Assignments'
import Tutorials from '../components/Tutorials'
import Project from '../components/Project'
import Tutorial from '../components/Tutorial'
import Students from '../components/Students'


Vue.use(VueRouter)
const routes = [
	{ path: '/', component: Home },
	{ path: '/outline', component: Outline },
	{ path: '/assignments', component: Assignments },
	{ path: '/tutorials', component: Tutorials },
	{ path: '/student-projects', component: Students },
	{ path: '/assignments/:id', component: Project },
	{ path: '/tutorials/:id', component: Tutorial }

]
const router = new VueRouter({
	mode: 'history',
	scrollBehavior: function(to, from, savedPosition) {
	    if (to.hash) {
	        return {selector: to.hash}
	    } else {
	        return { x: 0, y: 0 }
	    }
	},
  routes // short for routes: routes
})


export default router