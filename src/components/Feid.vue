<template>
	<div class="hello">
		<div>Field输入框</div>
		<!-- 输入任意文本 -->
		<van-field v-model="text" label="文本" />
		<!-- 输入手机号，调起手机号键盘 -->
		<van-field v-model="tel" type="tel" label="手机号" />
		<!-- 允许输入正整数，调起纯数字键盘 -->
		<van-field v-model="digit" type="digit" label="整数" />
		<!-- 允许输入数字，调起带符号的纯数字键盘 -->
		<van-field v-model="number" type="number" label="数字" />
		<!-- 输入密码 -->
		<van-field v-model="password" type="password" label="密码" />
		<van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入">
			<template #button>
				<van-button size="small" type="primary" @click='butn'>发送验证码</van-button>
			</template>
		</van-field>
		
	</div>
</template>

<script>
	export default {
		name: 'Field',
		data() {
			return {
				value: '',
				tel: '',
				text: '',
				digit: '',
				number: '',
				password: '',
				sms: '',
				
			}
		},
		methods: {
			butn: function() {
				console.log(2)
			}
		}

	}
</script>

<style scoped>
	{}
</style>