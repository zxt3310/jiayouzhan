<template name="rreecc">
	<view class="containor">
		<view style="background-color: white; width:100%;">
		<!-- 头 -->
			<view class="header">
				<!-- <image style="width: 20; height: 20;" src="../../static/img/jilu.png" mode=""></image> -->
				<text>{{idCode}}</text>
				<text>{{status}}</text>
			</view>
			<!-- 内容 -->
			<view>
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
	</view>
</template>

<script>
	export default {
		name:'rreecc',
		data() {
			return {
				
			};
		},
		props:{
			idCode:{
				type:String
			},
			status:{
				type:String
			},
			xm:{
				type:String
			},
			ms:{
				type:String
			},
			jyz:{
				type:String
			},
			ts:{
				type:String,
			}
		},
		created(){
			console.log('adfadfadf');
		}
	}
</script>

<style>
	.containor {
		display: flex;
		padding:10px;
		width: 100%;
		box-sizing: border-box;
		background-color: white;
	}
	.containor text{
		font-size: 28upx;
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
		font-size: 12;
	}
</style>
