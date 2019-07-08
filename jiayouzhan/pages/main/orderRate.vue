<template>
	<view class="thiscontent">
		<view class="title">
			您对本次维修满意吗？
		</view>
		
		<view class="rateArea">
			<view>服务态度</view>
			<uni-rate :max="5" :isFill="false" :margin="30"></uni-rate>
		</view>
		
		<view class="rateArea">
			<view>服务质量</view>
			<uni-rate :max="5" :isFill="false" :margin="30"></uni-rate>
		</view>
		
		<view class="submit">
			<button>提交</button>
		</view>
	</view>
</template>

<script>
	import UniRate from '../template/uni-rate/uni-rate.vue'
	export default{
		
		components:{
			UniRate
		},
		methods:{
			
		}
		
	}
	
</script>

<style lang="scss">
	.thiscontent{
		background-color: #f2f7f8;
		display: flex;
		flex: 1;
		flex-direction: column;
		box-sizing: border-box;
	}
	.title{
		padding: 20px;
		text-align: center;
		font-family: PingFangSC-Medium;
		font-size: 20px;
	}
	
	.rateArea{
		padding: 10px 40px 10px 40px;
		display: flex;
		flex-direction: row;
		font-size: 12px;
		font-family: PingFangSC-Regular;
		align-items: center;
	}
	
	.submit{
		padding-bottom: 40px;
		position: absolute;
		bottom: 0px;
		width: 100%;
		
		button{
			align-self: center;
			width: 400upx;
			height: 88upx;
			background-color: #1c713d;
			color: white;
			border-radius: 5px;
		}
	}
</style>
