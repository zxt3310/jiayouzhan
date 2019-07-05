<template>
	<view class="content">
		<view class="headBar">
			<text>{{statusText[order.status]}}</text>
		</view>
		<view class="orderInfo">
			<view class="title">
				<view class="tag">
					<image src="../../static/img/icoTag.png" mode=""></image>
					<text>故障信息</text>
				</view>
				<view class="infodetail">
					<text>故障项目</text>
					<text>{{order.faulty_item}}</text>
				</view>
				<view class="infodetail">
					<view style="width: 20%;align-self: flex-start;">故障描述</view>
					<view>
						{{order.faulty_desc}}
					</view>
				</view>
				<view class="infodetail">
					<text>提交时间</text>
					<text>{{order.created_at}}</text>
				</view>
			</view>
			
			<view class="title">
				<view class="tag">
					<image src="../../static/img/icoTag.png" mode=""></image>
					<text>故障处理状况</text>
				</view>
				<view class="infodetail">
					<text>处 理 人</text>
					<text>{{order.order_taker}}</text>
				</view>
				<view class="infodetail">
					<text>接单时间</text>
					<text>{{order.order_taken_time}}</text>
				</view>
				<view class="infodetail">
					<text>完成时间</text>
					<text>{{order.completion}}</text>
				</view>
				<view class="infodetail">
					<text>处理说明</text>
					<text>{{action}}</text>
				</view>
				<view class="infodetail">
					<text>验 证 码</text>
					<text>587923（请将验证码告知上门维修人员）</text>
				</view>
			</view>
			
			<view class="title">
				<view class="tag">
					<image src="../../static/img/icoTag.png" mode=""></image>
					<text>加油站信息</text>
				</view>
				<view class="infodetail">
					<text>加 油 站</text>
					<text>{{order.gs_name}}</text>
				</view>
				<view class="infodetail">
					<text class="">地 址</text>
					<view class="">{{order.address}}</view>
				</view>
			</view>
			
			<view class="title">
				<view class="tag">
					<image src="../../static/img/icoTag.png" mode=""></image>
					<text>服务评价</text>
				</view>
				<view class="infodetail">
					<view>服务态度</view>
					<view>
						<uni-rate :margin="20" :value="2" :max="5" :isFill="false"></uni-rate>
					</view>
				</view>
				<view class="infodetail">
					<view>服务质量</view>
					<view>
						<uni-rate :margin="20" :value="4" :max="5" :isFill="false"></uni-rate>
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
				order:{
					"id": 0,
					"repair_num": "",
					"gas_station_id": "",
					"faulty_item": "",
					"faulty_desc": "",
					"pic": "",
					"contact": "",
					"contact_phone": "",
					"order_taker": "",
					"order_taken_time": "",
					"completion": "",
					"result": "",
					"status": 0,
					"related_order":"",
					"action": "",
					"voice": "",
					"notified": "",
					"created_at": "",
					"updated_at": "",
					"deleted_at": "",
					"gs_name": "",
					"address": "",
					"lat": "39.888809",
					"lon": "116.435602",
					"owner": "30",
					"admin_user_id": "",
					"mobile": "",
					"maint_c_id": ""
				},
				statusText:[
					'已完成',
					'待处理',
					'已接单',
					'进行中'
				]
			}
		},
		components:{
			UniRate
		},
		methods: {
			
		},
		onLoad(option){
			console.log(option);
			this.$fly.post("api/mgr-orders-details",{
				repairNum:option.orderNo
			}).then((res)=>{
				this.order = res;
			}).catch((error)=>{
				console.log(error);
			})
		}
		
	} 
</script>

<style lang="scss">
	.headBar{
		padding: 20upx;
		display: flex;
		flex-direction: row;
		font-size: 22px;
		font-family: PingFangSC-Medium;
	}
	
	.orderInfo{
		padding: 20upx;
		font-size: 14px;
		.title{
			.tag{
				display: flex;
				flex-direction: row;
				image{
					width: 5px;
					height: 22px;
				}
				text{
					font-family: PingFangSC-Medium;
					margin-left: 10px;
				}
			}
			margin-bottom: 40upx;
			border-width: 1px;
			border-color: #e1e9ea;
			border-radius: 5px;
			background-color: white;
			padding: 10px;
			.infodetail {
				display: flex;
				flex-direction: row;
				view {
					line-height: 24px;
					&:last-child{
						width: 80%;
					}
					&:first-child{
						align-self: center;
						color: #909090;
						text-align: center;
					}
				}
				text{
					&:first-child{
						color: #909090;
						width: 20%;
						text-align: center;
					}
				}
			}
		}
	}
	
</style>
