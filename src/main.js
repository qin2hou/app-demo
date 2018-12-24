import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)


// 导入 bootstrap 样式
// import 'bootstrap/dist/css/bootstrap.css'
// 导入 mui 样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 导入mint ui 按需导入方式
import { Button, Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


import app from './App.vue'
import router from './js/router.js'

var vm = new Vue({
	el: '#app',	
	render: c => c(app),
	router
})


