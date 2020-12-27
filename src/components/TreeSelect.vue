<template>
	<div>
		<div>TreeSelect分类选择</div>
		<van-tree-select :items="items" :active-id.sync="activeId" :main-active-index.sync="activeIndex" />
	</div>
</template>

<script>
	export default {
		name: 'Field',
		data() {
			return {
				items: [{
						text: '浙江',
						children: [{
							// 名称
							text: '温州',
							// id，作为匹配选中状态的标识符
							id: 1,
							// 禁用选项
							disabled: false/**/,
						},
							{
							// 名称
							text: '北京',
							// id，作为匹配选中状态的标识符
							id: 2,
							// 禁用选项
							disabled: false/**/,
						},
						{
							// 名称
							text: '大连',
							// id，作为匹配选中状态的标识符
							id: 3,
							// 禁用选项
							disabled: false/**/,
						}
						],
						dot: true
					},
					{
						text: '江苏',
						children: [{
							// 名称
							text: '内蒙',
							// id，作为匹配选中状态的标识符
							id: 1,
							// 禁用选项
							disabled: false,
						},
						{
							// 名称
							text: '太原',
							// id，作为匹配选中状态的标识符
							id: 2,
							// 禁用选项
							disabled: false,
						}
						],
						badge: 5
					},
				],
				activeId: 1,
				activeIndex: 0,
			}

		},
		methods: {

		}

	}
</script>

<style scoped>

</style>