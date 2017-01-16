import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Outline from '../components/Outline'
import Assignments from '../components/Assignments'
import Project from '../components/assignments/Project'


Vue.use(VueRouter)
const routes = [
	{ path: '/', component: Home},
	{ path: '/outline', component: Outline},
	{ path: '/assignments', component: Assignments},
	{ path: '/assignments/:id', component: Project}

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