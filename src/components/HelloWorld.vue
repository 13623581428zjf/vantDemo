<template>
	<div class="hello">
		<h1>vant练习</h1>
		<van-button type="primary">主要按钮</van-button>
		<van-button type="info">信息按钮</van-button>
		<van-button type="default">默认按钮</van-button>
		<van-button type="warning">警告按钮</van-button>
		<br />
		<br />
		<van-icon name="chat-o" size="40" badge="99+" @click='ad()' />
		<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size="40" />
		<br />
		<van-image width="10rem" height="10rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
		<van-image round width="10rem" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
		<br />
		<van-checkbox v-model="checked">复选框</van-checkbox>
		<van-checkbox-group v-model="result" :max="2">
			<van-checkbox name="a">复选框 a</van-checkbox>
			<van-checkbox name="b">复选框 b</van-checkbox>
			<van-checkbox name="c">复选框 c</van-checkbox>
		</van-checkbox-group>
		<br />

		<van-form @submit="onSubmit">
			<van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
			<van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">提交</van-button>
			</div>
		</van-form>

		<van-radio-group v-model="radio">
			<van-radio name="1">单选框 1</van-radio>
			<van-radio name="2">单选框 2</van-radio>
		</van-radio-group>

		<van-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词" @search="onSearch">
			<template #action>
				<div @click="onSearch">搜索</div>
			</template>
		</van-search>
		<br />
		<van-uploader v-model="fileList" :after-read="afterRead">
			<template #preview-cover="{ file }">
				<div class="preview-cover van-ellipsis">{{ file.name }}</div>
			</template>
		</van-uploader>
		
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				checked: true,
				result: [],
				value: '',
				username: '',
				password: '',
				radio: '1',
				fileList: [],
			}
		},
		methods: {
			ad: function() {
				Toast.loading({
					message: '加载中...',
					forbidClick: true,
					loadingType: 'spinner',
					tel: '',

				});
			},
			onSubmit(values) {
				console.log('submit', values);
			},
			onSearch(val) {
				Toast(val);
			},
			onCancel() {
				Toast('取消');
			},
			afterRead(file) {
				// 此时可以自行将文件上传至服务器
				console.log(file);
			},

		}

	}
</script>

<style scoped>
	.preview-cover {
		position: absolute;
		bottom: 0;
		box-sizing: border-box;
		width: 100%;
		padding: 4px;
		color: #fff;
		font-size: 12px;
		text-align: center;
		background: rgba(0, 0, 0, 0.3);
	}
</style>