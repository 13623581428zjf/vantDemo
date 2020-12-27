<template>
	<div class="Field">
		<div>ContactCard联系人卡片</div>
		<van-contact-card type="add" @click="onAdd" />
		<van-contact-card type="edit" :name="currentContact.name" :tel="currentContact.tel" @click="onEdit" />
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Toast } from 'vant';
	Vue.use(Toast);
	export default {
		name: 'Field',
		data() {
			return {
				currentContact: {
					name: '张三',
					tel: '13000000000',
				},
			}

		},
		methods: {
			onAdd() {
				Toast('新增');
			},
			onEdit() {
				Toast('编辑');
			},
		}

	}
</script>

<style scoped>
	{}
</style>