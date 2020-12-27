<template>
	<div class="Field">
		  <div>Card的</div>
		  <van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
/>
<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">添加</van-button>
    <van-button size="mini">删除</van-button>
  </template>
</van-card>
	</div>
</template>

<script>
	 
	export default {
		name: 'Field',
		data() {
			return {
				 
			}

		},
		methods: {
			  
		}

	}
</script>

<style scoped>
	 *{
         font-size: 10px;
	 }
</style>