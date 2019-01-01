<template>
	<div class="newsinfo-container">
		<h3 class="title">{{ newsinfo.title }}</h3>
		<p class="subtitle">
			<span>发表时间：{{ newsinfo.add_time }} </span>
			<span>点击 {{ newsinfo.click }} 次</span>
		</p>			
		<hr>
		<div class="content" v-html="newsinfo.content"></div>
		<!-- 添加评论组件 -->
		<comment-box :id="this.id"></comment-box>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui'
	import comment from './comment.vue'


	export default {
		data: function () {
			return {
				id: this.$route.params.id,
				newsinfo: {}
			}
		},
		created: function () {
			this.getNewsInfo()
		},
		methods: {
			getNewsInfo: function () {
				this.$http.get('../src/mock/newsinfo/' + this.id + '.json').then(result => {
					var response = result.body
					console.log(response)
					if (response.status == 0) {
						this.newsinfo = response.message[0]
					}
				}, err => {
					Toast('加载新闻错误！')
				})
			}
		},
		components: {
			"comment-box": comment
		}
	}
</script>

<style lang="scss">
	.newsinfo-container {
		padding: 0 4px;
		.title {
			color: red;
			font-size: 16px;
			text-align: center;
			margin: 15px 0;
		}
		.subtitle {
			font-size: 14px;
			display: flex;
			justify-content: space-between;
			color: #226aff;
		}
		.content {
			img {
				width: 100%;
			}
		}
	}
</style>