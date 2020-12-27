<template>
	<div class="Field">
			<div>Lazyload懒加载</div>
			<img v-for="img in imageList" v-lazy="img" />
			</div>
</template>

<script>
	export default {
		name: 'Field',
		data() {
			return {
				 imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ], 
			}

		},
		methods: {

		}

	}
</script>

<style scoped>
	img{
		width: 100%;
		height: auto;
	}
</style>