<template>
	<div class="cmt-container">
		<h3>发表评论</h3>
		<hr>
		<textarea placeholder="请输入要评论的内容（最多输入120字）" maxlength="120"></textarea>
		<mt-button type="primary" size="large">发表评论</mt-button>
		<div class="cmt-list">
			<div class="cmt-item" v-for="item in comments" :key="item.id">
				<div class="cmt-title">
					第{{ item.id }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time }}
				</div>
				<div class="cmt-body">
					{{ item.content === "undefined" ? "此用户没有发表评论" : item.content }}
				</div>
			</div>			
		</div>			
		<mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui'

	export default {
		data: function () {
			return {
				comments:[],
				pageIndex: 1
			}
		},
		methods: {
			getComments() {
				// 传入参数
				this.$http.get('./src/mock/comments/1.json').then(result => {
					console.log('父组件传递的id:' + this.id)
					// + this.id + '?pageindex=' + this.pageIndex
					var response = result.body
					if (response.status == 0) {
						// this.comments = response.message
						// 获取新的评论数组时，不会把之前的数据清空
						this.comments = this.comments.concat(response.message)
					}else {
						Toast('加载评论数据失败')
					}
				}, err => {
					Toast('加载评论数据失败')
				})
			},
			getMore() {
				// 点击加载更多功能
				this.pageIndex++
				this.getComments()
			}
		},
		created: function () {
			this.getComments()
		},
		props: ["id"]
	}




</script>

<style scoped lang="scss">
	.cmt-container {
		h3 {
			font-size: 18px;
		}
		textarea {
			font-size: 14px;
			height: 85px;
			margin: 0;
		}
		.cmt-list {
			margin: 5px 0;
			.cmt-item {
				font-size: 13px;
				.cmt-title {
					line-height: 30px;
					background-color: #ccc;
				}
				.cmt-body {
					line-height: 35px;
					text-indent: 2em;
				}
			}			
		}
	}
</style>