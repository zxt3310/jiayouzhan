<template name="rreecc">
	<view class="containor">
		<view style="background-color: white; width:100%;">
		<!-- 头 -->
			<view class="header">
				<view style="display: flex;flex-direction: row; align-items: center;">
					<image style="width: 22px; height: 22px;" src="/static/img/icoDot.png" mode=""></image>
					<text style="font-family: PingFangSC-Medium;margin-left: 20upx;">{{idCode}}</text>
				</view>
				<view v-if="status !=4 & status != -1" style="font-size: 14px;" :style="{color:getcolor(status)}">{{statusText[status]}}</view>
				<view v-if="status == -1" style="font-size: 14px; color: #888888;">已取消</view>
				<view class="PJ" v-if="status == 4" @tap.stop="gotoRate(idCode)">
					<text>待评价</text>
				</view>
			</view>
			<!-- 内容 -->
			<view style="margin-top: 10upx;">
				<view class="contentText">
					<view class="contentTextTitle">故障项目</view>
					<text>{{xm}}</text>
				</view>
				<view class="contentText">
					<view class="contentTextTitle">故障描述</view>
					<view style="max-width: 75%;">{{ms}}</view>
				</view>
				<view class="contentText">
					<view class="contentTextTitle">加 油 站</view>
					<text>{{jyz}}</text>
				</view>
				<view class="contentText">
					<view class="contentTextTitle">提交时间</view>
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
				statusColor:[
					'fe4a47',
					'4185de',
					'4185de',
					'201a62',
					'1c713d',
					'1c713d'
				],
				statusText:[
					'待处理',
					'已接单',
					'到达加油站',
					'进行中',
					'已完成',
					'已评价',
				]
			};
		},
		props:{
			idCode:{
				type:String
			},
			status:{
				type:Number
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
		computed:{
			
		},
		methods:{
			getcolor: function(e){
				var color = '#' + this.statusColor[e];
				return color;
			},
			gotoRate: function (id) {
				this.$emit("gotoRate",id);
			}
		}
	}
</script>

<style>
	.containor {
		display: flex;
		padding:15px;
		padding-top: 10px;
		padding-bottom: 10px;
		width: 100%;
		box-sizing: border-box;
		background-color: white;
		margin-bottom: 20upx;
	}
	.containor text{
		font-size: 28upx;
	}
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.contentText {
		line-height: 24px;
		display: flex;
		flex-direction: row;
		font-size: 14px;
		font-family: PingFangSC-Regular;
	}
	.contentTextTitle{
		width: 22%; 
		text-align: center;
		color: #909090;
	}
	.PJ{
		padding: 5px 15px 5px 15px;
		font-size: 14px;
		background-color: #fec957;
	}
</style>
