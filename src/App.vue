<template>
	<div  class="container">
		<!-- 标题栏 -->
		<mt-header fixed title="APP-Demo"></mt-header>
		<!-- 主要内容区 -->
		<transition name="switch" mode="out-in">
			<router-view></router-view>
		</transition>
		

		<!-- 底栏 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="member" class="mui-tab-item">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="cart" class="mui-tab-item">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="search" class="mui-tab-item">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>

</script>

<style>
	.container {
		padding-top: 40px;
		padding-bottom: 50px;
	}
	.switch-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.switch-leave-to {
		opacity: 0;
		transform: translateX(-100%);
	}
	.switch-enter-active,
	.switch-leave-active {
		transition: all 0.4s ease; 
	}
	.mui-tab-item {
		text-decoration: none;
	}
	.tabactive {

	}

</style>