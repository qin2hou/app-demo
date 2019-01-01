import VueRouter from 'vue-router'

import home from '../subcom/home.vue'
import member from '../subcom/member.vue'
import cart from '../subcom/cart.vue'
import search from '../subcom/search.vue'
import newslist from '../subcom/newslist.vue'
import newsinfo from '../subcom/newsinfo.vue'

var router = new VueRouter({
	routes: [
		{ path: '/', redirect: '/home'},
		{ path: '/home', component: home },
		{ path: '/member', component: member },
		{ path: '/cart', component: cart },
		{ path: '/search', component: search },
		{ path: '/home/newslist', component: newslist },
		{ path: '/home/newsinfo/:id', component: newsinfo}
	],
	linkActiveClass: 'mui-active'
})

export default router