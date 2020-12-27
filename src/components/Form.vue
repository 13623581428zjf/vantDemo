<template>
	<div class="hello">
		<div>Form</div>
		<van-form @submit="onSubmit">
			<van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
			<van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">提交</van-button>
			</div>
		</van-form>
		<van-field name="switch" label="开关">
			<template #input>
				<van-switch v-model="switchChecked" size="20" />
			</template>
		</van-field>

		<van-field name="checkbox" label="复选框">
			<template #input>
				<van-checkbox v-model="checkbox" shape="square" />
			</template>
		</van-field>
		<van-field name="checkboxGroup" label="复选框组">
			<template #input>
				<van-checkbox-group v-model="checkboxGroup" direction="horizontal">
					<van-checkbox name="1" shape="square">复选框 1</van-checkbox>
					<van-checkbox name="2" shape="square">复选框 2</van-checkbox>
				</van-checkbox-group>
			</template>
		</van-field>
		<van-stepper v-model="value" />
		<br />
		<van-slider v-model="value" @change="onChange" />
		<br />
		<van-uploader v-model="fileList" multiple :max-count="2" />
		<br />
		<van-area style='border:1px solid red'  item-height='40px' title="选择地址" :area-list="areaList" :columns-placeholder="['请选择', '请选择', '请选择']" />
	</div>
</template>

<script>
	export default {
		name: 'Field',
		data() {
			return {
				username: '',
				password: '',
				switchChecked: false,
				checkbox: false,
				fileList: [],
				checkboxGroup: [],
				value: 1,
				value: 50,
				areaList: {
					province_list: {
						110000: '北京市',
						120000: '天津市',
						130000: '河北省',
						140000: '山西省',
						150000: '内蒙古自治区',
						210000: '辽宁省',
						220000: '吉林省',
						230000: '黑龙江省',
						310000: '上海市',
						320000: '江苏省',
						330000: '浙江省',
						340000: '安徽省',
						350000: '福建省',
						360000: '江西省',
						370000: '山东省',
						410000: '河南省',
						420000: '湖北省',
						430000: '湖南省',
						440000: '广东省',
						450000: '广西壮族自治区',
						460000: '海南省',
						500000: '重庆市',
						510000: '四川省',
						520000: '贵州省',
						530000: '云南省',
						540000: '西藏自治区',
						610000: '陕西省',
						620000: '甘肃省',
						630000: '青海省',
						640000: '宁夏回族自治区',
						650000: '新疆维吾尔自治区',
						710000: '台湾省',
						810000: '香港特别行政区',
						820000: '澳门特别行政区',
						900000: '海外',

					},
					city_list: {
						110100: '北京市',
						120100: '天津市',
						130100: '石家庄市',
						130200: '唐山市',
						130300: '秦皇岛市',
						130400: '邯郸市',
						130500: '邢台市',
						130600: '保定市',
						130700: '张家口市',
						130800: '承德市',
						130900: '沧州市',
						131000: '廊坊市',
						131100: '衡水市',
						140100: '太原市',
						140200: '大同市',
						140300: '阳泉市',
						140400: '长治市',
						140500: '晋城市',
						140600: '朔州市',
						140700: '晋中市',
						140800: '运城市',
						140900: '忻州市',
						141000: '临汾市',
						141100: '吕梁市',
						150100: '呼和浩特市',
						150200: '包头市',
						150300: '乌海市',
						150400: '赤峰市',
					},
					county_list: {
						110101: '东城区',
						110102: '西城区',
						110105: '朝阳区',
						110106: '丰台区',
						120101: '和平区',
						120102: '河东区',
						120103: '河西区',
						120104: '南开区',
						120105: '河北区',
					}
				}

			}
		},
		methods: {
			onSubmit(values) {
				console.log('submit', values);
			},
			onChange(value) {
				Toast('当前值：' + value);
			},
		}

	}
</script>

<style scoped>
	{}
</style>