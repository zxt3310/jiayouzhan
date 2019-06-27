<template>
	<view class="content">
		<view class="headBar">
			<text>状态：</text>
			<text>已完成</text>
		</view>
		<view class="orderInfo">
			<view class="title">
				<text>故障信息</text>
				<view class="infodetail">
					<text>故障项目：</text>
					<text>三星加油机</text>
				</view>
				<view class="infodetail">
					<view>故障描述：</view>
					<view>
						加油机出现少量漏油情况加油机出现少量漏油情况加油机出现少量漏油情况加油机出现少量漏油情况加油机出现少量漏油情况
					</view>
				</view>
				<view class="infodetail">
					<text>提交时间：</text>
					<text>2019-04-12 15:32</text>
				</view>
			</view>
			
			<view class="title">
				<text>故障处理情况</text>
				<view class="infodetail">
					<text>处理人：</text>
					<text>张三</text>
				</view>
				<view class="infodetail">
					<text>接单时间：</text>
					<text>2019-04-13 15:32</text>
				</view>
				<view class="infodetail">
					<text>完成时间：</text>
					<text>2019-04-13 15:32</text>
				</view>
				<view class="infodetail">
					<text>处理说明：</text>
					<text>更换加油机</text>
				</view>
				<view class="infodetail">
					<text>验证码：</text>
					<text>587923（请将验证码告知上门维修人员）</text>
				</view>
			</view>
			
			<view class="title">
				<text>加油站信息</text>
				<view class="infodetail">
					<text>加油站：</text>
					<text>中国石化(日坛加油站)</text>
				</view>
				<view class="infodetail">
					<view class="">地址：</view>
					<view class="">北京市朝阳区日坛路9号,菲律宾大使馆以东方向</view>
				</view>
			</view>
			
			<view class="title">
				<text>服务评价</text>
				<view class="infodetail">
					<view>服务态度</view>
					<view>
						<uni-rate :color="'#ffffff'" :margin="20" :value="2" :max="5"></uni-rate>
					</view>
				</view>
				<view class="infodetail">
					<view>服务质量</view>
					<view>
						<uni-rate :color="'#ffffff'" :margin="20" :value="4" :max="5"></uni-rate>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import UniRate from '../template/uni-rate/uni-rate.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			UniRate
		},
		methods: {
			
		},
		onLoad(option){
			console.log(option);
		}
	}
</script>

<style lang="scss">
	.headBar{
		padding: 30upx;
		display: flex;
		flex-direction: row;
		font-size: 14px;
	}
	
	.orderInfo{
		padding: 20upx;
		font-size: 14px;
		.title{
			margin-bottom: 40upx;
			.infodetail {
				display: flex;
				flex-direction: row;
				view {
					&:last-child{
						width: 80%;
					}
					&:first-child{
						align-self: center;
					}
				}
			}
		}
	}
	
</style>
