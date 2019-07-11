<template>
    <view class="content">
		<view class="main-title">
			<view class="">维修记录</view>
			<view class="title-btn" @tap="createOrder">
				<text>维修申请</text>
			</view>
		</view>
		<view v-for="(order,index) in list" :key="index">
			<view v-on:click="showDetails(order)">
				<rreecc :idCode='order.order_no' 
						:status="order.status" 
						:xm="order.faulty_item" 
						:ms="order.faulty_desc" 
						:jyz="order.gs_name" 
						:ts="order.submit_time" 
					v-on:gotoRate="gotoRate"> </rreecc>
			</view>
		</view>
    </view>
</template>

<script>
    import {
        mapState,
		mapMutations
    } from 'vuex';
	import rreecc from '../template/recordTemple/recordTemple.vue';
	
    export default {
		data(){
			return {
				orderModel:{
					order_no:'',
					faulty_item:'',
					faulty_desc:'',
					pic:'',
					submit_time:'',
					completion:'',
					status:0,
					gs_name:'',
					address:''
				},
				list:[]
			}
		},
		components:{
			rreecc
		},
        computed: mapState(['forcedLogin', 'hasLogin', 'userName','test']),
		methods:{
			showDetails: function(e){
				uni.navigateTo({
					url:'../RepireOrderDetails/RepireOrderDetails?' + 'orderNo=' + e.order_no
				})
			},
			createOrder(){
				if (this.hasLogin) {
						uni.navigateTo({
						url:'../startRepairReq/startRepairReq'
					});
				} else{
					uni.navigateTo({
						url: '../login/login'
					});
				}
			},
			gotoRate: function (orderId){
				console.log(orderId);
				uni.navigateTo({
					url:'orderRate?orderId='+orderId
				})
			},
			pullOrder(){
				this.$fly.post('api/mgr-orders',{
				
				}).then((res)=>{
					console.log(res);
					this.list = res;
				}).catch((error)=>{
					Console.log(error);
				})
			}
		},
		onShow() {
			this.pullOrder();
		},
        onLoad() {
            if (!this.hasLogin) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    /**
                     * 如果需要强制登录，不显示取消按钮
                     */
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
                            if (this.forcedLogin) {
                                uni.reLaunch({
                                    url: '../login/login'
                                });
                            } else {
                                uni.navigateTo({
                                    url: '../login/login'
                                });
                            }
                        }
                    }
                });
            }
        },
		onPullDownRefresh() {
			this.pullOrder();
			console.log('下拉刷新');
			setTimeout(function(){
				uni.stopPullDownRefresh();
			},500);
		}
    }
</script>

<style lang="scss">
	.main-title{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 40upx 0upx 40upx 40upx;
		view{
			&:first-child{
				font-size: 44upx;
			}
		}
		.title-btn{
			display: flex;
			justify-content: center;
			background-color: #fafafa;
			color: #1c713d;
			align-items: center;
			padding: 10upx;
			padding-left: 30upx;
			padding-right: 30upx;
			font-size: 28upx;
			box-shadow:0px 0px 10px #ececec;
		}
	}
	
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul {
        font-size: 30upx;
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul>view {
        line-height: 50upx;
    }
</style>
