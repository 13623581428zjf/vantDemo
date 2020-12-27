<template>
	<div class="hello">
		<div class="van-ellipsis">
			<van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
				<!-- 下拉提示，通过 scale 实现一个缩放效果 -->
				<template #pulling="props">
					<img class="doge" src="https://img.yzcdn.cn/vant/doge.png" :style="{ transform: `scale(${props.distance / 80})` }" />
				</template>

				<!-- 释放提示 -->
				<template #loosing>
					<img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
				</template>

				<!-- 加载提示 -->
				<template #loading>
					<img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
				</template>
				<p>刷新次数: {{ count }}</p>
				<div v-for="item in content">{{item.name}}</div>
			</van-pull-refresh>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				count: 0,
				isLoading: false,
				content: [{
						name: '哈哈'
					},
					{
						name: '哈哈'
					},
					{
						name: '哈哈'
					},
					{
						name: '哈哈'
					},
					{
						name: '哈哈'
					}
				],
				cont: [{
					name: '111111111111111111111111111'
				}, {
					name: '1111111111111111111111111'
				}, {
					name: '1111111111111'
				}, {
					name: '1111111111111111111111111111'
				}, ]
			}
		},
		methods: {
			onRefresh() {
				setTimeout(() => {
					Toast('刷新成功');
					this.isLoading = false;
					this.count++;
					for(var i = 0; i < this.cont.length; i++) {
						console.log(this.cont[i]);
						this.content.push(this.cont[i])
					}
				}, 1000);
			},
		}

	}
</script>

<style scoped>
	.doge {
		width: 140px;
		height: 72px;
		margin-top: 8px;
		border-radius: 4px;
	}
	
	.van-ellipsis {
		height: 100%;
	}
</style>