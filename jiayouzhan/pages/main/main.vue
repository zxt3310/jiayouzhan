<template>
    <view class="content">
		<view v-for="(item,index) in list" :key="index">
			<rreecc :idCode='item.idCode' :status="item.status" :xm="item.xm" :ms="item.ms" :jyz="item.jyz" :ts="item.ts"> </rreecc>
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
				list:[
					{
						idCode:'GZ2019042112540110',
						status:'已完成',
						xm:'三星加油机',
						ms:'加油机出现少量漏油情况',
						jyz:'中国石化（日坛加油站）',
						ts:'2019-04-12 15:32'
					},
					{
						idCode:'GK5019042112540220',
						status:'待评价',
						xm:'飞利浦加油机',
						ms:'加油泵老化',
						jyz:'中国石油（展览路加油站）',
						ts:'2019-06-12 09:15'
					}
				]
			}
		},
		components:{
			rreecc
		},
        computed: mapState(['forcedLogin', 'hasLogin', 'userName','test']),
		methods:{
			
		},
		onNavigationBarButtonTap() {
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
        }
    }
</script>

<style>
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
