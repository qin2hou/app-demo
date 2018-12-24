<template>
	<div>
		<!-- banner -->

		<mt-swipe>
		  <mt-swipe-item v-for="item in bannerlist" v-bind:key="item.id">
		  	<img v-bind:src="item.img" alt="">
		  </mt-swipe-item>		 
		</mt-swipe>
		<!-- 工具栏  -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/news.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                  	<img src="../images/photos.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/cart.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   	<img src="../images/feedback.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/videos.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/contacts.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
	</div>
</template>

<script>
	import VueResource from 'vue-resource'
	import { Toast } from 'mint-ui'

	export default {
		data () {
			return {
				bannerlist: []
			}
		},
		methods: {
			getBanner () {
				this.$http.get('./src/mock/getBanner.json').then(result => {

					console.log(result.body)
					this.bannerlist = result.body
					// Toast('请求成功')
				}, result => {
					console.log(result.statusText)
					Toast('请求失败')
				})
			}
		},
		created () {
			this.getBanner()
		}
	}

</script>

<style lang="scss">
	.mint-swipe {
		height: 200px;
		img {
			width: 100%;
		}
	}
	.mui-grid-view.mui-grid-9 {
		border: 0;
		background-color: white;
		.mui-table-view-cell {
			border: 0;
		}
		img {
			height: 60px;
		}
		.mui-media-body {
			font-size: 10px;
		}
	}
	// html,body {
	// 	background: white;
	// }
</style>