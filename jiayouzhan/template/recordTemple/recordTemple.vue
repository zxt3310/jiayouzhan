<template>
	<view class="containor">
		<!-- 头 -->
		<view class="header">
			<image src="../../static/img/jilu.png" mode=""></image>
			<text>{{idCode}}</text>
			<text>{{status}}</text>
		</view>
		<!-- 内容 -->
		<view class="content">
			<view class="contentText">
				<text>故障项目：</text>
				<text>{{xm}}</text>
			</view>
			<view class="contentText">
				<text>故障描述：</text>
				<text>{{ms}}</text>
			</view>
			<view class="contentText">
				<text>加 油 站：</text>
				<text>{{jyz}}</text>
			</view>
			<view class="contentText">
				<text>提交时间：</text>
				<text>{{ts}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'recordTemp',
		data() {
			return {
				
			};
		},
		props:{
			idCode:String,
			status:String,
			xm:String,
			ms:String,
			jyz:String,
			ts:String
		}
	}
</script>

<style>
	.containor {
		padding:30upx;
	}
	.containor text{
		font-size: 14;
	}
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.content {
		
	}
	.contentText {
		padding-top: 10upx;
		padding-bottom: 10upx;
	}
</style>
