import VueRouter from 'vue-router'

import home from '../subcom/home.vue'
import member from '../subcom/member.vue'
import cart from '../subcom/cart.vue'
import search from '../subcom/search.vue'

var router = new VueRouter({
	routes: [
		{ path: '/', redirect: '/home'},
		{ path: '/home', component: home },
		{ path: '/member', component: member },
		{ path: '/cart', component: cart },
		{ path: '/search', component: search },
	],
	linkActiveClass: 'mui-active'
})

export default router