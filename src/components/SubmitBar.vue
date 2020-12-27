<template>
	<div class="Field">
		<div>SubmitBar 提交订单栏</div>
		<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
			<van-checkbox v-model="checked">全选</van-checkbox>
			<template #tip>
				你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
			</template>
		</van-submit-bar>

	</div>
</template>

<script>
	export default {
		name: 'Field',
		data() {
			return {
               checked:''
			}

		},
		methods: {
			onSubmit: function() {
			},
			onClickEditAddress:function(){
	
			}
		}

	}
</script>

<style scoped>
	{}
</style>