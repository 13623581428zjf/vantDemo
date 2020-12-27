<template>
	<div class="Field">
		 <div>GoodsAction 商品导航</div>
		 <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
  <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
  <van-goods-action-button
    type="danger"
    text="立即购买"
    @click="onClickButton"
  />
</van-goods-action>
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
			  onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    },
		}

	}
</script>

<style scoped>
	 
</style>