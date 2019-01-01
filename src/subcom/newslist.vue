<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
				<router-link v-bind:to="'/home/newsinfo/' + item.id">
					<img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
					<div class="mui-media-body">
						<h4>{{ item.title }}</h4>
						<p class='mui-ellipsis'>
							<span>{{ item.abstract }}</span>
							<span>{{ item.add_time | dateFormat('YYYY-MM-DD HH:mm:ss') }}</span>
							<span>访问量：{{ item.click }}</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>

	export default {
		data: function() {
			return {
				newslist: []
			}
		},
		methods: {
			getNewsList: function() {
				this.$http.get('../src/mock/getNewsList.json').then(result=> {
					var response = result.body
					if (response.status == 0) {
						this.newslist = response.message
						console.log(this.newslist)
					}else {
						Toast('加载新闻列表失败')
					}
				})
			}
		},
		created: function() {
			this.getNewsList()
		}
	}
</script>

<style scoped lang="scss">
	.mui-table-view {
		li {
			h4 {
				font-size: 14px;
			}
			.mui-ellipsis {
				font-size: 12px;
				color: #226aff;
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>