<template>
	<view class="content">
		<view class="headBar">
			<text v-if="order.status != -1">{{statusText[order.status]}}</text>
			<text v-if="order.status == -1">已取消</text>
			<view class="cancleBtn">
				<button v-if="order.status < 2 && order.status != -1" @tap="orderCancel">取消申请</button>
			</view>
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
			
			<view class="title" v-if="order.status>0">
				<view class="tag">
					<image src="../../static/img/icoTag.png" mode=""></image>
					<text>故障处理状况</text>
				</view>
				<view class="infodetail">
					<text>处 理 人</text>
					<text>{{order.name}}</text>
				</view>
				<view class="infodetail">
					<text>接单时间</text>
					<text>{{order.order_taken_time}}</text>
				</view>
				<view class="infodetail">
					<text>完成时间</text>
					<text>{{order.completion==null? "处理中...":order.completion}}</text>
				</view>
				<view class="infodetail">
					<text>处理说明</text>
					<text>{{order.result==null? "":order.result}}</text>
				</view>
				<!-- <view class="infodetail">
					<text>验 证 码</text>
					<text>587923（请将验证码告知上门维修人员）</text>
				</view> -->
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
			
			<view class="title" v-if="order.status>4">
				<view class="tag">
					<image src="../../static/img/icoTag.png" mode=""></image>
					<text>服务评价</text>
				</view>
				<view class="infodetail">
					<view>服务态度</view>
					<view>
						<uni-rate :margin="20" :value="order.rating_a" :max="5" :isFill="false" :disabled="true"></uni-rate>
					</view>
				</view>
				<view class="infodetail">
					<view>服务质量</view>
					<view>
						<uni-rate :margin="20" :value="order.rating_q" :max="5" :isFill="false" :disabled="true"></uni-rate>
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
					"created_at": "",
					"updated_at": "",
					"gs_name": "",
					"address": "",
					"rating_a": 0,
					"rating_q": 0
				},
				statusText:[
					'待处理',
					'已接单',
					'到达加油站',
					'进行中',
					'已完成',
					'已评价',
				]
			}
		},
		components:{
			UniRate
		},
		methods: {
			orderCancel(){
				uni.showModal({
					title: '提示',
					content: '是否取消申请单',
					success: res => {
						if(res.confirm){
							this.$fly.request('api/delete-orders',{
								repairNum:this.order.repair_num
							},{
								method:'post',
								headers:{
									'Content-Type':'application/x-www-form-urlencoded'
								}
							}).then((res)=>{
								uni.navigateBack();
								uni.showToast({
									icon:'success',
									title:'已取消'
								})
							}).catch((Error)=>{
								console.log(Error);
								uni.showToast({
									icon:'none',
									title:'取消失败'
								})
							})
						}
					}
				});
			}
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
		justify-content: space-between;
	}
	.cancleBtn{
		height: 100%;
		button{
			font-size: 14px;
			background-color: white;
		}
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
					}
				}
				text{
					&:first-child{
						color: #909090;
						width: 20%;
					}
				}
			}
		}
	}
	
</style>
