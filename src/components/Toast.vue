<template>
	<div class="Field">
		  <div>Toast 轻提示</div>
		  <button @click="btn">弹框</button>
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
				 
			}

		},
		methods: {
			 btn:function(){
			 	Toast('提示内容');
			 }
		}

	}
</script>

<style scoped>
	{}
</style>