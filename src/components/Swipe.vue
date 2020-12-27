<template>
	<div class="Field">
		<div>Swipe轮播</div>
			<van-swipe @change="onChange" :autoplay="3000">
			<van-swipe-item><img src="../assets/logo.png"/></van-swipe-item>
			<van-swipe-item><img src="../assets/logo.png"/></van-swipe-item>
			<van-swipe-item><img src="../assets/logo.png"/></van-swipe-item>
			<van-swipe-item><img src="../assets/logo.png"/></van-swipe-item>
			<template #indicator>
				<div class="custom-indicator">{{ current + 1 }}/4</div>
			</template>
		</van-swipe>
	</div>
</template>

<script>
	export default {
		name: 'Field',
		data() {
			return {
				current: 0,
			}

		},
		methods: {
			onChange(index) {
				this.current = index;
			},
		}

	}
</script>

<style scoped>
	 .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  img{
  	text-align: center;
  }
</style>