<template>
	<div class="Field">
		<div>Collapse 折叠面板</div>
		<van-collapse v-model="activeNames">
			<van-collapse-item title="标题1" name="1">张警云</van-collapse-item>
			<van-collapse-item title="标题2" name="2">张警峰</van-collapse-item>
			<van-collapse-item title="标题3" name="3">张警方</van-collapse-item>
			<van-collapse-item title="标题4" name="4">付雨桐</van-collapse-item>
		</van-collapse>
	</div>
</template>

<script>
	export default {
		name: 'Field',
		data() {
			return {
				activeNames: ['1'],
			}

		},
		methods: {

		}

	}
</script>

<style scoped>

</style>