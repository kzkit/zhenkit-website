import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: "Zhen Kit's Personal Website",
		},
	},
	{
		path: '/404',
		component: NotFound,
		meta: {
			title: 'Error 404 : Not Found',
		},
	},
	{ path: '/:catchAll(.*)', redirect: '/404' },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

// Change document titles
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title}`
	next()
})

export default router
