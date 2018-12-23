import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.css'
// 导入 mui 样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 导入mint ui 按需导入方式
import { Button, Header } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)

import app from './App.vue'
import router from './js/router.js'

var vm = new Vue({
	el: '#app',	
	render: c => c(app),
	router
})


